# 双端集成与保留策略

本包已核对 `folio-sync-starter-v1.zip` 的 manifest/changes/node 协议，也提供历史 `site-data.json` 的 questions/concepts 接口。没有取得当前线上 Folio 的实际代码和数据库导出，所以不声称对未知 UI 实现做到零代码导入。

## 路径 A：已有 v1 knowledge 仓库

1. 在本地或云端站点源码工作区运行 `tools/install_subject.py --repo <仓库>` 预检，再加 `--apply`。
2. 原 `knowledge/*.md/json` 加入稳定 `dt-*` 节点；`public/folio/index.json` 由整个知识库重新构建，保留其他 subjects。
3. `public/folio/subjects.json` 使用 `{format:'folio-subject-registry',schema_version:'1.0',subjects:[...]}`。已有同格式配置按 subject ID 合并；遇到未知配置格式则拒绝并要求适配，避免错误覆盖。
4. UI 读取两个文件，用 `tools/subject_view.mjs` 的 `selectSubject(index,subject)` 得到按周整理的 definitions/theorems/examples/exercises。导航顺序使用 roadmap 数组顺序，正文渲染支持 Markdown + LaTeX；关联采用 node ID 跳转，不把 `.md` 相对链接当作浏览器路由直接请求。
5. 主界面只显示 `active_node_ids`，旧微分拓扑节点留在 legacy/archive 入口。不要从知识库中直接删除，因为其他主题可能仍引用它们。
6. 若旧系统 subject ID 不是 `differential-topology`，在 UI 的 subject 路由做明确 alias，并把旧 subject 的导航入口指向这个新配置；不要重复创建两个可见学科。

## 路径 B：已有 question/concept 数据结构

使用 `site-data.json` 的完整正文；按 ID upsert questions、concepts，按 subject ID 更新 roadmap。可参考 `mergeSiteData`，它保留其他 track，且保留未被输入覆盖的已有 status。旧节点保留，active_node_ids 决定新主界面。

题目解答目前与题面同在 Markdown 正文中；若 UI 要“点击查看解答”，可在渲染层按正文的“解答/步骤/反例/勘误”段落做显式折叠，或人工拆成 statement/solution 字段。不要用不可靠的自动截断丢失勘误。

## 云端与本地的内容同步

本包不包含网络凭据，不自建后台。建议以现有 Git 仓库作为内容源：本地导入并提交 `knowledge`、生成 index 和 subject registry，再让云端站点同步同一提交；也可把 ZIP 上传至云端开发会话，执行相同导入并取回同一提交到本地。**仅上传 ZIP 不等于线上应用已经消费它。**

验收：两端 Week 1–8 顺序相同；62 个习题条目、34 张配套卡；课程原编号可见；Week 2/4/8 勘误可见；其他学科与用户完成状态不变；数学公式和 node 链接可正常渲染/跳转。

## 进度与冲突

本包不写 completion/status/mastery，不把“有答案”视为“用户做过”。已有相同新 ID 的进度自然保留；旧题 ID 到新题 ID 的迁移应按来源+题号人工确认，不能按标题模糊匹配。原始学习进度保持原存储同步方案，本包只解决内容的一致版本。

v1 的 expected_content_sha256=null 表示预期新建。首次导入后重复导入完全相同内容是幂等的；本地已编辑同 ID 时停止。后续更新需以已确认旧内容 hash 填入 expected_content_sha256，再审核差异。
