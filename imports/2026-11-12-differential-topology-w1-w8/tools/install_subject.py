#!/usr/bin/env python3
"""Install a Folio v1 knowledge pack and its subject overlay. No network operations."""
import argparse,json,sys,subprocess,shutil
from pathlib import Path
from datetime import datetime,timezone
from folio_sync import load_pack,state,PackError,atomic_write

def main():
 p=argparse.ArgumentParser(description=__doc__)
 p.add_argument('--repo',type=Path,required=True)
 p.add_argument('--apply',action='store_true',help='Without this flag, validate and print a dry run only.')
 a=p.parse_args();repo=a.repo.resolve();pack=Path(__file__).resolve().parents[1]
 subject=json.loads((pack/'subject.json').read_text())
 out=repo/'public/folio/subjects.json'
 if out.exists():
  config=json.loads(out.read_text())
  if not isinstance(config,dict) or config.get('format')!='folio-subject-registry' or not isinstance(config.get('subjects'),list):
   raise PackError('Existing subjects.json has another schema; adapt its UI schema manually before installing. No files changed.')
 else:config={'format':'folio-subject-registry','schema_version':'1.0','subjects':[]}
 _,checked=load_pack(pack);changes,conflicts=state(repo,checked)
 if conflicts:raise PackError('Content conflicts: '+repr(conflicts))
 active=set(subject['active_node_ids'])
 legacy=[]
 for path in (repo/'knowledge').glob('*.json'):
  m=json.loads(path.read_text())
  if m.get('subject')==subject['id'] and m.get('id') not in active:legacy.append(m['id'])
 subject['legacy_node_ids']=sorted(legacy)
 config['subjects']=[s for s in config['subjects'] if s.get('id')!=subject['id']]+[subject]
 print(json.dumps({'subject':subject['id'],'new_nodes':sum(v=='create' for _,v in changes),'unchanged':sum(v=='unchanged' for _,v in changes),'legacy_retained':legacy,'progress':'untouched','apply':a.apply},ensure_ascii=False,indent=2))
 if not a.apply:return
 # Backup only configuration; content merge itself uses optimistic hash checks.
 if out.exists() and json.loads(out.read_text())!=config:
  backup=repo/'folio-backups'/datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%fZ')
  backup.mkdir(parents=True);shutil.copy2(out,backup/'subjects.json')
 subprocess.run([sys.executable,str(pack/'tools/folio_sync.py'),'apply','--pack',str(pack),'--repo',str(repo)],check=True)
 atomic_write(out,(json.dumps(config,ensure_ascii=False,indent=2)+'\n').encode())
 print('Installed content and subject configuration. Connect the Folio UI to subjects.json as described in docs/INTEGRATION.md.')

if __name__=='__main__':
 try:main()
 except (PackError,ValueError,OSError) as e:sys.exit('ERROR: '+str(e))
