---
id: "dt-w2-5"
track: "微分拓扑 · Week 1–8"
chapter: "Week 2"
week: 2
tags: ["Week 2", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w2-5.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.5; W2DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-02", "dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective", "dt-week-02.practice"]
title: "2.5 · 实射影空间的 atlas"
english: "Week 2 · Problem 2.5"
summary: "Week 2 · W2DiffTop2026.pdf · 2.5；按原包保留题面、解答及勘误。"
targets: ["dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective"]
source_number: "2.5"
source_kind: "course-exercise"
difficulty: "基础"
order: 205
minutes: 8
---

:::problem
题目：为 $\mathbb R^{n+1}$ 中过原点的直线集合构造 $n$ 维 atlas。
:::

:::solution
解答：令 $U_i$ 为第 $i$ 坐标非零的直线。对非零代表 $x$ 定义 $\varphi_i([x])=(x_j/x_i)_{j\ne i}$。缩放不改变比值，所以良定义；逆映射把 $u\in\mathbb R^n$ 送到第 $i$ 坐标为 1、其余为 $u$ 的向量所张成的直线，因此是双射。图域覆盖。在 $i$ 图里写 $u_i=1$，与 $j$ 图的交集是 $u_j\ne0$，过渡的第 $\ell\ne j$ 个分量为 $u_\ell/u_j$。它们及其反向公式均为分母不为零的有理函数，所以光滑。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.5; W2DiffTop2026.pdf

## 关联

[dt-week-02](ref:dt-week-02) · [dt-atlas](ref:dt-atlas) · [dt-compatibility](ref:dt-compatibility) · [dt-atlas-topology](ref:dt-atlas-topology) · [dt-exotic-coordinate](ref:dt-exotic-coordinate) · [dt-projective](ref:dt-projective)
