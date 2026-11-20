# Folio 云端增量导入指令（可复制给站点编辑助手）

请把我上传的 `folio-ca-2026-11-13-boolean-nilradical.zip` 作为一个**只增不覆盖**的内容包，合并到既有 Folio 的「交换代数」subject：

1. 读取 `delta-site-data.json`；依稳定 ID 合并 `questions`、`concepts`、`examples`、`mistake_cards`；保留旧题、旧概念、旧 subject、完成状态、笔记、复习历史与手动 roadmap 顺序。
2. 不要把 ZIP 内的 `site-data.json` 当成全站完整数据库覆盖旧数据。对已存在 ID：相同正文跳过；不同正文列为冲突，不能悄悄覆盖。
3. 将 `mistakes/CA-mistakes-2026-11-13.md` 的新增条目追加到已有交换代数易错点索引，使用 `CA-M20261113-*` 防重复。
4. 使用 Markdown/JSON 双向关联 ID，展示 `problems/`、`concepts/`、`examples/` 内的新条目，并检验所有公式的 KaTeX/MathJax 渲染。
5. 在同一交换代数 subject 中关联 Chapter 1 的 Boolean rings 与 nilradical 两组，但不要重排原来的其他章节。
6. 完成后报告：新增、已存在、冲突的条目 ID 及受影响的文件。不要更改或删除原有用户进度。
