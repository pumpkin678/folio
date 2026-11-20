---
id: "dt-w6-5"
track: "微分拓扑 · Week 1–8"
chapter: "Week 6"
week: 6
tags: ["Week 6", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w6-5.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.5; W6DiffTop2026(1).pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-06", "dt-curves-flow", "dt-ode", "dt-incomplete", "dt-week-06.practice"]
title: "6.5 · 坐标向量场的变换律"
english: "Week 6 · Problem 6.5"
summary: "Week 6 · W6DiffTop2026(1).pdf · 6.5；按原包保留题面、解答及勘误。"
targets: ["dt-curves-flow", "dt-ode", "dt-incomplete"]
source_number: "6.5"
source_kind: "course-exercise"
difficulty: "基础"
order: 605
minutes: 10
---

:::problem
题目：证明两张平面坐标图下 $\partial/\partial x_a$ 的 Jacobian 变换公式。
:::

:::solution
解答：对任意光滑函数 $h$，令 $H=h\circ\varphi_b^{-1}$、$(F^1,F^2)=\varphi_b\circ\varphi_a^{-1}$。链式法则给
$$\partial_{x_a}(h\circ\varphi_a^{-1})(\varphi_a(p))=\sum_{j=1}^2(\partial_jH)(\varphi_b(p))\,\partial_{x_a}F^j(\varphi_a(p)).$$
因此作为作用于任意 $h$ 的导子，
$$\left.\partial_{x_a}\right|_p=\partial_{x_a}F^1(\varphi_a(p))\left.\partial_{x_b}\right|_p+\partial_{x_a}F^2(\varphi_a(p))\left.\partial_{y_b}\right|_p.$$
系数随 $p$ 光滑，故是向量场恒等式。原式的系数必须在 $\varphi_a(p)$ 处求值，不能把坐标域函数直接当作 $M$ 上函数而省去拉回含义。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.5; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](ref:dt-week-06) · [dt-curves-flow](ref:dt-curves-flow) · [dt-ode](ref:dt-ode) · [dt-incomplete](ref:dt-incomplete)
