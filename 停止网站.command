#!/bin/zsh
# Stop only the Folio preview listening on its local port.
set -u

FOLIO_URL="http://127.0.0.1:4173"
FOLIO_CHECK_ONLY="${1:-}"
FOLIO_HEALTH="$(curl -sS --max-time 2 "$FOLIO_URL/__folio_health" 2>/dev/null || true)"
if [[ "$FOLIO_HEALTH" != *'"app":"folio-math-atlas"'* ]]; then
  print '当前没有检测到运行中的数学手记，无需停止。'
  exit 0
fi

FOLIO_PIDS="$(lsof -t -nP -iTCP:4173 -sTCP:LISTEN 2>/dev/null || true)"
FOLIO_STOPPED=0
for FOLIO_PID in ${(f)FOLIO_PIDS}; do
  FOLIO_COMMAND="$(ps -p "$FOLIO_PID" -o command= 2>/dev/null || true)"
  if [[ "$FOLIO_COMMAND" != *'scripts/serve.mjs'* ]]; then
    print '端口上的进程不是数学手记预览服务，未对它执行关闭。'
    continue
  fi
  if [[ "$FOLIO_CHECK_ONLY" == '--check' ]]; then
    print "已识别数学手记预览进程：$FOLIO_PID（仅检查，未关闭）。"
    FOLIO_STOPPED=1
  elif kill -TERM "$FOLIO_PID"; then
    print '数学手记本地服务已停止。下次双击“启动网站.command”即可重新打开。'
    FOLIO_STOPPED=1
  else
    print '服务未能停止，请在启动服务的终端窗口中按 Control+C。'
    exit 1
  fi
done

if (( FOLIO_STOPPED == 0 )); then
  print '未找到可关闭的数学手记预览进程。'
  exit 1
fi
if [[ "$FOLIO_CHECK_ONLY" != '--check' && -t 0 ]]; then
  read 'FOLIO_CLOSE?按回车关闭这个窗口。'
fi
