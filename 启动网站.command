#!/bin/zsh
# Double-click in Finder to run the local Folio preview.
set -u

FOLIO_PROJECT_DIR="${0:A:h}"
cd "$FOLIO_PROJECT_DIR" || exit 1
FOLIO_URL="http://127.0.0.1:4173"

FOLIO_HEALTH="$(curl -sS --max-time 2 "$FOLIO_URL/__folio_health" 2>/dev/null || true)"
if [[ "$FOLIO_HEALTH" == *'"app":"folio-math-atlas"'* ]]; then
  print '数学手记已经在运行，正在打开浏览器。'
  open "$FOLIO_URL"
  exit 0
fi

FOLIO_NODE=""
FOLIO_PATH_NODE="$(command -v node 2>/dev/null || true)"
FOLIO_NODE_CANDIDATES=(
  "$FOLIO_PATH_NODE"
  /opt/homebrew/bin/node
  /usr/local/bin/node
  "$HOME"/.nvm/versions/node/*/bin/node(N)
  /private/tmp/math-atlas-runtime/node/bin/node
)
for FOLIO_CANDIDATE in "${FOLIO_NODE_CANDIDATES[@]}"; do
  if [[ -x "$FOLIO_CANDIDATE" ]] && "$FOLIO_CANDIDATE" -e 'process.exit(Number(process.versions.node.split(".")[0]) >= 22 ? 0 : 1)' 2>/dev/null; then
    FOLIO_NODE="$FOLIO_CANDIDATE"
    break
  fi
done

if [[ -z "$FOLIO_NODE" ]]; then
  print '没有找到 Node.js 22 或更高版本，将打开最近构建的离线网页。'
  print '如需编辑 Markdown 后更新页面，请安装 Node.js 后重新启动。'
  if [[ -f dist/index.html ]]; then
    open "$FOLIO_PROJECT_DIR/dist/index.html"
  else
    print '还没有构建结果，请先安装 Node.js 并按 README 执行 npm ci、npm run build。'
  fi
  read 'FOLIO_CLOSE?按回车关闭这个窗口。'
  exit 0
fi

print '正在启动 Folio 数学手记…'
print "地址：$FOLIO_URL"
print '请保持此终端窗口打开；关闭窗口或按 Control+C 会停止本地服务。'
print '也可以双击同目录的“停止网站.command”关闭服务。'
print ''
"$FOLIO_NODE" scripts/serve.mjs --open
FOLIO_EXIT_CODE=$?
if (( FOLIO_EXIT_CODE != 0 )); then
  print ''
  print '启动没有完成，请查看上方错误信息。'
  read 'FOLIO_CLOSE?按回车关闭这个窗口。'
fi
exit "$FOLIO_EXIT_CODE"
