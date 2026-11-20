---
track: "模与短正合列"
study_date: "2026-11-14"
source_pack: "folio-algebra-part2-part4-2026-11-14"
source_verified: false
source_note: "用户提供的 folio_algebra_part2_part4_2026-11-14.zip，Part 2 / Part 4 笔记；原文未提供确定的书目或题号。"
id: "alg.modules-extension-theorem"
title: "短正合列中有限生成模的扩张"
english: "Finite generation under extensions"
summary: "提升商模的有限生成元，再用核中的余项补齐中间模的有限生成集。"
source_document: "01-Part2-finitely-generated-extensions.md"
type: "thm"
requires: []
related_questions: ["alg.modules-fg-extension"]
related: ["alg.modules-free-quotient-splitting", "alg.noetherian-ring"]
tags: ["模", "short-exact-sequence", "finite-generation", "extension", "filtration"]
aliases: ["Part 2"]
order: 30
minutes: 6
---

:::statement
## 题目

设 $A$ 为交换环，有短正合列

$$
0\longrightarrow M'\xrightarrow{f}M\xrightarrow{g}M''\longrightarrow 0.
$$

若 $M'$ 与 $M''$ 都是 finitely generated $A$-modules，证明 $M$ 也是 finitely generated。
:::

:::intuition
## 核心动机

这不是简单地把两个直和因子的生成元拼起来，因为短正合列一般**不 split**：

$$
M\not\cong M'\oplus M''\quad\text{(一般不成立)}.
$$

正合性提供的是 $M/\operatorname{im}f\cong M''$。因此思路是：先 lift 商模 $M''$ 的有限个生成元；再用 $M'$ 的生成元处理 lift 之后留在 $\ker g$ 的余项。
:::

:::remark
完整证明、反例与复习检查见 [Part 2 题卡](ref:alg.modules-fg-extension)。
:::
