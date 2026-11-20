# Folio 交换代数增量知识包 · 2026-11-13

这是 **additive/增量** 知识包，专门用于把本次会话习题归档到既有 Folio 的「交换代数」subject。**它不是完整的 Folio 项目源码，也不是现有站点的全量数据库备份。**

## 包内容

- `problems/`：3 张独立题卡（Boolean ring 的 (i)–(ii)、唯一 prime ideal 等价刻画、Boolean ring 的 (iii)）。
- `concepts/`：3 张定理／定义卡，双向引用题卡。
- `examples/`：2 个可计算例子，含反例和商环计算。
- `mistakes/`：6 个易错点，其中 4 个明确标记为“讨论中出现”，2 个为“建议预防”。
- `all-in-one.md`：完整阅读合订本。
- `site-data.json` / `delta-site-data.json`：只含此次新增条目的 JSON；两份内容相同，以兼容不同导入入口。
- `changes.json`：纯新增变更单；`manifest.json`：条目列表与 sha256 文件校验；`subject.json`：建议 subject 路线关联（不覆盖已有 roadmap）。
- `scripts/merge_site_data.py`：本地增量合并，保留其它 subject 与已有状态、记录；`docs/CLOUD_IMPORT_PROMPT.md`：ChatGPT Sites 的合并指令。

## 安全导入（本地 Folio）

先解压，确保 Python 3.9+：

```bash
python3 scripts/merge_site_data.py --existing /你的/Folio/site-data.json --out ./site-data.merged.json
```

输出文件为合并版本。请**先备份现有数据并检查 diff**，再由你自己的站点接入方式替换/加载合并数据。此工具只修改你指定的 `--out` 文件，不会自动覆盖 `--existing`。

算法按稳定 ID 追加新问题、概念、例子与错题卡；若同一 ID 已存在且正文相同则跳过；若同一 ID 但正文不同则报冲突，不覆盖。原有 `status`、历史进度、笔记字段、其它题目/概念均保留。对旧版单对象 `mistake_index`，新易错点附加在它的正文末尾，且可重复运行而不重复追加。

**注意**：`site-data.json` 是增量 scoped data，不要直接当做站点的全部 `site-data.json` 覆盖旧文件！若旧项目支持独立 MD 卡片读取，请将 `problems/`、`concepts/`、`examples/`、`mistakes/` 中的新文件复制到相应内容目录；若项目只读取 JSON 的 `body` 字段，合并 JSON 即可。

## 云端 ChatGPT Sites

将整个 ZIP 添加到 Folio 站点工作流，并使用 `docs/CLOUD_IMPORT_PROMPT.md` 的合并指令。由于具体网站源码和后台写入接口不在本包里，这只是一个可导入的内容包，**不表示云端已自动更新**。

## ID / 数学约定

- 新 ID 用日期前缀 `CA-Q20261113-*`，避免与旧的 `CA-Q001 / CA-Q002` 或近期新增编号撞号。
- 公式使用 Markdown 的 `$...$` 与 `$$...$$`，在站点使用 KaTeX/MathJax 渲染。
- 所有 ring 均按含单位元的 commutative ring 约定；prime ideal 均为 proper ideal。
- Boolean ring 题目 Exercise 11(i)–(iii) 的出处与页码来自本次对话，**没有独立核验**；另一题的书籍题号不明，因此不擅自归为 A–M 某道习题。
