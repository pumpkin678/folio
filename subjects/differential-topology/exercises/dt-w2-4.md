---
id: "dt-w2-4"
track: "微分拓扑 · Week 1–8"
chapter: "Week 2"
week: 2
tags: ["Week 2", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w2-4.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.4; W2DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-02", "dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective", "dt-week-02.practice"]
title: "2.4 · 圆周商 R/Z 的 atlas"
english: "Week 2 · Problem 2.4"
summary: "Week 2 · W2DiffTop2026.pdf · 2.4；按原包保留题面、解答及勘误。"
targets: ["dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective"]
source_number: "2.4"
source_kind: "course-exercise"
difficulty: "基础"
order: 204
minutes: 8
---

:::problem
题目：在集合 $\mathbb R/\mathbb Z$ 上构造一维 atlas。
:::

:::solution
解答：设 $q:\mathbb R\to\mathbb R/\mathbb Z$。对每个 $a\in\mathbb R$ 取 $I_a=(a-1/3,a+1/3)$，其长度小于 1，故 $q|_{I_a}$ 单射。令 $U_a=q(I_a)$，$\varphi_a=(q|_{I_a})^{-1}:U_a\to I_a$。图域覆盖。交叠在 $a$ 坐标中为 $\bigcup_{k\in\mathbb Z}(I_a\cap(I_b+k))$，是开集；在每个这样的区间，过渡是 $t\mapsto t-k$，其中 $k$ 唯一。故过渡局部为平移，光滑且逆光滑。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.4; W2DiffTop2026.pdf

## 关联

[dt-week-02](ref:dt-week-02) · [dt-atlas](ref:dt-atlas) · [dt-compatibility](ref:dt-compatibility) · [dt-atlas-topology](ref:dt-atlas-topology) · [dt-exotic-coordinate](ref:dt-exotic-coordinate) · [dt-projective](ref:dt-projective)
