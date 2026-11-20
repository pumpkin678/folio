#!/usr/bin/env python3
"""Merge one Folio incremental pack with an existing schema_version=1 site-data.json.
Only writes --out; never overwrites --existing. No external dependencies.
"""
import argparse, json, sys, pathlib, copy

def load(path):
    with open(path, encoding='utf-8') as f: return json.load(f)

def record_identity(r):
    # Status and private annotations do not belong to content identity.
    return (r.get('path'),r.get('title'),r.get('body'))

def main():
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--existing', required=True, help='Existing Folio site-data.json')
    parser.add_argument('--out', required=True, help='Path for merged output (must differ from existing)')
    args=parser.parse_args()
    src=pathlib.Path(args.existing).resolve(); out=pathlib.Path(args.out).resolve()
    if src == out: parser.error('--out must be different from --existing (safety)')
    if out.exists(): parser.error('output exists; choose a new output file (safety)')
    base=load(src)
    pack=load(pathlib.Path(__file__).resolve().parents[1]/'delta-site-data.json')
    if base.get('schema_version')!=1 or pack.get('schema_version')!=1:
        parser.error('Expected schema_version=1')
    merged=copy.deepcopy(base)
    results={'added':[], 'skipped':[], 'conflicts':[]}
    for key in ('questions','concepts','examples','mistake_cards'):
        if not isinstance(merged.get(key,[]),list): parser.error(f'{key} must be a list')
        dest=merged.setdefault(key,[])
        by_id={r['id']:r for r in dest}
        for new in pack.get(key,[]):
            id=new['id']
            if id not in by_id:
                dest.append(copy.deepcopy(new)); by_id[id]=new; results['added'].append(id)
            elif record_identity(by_id[id])==record_identity(new):
                results['skipped'].append(id)
            else:
                results['conflicts'].append(id)
    if results['conflicts']:
        print(json.dumps(results,ensure_ascii=False,indent=2))
        sys.exit('Conflicting content IDs detected; no output file written')
    # Update the legacy single-object mistake_index by adding a uniquely delimited section.
    block=pack.get('mistake_index',{})
    if block:
        existing=merged.get('mistake_index')
        if isinstance(existing,dict):
            mark='<!-- folio-pack:CA-M-20261113:start -->'
            if mark not in existing.get('body',''):
                existing['body']=existing.get('body','').rstrip()+'\n\n'+mark+'\n'+block['body'].rstrip()+'\n<!-- folio-pack:CA-M-20261113:end -->\n'
                existing['related_questions']=list(dict.fromkeys(existing.get('related_questions',[])+block.get('related_questions',[])))
                results['added'].append('CA-M-20261113 (legacy index section)')
            else: results['skipped'].append('CA-M-20261113 (legacy index section)')
        elif existing is None:
            merged['mistake_index']=copy.deepcopy(block)
            results['added'].append('CA-M-20261113 (legacy index)')
        else: parser.error('mistake_index must be an object')
    out.parent.mkdir(parents=True,exist_ok=True)
    out.write_text(json.dumps(merged,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
    print(json.dumps(results,ensure_ascii=False,indent=2))
    print('Merged output:',out)

if __name__=='__main__': main()
