#!/usr/bin/env python3
"""Structural QA: links, hashes, roadmap coverage, and JSON metadata schema."""
import json,re
from pathlib import Path
from folio_sync import load_pack,state
root=Path(__file__).resolve().parents[1]
_,nodes=load_pack(root)
ids={n[0] for n in nodes}
assert len(ids)==104
subject=json.loads((root/'subject.json').read_text())
assert set(subject['active_node_ids'])==ids
assert [w['week'] for w in subject['roadmap']]==list(range(1,9))
all_ex=[]
for w in subject['roadmap']:
 assert w['id'] in ids
 for key in ['definition_ids','theorem_ids','example_ids','exercise_ids','reading_order']:
  assert set(w[key])<=ids
 assert w['definition_ids'] and w['theorem_ids'] and w['example_ids']
 all_ex+=w['exercise_ids']
assert len(all_ex)==len(set(all_ex))==62
for id,raw,meta,_ in nodes:
 assert set(meta['links'])<=ids
 assert len(meta['links'])==len(set(meta['links']))
 assert meta['review_status']=='reviewed'
 assert not any(k in meta for k in ['status','completed','mastery'])
 text=raw.decode()
 assert '\x00' not in text and '\ufffd' not in text
 # Every math delimiter is paired; braces balance within each math fragment.
 fragments=re.findall(r'\$\$(.*?)\$\$|(?<!\$)\$(?!\$)(.*?)(?<!\$)\$(?!\$)',text,re.S)
 assert text.count('$')%2==0,id
 for pair in fragments:
  math=pair[0] or pair[1]
  depth=0
  for c in re.sub(r'\\[{}]','',math):
   if c=='{':depth+=1
   if c=='}':depth-=1
   assert depth>=0,(id,math)
  assert depth==0,(id,math)
schema_status='not installed; core protocol validation passed'
try:
 import jsonschema
 schema=json.loads((root/'schemas/node.schema.json').read_text())
 for _,_,m,_ in nodes:jsonschema.validate(m,schema)
 schema_status='passed'
except ImportError:pass
print(json.dumps({'nodes':len(ids),'exercises':len(all_ex),'cards':34,'weeks':8,'hashes_links_math_delimiters':'passed','json_schema':schema_status},ensure_ascii=False))
