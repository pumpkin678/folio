# Folio · 交换代数题卡包

针对本次讨论的两道题整理：
- `CA-Q001` 多项式环的 units 判别
- `CA-Q002` 证明 `Jac(A[x]) = Nil(A[x])`

## 文件组织

- `problems/`：一题一个 Markdown，YAML frontmatter 存稳定 ID 与关联。
- `concepts/`：可复用的定理和定义；通过 ID 与题目双向关联。
- `mistakes/`：区分真实表达过的误区和建议复习的薄弱点。
- `site-data.json`：包含每篇 Markdown 的 metadata 和 body，可供网站直接导入/写入数据库；不是现有网站的自动同步接口。
- `all-in-one.md`：阅读和 Obsidian 复制用的合辑。

## 建议网站实施

1. 编辑来源固定为 Markdown；为每道题设置 `id`，不要依赖文件名做唯一键。
2. 构建时读入 `site-data.json`，题目详情页根据 `related_questions`、`concept_ids`、`mistake_ids` 生成链接。
3. 数学使用 **remark-math + rehype-katex** 或网站现有的 KaTeX/MathJax 管线，保证行间公式渲染。
4. 用户的个人进度（做题次数、错误记录、最后复习时间）**不写回静态题干**：另存在 `progress` 记录中，使用题目 ID 关联，以免内容更新覆盖进度。
5. 通过 Git 管理 Markdown 原件；网站若无导入接口，需要根据现有 Folio 的源码接一个 importer。此打包文件尚未自动同步到云端网站。

## 可扩展的题目数据字段

`id`, `title`, `track`, `chapter`, `source`, `source_verified`, `status`, `difficulty`, `tags`, `concept_ids`, `related_questions`, `mistake_ids`, `body`。

## 来源说明

当前对话中的 Hint 提及 Exercise 2(i)，但没有核对具体版次与原书题号；因此源字段标记 `source_verified: false`，避免导入网站后误显示为已核实书目。用户本人明确提出的两个误区与仅建议复习的易错点在错题页中已分开标注。
