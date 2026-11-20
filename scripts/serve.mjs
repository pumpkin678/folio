import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn, spawnSync } from 'node:child_process';
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const build=()=>spawnSync(process.execPath,[path.join(root,'scripts/build.mjs')],{stdio:'inherit'});
if (build().status!==0) process.exit(1);
const dir=path.join(root,'dist');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'text/javascript','.md':'text/plain; charset=utf-8','.woff2':'font/woff2','.woff':'font/woff','.ttf':'font/ttf','.svg':'image/svg+xml'};
const server=http.createServer((req,res)=>{
  if (req.url==='/__folio_health') {
    res.writeHead(200,{'Content-Type':'application/json','Cache-Control':'no-store'});
    res.end(JSON.stringify({app:'folio-math-atlas',status:'ready'}));
    return;
  }
  const filename=path.resolve(dir,'.'+decodeURIComponent(new URL(req.url,'http://localhost').pathname));
  if (!filename.startsWith(dir+path.sep) && filename!==dir) {res.writeHead(403);res.end();return;}
  const resolved=filename===dir?path.join(dir,'index.html'):filename;
  if (!fs.existsSync(resolved)||!fs.statSync(resolved).isFile()){res.writeHead(404);res.end('Not found');return;}
  res.writeHead(200,{'Content-Type':mime[path.extname(resolved)]??'application/octet-stream','Cache-Control':'no-cache'});fs.createReadStream(resolved).pipe(res);
});
server.on('error',error=>{
  if (error.code==='EADDRINUSE') console.error('本地端口已被占用。若数学手记已经运行，请直接打开现有页面。');
  else console.error(`本地服务无法启动：${error.message}`);
  process.exit(1);
});
server.listen(Number(process.env.PORT)||4173,'127.0.0.1',()=>{
  const url=`http://127.0.0.1:${server.address().port}`;
  console.log(`Local: ${url}`);
  console.log('Keep this terminal open. Press Control+C to stop the local preview.');
  if (process.argv.includes('--open') && process.platform==='darwin') {
    const opener=spawn('open',[url],{stdio:'ignore'});
    opener.on('error',()=>console.log(`请在浏览器中打开：${url}`));
    opener.unref();
  }
});
let timer;
for (const folder of ['subjects','web']) fs.watch(path.join(root,folder),{recursive:true},()=>{clearTimeout(timer);timer=setTimeout(build,150);});
