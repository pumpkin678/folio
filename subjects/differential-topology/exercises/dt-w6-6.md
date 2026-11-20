---
id: "dt-w6-6"
track: "微分拓扑 · Week 1–8"
chapter: "Week 6"
week: 6
tags: ["Week 6", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w6-6.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.6; W6DiffTop2026(1).pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-06", "dt-curves-flow", "dt-ode", "dt-incomplete", "dt-week-06.practice"]
title: "6.6 · 同一个坐标函数，不同坐标方向"
english: "Week 6 · Problem 6.6"
summary: "Week 6 · W6DiffTop2026(1).pdf · 6.6；按原包保留题面、解答及勘误。"
targets: ["dt-curves-flow", "dt-ode", "dt-incomplete"]
source_number: "6.6"
source_kind: "course-exercise"
difficulty: "基础"
order: 606
minutes: 8
---

:::problem
题目：给两张全局坐标图使 $x_a=x_b$，但 $\partial_{x_a}\ne\partial_{x_b}$。
:::

:::solution
解答：取 $\varphi_a(x,y)=(x,y)$、$\varphi_b(x,y)=(x,y+x)$。第二张逆为 $(u,v)\mapsto(u,v-u)$，是全局微分同胚。两图的第一坐标均为 $x$。保持 $y_a$ 不变而变化 $x_a$ 得 $\partial_{x_a}=\partial_x$；保持 $y_b=y+x$ 不变则 $dy/dx=-1$，得 $\partial_{x_b}=\partial_x-\partial_y$。例如它们作用于原函数 $y$ 的结果分别为 0 和 $-1$，确实不同。另一方面 $dx_a=dx_b=dx$，因为 differential 只由函数本身决定。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.6; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](ref:dt-week-06) · [dt-curves-flow](ref:dt-curves-flow) · [dt-ode](ref:dt-ode) · [dt-incomplete](ref:dt-incomplete)
