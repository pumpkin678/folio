---
id: "dt-w6-2"
track: "微分拓扑 · Week 1–8"
chapter: "Week 6"
week: 6
tags: ["Week 6", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w6-2.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.2; W6DiffTop2026(1).pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-06", "dt-curves-flow", "dt-ode", "dt-incomplete", "dt-week-06.practice"]
title: "6.2 · Smooth functional calculus"
english: "Week 6 · Problem 6.2"
summary: "Week 6 · W6DiffTop2026(1).pdf · 6.2；按原包保留题面、解答及勘误。"
targets: ["dt-curves-flow", "dt-ode", "dt-incomplete"]
source_number: "6.2"
source_kind: "course-exercise"
difficulty: "基础"
order: 602
minutes: 8
---

:::problem
题目：$f_i\in C^\infty(M)$、$\Phi:\mathbb R^n\to\mathbb R$ 光滑，证明 $\Phi(f_1,\ldots,f_n)$ 光滑。
:::

:::solution
解答：由 6.1，$F=(f_1,\ldots,f_n):M\to\mathbb R^n$ 光滑。$\Phi\circ F$ 为光滑映射复合，因此光滑。直接坐标验证为 $\Phi\circ(f_1\circ\varphi^{-1},\ldots,f_n\circ\varphi^{-1})$，由多变量链式法则光滑。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.2; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](ref:dt-week-06) · [dt-curves-flow](ref:dt-curves-flow) · [dt-ode](ref:dt-ode) · [dt-incomplete](ref:dt-incomplete)
