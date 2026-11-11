# Folio · 数学手记

一个以 subject 为归属的数学学习网站。包含 4 个学科，支持材料、学习路线、习题和错题勘误。Markdown 是数学内容的唯一来源，网页根据结构生成不同的阅读体验；具体条目数量由构建结果统计。

## 打开 demo

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

1. 微分拓扑首页：拖动球面截面高度，观察普通截面和两极。
2. 知识材料：筛选 def / thm / eg；搜索“正则值”或 `regular value`。
3. 正则值定理详情：展开证明；点击“对照 Markdown”查看同源内容的两种表现。
4. 学习路线：查看从局部坐标到正则值的完整路线；点击勾选按钮记录已读材料。
5. 习题训练：逐级展开提示、查看解答并自评。
6. 切换到复几何：从“复流形”中的链接跨学科查看“光滑流形”。
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
web/
  index.html
  assets/app.js
  assets/style.css
scripts/
  build.mjs
  serve.mjs
```

所属 subject 从文件目录推导；不要在不同目录复制同一份材料。每条内容使用全站唯一且稳定的 `id`。其他路线或学科通过 ID 引用。

### 材料

```md
---
id: dt.my-theorem
type: thm
title: 定理名称
english: Theorem name
summary: 一句话概述
requires: [dt.regular-value]
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

材料 `type` 为 `def`、`thm` 或 `eg`。可选字段还有 `aliases`（检索别名）和 `formula`（概览中的公式）。支持 `statement`、`intuition`、`proof`、`remark`、`example`、`goal`、`problem`、`hint`、`solution` 语义块。

当前 demo 使用一个有限的、逐行识别的语义块解析器，不支持语义块互相嵌套。每个 `:::` 结束标记独占一行；块内支持普通 Markdown 与公式。公式宏内置 `\R`、`\C`、`\Z`。新增解析能力时应在构建层实现，并为网页定义相应的组件表现。

### Roadmap

在 `roadmaps/*.md` 中用 Markdown 写目标、章节和串讲，通过独占一行的引用嵌入已有内容：

```md
## 本节目标

先理解定义，再应用到例子。

::material{id="dt.regular-value"}

::exercise{id="dt.circle-exercise"}
```

### Exercise

习题元数据中设置 `targets: [材料ID]`，正文包含一个 `:::problem`、若干个 `:::hint` 和一个 `:::solution` 块。

普通正文跨条目链接写成 `[光滑流形](ref:dt.smooth-manifold)`。构建器会检查 ID 并生成页面链接，也会生成反向引用。

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
- 球面图是说明性投影，不是精确三维渲染；截面半径按真实公式计算。
- 示例内容用于演示学习流程。微分拓扑默认无边界流形；Operad 样例明确使用正元数、非对称的约定。
- 当前采用轻量静态构建器验证内容模型，不依赖 Astro。未来迁移框架时可以保留 subject 下的 Markdown、稳定 ID 和引用。

内容参考入口：

- [MIT: Forms on Manifolds, §4.1](https://math.mit.edu/classes/18.952/2016SP/docs/chapter4.pdf)
- [Geoffroy Horel: Operads, modules and higher Hochschild cohomology, Appendix B](https://math.mit.edu/~hrm/thesis/horel-thesis.pdf)
- [GitHub Pages 官方工作流](https://github.com/actions/starter-workflows/blob/main/pages/static.yml)

本项目使用 MIT 许可的 Marked、YAML 和 KaTeX。构建时会复制 KaTeX 字体和样式供离线使用。
