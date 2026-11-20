# Folio 导入包 · Symplectic Geometry

## 这是什么

这是 **新增 Folio subject** 用的独立 ZIP 内容包（subject slug：`symplectic-geometry`）。
内容符合“Markdown 为源文件 + JSON 索引 + 稳定 ID + 双向知识关联 + 单独错题记录”的整理约定。

**注意**：我没有直接读取或修改你当前 Folio 网站的源代码；`site-data.json` 是可供映射的**通用交换格式**，尚未确认与你当前网站的运行时内部 schema 完全一致。不能承诺“上传 ZIP 即自动部署”。

## 包含内容

- `subject.json`：新 subject 的基本信息、来源、路线与进度。
- `site-data.json`：所有卡片的结构化数据，`schema=folio.math.subject.v1`，含 `prerequisites`、`related`、`exercises` 和自动计算的 `backlinks`。
- `subjects/symplectic-geometry/definitions/`：13 张定义卡。
- `subjects/symplectic-geometry/theorems/`：7 张定理卡（含证明/证明思路）。
- `subjects/symplectic-geometry/examples/`：6 张可计算例子。
- `subjects/symplectic-geometry/exercises/`：3 道 Homework 1 原书编号习题，带简短题面概述、hint、完整解答、完成状态。
- `subjects/symplectic-geometry/roadmap.md`：概念先修关系与后续 Unit 建议。
- `subjects/symplectic-geometry/study-logs/2026-11-11.md`：今日学习记录，标记三道已完成与无错题。
- `all-in-one.md`：可直接浏览或复制到笔记系统的汇总版。
- `templates/`：未来新增概念卡与习题的模板。

## 与现有 Folio 对接（建议步骤）

1. 解压；将 `subjects/symplectic-geometry/` 复制到你网站的 subjects 内容目录。
2. 在你网站的 subject 注册表加入 `subject.json` 的 `slug/title/category` 等字段，并配置图标或页面路由。
3. 运行网站的内容构建/导入脚本。如果已有 JSON 题库机制，用 `site-data.json.items` 映射当前模型（`type: def | thm | ex | hw`）。
4. 知识卡以 `id` 作稳定主键；`prerequisites` / `related` / `exercises` 与 `backlinks` 用 ID 解析成双向跳转。
5. 习题状态读 `status: completed`，当天日志 `mistakes: []` 保持为空；不要自动生成“错题”。
6. 开启 MathJax/KaTeX；数学公式使用 `$...$` 与 `$$...$$`，支持 Markdown 渲染与表格。

## 数学和版权说明

- 原书：[Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。
- 原书 Problem 7 的条件：Lagrangian ⟺ isotropic 且 coisotropic ⟺ 自辛正交。
- **只改写题目概述**；没有重印原书整页。证明、注解、例子为独立编写。
- 书的后续章节（如 cotangent bundles）这里只预习概念，**没有伪称已经完成**。

## 数据模型简表

每条 `site-data.json.items[]`：

```json
{
  "id": "SPG-DEF-009",
  "type": "def",
  "title": "拉格朗日子空间",
  "path": "subjects/symplectic-geometry/definitions/SPG-DEF-009.md",
  "prerequisites": ["SPG-DEF-007", "SPG-DEF-008", "SPG-THM-002"],
  "related": ["SPG-THM-004", "SPG-DEF-013", "SPG-EX-004"],
  "exercises": ["SPG-HW-007"],
  "content": "... Markdown + LaTeX ..."
}
```

更改显示顺序或分组，可基于 `type`、`subject_id` 和 `units` 实现。
