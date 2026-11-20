# 微分拓扑 · Week 1–8 Folio 重构包

根据 Yohsuke Imagi, Differential Topology, Autumn 2026 的八份原始作业重建。包含 **62 个题目/补充推导条目、34 张定义/定理/例子卡、8 个周 roadmap 节点**，共 104 个稳定 ID 节点。原编号、未编号问题、Optional、Example/Suggestion 已区分；每个习题条目都有证明或反例及修正命题。课程 PDF 中的错误不静默改写，见 `docs/ERRATA.md`。

## 文件入口

- `all-in-one.md`：完整阅读版，数学使用 `$...$` 与 `$$...$$`。
- `weeks/week-01.md` 至 `week-08.md`：分周阅读。
- `notes/*.md` + 同名 `.json`：单条知识与元数据，兼容既有 Folio v1 starter。
- `manifest.json`、`changes.json`：带内容 SHA-256 的标准导入协议。
- `subject.json` / `roadmap.json`：微分拓扑的新主线与 active node 清单。
- `site-data.json`：兼容之前 question/concept 数据包的完整正文入口。
- `public/folio/index.json`：**仅本 subject** 的预构建 read model；不可整文件覆盖已有多学科 index。
- `sources.json`、`coverage.json`：原文件定位及逐周题号覆盖。
- `tools/install_subject.py`：保留其他学科与旧条目的本地导入器。
- `docs/INTEGRATION.md`：云端、本地与 UI 接入说明。

## 本地使用

解压后在本包目录运行（需要 Python 3.10+）：

```bash
python3 tools/install_subject.py --repo /你的/Folio项目路径
python3 tools/install_subject.py --repo /你的/Folio项目路径 --apply
```

第一条仅预检；第二条导入知识、重建全量 index，并更新 subject registry。重复导入同内容为 unchanged；若同 ID 已被编辑会报告冲突，不覆盖。已有同 subject 的旧条目保留为 legacy；新界面使用 active_node_ids 显示重构内容。

如果现有 Folio 尚未实现 v1 read model，导入后还须按 `docs/INTEGRATION.md` 接入 UI；文件写入本身不会改写未知的应用界面。旧题到新题的进度映射需核对 ID，不能按相似标题猜测。

## 云端使用

把这个 ZIP 交给负责云端 Folio 的开发会话，附上 `docs/CLOUD_IMPORT_PROMPT.md`。该包提供数据和接入适配器，**没有访问或修改当前在线站点，也没有自动部署**。在已接入相同 schema 的云端与本地使用相同提交/数据版本，两端将显示相同内容。答题状态、笔记与错题记录属于用户进度，需继续使用原有同步机制，本包不重置它们。

## 数学约定

默认流形有限维、Hausdorff、第二可数、无边界；光滑为 C∞。Week 8 的 A 为交换含幺实代数，外幂取 A-模外幂。题面以忠实中文重述呈现，不把新增配套知识伪称课程原题。review_status=reviewed 表示已作本次数学核查，**不代表用户已掌握，也不是教师认证**。
