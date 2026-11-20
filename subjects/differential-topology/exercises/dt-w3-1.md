---
id: "dt-w3-1"
track: "微分拓扑 · Week 1–8"
chapter: "Week 3"
week: 3
tags: ["Week 3", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w3-1.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.1; W3DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-03", "dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat", "dt-week-03.practice"]
title: "3.1 · 关系生成的等价关系"
english: "Week 3 · Problem 3.1"
summary: "Week 3 · W3DiffTop2026.pdf · 3.1；按原包保留题面、解答及勘误。"
targets: ["dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat"]
source_number: "3.1"
source_kind: "course-exercise"
difficulty: "基础"
order: 302
minutes: 8
---

:::problem
题目勘误：链中的点应属于 $X$ 而非 $R\subset X\times X$；$R''$ 应为所有**包含 $R$**的等价关系之交；链须允许长度零，并检查最后一条边。以下证明这个标准修正版。

定义 $xR'y$ 当且仅当存在 $m\ge0$ 和 $z_0=x,\ldots,z_m=y$，相邻点满足 $(z_i,z_{i+1})\in R$ 或其逆属于 $R$。

请证明这给出包含 $R$ 的最小等价关系，且它等于所有包含 $R$ 的等价关系之交。
:::

:::solution
步骤 1：长度零给自反性；反转链给对称性；拼接两条链给传递性。因此 $R'$ 是等价关系，长度一说明 $R\subset R'$。

步骤 2：若 $E$ 是任何包含 $R$ 的等价关系，其对称性使每条链边属于 $E$，传递性使两个端点属于 $E$，所以 $R'\subset E$。因此 $R'\subset R''$。

步骤 3：因为 $R'$ 本身是交中的一个成员，$R''\subset R'$，从而相等。原文若不要求包含 $R$，交会成为对角关系，一般不等于 $R'$。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.1; W3DiffTop2026.pdf

## 关联

[dt-week-03](ref:dt-week-03) · [dt-quotient](ref:dt-quotient) · [dt-germs-cotangent](ref:dt-germs-cotangent) · [dt-bump-locality](ref:dt-bump-locality) · [dt-hadamard](ref:dt-hadamard) · [dt-flat](ref:dt-flat)
