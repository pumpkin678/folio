# Folio · 数学手记

一个以 subject 为归属的数学学习网站。包含 5 个学科，支持材料、学习路线、习题和错题勘误。Markdown 是数学内容的唯一来源，网页根据结构生成不同的阅读体验；具体条目数量由构建结果统计。

## 打开 demo

在 Mac 上，可以直接双击项目目录里的 **启动网站.command**。它会启动本地预览并自动打开浏览器；请保持启动它的终端窗口打开，关闭窗口或按 Control+C 会停止服务。如果已经在运行，再次双击只会打开现有页面。

停止时可以直接双击同目录的 **停止网站.command**，也可以在运行服务的终端里按 **Control+C**。只关闭浏览器标签页不会停止服务；下次需要使用时，再双击启动文件即可。

构建好的 `dist/index.html` 可以直接在浏览器打开；页面、公式与字体均使用本地资源，无需联网。也可以通过预览服务浏览。

开发环境需要 Node.js 22 或更高版本：

```sh
npm ci
npm run dev
```

打开终端显示的 `http://127.0.0.1:4173`。源文件变化后自动重新构建，刷新页面即可看到更新。

```sh
npm run check   # 检查结构、永久 ID、引用、前置依赖环和 LaTeX
npm run build   # 生成 dist/
```

## 体验路径

1. 微分拓扑首页：打开 Week 1–8 学习总览，按周选择知识主线和配套题组。
2. 知识材料：筛选 def / thm / eg；搜索“正则值”或 `regular value`。
3. Week 6 局部 ODE 定理：展开证明；点击“对照 Markdown”查看同源内容的两种表现。
4. 学习路线：按 Week 1–8 阅读定义、定理和例子；点击勾选按钮记录已读材料。
5. 刷题地图：按周查看原题编号、完整解答和勘误，并保存自评。
6. 切换到复几何：从“复流形”中的链接跨学科查看“光滑流形与图册”。
7. 我的学习记录：导出或导入 JSON，备份和迁移进度。

快捷键：`⌘K` 或 `Ctrl+K` 搜索，`Esc` 关闭搜索。

## 内容结构

```text
subjects/
  differential-topology/
    subject.yaml
    materials/*.md
    roadmaps/*.md
    exercises/*.md
    mistakes/*.md
  algebra/
  operad/
  complex-geometry/
  symplectic-geometry/
web/
  index.html
  assets/app.js
  assets/style.css
scripts/
  build.mjs
  serve.mjs
```

所属 subject 从文件目录推导；不要在不同目录复制同一份材料。每条内容使用全站唯一且稳定的 `id`。其他路线或学科通过 ID 引用。

### 首页重要结论

在每个学科的 `subject.yaml` 中，用 `highlights` 按顺序选择最多三张知识卡：

```yaml
highlights:
  - dt-ode
  - dt-inverse-constant-rank
  - dt-cartan-complex
```

第一条显示为首页顶部的主卡，其余显示为次卡。只选一条时主卡占满宽度；`highlights: []` 隐藏重点区域。未填写时沿用原来的 `featured`，兼容已有学科配置。

标题、摘要、公式和完整陈述都来自原知识卡的 Markdown。主卡直接展示较短的完整 `statement` / `example`；较长陈述和次卡的陈述通过「展开」阅读，不截断数学条件。入口链接回原材料，已读标记与材料库、学习路线共用。首页下方的精选材料会排除已置顶条目。

新增个人结论时，先在当前学科的 `materials/` 下建立知识卡，再将其稳定 ID 加到 `highlights`。构建器检查重点数量、重复 ID、引用是否存在，以及是否属于当前学科的知识材料。修改顺序、替换 ID 或移除条目后重新构建即可更新首页。

### 材料

```md
---
id: dt-example-theorem
type: thm
title: 定理名称
english: Theorem name
summary: 一句话概述
requires: [dt-rank-embedding]
tags: [子流形]
order: 9
minutes: 5
---

:::statement
定理的条件与结论，使用 $...$ 或 $$...$$ 写公式。
:::

:::proof
证明内容。
:::
```

材料 `type` 为 `def`、`thm` 或 `eg`。可选字段还有 `aliases`（检索别名）、`formula`（概览中的公式）和 `related`（关联内容的稳定 ID）。前置依赖、关联知识和反向引用用于详情页跳转。支持 `statement`、`intuition`、`proof`、`remark`、`example`、`goal`、`problem`、`hint`、`solution` 语义块。

当前 demo 使用一个有限的、逐行识别的语义块解析器，不支持语义块互相嵌套。每个 `:::` 结束标记独占一行；块内支持普通 Markdown 与公式。公式宏内置 `\R`、`\C`、`\Z`。新增解析能力时应在构建层实现，并为网页定义相应的组件表现。

### Roadmap

在 `roadmaps/*.md` 中用 Markdown 写目标、章节和串讲。通过 frontmatter 的 `purpose` 区分用途：

- `learn`：系统学习路线，按概念依赖组织知识；网页默认展示知识速览，可切换展开阅读。
- `review`：专题复习，回顾条件、反例与易混点；与系统学习共用「学习路线」入口，分开浏览。
- `practice`：刷题地图，单独进入「刷题地图」；无日期的主题题组与带 `study_date` 的每日题组分别筛选。

未填写 `purpose` 的旧路线默认按 `learn` 处理。系统学习与专题复习通过知识卡和复盘要点组织内容；习题嵌入放入独立的 `practice` 路线。通过 `related` 和 `ref:ID` 互相链接，同一知识卡、习题和个人记录始终只保留一份。

学习路线通过独占一行的引用嵌入已有知识卡：

```md
## 本节目标

先理解定义，再应用到例子。

::material{id="dt-inverse-constant-rank"}
```

刷题地图使用 `purpose: practice`，正文通过 `::exercise{id="dt-w4-2"}` 引用题目，知识工具用普通 `ref:ID` 链接按需查阅。构建器检查用途是否合法、刷题地图是否包含习题，以及学习/复习路线是否混入习题嵌入。

阅读进度按知识卡已读状态计算；刷题地图按题目自评计算；包含勘误的复习地图按「已订正 / 已掌握」计算。没有可计数节点的资料索引不显示虚假的 0/0 进度。已有路线 ID 和个人学习记录保持兼容。

### Exercise

习题元数据中设置 `targets: [材料ID]`，正文包含一个 `:::problem`、若干个 `:::hint` 和一个 `:::solution` 块。

普通正文跨条目链接写成 `[光滑流形与图册](ref:dt-atlas)`。构建器会检查 ID 并生成页面链接，也会生成反向引用。

### 内容与展示

Markdown 记录数学内容和语义，不记录卡片颜色、栏宽与按钮位置。`web/assets/app.js` 负责材料详情、路线嵌入、检索摘要等视图；`style.css` 负责 UI。构建后的 HTML 不需要手动编辑。

### 错题集与勘误

每个 subject 都有「错题集」入口，分为三个视图：

- **已记录误区**：来源明确记录为发生过的错误认识。
- **复习提醒**：建议复习的薄弱环节，不记作已经犯过的错误。
- **待复做题**：习题自评为「还需重做」的题目；完成自评后移出这个列表。

在 `subjects/<subject>/mistakes/*.md` 中保存一条勘误：

```md
---
id: CA-M001
title: 不能把一般 A[x] 当作 PID
summary: 一句话说明应当修正的认识
kind: observed
related_questions: [CA-Q002]
targets: [CA-K002]
study_date: 2026-11-11
---

:::original
原来的想法。
:::

:::correction
正确的条件与结论。
:::

:::counterexample
反例或检验方法。
:::

:::reviewtask
闭卷复习任务。
:::
```

`kind` 为 `observed` 或 `suggested`。`related_questions` 指向原题，`targets` 指向知识材料。`correction`、`reviewtask` 和至少一个关联原题是必需项。全站 ID 支持大小写，引用区分大小写。

路线可通过 `::mistake{id="CA-M001"}` 嵌入勘误。订正状态（待复习、已订正、已掌握）和个人复盘笔记保存在浏览器，不修改 Markdown；它们与原题的完成状态分别记录，并随学习记录一起导入、导出。旧版学习记录文件仍可导入。

### 2026-11-11 交换代数题卡包

用户提供的 `folio-commutative-algebra-pack.zip` 已导入代数学：

- `CA-Q001`、`CA-Q002`：两道题，含分层提示、完整证明、另一种证明及自测。
- `CA-K001`、`CA-K002`：多项式单位判别、幂零根基与 Jacobson 根基。
- `CA-M001`、`CA-M002`：原包标注的两条已发生误区。
- `CA-M003` 至 `CA-M006`：原包标注的四条复习提醒。
- `ca.daily-2026-11-11`：将以上内容串联的按日期题组路线。

原件保存在 `imports/2026-11-11-commutative-algebra/`，导入清单记录原 ZIP 的 SHA-256。该目录是原始资料存档；实际网页内容来自 subject 下转换后的 Markdown。保留原编号和 `source_verified: false`，未把未核对的书目题号标为已核实。导入的「待独立复做」作为初始待重做状态，后续以个人自评为准。

背景核对参考：[Stacks Project：Jacobson 根基](https://stacks.math.columbia.edu/tag/0AMD)、[素理想与幂零元](https://stacks.math.columbia.edu/tag/00E0)。这些参考不代表已核实原书题号。

### 2026-11-11 辛几何 Unit 01

用户提供的 `Folio_Symplectic_Geometry_Unit01_2026-11-11.zip` 已导入独立的「辛几何」学科：

- 保留 `SPG-DEF-001` 至 `013`、`SPG-THM-001` 至 `007`、`SPG-EX-001` 至 `006`，共 26 张知识卡。
- `SPG-HW-001`、`SPG-HW-005`、`SPG-HW-007` 保留题面、原有提示、完整解答和学习记录，初始状态为「已完成（导入记录）」。原包没有区分独立完成或借助提示，后续以个人自评为准。
- `SPG-ROUTE-001` 串联知识卡与习题，`SPG-LOG-2026-11-11` 保存当天学习记录。一般易混点留在学习记录中，未新增个人错题。
- Darboux 定理和余切丛零截面保留预习标记；Unit 02 与后续单元保持计划状态。网页阅读进度单独记录。

原件保存在 `imports/2026-11-11-symplectic-geometry/`，导入清单记录 ZIP 的 SHA-256、字段映射和稳定 ID。通用交换 JSON 已转换为现有 Markdown 与语义块结构，网页继续从 `subjects/` 构建。书目信息和习题编号按原包保留，未标为已独立核实。新增的 `completed` 初始状态参与已完成统计和学习记录导入、导出，同时兼容旧版记录。

### 2026-11-12 交换代数：Content、Primitive 与 McCoy

用户提供的 `Folio-CA-Primitive-Content-McCoy-2026-11-12.zip` 已增量加入「代数学」：

- `CA-K003` 至 `CA-K006`：系数理想、primitive、素/极大理想商环判别、McCoy 定理与 content 乘法。
- `CA-Q003`、`CA-Q004`、`CA-Q005`：三道题，按语义块保留题面、提示、证明、思路评估和自测。前两题初始为待独立复做，拓展题初始为未开始；个人记录优先。
- `CA-E001` 至 `CA-E004`：四个例子，保留原编号并列入知识材料。
- `CA-M007`：实际提出的素理想归约探索路线；`CA-M008` 至 `CA-M010`：三条预防性复习提醒。已正确使用的证明思路保留为学习记录。
- `ca.daily-2026-11-12`：当天完整题组；原索引 ID `CA-M-ADD-20261112` 保留为复盘路线，并关联四条可分别复习的勘误/提醒。

原件保存在 `imports/2026-11-12-commutative-algebra/`。导入前已验证原清单中的全部 47 个文件哈希；导入清单记录 ZIP 哈希、字段映射和展示层公式定界符修正。仅转换增量条目，旧卡片和浏览器学习记录保持原样；书目精确题号继续标为未核对。

### 2026-11-13 交换代数：Boolean rings 与 nilradical

用户提供的 `folio-boolean-nilradical-2026-11-13.zip` 已增量加入「代数学」：

- `CA-Q20261113-01` 至 `03`：三道题，保留完整题面、分层提示、严格证明、自测与可选结构延伸；初始状态为待独立复做，个人自评优先。
- `CA-K20261113-01` 至 `03`、`CA-E20261113-01` 至 `02`：三张定义 / 定理卡和两个例子，覆盖 Boolean ring、幂等生成元、nilradical 与唯一素理想。
- `CA-M20261113-01` 至 `06`：按原包保留四条「讨论中出现」的疑惑和两条「建议预防」的提醒；站内补充闭卷复习任务，不推断已完成或已掌握。
- `ca.boolean-nilradical-path`、`ca.daily-2026-11-13`：新增知识主线与日期题组；原索引 `CA-M-20261113` 转为专题复盘，引用上述六条记录。

原 ZIP 与全部原文件存档于 `imports/2026-11-13-boolean-nilradical/`；已核对清单中的 17 个文件哈希及 Markdown / JSON 正文一致性。`import-manifest.json` 记录条目映射和适配说明。此前的材料、题目、学习路线顺序、首页重点与浏览器学习记录保持原样；题号、页码继续按原包标为未独立核实。

### 2026-11-12 微分拓扑 Week 1–8 全量重构

按用户要求，微分拓扑以 `Folio-Differential-Topology-W1-W8-2026-11-12.zip` 为新内容源，移除原有全部条目：

- 保留原包 104 个稳定 ID：34 张知识卡（16 定义、9 定理、9 例子）、62 个题目及补充条目、8 条周学习路线。
- 新增八周学习总览、8 张周刷题地图，以及原题勘误专题；周路线按原包 `reading_order` 组织。
- 原编号、未编号问题、Optional 和 Example / Suggestion 补充展开分别标明；题面与完整解答分开，反例、修正版和符号检查不被截断。
- 来源 verified/reviewed 标记沿用原包并注明来源，不转为学习完成状态；现有浏览器记录不被改写，也不猜测旧题的新 ID。

原包逐字节存档于 `imports/2026-11-12-differential-topology-w1-w8/`；已核对 104 个内容哈希。`import-manifest.json` 记录替换明细、条目映射和转换说明。原题勘误属于课程资料订正，不记作个人已犯错误。

### 2026-11-14 代数学：有限生成模、提升与分裂

`folio_algebra_part2_part4_2026-11-14.zip` 已增量加入代数学：

- 两道题：`alg.modules-fg-extension` 与 `alg.modules-free-quotient-kernel`，保留完整证明、非分裂反例、filtration 推广、Part 4 的两种证明、对照表及复习检查。
- 两张定理卡：`alg.modules-extension-theorem` 与 `alg.modules-free-quotient-splitting`，通过稳定 ID 链接完整题卡。
- 新增学习路线 `alg.modules-exact-sequences` 和日期题组 `alg.daily-2026-11-14`，已接入代数学课程索引。

原文未提供完成状态或确定书目题号；新题初始为未开始，不新增个人错题记录。原 ZIP 和两份 Markdown 存档于 `imports/2026-11-14-algebra-modules/`，哈希与条目映射记入 `import-manifest.json`。转换副本中将不支持的 `\centernot\Rightarrow` 改为等价的 `\nRightarrow`，存档原文保持原样。旧内容、首页重点和个人学习记录保持兼容。

### 2026-11-17 代数学：模与张量积

`Folio_AM_Ch2_Modules_Exercises.zip` 已增量加入代数学：

- 四道完整题卡：平坦模与直和、多项式模、Nakayama 满射提升、标量扩张的分裂，保留证明、自然性检查、反例与复习要点。
- 四张对应定理卡，完整证明链接回题卡；原包索引与速查表纳入学习路线 `alg.modules-tensor-path`。
- 日期题组 `alg.daily-2026-11-17` 按原包建议的 01 → 02 → 04 → 03 顺序编排，已接入代数学课程索引。

原 ZIP 与五份 Markdown 逐字节存档于 `imports/2026-11-17-am-ch2-modules/`，哈希和稳定 ID 映射见 `import-manifest.json`。原包的 A–M Chapter 2 Exercise 10 / 13 与页码保持未独立核实；没有完成记录，四题初始为未开始。通用易错提醒随题解保留，不推断为个人错题。转换副本将 `CD` 交换图改为 KaTeX 支持的 `array`，将 Obsidian callout 转为站内提示或普通提醒，并修正 Jacobian radical 为 Jacobson radical；存档原文不变。

## 同步到自己的 GitHub

当前 demo **尚未连接个人 GitHub 仓库**。附带的 `.github/workflows/pages.yml` 可在推送到 `main` 时检查、构建和发布；Pull Request 只检查构建。

1. 在 GitHub 创建仓库，将本目录作为仓库根目录上传。若希望使用 GitHub Free 的 Pages，可使用公开仓库；仓库可见性与网页访问权限需要分别考虑。
2. 将默认分支设为 `main`。
3. 在仓库 **Settings → Pages → Build and deployment → Source** 中选择 **GitHub Actions**。
4. 推送 `main` 或手动运行工作流。

依赖版本由 `package-lock.json` 固定。发布仅使用 `dist/`；所有资源采用相对路径，支持 GitHub 项目站点子路径。Sites 私有预览使用 `.openai/hosting.json`，GitHub Pages 不使用它。

## 记录与演示范围

- 阅读状态与习题自评保存在当前浏览器的 localStorage，互相独立；不自动跨设备同步。
- 可以导入/导出 `folio-learning-progress.json`。导入会替换当前浏览器记录，且会过滤不存在的材料和习题 ID。
- 证明题采用参考解答与自评，没有自动判分。
- 示例内容用于演示学习流程。微分拓扑默认无边界流形；Operad 样例明确使用正元数、非对称的约定。
- 当前采用轻量静态构建器验证内容模型，不依赖 Astro。未来迁移框架时可以保留 subject 下的 Markdown、稳定 ID 和引用。

内容参考入口：

- [MIT: Forms on Manifolds, §4.1](https://math.mit.edu/classes/18.952/2016SP/docs/chapter4.pdf)
- [Geoffroy Horel: Operads, modules and higher Hochschild cohomology, Appendix B](https://math.mit.edu/~hrm/thesis/horel-thesis.pdf)
- [GitHub Pages 官方工作流](https://github.com/actions/starter-workflows/blob/main/pages/static.yml)

本项目使用 MIT 许可的 Marked、YAML 和 KaTeX。构建时会复制 KaTeX 字体和样式供离线使用。
