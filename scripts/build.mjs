import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import YAML from 'yaml';
import { marked } from 'marked';
import katex from 'katex';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentRoot = path.join(root, 'subjects');
const fail = message => { throw new Error(message); };
const files = dir => fs.readdirSync(dir, { withFileTypes: true }).flatMap(e => e.isDirectory() ? files(path.join(dir, e.name)) : [path.join(dir, e.name)]);
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const macros = { '\\R': '\\mathbb{R}', '\\C': '\\mathbb{C}', '\\Z': '\\mathbb{Z}' };
const math = (text, displayMode = false) => katex.renderToString(text, { displayMode, throwOnError: true, strict: 'error', macros });
const subjects = fs.readdirSync(contentRoot, { withFileTypes: true }).filter(e => e.isDirectory()).map(e => {
  const data = YAML.parse(fs.readFileSync(path.join(contentRoot, e.name, 'subject.yaml'), 'utf8'));
  if (data.slug !== e.name) fail(`Subject slug does not match directory: ${e.name}`);
  for (const key of ['title', 'english', 'description', 'symbol', 'order']) if (data[key] === undefined) fail(`Missing subject field ${key}: ${e.name}`);
  return data;
}).sort((a,b) => a.order - b.order);

const entries = [];
for (const subject of subjects) {
  for (const filename of files(path.join(contentRoot, subject.slug)).filter(f => f.endsWith('.md'))) {
    const raw = fs.readFileSync(filename, 'utf8');
    const match = raw.match(/^---\r?\n([\s\S]+?)\r?\n---\r?\n([\s\S]*)$/);
    if (!match) fail(`Missing frontmatter: ${filename}`);
    const meta = YAML.parse(match[1]);
    const collection = path.relative(path.join(contentRoot, subject.slug), filename).split(path.sep)[0];
    const category = ({materials:'material', roadmaps:'roadmap', exercises:'exercise', mistakes:'mistake'})[collection];
    if (!category) fail(`Unknown collection: ${filename}`);
    for (const key of ['id','title','summary']) if (typeof meta[key] !== 'string' || !meta[key].trim()) fail(`Missing ${key}: ${filename}`);
    if (!/^[a-zA-Z0-9][a-zA-Z0-9.-]+$/.test(meta.id)) fail(`Invalid ID: ${meta.id}`);
    if (meta.subject && meta.subject !== subject.slug) fail(`Conflicting subject: ${meta.id}`);
    if (category === 'material' && !['def','thm','eg'].includes(meta.type)) fail(`Invalid material type: ${meta.id}`);
    if (category === 'roadmap') {
      meta.purpose ??= 'learn';
      if (!['learn','review','practice'].includes(meta.purpose)) fail(`Invalid roadmap purpose: ${meta.id}`);
    }
    for (const key of ['requires','targets','related','tags','aliases','related_questions','mistake_ids']) if (meta[key] !== undefined && (!Array.isArray(meta[key]) || meta[key].some(x => typeof x !== 'string'))) fail(`Invalid ${key}: ${meta.id}`);
    if (category === 'mistake' && !['observed','suggested'].includes(meta.kind)) fail(`Mistake requires observed/suggested kind: ${meta.id}`);
    if (meta.initial_status && !['new','attempted','completed','independent','assisted','review'].includes(meta.initial_status)) fail(`Invalid initial exercise status: ${meta.id}`);
    if (meta.study_date && (typeof meta.study_date !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(meta.study_date))) fail(`Invalid study date: ${meta.id}`);
    entries.push({...meta, subject:subject.slug, category, source:path.relative(root, filename).split(path.sep).join('/'), raw, body:match[2], blocks:[]});
  }
}
const byId = new Map();
for (const entry of entries) {
  if (byId.has(entry.id)) fail(`Duplicate ID: ${entry.id}`);
  byId.set(entry.id, entry);
}
for (const subject of subjects) {
  if (subject.highlights === undefined) subject.highlights = subject.featured ? [subject.featured] : [];
  if (!Array.isArray(subject.highlights) || subject.highlights.length > 3 || subject.highlights.some(id => typeof id !== 'string' || !id.trim())) fail(`Subject highlights must contain up to 3 material IDs: ${subject.slug}`);
  if (new Set(subject.highlights).size !== subject.highlights.length) fail(`Duplicate subject highlight: ${subject.slug}`);
  for (const id of new Set([...subject.highlights, ...(subject.featured ? [subject.featured] : [])])) {
    const entry = byId.get(id);
    if (!entry || entry.category !== 'material' || entry.subject !== subject.slug) fail(`Subject highlight must reference a material in ${subject.slug}: ${id}`);
  }
}
const route = entry => `#/${entry.subject}/${entry.category}/${entry.id}`;
function markdown(source) {
  const formulas = [];
  const prepared = source.replace(/\$\$([\s\S]+?)\$\$|\$([^\n$]+?)\$/g, (_, block, inline) => {
    const token = `MATHPLACEHOLDER${formulas.length}END`;
    formulas.push(math(block ?? inline, block !== undefined));
    return token;
  });
  let html = marked.parse(prepared, { gfm:true, breaks:false });
  html = html.replace(/MATHPLACEHOLDER(\d+)END/g, (_, index) => formulas[Number(index)]);
  return html.replace(/href="ref:([^"]+)"/g, (_, id) => {
    const ref = byId.get(id);
    if (!ref) fail(`Unknown inline reference: ${id}`);
    return `href="${escape(route(ref))}"`;
  });
}
const allowed = new Set(['statement','intuition','proof','remark','example','problem','hint','solution','goal','original','correction','counterexample','reviewtask']);
for (const entry of entries) {
  let prose = [];
  const flush = () => { if (prose.join('\n').trim()) entry.blocks.push({kind:'prose', text:prose.join('\n'), html:markdown(prose.join('\n'))}); prose=[]; };
  const lines = entry.body.split('\n');
  for (let i=0;i<lines.length;i++) {
    const open = lines[i].match(/^:::([a-z]+)\s*$/);
    const ref = lines[i].match(/^::(material|exercise|mistake)\{id="([a-zA-Z0-9.-]+)"\}\s*$/);
    if (open) {
      flush();
      if (!allowed.has(open[1])) fail(`Unknown semantic block ${open[1]}: ${entry.id}`);
      const text=[];
      while (++i<lines.length && lines[i].trim() !== ':::') text.push(lines[i]);
      if (i===lines.length) fail(`Unclosed ${open[1]} block: ${entry.id}`);
      entry.blocks.push({kind:open[1], text:text.join('\n'), html:markdown(text.join('\n'))});
    } else if (ref) {
      flush();
      const target = byId.get(ref[2]);
      if (!target || target.category !== ref[1]) fail(`Invalid ${ref[1]} reference ${ref[2]}: ${entry.id}`);
      entry.blocks.push({kind:ref[1], id:ref[2]});
    } else {
      if (lines[i].startsWith(':::') || /^::(?:material|exercise|mistake)/.test(lines[i])) fail(`Malformed directive: ${entry.id}: ${lines[i]}`);
      prose.push(lines[i]);
    }
  }
  flush();
  if (entry.category==='exercise' && !entry.blocks.some(b=>b.kind==='problem')) fail(`Exercise requires a problem block: ${entry.id}`);
  if (entry.category==='exercise' && !(entry.targets?.length)) fail(`Exercise requires targets: ${entry.id}`);
  if (entry.category==='roadmap') {
    const hasExercises=entry.blocks.some(b=>b.kind==='exercise');
    if (entry.purpose==='practice' && !hasExercises) fail(`Practice map requires exercises: ${entry.id}`);
    if (entry.purpose!=='practice' && hasExercises) fail(`Move exercise blocks into a practice map: ${entry.id}`);
  }
  if (entry.category==='material' && !entry.blocks.some(b=>b.kind==='statement' || b.kind==='example')) fail(`Material requires a statement/example: ${entry.id}`);
  if (entry.category==='mistake') {
    for (const block of ['correction','reviewtask']) if (!entry.blocks.some(b=>b.kind===block)) fail(`Mistake requires ${block}: ${entry.id}`);
    if (!entry.related_questions?.length) fail(`Mistake requires related questions: ${entry.id}`);
  }
  for (const id of [...(entry.requires??[]),...(entry.targets??[])]) if (!byId.has(id) || byId.get(id).category !== 'material') fail(`Missing material ${id}: ${entry.id}`);
  for (const id of entry.related??[]) if (!byId.has(id)) fail(`Unknown related reference ${id}: ${entry.id}`);
  for (const [field,category] of [['related_questions','exercise'],['mistake_ids','mistake']]) {
    for (const id of entry[field]??[]) if (byId.get(id)?.category!==category) fail(`Invalid ${field} reference ${id}: ${entry.id}`);
  }
  entry.formulaHtml = entry.formula ? math(entry.formula, true) : '';
  entry.searchText = [entry.id,entry.title,entry.english,entry.study_date,entry.track,...(entry.aliases??[]),...(entry.tags??[]),entry.summary,...entry.blocks.filter(b=>b.text).map(b=>b.text.replace(/\]\(ref:[^)]+\)/g,']'))].filter(Boolean).join(' ').toLowerCase();
  entry.references = [...new Set([...(entry.requires??[]),...(entry.targets??[]),...(entry.related??[]),...(entry.related_questions??[]),...(entry.mistake_ids??[]),...entry.blocks.filter(b=>b.id).map(b=>b.id),...Array.from(entry.body.matchAll(/\]\(ref:([^)]+)\)/g),m=>m[1])])];
  entry.backlinks=[];
}
const visited=new Set(), stack=new Set();
function visit(entry) {
  if (stack.has(entry.id)) fail(`Prerequisite cycle: ${[...stack,entry.id].join(' -> ')}`);
  if (visited.has(entry.id)) return;
  stack.add(entry.id);
  for (const id of entry.requires??[]) visit(byId.get(id));
  stack.delete(entry.id); visited.add(entry.id);
}
entries.forEach(visit);
for (const entry of entries) for (const id of entry.references) byId.get(id).backlinks.push(entry.id);
const output = path.join(root,'dist');
if (!process.argv.includes('--check')) {
  fs.mkdirSync(output,{recursive:true});
  fs.cpSync(path.join(root,'web','assets'),path.join(output,'assets'),{recursive:true});
  const vendor = path.join(output,'assets','katex');
  fs.mkdirSync(vendor,{recursive:true});
  fs.copyFileSync(path.join(root,'node_modules/katex/dist/katex.min.css'),path.join(vendor,'katex.min.css'));
  fs.copyFileSync(path.join(root,'node_modules/katex/LICENSE'),path.join(vendor,'LICENSE'));
  fs.cpSync(path.join(root,'node_modules/katex/dist/fonts'),path.join(vendor,'fonts'),{recursive:true});
  fs.rmSync(path.join(output,'source','subjects'),{recursive:true,force:true});
  fs.cpSync(path.join(root,'subjects'),path.join(output,'source','subjects'),{recursive:true});
  const data=JSON.stringify({subjects,entries}).replaceAll('<','\\u003c');
  const template=fs.readFileSync(path.join(root,'web','index.html'),'utf8');
  fs.writeFileSync(path.join(output,'index.html'),template.replace('<!-- CONTENT_DATA -->',()=>`<script type="application/json" id="content-data">${data}</script>`));
  fs.writeFileSync(path.join(output,'.nojekyll'),'');
}
console.log(`${process.argv.includes('--check')?'Validated':'Built'} ${subjects.length} subjects, ${entries.filter(e=>e.category==='material').length} materials, ${entries.filter(e=>e.category==='roadmap').length} roadmaps, ${entries.filter(e=>e.category==='exercise').length} exercises, ${entries.filter(e=>e.category==='mistake').length} correction/review records. All references, prerequisite cycles, semantic blocks, and LaTeX checked.`);
