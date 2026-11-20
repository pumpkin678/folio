/* The graph stays dependency-free so the built notebook also works from file://. */
(() => {
  'use strict';

  const palette = ['#52785d', '#4a8190', '#92709e', '#ae8246', '#607da9', '#b0717b', '#818750', '#777b96'];
  const nodeTypes = {def: '定义', thm: '定理', eg: '例子', exercise: '习题', mistake: '勘误'};
  const purposeLabels = {learn: '学习', review: '复习', practice: '练习'};
  const escape = value => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');
  const typeOf = entry => entry.category === 'material' ? entry.type : entry.category;
  const unique = values => [...new Set(values)];
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const miniIcon = name => `<svg viewBox="0 0 24 24" aria-hidden="true">${({
    search: '<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4 4"/>',
    plus: '<path d="M12 5v14M5 12h14"/>',
    minus: '<path d="M5 12h14"/>',
    fit: '<path d="M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5"/>',
    expand: '<path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/>',
    label: '<path d="M4 5h16M12 5v15M8 20h8"/>',
    link: '<path d="m9 15 6-6m-5-3 2-2a5 5 0 0 1 7 7l-2 2M7 11l-2 2a5 5 0 0 0 7 7l2-2"/>',
    route: '<circle cx="5" cy="6" r="2"/><circle cx="19" cy="18" r="2"/><path d="M7 6h7a4 4 0 0 1 0 8H9a4 4 0 0 0 0 8"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    graph: '<circle cx="6" cy="7" r="3"/><circle cx="18" cy="5" r="2"/><circle cx="16" cy="18" r="3"/><path d="m9 7 7-2M8 10l6 6m3-9-1 8"/>',
    globe: '<circle cx="12" cy="12" r="9"/><ellipse cx="12" cy="12" rx="4" ry="9"/><path d="M3 12h18"/>'
  })[name] ?? ''}</svg>`;

  // A roadmap is a sequence of edges, never a synthetic knowledge node.
  // Overview maps can compose other maps in their authored link order.
  function roadmapSequence(entry, byId, ancestors = new Set()) {
    if (ancestors.has(entry.id)) return [];
    const next = new Set([...ancestors, entry.id]);
    const embedded = (entry.blocks ?? []).filter(block => ['material', 'exercise', 'mistake'].includes(block.kind)).map(block => block.id);
    const refs = embedded.length ? embedded : [...(entry.body ?? '').matchAll(/\]\(ref:([^)]+)\)/g)].map(match => match[1]);
    const sequence = [];
    for (const id of refs) {
      const target = byId.get(id);
      if (!target) continue;
      if (target.category === 'roadmap') {
        if ((target.purpose ?? 'learn') === (entry.purpose ?? 'learn')) sequence.push(...roadmapSequence(target, byId, next));
      } else if (Object.hasOwn(nodeTypes, typeOf(target))) sequence.push(id);
    }
    return sequence.filter((id, index) => index === 0 || id !== sequence[index - 1]);
  }

  function createModel(data, subject) {
    const byId = new Map(data.entries.map(entry => [entry.id, entry]));
    const local = data.entries.filter(entry => entry.subject === subject && entry.category !== 'roadmap');
    const purposeOrder = {learn: 0, review: 1, practice: 2};
    const routeEntries = data.entries.filter(entry => entry.subject === subject && entry.category === 'roadmap').sort((a, b) => purposeOrder[a.purpose ?? 'learn'] - purposeOrder[b.purpose ?? 'learn'] || (a.order ?? 99) - (b.order ?? 99));
    const routes = routeEntries.map((entry, index) => {
      const steps = roadmapSequence(entry, byId);
      return {id: entry.id, entry, steps, color: palette[index % palette.length], index};
    });
    const ids = new Set(local.map(entry => entry.id));
    for (const entry of local) for (const id of entry.references ?? []) if (byId.get(id)?.category !== 'roadmap' && byId.has(id)) ids.add(id);
    for (const route of routes) for (const id of route.steps) ids.add(id);
    const nodes = [...ids].map(id => byId.get(id)).filter(entry => Object.hasOwn(nodeTypes, typeOf(entry))).map(entry => ({id: entry.id, entry, type: typeOf(entry), external: entry.subject !== subject}));
    const nodeById = new Map(nodes.map(node => [node.id, node]));
    const edges = [], pairs = new Set(), seen = new Set();
    const addEdge = (source, target, kind) => {
      if (source === target || !nodeById.has(source) || !nodeById.has(target)) return;
      const pair = [source, target].sort().join('\0');
      const key = kind === 'reference' ? pair : `${kind}:${source}\0${target}`;
      if (seen.has(key) || (kind === 'reference' && pairs.has(pair))) return;
      seen.add(key); pairs.add(pair);
      edges.push({source, target, kind});
    };
    for (const entry of local) {
      for (const id of entry.requires ?? []) addEdge(id, entry.id, 'prerequisite');
      for (const id of entry.targets ?? []) addEdge(id, entry.id, 'application');
    }
    for (const entry of local) for (const id of entry.references ?? []) addEdge(entry.id, id, 'reference');
    const routeEdges = [];
    for (const route of routes) for (let index = 1; index < route.steps.length; index++) {
      routeEdges.push({source: route.steps[index - 1], target: route.steps[index], kind: 'roadmap', route: route.id, color: route.color, step: index});
    }
    const degree = new Map(nodes.map(node => [node.id, 0]));
    for (const edge of edges) for (const id of [edge.source, edge.target]) degree.set(id, degree.get(id) + 1);
    for (const node of nodes) node.degree = degree.get(node.id);
    return {subject, nodes, nodeById, edges, routes, routeEdges};
  }

  // A bounded, deterministic force layout: stable between visits and no idle simulation.
  function layout(nodes, edges, seed = 0) {
    if (!nodes.length) return {};
    const points = nodes.map((node, index) => {
      const angle = index * 2.3999632297 + seed * .7;
      const radius = 100 * Math.sqrt(index + .5);
      return {id: node.id, x: Math.cos(angle) * radius, y: Math.sin(angle) * radius, vx: 0, vy: 0};
    });
    const byId = new Map(points.map(point => [point.id, point]));
    const links = new Map();
    for (const edge of edges) {
      if (!byId.has(edge.source) || !byId.has(edge.target)) continue;
      const key = [edge.source, edge.target].sort().join('\0');
      if (!links.has(key)) links.set(key, [byId.get(edge.source), byId.get(edge.target)]);
    }
    for (let iteration = 0; iteration < 240; iteration++) {
      const alpha = .65 * (1 - iteration / 260);
      for (let i = 0; i < points.length; i++) for (let j = i + 1; j < points.length; j++) {
        const a = points[i], b = points[j];
        let dx = a.x - b.x, dy = a.y - b.y;
        if (dx === 0 && dy === 0) dx = .1;
        const distance = Math.max(1, Math.hypot(dx, dy));
        const force = Math.min(20, 12500 / (distance * distance)) * alpha;
        a.vx += dx / distance * force; a.vy += dy / distance * force;
        b.vx -= dx / distance * force; b.vy -= dy / distance * force;
      }
      for (const [a, b] of links.values()) {
        const dx = b.x - a.x, dy = b.y - a.y, distance = Math.max(1, Math.hypot(dx, dy));
        const force = (distance - 145) * .035 * alpha;
        a.vx += dx / distance * force; a.vy += dy / distance * force;
        b.vx -= dx / distance * force; b.vy -= dy / distance * force;
      }
      for (const point of points) {
        point.vx = (point.vx - point.x * .002 * alpha) * .72;
        point.vy = (point.vy - point.y * .003 * alpha) * .72;
        point.x += point.vx; point.y += point.vy;
      }
    }
    return Object.fromEntries(points.map(point => [point.id, {x: point.x, y: point.y}]));
  }

  function initialState() {
    return {types: ['def', 'thm', 'eg'], external: false, relations: true, paths: true, labels: true, route: '', selected: '', query: '', positions: {}, camera: null, seed: 0};
  }

  function render(model, state, subject) {
    return `<section class="knowledge-graph" id="knowledge-graph" aria-label="${escape(subject.title)}知识图谱">
      <div class="graph-heading"><div><span class="graph-eyebrow">KNOWLEDGE, CONNECTED</span><h2>看见知识的脉络<span>材料成点，路线成线。</span></h2></div><p class="graph-count" data-graph-count></p></div>
      <div class="graph-filters"><label class="graph-search">${miniIcon('search')}<input data-graph-search type="search" value="${escape(state.query)}" placeholder="搜索图中的材料…" aria-label="搜索图谱节点" autocomplete="off"></label><div class="graph-type-filters" role="group" aria-label="图谱中的材料类型">${Object.entries(nodeTypes).map(([key, title]) => `<button class="graph-type ${state.types.includes(key) ? 'is-on' : ''}" data-graph-action="type" data-type="${key}" aria-pressed="${state.types.includes(key)}"><i class="graph-type-dot ${key}"></i>${title}<span>${model.nodes.filter(node => !node.external && node.type === key).length}</span></button>`).join('')}</div></div>
      <div class="graph-workspace"><div class="graph-stage">
        <div class="graph-stage-heading"><span>${escape(subject.english)}<span class="graph-stage-divider"> / </span>Atlas</span><button data-graph-action="clear" class="graph-all">全图</button></div>
        <svg class="graph-canvas" tabindex="0" role="group" aria-label="交互知识图谱。方向键平移，加减键缩放，0 键适应全图。节点可用 Tab 和 Enter 选择。"></svg>
        <div class="graph-no-nodes" hidden><span>${miniIcon('graph')}</span><h3>这里还没有可见的节点</h3><p>选择上方的材料类型，或显示跨学科引用。</p></div>
        <div class="graph-hover" role="tooltip" hidden></div>
        <div class="graph-stage-bottom"><div class="graph-layer-controls" role="group" aria-label="图谱显示选项">
          ${[['paths', 'route', '学习路线'], ['relations', 'link', '知识关联'], ['external', 'globe', '跨学科'], ['labels', 'label', '名称']].map(([key, name, title]) => `<button data-graph-action="layer" data-layer="${key}" class="${state[key] ? 'is-on' : ''}" aria-pressed="${state[key]}" title="${title}">${miniIcon(name)}<span>${title}</span></button>`).join('')}
        </div><div class="graph-view-controls"><button data-graph-action="zoom-out" aria-label="缩小" title="缩小">${miniIcon('minus')}</button><output data-graph-zoom aria-label="当前缩放比例">100%</output><button data-graph-action="zoom-in" aria-label="放大" title="放大">${miniIcon('plus')}</button><span class="graph-control-divider"></span><button data-graph-action="fit" aria-label="适应全图" title="适应全图（0）">${miniIcon('fit')}</button><button data-graph-action="expand" aria-label="展开图谱" aria-pressed="false" title="展开图谱">${miniIcon('expand')}</button></div></div>
      </div><aside class="graph-aside" aria-label="材料详情与学习路线"><div class="graph-selection" data-graph-selection></div><div class="graph-route-heading"><h3>图中的路线 <span>${model.routes.length}</span></h3><button data-graph-action="route" data-id="" class="graph-reset-route">全部</button></div><div class="graph-route-list" data-graph-routes></div></aside></div>
      <div class="graph-caption"><div class="graph-legend"><span><i class="graph-legend-line"></i>前置知识与引用</span><span><i class="graph-legend-path"></i>Roadmap 阅读顺序</span><span><i class="graph-legend-read"></i>已读材料</span></div><p>拖动画布 · 缩放探索 · 双击节点阅读</p></div><p class="graph-announcement" role="status" aria-live="polite" data-graph-announcement></p>
    </section>`;
  }

  function mount(root, model, state, helpers) {
    const svg = root.querySelector('.graph-canvas');
    const stage = root.querySelector('.graph-stage');
    const selection = root.querySelector('[data-graph-selection]');
    const routeList = root.querySelector('[data-graph-routes]');
    const tooltip = root.querySelector('.graph-hover');
    const search = root.querySelector('[data-graph-search]');
    const abort = new AbortController();
    const listen = (target, name, fn, options = {}) => target.addEventListener(name, fn, {...options, signal: abort.signal});
    let visible = [], visibleIds = new Set(), baseEdges = [], pathEdges = [], matches = new Set();
    let width = 0, height = 0, camera, operation = null, expanded = false, previousOverflow = '', lastLayoutKey = state.layoutKey;
    let labelFrame = 0, disposed = false, lastNodeClick = null;
    const pointers = new Map();
    const routeById = new Map(model.routes.map(route => [route.id, route]));
    const entryLink = entry => helpers.entryUrl(entry);
    const isRead = node => node.entry.category === 'material' && helpers.read(node.id);
    const announce = text => { root.querySelector('[data-graph-announcement]').textContent = text; };

    function enableNode(id) {
      const node = model.nodeById.get(id);
      if (!node) return;
      if (!state.types.includes(node.type)) state.types.push(node.type);
      if (node.external) state.external = true;
    }
    function visibleRoute(route) { return route.steps.filter(id => visibleIds.has(id)); }
    function updateControls() {
      root.querySelectorAll('[data-graph-action="type"]').forEach(button => {
        const on = state.types.includes(button.dataset.type);
        button.classList.toggle('is-on', on); button.setAttribute('aria-pressed', on);
      });
      root.querySelectorAll('[data-graph-action="layer"]').forEach(button => {
        const on = state[button.dataset.layer];
        button.classList.toggle('is-on', on); button.setAttribute('aria-pressed', on);
      });
    }

    function updatePanel() {
      const selected = model.nodeById.get(state.selected), route = routeById.get(state.route);
      const button = node => `<button class="graph-related-node" data-graph-action="node" data-id="${escape(node.id)}"><i class="graph-type-dot ${node.type}"></i><span>${escape(node.entry.title)}</span></button>`;
      if (selected) {
        const entry = selected.entry;
        const previous = model.edges.filter(edge => edge.kind === 'prerequisite' && edge.target === entry.id).map(edge => model.nodeById.get(edge.source));
        const next = model.edges.filter(edge => edge.kind === 'prerequisite' && edge.source === entry.id).map(edge => model.nodeById.get(edge.target));
        const inRoutes = model.routes.filter(item => item.steps.includes(entry.id));
        selection.innerHTML = `<div class="graph-panel-top"><span class="graph-node-kind ${selected.type}">${nodeTypes[selected.type]}${selected.external ? ` · ${escape(helpers.subjectTitle(entry.subject))}` : ''}</span><button data-graph-action="deselect" class="graph-small-icon" aria-label="取消选择">${miniIcon('close')}</button></div><h3>${escape(entry.title)}</h3>${entry.english ? `<p class="graph-node-english">${escape(entry.english)}</p>` : ''}<p class="graph-node-summary">${escape(entry.summary)}</p><div class="graph-node-actions"><a class="graph-open-entry" href="${entryLink(entry)}">阅读${nodeTypes[selected.type]}</a>${entry.category === 'material' ? `<button class="graph-read-toggle ${isRead(selected) ? 'is-read' : ''}" data-action="read" data-id="${escape(entry.id)}" aria-pressed="${isRead(selected)}">${isRead(selected) ? '✓ 已读' : '标记已读'}</button>` : ''}</div>${previous.length ? `<div class="graph-neighbors"><h4>预备知识 <span>${previous.length}</span></h4>${previous.map(button).join('')}</div>` : ''}${next.length ? `<div class="graph-neighbors"><h4>后续知识 <span>${next.length}</span></h4>${next.map(button).join('')}</div>` : ''}${inRoutes.length ? `<div class="graph-memberships"><h4>所在路线</h4>${inRoutes.map(item => `<button data-graph-action="route" data-id="${escape(item.id)}" style="--route-color:${item.color}"><i></i>${escape(item.entry.title)}</button>`).join('')}</div>` : '<p class="graph-panel-note">这份材料尚未编入路线，仍保留在图中。</p>'}`;
      } else if (route) {
        const ids = visibleRoute(route);
        selection.innerHTML = `<div class="graph-panel-top"><span class="graph-route-kicker" style="--route-color:${route.color}"><i></i>${purposeLabels[route.entry.purpose ?? 'learn']}路线</span><button data-graph-action="route" data-id="" class="graph-small-icon" aria-label="取消路线筛选">${miniIcon('close')}</button></div><h3>${escape(route.entry.title)}</h3><p class="graph-node-summary">${escape(route.entry.summary)}</p><a class="graph-open-entry" href="${entryLink(route.entry)}">打开完整路线</a><div class="graph-route-sequence"><h4>阅读顺序 <span>${ids.length} 个节点</span></h4>${ids.length ? `<ol>${ids.map((id, index) => { const node = model.nodeById.get(id); return `<li><button data-graph-action="node" data-id="${escape(id)}"><span class="graph-step ${isRead(node) ? 'is-read' : ''}">${isRead(node) ? '✓' : index + 1}</span><span>${escape(node.entry.title)}</span></button></li>`; }).join('')}</ol>` : '<p class="graph-panel-note">这条路线没有可见节点。可打开完整路线阅读导引。</p>'}</div>`;
      } else if (state.query.trim()) {
        const found = visible.filter(node => matches.has(node.id));
        selection.innerHTML = `<span class="graph-eyebrow">FIND A CONNECTION</span><h3>找到 ${found.length} 个节点</h3><p class="graph-node-summary">${found.length ? '选择材料，在图中定位它的联系。' : '试试材料名称、英文、标签或 ID。'}</p><div class="graph-search-results">${found.slice(0, 24).map(button).join('')}</div>`;
      } else {
        selection.innerHTML = `<div class="graph-explore-mark">${miniIcon('graph')}</div><span class="graph-eyebrow">FOLLOW YOUR CURIOSITY</span><h3>每一份理解，都有来处。</h3><p class="graph-node-summary">点选一个节点，追溯它的前置知识。<br>或选一条路线，看材料如何连成脉络。</p><div class="graph-reading-count"><span>${visible.filter(isRead).length}<small> / ${visible.filter(node => node.entry.category === 'material').length}</small></span><span>份知识材料已读</span></div>`;
      }
      routeList.innerHTML = model.routes.length ? model.routes.map(item => {
        const steps = unique(item.steps), done = steps.filter(id => model.nodeById.get(id)?.entry.category === 'material' && helpers.read(id)).length;
        return `<button class="graph-route-item ${state.route === item.id ? 'is-active' : ''}" data-graph-action="route" data-id="${escape(item.id)}" aria-pressed="${state.route === item.id}" style="--route-color:${item.color}" title="${escape(item.entry.title)}"><span class="graph-route-swatch"><i></i></span><span class="graph-route-copy"><strong>${escape(item.entry.title)}</strong><small>${purposeLabels[item.entry.purpose ?? 'learn']} · ${steps.length} 个节点${done ? ` · ${done} 已读` : ''}</small></span>${state.route === item.id ? '<span class="graph-route-check">✓</span>' : ''}</button>`;
      }).join('') : '<p class="graph-panel-note">添加 roadmap 后，会按正文中的材料顺序在图中连线。</p>';
    }

    function resize() {
      const rect = stage.getBoundingClientRect();
      width = Math.max(1, rect.width); height = Math.max(1, rect.height);
      state.viewport = {width, height};
      svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    }
    function fit(ids = visibleIds) {
      const points = [...ids].map(id => state.positions[id]).filter(Boolean);
      if (!points.length) { camera = {x: width / 2, y: height / 2, k: 1}; applyCamera(); return; }
      const xs = points.map(point => point.x), ys = points.map(point => point.y);
      const left = Math.min(...xs), right = Math.max(...xs), top = Math.min(...ys), bottom = Math.max(...ys);
      const k = clamp(Math.min((width - 150) / Math.max(180, right - left), (height - 170) / Math.max(180, bottom - top)), .12, 1.5);
      camera = {x: width / 2 - (left + right) / 2 * k, y: (height - 20) / 2 - (top + bottom) / 2 * k, k};
      state.fitScale = k; applyCamera();
    }
    function applyCamera() {
      if (!camera) return;
      state.camera = {...camera};
      svg.querySelector('.graph-camera')?.setAttribute('transform', `translate(${camera.x} ${camera.y}) scale(${camera.k})`);
      root.querySelector('[data-graph-zoom]').textContent = `${Math.round(camera.k / (state.fitScale || 1) * 100)}%`;
      const scale = camera.k;
      svg.querySelectorAll('.graph-node').forEach(group => {
        const node = model.nodeById.get(group.dataset.node);
        const radius = 5 + Math.min(4, node.degree * .45);
        group.querySelector('.graph-node-core').setAttribute('r', radius / scale);
        group.querySelector('.graph-node-ring').setAttribute('r', (radius + 5) / scale);
        group.querySelector('.graph-node-hit').setAttribute('r', 20 / scale);
        const readMark = group.querySelector('.graph-read-mark');
        if (readMark) { readMark.setAttribute('x', (radius + 3) / scale); readMark.setAttribute('y', -radius / scale); readMark.style.fontSize = `${11 / scale}px`; }
        const step = group.querySelector('.graph-node-step');
        if (step) { step.setAttribute('x', (radius + 5) / scale); step.setAttribute('y', -radius / scale); step.style.fontSize = `${12 / scale}px`; }
      });
      cancelAnimationFrame(labelFrame);
      labelFrame = requestAnimationFrame(updateLabels);
    }
    function updateLabels() {
      if (disposed) return;
      const occupied = [];
      const obstacles = visible.map(node => { const point = state.positions[node.id]; return {x: point.x * camera.k + camera.x - 10, y: point.y * camera.k + camera.y - 10, w: 20, h: 20}; });
      const budget = Math.max(6, Math.floor(width * height / (width < 520 ? 23000 : 16000)));
      let displayed = 0;
      const focus = focusSet();
      const groups = [...svg.querySelectorAll('.graph-node')].sort((a, b) => {
        const score = group => (group.dataset.node === state.selected ? 1000 : 0) + (matches.has(group.dataset.node) && state.query.trim() ? 200 : 0) + (focus?.has(group.dataset.node) ? 100 : 0) + model.nodeById.get(group.dataset.node).degree;
        return score(b) - score(a);
      });
      for (const group of groups) {
        const id = group.dataset.node, node = model.nodeById.get(id), point = state.positions[id];
        const text = group.querySelector('.graph-node-label');
        if (!state.labels) { text.style.display = 'none'; continue; }
        const label = shortLabel(node.entry.title), length = labelWidth(label);
        const x = point.x * camera.k + camera.x, y = point.y * camera.k + camera.y;
        const muted = focus && !focus.has(id);
        const positions = [{x: x - length / 2, y: y + 14, anchor: 'middle', dx: 0, dy: 26}, {x: x + 15, y: y - 8, anchor: 'start', dx: 15, dy: 5}, {x: x - length - 15, y: y - 8, anchor: 'end', dx: -15, dy: 5}, {x: x - length / 2, y: y - 32, anchor: 'middle', dx: 0, dy: -18}];
        const chosen = positions.find(box => box.x > 8 && box.x + length < width - 8 && box.y > 40 && box.y < height - 80 && !occupied.some(other => box.x < other.x + other.w + 7 && box.x + length + 7 > other.x && box.y < other.y + 21 && box.y + 21 > other.y) && !obstacles.some(other => box.x < other.x + other.w && box.x + length > other.x && box.y < other.y + other.h && box.y + 18 > other.y));
        const show = chosen && displayed < budget && (!muted || camera.k / state.fitScale > 1.35);
        text.style.display = show ? '' : 'none';
        if (show) { occupied.push({x: chosen.x, y: chosen.y, w: length}); displayed++; }
        const position = chosen ?? positions[0];
        text.setAttribute('text-anchor', position.anchor);
        text.setAttribute('x', position.dx / camera.k); text.setAttribute('y', position.dy / camera.k);
        text.style.fontSize = `${14 / camera.k}px`;
      }
    }
    function shortLabel(title) {
      let result = '', length = 0;
      for (const char of title) { length += /[\u2e80-\uffff]/.test(char) ? 14 : 7.5; if (length > 170) return result + '…'; result += char; }
      return result;
    }
    function labelWidth(title) { return [...title].reduce((length, char) => length + (/[\u2e80-\uffff]/.test(char) ? 14 : 7.5), 0); }
    function focusSet() {
      if (state.query.trim()) return new Set([...matches, ...(visibleIds.has(state.selected) ? [state.selected] : [])]);
      if (state.selected && visibleIds.has(state.selected)) return new Set([state.selected, ...baseEdges.filter(edge => edge.source === state.selected || edge.target === state.selected).flatMap(edge => [edge.source, edge.target])]);
      if (state.route) return new Set(routeById.get(state.route)?.steps ?? []);
      return null;
    }
    function edgePath(edge) {
      const a = state.positions[edge.source], b = state.positions[edge.target];
      const dx = b.x - a.x, dy = b.y - a.y, distance = Math.max(1, Math.hypot(dx, dy));
      const inset = Math.min(distance * .2, 12 / (camera?.k ?? 1));
      const x1 = a.x + dx / distance * inset, y1 = a.y + dy / distance * inset;
      const x2 = b.x - dx / distance * inset, y2 = b.y - dy / distance * inset;
      const lane = edge.lane ?? 0;
      return `M${x1},${y1} Q${(x1 + x2) / 2 - dy / distance * lane},${(y1 + y2) / 2 + dx / distance * lane} ${x2},${y2}`;
    }
    function draw() {
      const words = state.query.trim().toLowerCase().split(/\s+/).filter(Boolean);
      matches = new Set(visible.filter(node => words.every(word => (node.entry.searchText ?? `${node.id} ${node.entry.title} ${node.entry.english ?? ''} ${node.entry.summary}`).toLowerCase().includes(word))).map(node => node.id));
      const focus = focusSet(), selectedRoute = routeById.get(state.route);
      const steps = selectedRoute?.steps ?? [];
      const defs = `<defs><marker id="graph-arrow-base" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1L7 4L0 7" fill="none" stroke="#829187" stroke-width="1.2"/></marker>${model.routes.map(route => `<marker id="graph-arrow-${route.index}" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="5" markerHeight="5" orient="auto"><path d="M0 1L7 4L0 7" fill="none" stroke="${route.color}" stroke-width="1.3"/></marker>`).join('')}</defs>`;
      const base = state.relations ? baseEdges.map((edge, index) => `<path class="graph-edge ${edge.kind} ${focus && !(focus.has(edge.source) && focus.has(edge.target)) ? 'is-muted' : ''}" data-base-edge="${index}" d="${edgePath(edge)}" ${edge.kind === 'prerequisite' ? 'marker-end="url(#graph-arrow-base)"' : ''}/>`).join('') : '';
      const paths = state.paths ? pathEdges.map((edge, index) => {
        const active = state.route ? edge.route === state.route : focus ? focus.has(edge.source) && focus.has(edge.target) : true;
        const route = routeById.get(edge.route);
        return `<g class="graph-path ${active ? 'is-active' : 'is-muted'} ${state.route === edge.route ? 'is-chosen' : ''}" style="--route-color:${edge.color}" data-path-index="${index}" data-route="${escape(edge.route)}"><path class="graph-path-line" d="${edgePath(edge)}" marker-end="url(#graph-arrow-${route.index})"/><path class="graph-path-hit" d="${edgePath(edge)}"><title>${escape(route.entry.title)} · ${escape(model.nodeById.get(edge.source).entry.title)} → ${escape(model.nodeById.get(edge.target).entry.title)}</title></path></g>`;
      }).join('') : '';
      const nodes = visible.map(node => {
        const point = state.positions[node.id], selected = node.id === state.selected, step = steps.indexOf(node.id);
        return `<g class="graph-node ${node.type} ${node.external ? 'is-external' : ''} ${selected ? 'is-selected' : ''} ${isRead(node) ? 'is-read' : ''} ${focus && !focus.has(node.id) ? 'is-muted' : ''} ${state.query.trim() && matches.has(node.id) ? 'is-match' : ''}" data-node="${escape(node.id)}" role="button" tabindex="0" aria-label="${nodeTypes[node.type]}：${escape(node.entry.title)}${isRead(node) ? '，已读' : ''}" aria-pressed="${selected}" transform="translate(${point.x} ${point.y})"><circle class="graph-node-hit" r="20"/><circle class="graph-node-ring" r="12"/><circle class="graph-node-core" r="7"/>${step >= 0 ? `<text class="graph-node-step">${step + 1}</text>` : isRead(node) ? '<text class="graph-read-mark">✓</text>' : ''}<text class="graph-node-label">${escape(shortLabel(node.entry.title))}</text><title>${escape(node.entry.title)} · ${nodeTypes[node.type]}${node.external ? ` · ${escape(helpers.subjectTitle(node.entry.subject))}` : ''}</title></g>`;
      }).join('');
      svg.innerHTML = `${defs}<g class="graph-camera"><g class="graph-edges">${base}</g><g class="graph-paths">${paths}</g><g class="graph-nodes">${nodes}</g></g>`;
      stage.querySelector('.graph-no-nodes').hidden = visible.length > 0;
      root.querySelector('[data-graph-count]').innerHTML = `<strong>${visible.length}</strong> 个节点<span> / </span><strong>${(state.relations ? baseEdges.length : 0) + (state.paths ? pathEdges.length : 0)}</strong> 条连线`;
      updateControls(); updatePanel(); applyCamera();
    }

    function refresh(forceLayout = false) {
      visible = model.nodes.filter(node => state.types.includes(node.type) && (!node.external || state.external));
      visibleIds = new Set(visible.map(node => node.id));
      baseEdges = model.edges.filter(edge => visibleIds.has(edge.source) && visibleIds.has(edge.target));
      pathEdges = model.routeEdges.filter(edge => visibleIds.has(edge.source) && visibleIds.has(edge.target)).map(edge => ({...edge}));
      const lanes = new Map();
      for (const edge of pathEdges) {
        const key = [edge.source, edge.target].sort().join('\0');
        if (!lanes.has(key)) lanes.set(key, []);
        lanes.get(key).push(edge);
      }
      for (const list of lanes.values()) list.forEach((edge, index) => { edge.lane = ((index - (list.length - 1) / 2) * 22 + 16) * (edge.source < edge.target ? 1 : -1); });
      const layoutKey = visible.map(node => node.id).join('|');
      const changed = forceLayout || lastLayoutKey !== layoutKey || visible.some(node => !state.positions[node.id]);
      if (changed) {
        state.positions = {...state.positions, ...layout(visible, [...baseEdges, ...pathEdges], state.seed)};
        state.layoutKey = lastLayoutKey = layoutKey;
      }
      if (!visibleIds.has(state.selected)) state.selected = '';
      const previousViewport = state.viewport;
      resize();
      camera = state.camera ? {...state.camera} : {x: width / 2, y: height / 2, k: 1};
      if (changed || !state.camera || !previousViewport || Math.abs(previousViewport.width - width) > 2 || Math.abs(previousViewport.height - height) > 2) fit();
      draw();
    }

    function selectNode(id, center = false) {
      enableNode(id); state.selected = id;
      refresh();
      if (center) {
        const point = state.positions[id];
        camera.k = Math.max(camera.k, state.fitScale * 1.25);
        camera.x = width / 2 - point.x * camera.k; camera.y = height / 2 - point.y * camera.k;
        applyCamera();
      }
      announce(`已选择${nodeTypes[model.nodeById.get(id).type]}：${model.nodeById.get(id).entry.title}`);
    }
    function selectRoute(id) {
      state.route = id; state.selected = ''; state.query = ''; search.value = '';
      if (id) {
        routeById.get(id)?.steps.forEach(enableNode);
        state.paths = true;
      }
      refresh();
      const ids = id ? new Set(visibleRoute(routeById.get(id))) : visibleIds;
      if (ids.size) fit(ids);
      announce(id ? `已突出路线：${routeById.get(id).entry.title}` : '已显示全部路线');
    }
    function zoom(factor, x = width / 2, y = height / 2) {
      const k = clamp(camera.k * factor, Math.max(.06, (state.fitScale ?? .2) * .35), Math.max(4, (state.fitScale ?? 1) * 5));
      const ratio = k / camera.k;
      camera = {k, x: x - (x - camera.x) * ratio, y: y - (y - camera.y) * ratio};
      applyCamera();
    }
    function toggleExpanded() {
      expanded = !expanded;
      root.classList.toggle('is-expanded', expanded);
      if (expanded) { previousOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; }
      else document.body.style.overflow = previousOverflow;
      const control = root.querySelector('[data-graph-action="expand"]');
      control.setAttribute('aria-pressed', expanded); control.setAttribute('aria-label', expanded ? '收起图谱' : '展开图谱');
      requestAnimationFrame(() => { if (!disposed) { resize(); fit(); } });
    }

    listen(root, 'click', event => {
      const target = event.target.closest('[data-graph-action]');
      if (!target || !root.contains(target)) return;
      const action = target.dataset.graphAction;
      if (action === 'type') {
        const type = target.dataset.type;
        state.types = state.types.includes(type) ? state.types.filter(item => item !== type) : [...state.types, type];
        refresh();
      } else if (action === 'layer') {
        const key = target.dataset.layer; state[key] = !state[key];
        refresh();
      } else if (action === 'node') selectNode(target.dataset.id, true);
      else if (action === 'route') selectRoute(target.dataset.id);
      else if (action === 'clear') { state.selected = ''; state.route = ''; state.query = ''; search.value = ''; refresh(); fit(); }
      else if (action === 'deselect') { state.selected = ''; draw(); }
      else if (action === 'zoom-in') zoom(1.25);
      else if (action === 'zoom-out') zoom(.8);
      else if (action === 'fit') fit();
      else if (action === 'expand') toggleExpanded();
    });
    listen(search, 'input', () => { state.query = search.value; state.selected = ''; draw(); });
    listen(search, 'keydown', event => {
      if (event.key === 'Enter' && matches.size) { event.preventDefault(); selectNode([...matches][0], true); }
      if (event.key === 'Escape') { search.value = state.query = ''; draw(); }
    });
    listen(svg, 'wheel', event => {
      event.preventDefault();
      const rect = svg.getBoundingClientRect();
      zoom(Math.exp(-clamp(event.deltaY, -120, 120) * .004), event.clientX - rect.left, event.clientY - rect.top);
      tooltip.hidden = true;
    }, {passive: false});
    const localPoint = event => { const rect = svg.getBoundingClientRect(); return {x: event.clientX - rect.left, y: event.clientY - rect.top}; };
    listen(svg, 'pointerdown', event => {
      if (event.button !== 0) return;
      const point = localPoint(event);
      pointers.set(event.pointerId, point);
      svg.setPointerCapture(event.pointerId);
      tooltip.hidden = true;
      if (pointers.size === 2) {
        const [a, b] = [...pointers.values()];
        operation = {kind: 'pinch', distance: Math.max(1, Math.hypot(b.x - a.x, b.y - a.y)), middle: {x: (a.x + b.x) / 2, y: (a.y + b.y) / 2}, camera: {...camera}, moved: true};
        return;
      }
      const node = event.target.closest('[data-node]')?.dataset.node;
      operation = {kind: node ? 'node' : 'pan', node, route: event.target.closest('[data-route]')?.dataset.route, start: point, camera: {...camera}, origin: node ? {...state.positions[node]} : null, moved: false};
      stage.classList.add('is-dragging');
    });
    listen(svg, 'pointermove', event => {
      const point = localPoint(event);
      if (!operation || !pointers.has(event.pointerId)) {
        const node = event.target.closest('[data-node]')?.dataset.node;
        const route = event.target.closest('[data-route]')?.dataset.route;
        if (!node && !route) { tooltip.hidden = true; return; }
        tooltip.textContent = node ? model.nodeById.get(node).entry.title : routeById.get(route).entry.title;
        tooltip.hidden = false;
        tooltip.style.left = `${clamp(point.x + 14, 10, Math.max(10, width - 240))}px`;
        tooltip.style.top = `${clamp(point.y - 42, 48, height - 110)}px`;
        return;
      }
      pointers.set(event.pointerId, point);
      if (operation.kind === 'pinch') {
        const [a, b] = [...pointers.values()];
        if (!b) return;
        const middle = {x: (a.x + b.x) / 2, y: (a.y + b.y) / 2};
        const nextK = clamp(operation.camera.k * Math.hypot(b.x - a.x, b.y - a.y) / operation.distance, Math.max(.06, state.fitScale * .35), 5);
        const ratio = nextK / operation.camera.k;
        camera = {k: nextK, x: middle.x - (operation.middle.x - operation.camera.x) * ratio, y: middle.y - (operation.middle.y - operation.camera.y) * ratio};
        applyCamera(); return;
      }
      const dx = point.x - operation.start.x, dy = point.y - operation.start.y;
      if (Math.hypot(dx, dy) > 4) operation.moved = true;
      if (!operation.moved) return;
      if (operation.kind === 'node') {
        state.positions[operation.node] = {x: operation.origin.x + dx / camera.k, y: operation.origin.y + dy / camera.k};
        svg.querySelectorAll('[data-node]').forEach(group => { if (group.dataset.node === operation.node) { const position = state.positions[operation.node]; group.setAttribute('transform', `translate(${position.x} ${position.y})`); } });
        svg.querySelectorAll('[data-base-edge]').forEach(path => path.setAttribute('d', edgePath(baseEdges[Number(path.dataset.baseEdge)])));
        svg.querySelectorAll('[data-path-index]').forEach(group => group.querySelectorAll('path').forEach(path => path.setAttribute('d', edgePath(pathEdges[Number(group.dataset.pathIndex)]))));
        applyCamera();
      } else { camera.x = operation.camera.x + dx; camera.y = operation.camera.y + dy; applyCamera(); }
    });
    function finishPointer(event) {
      if (!pointers.has(event.pointerId)) return;
      pointers.delete(event.pointerId);
      const previous = operation;
      operation = null;
      if (pointers.size) {
        const [point] = pointers.values();
        operation = {kind: 'pan', start: point, camera: {...camera}, moved: true};
      }
      stage.classList.remove('is-dragging');
      if (!previous || previous.moved || event.type === 'pointercancel') return;
      if (previous.node) {
        const now = performance.now();
        if (lastNodeClick?.id === previous.node && now - lastNodeClick.time < 380) {
          lastNodeClick = null;
          location.hash = entryLink(model.nodeById.get(previous.node).entry);
        } else { lastNodeClick = {id: previous.node, time: now}; selectNode(previous.node); }
      }
      else if (previous.route) selectRoute(previous.route);
      else if (state.selected) { state.selected = ''; draw(); }
    }
    listen(svg, 'pointerup', finishPointer);
    listen(svg, 'pointercancel', finishPointer);
    listen(svg, 'lostpointercapture', event => { pointers.delete(event.pointerId); if (!pointers.size) { operation = null; stage.classList.remove('is-dragging'); } });
    listen(svg, 'pointerleave', () => { tooltip.hidden = true; });
    listen(svg, 'dblclick', event => {
      const id = event.target.closest('[data-node]')?.dataset.node;
      if (id) location.hash = entryLink(model.nodeById.get(id).entry);
    });
    listen(svg, 'keydown', event => {
      const id = event.target.closest('[data-node]')?.dataset.node;
      if (id && ['Enter', ' '].includes(event.key)) {
        event.preventDefault();
        if (event.key === 'Enter' && event.ctrlKey) location.hash = entryLink(model.nodeById.get(id).entry);
        else { selectNode(id); [...svg.querySelectorAll('[data-node]')].find(group => group.dataset.node === id)?.focus(); }
        return;
      }
      if (['+', '=', '-', '0', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Escape'].includes(event.key)) event.preventDefault();
      if (event.key === '+' || event.key === '=') zoom(1.25);
      if (event.key === '-') zoom(.8);
      if (event.key === '0') fit();
      if (event.key === 'ArrowLeft') camera.x += 40;
      if (event.key === 'ArrowRight') camera.x -= 40;
      if (event.key === 'ArrowUp') camera.y += 40;
      if (event.key === 'ArrowDown') camera.y -= 40;
      if (event.key.startsWith('Arrow')) applyCamera();
      if (event.key === 'Escape' && state.selected) { state.selected = ''; draw(); }
    });
    listen(document, 'keydown', event => { if (event.key === 'Escape' && expanded) toggleExpanded(); });
    const resizeObserver = new ResizeObserver(() => {
      const before = {width, height}; resize();
      if (Math.abs(before.width - width) > 2 || Math.abs(before.height - height) > 2) fit();
    });
    resizeObserver.observe(stage);
    if (state.request && model.nodeById.has(state.request)) { enableNode(state.request); state.selected = state.request; state.route = ''; state.query = ''; search.value = ''; }
    if (state.request && routeById.has(state.request)) { state.route = state.request; state.selected = ''; state.query = ''; search.value = ''; routeById.get(state.request).steps.forEach(enableNode); state.paths = true; }
    state.request = '';
    refresh();

    return {destroy() {
      disposed = true; abort.abort(); resizeObserver.disconnect(); cancelAnimationFrame(labelFrame);
      if (expanded) document.body.style.overflow = previousOverflow;
    }};
  }

  window.FolioGraph = {createModel, layout, initialState, render, mount};
})();
