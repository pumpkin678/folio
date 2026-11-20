---
id: "dt-w2-0"
track: "微分拓扑 · Week 1–8"
chapter: "Week 2"
week: 2
tags: ["Week 2", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w2-0.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.0; W2DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-02", "dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective", "dt-week-02.practice"]
title: "2.0 · 双原点直线"
english: "Week 2 · Problem 2.0"
summary: "Week 2 · W2DiffTop2026.pdf · 2.0；按原包保留题面、解答及勘误。"
targets: ["dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective"]
source_number: "2.0"
source_kind: "course-exercise"
difficulty: "基础"
order: 201
minutes: 8
---

:::problem
题目：构造连通、第二可数、局部欧氏但非 Hausdorff 空间。
:::

:::solution
步骤 1：在 $\mathbb R\times\{a,b\}$ 中把 $(t,a)\sim(t,b)$ 当 $t\ne0$，而两个原点不识别，赋予商拓扑。记商映射 $q$，两个原点为 $0_a,0_b$。

步骤 2：$U_a=X\setminus\{0_b\}$ 和 $U_b=X\setminus\{0_a\}$ 开。把每个点送到其实坐标给出 $U_a,U_b\cong\mathbb R$：对直线上开集，其在商前像中是该支开集和另一支去掉原点的同一开集，因此像开。故这两张图确实为同胚。

步骤 3：每个 $U_a,U_b$ 连通且交集非空，所以它们的并 $X$ 连通。两张图中有理端点区间的像之并给出可数基。

步骤 4：任意 $0_a,0_b$ 的邻域都含充分小的非零实数的像，因此相交，不能分离，故非 Hausdorff。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.0; W2DiffTop2026.pdf

## 关联

[dt-week-02](ref:dt-week-02) · [dt-atlas](ref:dt-atlas) · [dt-compatibility](ref:dt-compatibility) · [dt-atlas-topology](ref:dt-atlas-topology) · [dt-exotic-coordinate](ref:dt-exotic-coordinate) · [dt-projective](ref:dt-projective)
