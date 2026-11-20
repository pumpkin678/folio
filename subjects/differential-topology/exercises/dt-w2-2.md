---
id: "dt-w2-2"
track: "微分拓扑 · Week 1–8"
chapter: "Week 2"
week: 2
tags: ["Week 2", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w2-2.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.2; W2DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-02", "dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective", "dt-week-02.practice"]
title: "2.2 · Atlas 生成拓扑"
english: "Week 2 · Problem 2.2"
summary: "Week 2 · W2DiffTop2026.pdf · 2.2；按原包保留题面、解答及勘误。"
targets: ["dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective"]
source_number: "2.2"
source_kind: "course-exercise"
difficulty: "基础"
order: 202
minutes: 8
---

:::problem
题目：由集合上的 atlas 构造使图域开、坐标图为同胚的拓扑。
:::

:::solution
步骤 1：定义 $O\subset X$ 为开，当且仅当每个 $a$ 都有 $\varphi_a(O\cap U_a)$ 在 $V_a$ 中开。原像与并、交的相容性立即给出空集、全体、任意并及有限交公理。

步骤 2：对每个 $a$，$\varphi_b(U_a\cap U_b)$ 开是 atlas 假设，所以 $U_a$ 开。

步骤 3：若 $W\subset V_a$ 开，令 $O=\varphi_a^{-1}(W)$。在 $b$ 图中，其像是过渡同胚将 $W\cap\varphi_a(U_a\cap U_b)$ 映出的开集，故 $O$ 在 $X$ 中开。这证明 $\varphi_a$ 连续。

步骤 4：若 $O\subset U_a$ 在子空间中开，由 $U_a$ 开知 $O$ 在 $X$ 中也开，定义给出 $\varphi_a(O)$ 开，故逆映射连续。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.2; W2DiffTop2026.pdf

## 关联

[dt-week-02](ref:dt-week-02) · [dt-atlas](ref:dt-atlas) · [dt-compatibility](ref:dt-compatibility) · [dt-atlas-topology](ref:dt-atlas-topology) · [dt-exotic-coordinate](ref:dt-exotic-coordinate) · [dt-projective](ref:dt-projective)
