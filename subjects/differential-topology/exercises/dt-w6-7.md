---
id: "dt-w6-7"
track: "微分拓扑 · Week 1–8"
chapter: "Week 6"
week: 6
tags: ["Week 6", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w6-7.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.7; W6DiffTop2026(1).pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-06", "dt-curves-flow", "dt-ode", "dt-incomplete", "dt-week-06.practice"]
title: "6.7 · Coordinate vector fields commute"
english: "Week 6 · Problem 6.7"
summary: "Week 6 · W6DiffTop2026(1).pdf · 6.7；按原包保留题面、解答及勘误。"
targets: ["dt-curves-flow", "dt-ode", "dt-incomplete"]
source_number: "6.7"
source_kind: "course-exercise"
difficulty: "基础"
order: 607
minutes: 8
---

:::problem
题目：证明 $[\partial_{x^a},\partial_{x^b}]=0$。
:::

:::solution
解答：对任意局部光滑 $f$，
$$[\partial_{x^a},\partial_{x^b}]f=\partial_a\partial_b(f\circ\varphi^{-1})-\partial_b\partial_a(f\circ\varphi^{-1})=0,$$
最后由光滑函数二阶混合偏导可交换。导子由其对所有函数的作用确定，因此括号为零。结论在图域 $U$ 上成立，不声称单张图的坐标向量场都能按该公式全局定义。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.7; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](ref:dt-week-06) · [dt-curves-flow](ref:dt-curves-flow) · [dt-ode](ref:dt-ode) · [dt-incomplete](ref:dt-incomplete)
