import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';
import test from 'node:test';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const context = {window: {}};
vm.runInNewContext(fs.readFileSync(path.join(root, 'web/assets/graph.js'), 'utf8'), context);
const {createModel, layout} = context.window.FolioGraph;
const material = (id, extra = {}) => ({id, title: id, subject: 'a', category: 'material', type: 'def', references: [], blocks: [], ...extra});
const roadmap = (id, ids, extra = {}) => ({id, title: id, subject: 'a', category: 'roadmap', purpose: 'learn', blocks: ids.map(id => ({kind: 'material', id})), ...extra});
const plain = value => JSON.parse(JSON.stringify(value));

test('keeps every material, including isolates, and distinguishes external references', () => {
  const data = {entries: [material('first', {references: ['external']}), material('isolate'), material('external', {subject: 'b'}), material('unrelated', {subject: 'b'})]};
  const original = JSON.stringify(data);
  const model = createModel(data, 'a');
  assert.deepEqual(plain(model.nodes.map(node => node.id)), ['first', 'isolate', 'external']);
  assert.equal(model.nodeById.get('external').external, true);
  assert.equal(model.nodeById.get('isolate').degree, 0);
  assert.equal(JSON.stringify(data), original, 'building a graph must not modify notebook content');
});

test('prerequisites point from the required material to the dependent material', () => {
  const model = createModel({entries: [material('foundation'), material('result', {requires: ['foundation'], references: ['foundation']}), material('example', {references: ['result']}), {id: 'question', title: 'question', subject: 'a', category: 'exercise', targets: ['result'], references: ['result']}]}, 'a');
  assert.deepEqual(plain(model.edges), [
    {source: 'foundation', target: 'result', kind: 'prerequisite'},
    {source: 'result', target: 'question', kind: 'application'},
    {source: 'example', target: 'result', kind: 'reference'}
  ]);
});

test('roadmaps become separate directed paths in authored order, including repeated visits', () => {
  const model = createModel({entries: [material('a'), material('b'), material('c'), roadmap('one', ['b', 'a', 'a', 'c', 'b']), roadmap('two', ['b', 'a'])]}, 'a');
  assert.deepEqual(plain(model.routes[0].steps), ['b', 'a', 'c', 'b']);
  assert.deepEqual(plain(model.routeEdges.map(edge => [edge.route, edge.source, edge.target])), [['one', 'b', 'a'], ['one', 'a', 'c'], ['one', 'c', 'b'], ['two', 'b', 'a']]);
  assert.equal(model.nodes.some(node => node.id === 'one'), false);
  assert.notEqual(model.routes[0].color, model.routes[1].color);
});

test('overview maps compose linked maps without absorbing companion practice maps or looping', () => {
  const overview = roadmap('overview', [], {body: '[第二部分](ref:second) [习题](ref:practice) [第一部分](ref:first) [自引用](ref:overview)'});
  const model = createModel({entries: [material('a'), material('b'), material('c'), overview, roadmap('first', ['a', 'b']), roadmap('second', ['c']), roadmap('practice', ['b', 'c'], {purpose: 'practice'})]}, 'a');
  assert.deepEqual(plain(model.routes.find(route => route.id === 'overview').steps), ['c', 'a', 'b']);
});

test('empty and single-node routes remain valid without fabricated edges', () => {
  const model = createModel({entries: [material('a'), roadmap('empty', []), roadmap('single', ['a'])]}, 'a');
  assert.equal(model.routes.length, 2);
  assert.equal(model.routeEdges.length, 0);
  assert.deepEqual(plain(layout([], [])), {});
  assert.equal(Object.keys(layout(model.nodes, [])).length, 1);
});

test('all built subjects have complete material coverage and valid path endpoints', () => {
  const html = fs.readFileSync(path.join(root, 'dist/index.html'), 'utf8');
  const data = JSON.parse(html.match(/<script type="application\/json" id="content-data">([\s\S]*?)<\/script>/)[1]);
  let count = 0;
  for (const subject of data.subjects) {
    const model = createModel(data, subject.slug);
    const ids = data.entries.filter(entry => entry.subject === subject.slug && entry.category === 'material').map(entry => entry.id).sort();
    assert.deepEqual(plain(model.nodes.filter(node => !node.external && node.entry.category === 'material').map(node => node.id).sort()), ids, subject.slug);
    count += ids.length;
    for (const edge of [...model.edges, ...model.routeEdges]) {
      assert.ok(model.nodeById.has(edge.source), `${subject.slug}: ${edge.source}`);
      assert.ok(model.nodeById.has(edge.target), `${subject.slug}: ${edge.target}`);
      assert.notEqual(edge.source, edge.target);
    }
    for (const route of model.routes) {
      const direct = route.entry.blocks.filter(block => ['material', 'exercise', 'mistake'].includes(block.kind)).map(block => block.id);
      if (direct.length) assert.deepEqual(plain(route.steps), direct.filter((id, index) => !index || id !== direct[index - 1]), route.id);
    }
    const visible = model.nodes.filter(node => !node.external && node.entry.category === 'material');
    const positions = layout(visible, [...model.edges, ...model.routeEdges]);
    assert.deepEqual(plain(positions), plain(layout(visible, [...model.edges, ...model.routeEdges])), `${subject.slug}: layout must be deterministic`);
    for (const node of visible) assert.ok(Number.isFinite(positions[node.id].x) && Number.isFinite(positions[node.id].y));
  }
  assert.equal(count, data.entries.filter(entry => entry.category === 'material').length);
});
