---
id: "dt-w3-6"
track: "微分拓扑 · Week 1–8"
chapter: "Week 3"
week: 3
tags: ["Week 3", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w3-6.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.6; W3DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-03", "dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat", "dt-week-03.practice"]
title: "3.6 · Maximal atlas 的构造"
english: "Week 3 · Problem 3.6"
summary: "Week 3 · W3DiffTop2026.pdf · 3.6；按原包保留题面、解答及勘误。"
targets: ["dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat"]
source_number: "3.6"
source_kind: "course-exercise"
difficulty: "基础"
order: 307
minutes: 8
---

:::problem
题目：证明所有包含 atlas $A$ 的 atlas 之并 $\bar A$ 仍是 atlas。
:::

:::solution
步骤 1：它包含 $A$，故覆盖 $X$，每个成员本来就是图。

步骤 2：取 $\varphi\in B\supset A$ 与 $\psi\in C\supset A$，以及图域交点 $p$。在 $A$ 中取包含 $p$ 的图 $\theta$。在三图共同域，
$$\psi\circ\varphi^{-1}=(\psi\circ\theta^{-1})\circ(\theta\circ\varphi^{-1}).$$
两个因子分别由 $C,B$ 的相容性光滑。这样的局部域覆盖整个交叠域，光滑性是局部性质，故整个过渡光滑；逆方向同理。

步骤 3：所以 $\bar A$ 是 atlas，由 3.5 极大。它恰包含全部与 $A$ 相容的图。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.6; W3DiffTop2026.pdf

## 关联

[dt-week-03](ref:dt-week-03) · [dt-quotient](ref:dt-quotient) · [dt-germs-cotangent](ref:dt-germs-cotangent) · [dt-bump-locality](ref:dt-bump-locality) · [dt-hadamard](ref:dt-hadamard) · [dt-flat](ref:dt-flat)
