import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const build=()=>spawnSync(process.execPath,[path.join(root,'scripts/build.mjs')],{stdio:'inherit'});
if (build().status!==0) process.exit(1);
const dir=path.join(root,'dist');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.md':'text/plain; charset=utf-8','.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf','.svg':'image/svg+xml'};
const server=http.createServer((req,res)=>{
  const filename=path.resolve(dir,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if (!filename.startsWith(dir+path.sep) && filename!==dir) {res.writeHead(403);res.end();return;}
  const resolved=filename===dir?path.join(dir,'index.html'):filename;
  if (!fs.existsSync(resolved)||!fs.statSync(resolved).isFile()){res.writeHead(404);res.end('Not found');return;}
  res.writeHead(200,{'Content-Type':mime[path.extname(resolved)]??'application/octet-stream','Cache-Control':'no-cache'});fs.createReadStream(resolved).pipe(res);
});
server.listen(Number(process.env.PORT)||4173,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${server.address().port}`));
let timer;
for (const folder of ['subjects','web']) fs.watch(path.join(root,folder),{recursive:true},()=>{clearTimeout(timer);timer=setTimeout(build,150);});
