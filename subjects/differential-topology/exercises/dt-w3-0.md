---
id: "dt-w3-0"
track: "微分拓扑 · Week 1–8"
chapter: "Week 3"
week: 3
tags: ["Week 3", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w3-0.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.0; W3DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-03", "dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat", "dt-week-03.practice"]
title: "3.0 · 两个拓扑的逐点细化"
english: "Week 3 · Problem 3.0"
summary: "Week 3 · W3DiffTop2026.pdf · 3.0；按原包保留题面、解答及勘误。"
targets: ["dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat"]
source_number: "3.0"
source_kind: "course-exercise"
difficulty: "基础"
order: 301
minutes: 8
---

:::problem
题目：证明 $\mathbb R^2$ 的范数拓扑与乘积拓扑相同。
:::

:::solution
解答：先取欧氏范数。对球 $B_r(p)$ 中的 $q$，取 $\delta=(r-\|q-p\|)/\sqrt2$。矩形 $(q_1-\delta,q_1+\delta)\times(q_2-\delta,q_2+\delta)$ 包含 $q$ 且包含于球中，故球乘积开。对矩形 $(a,b)\times(c,d)$ 中的 $q$，取 $\varepsilon=\min(q_1-a,b-q_1,q_2-c,d-q_2)$，则 $B_\varepsilon(q)$ 包含于矩形。因此两类基元素均在另一拓扑中开，任意开集作为基元素之并也开。其他范数由有限维范数等价归结到欧氏范数，证明见 1.u1。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.0; W3DiffTop2026.pdf

## 关联

[dt-week-03](ref:dt-week-03) · [dt-quotient](ref:dt-quotient) · [dt-germs-cotangent](ref:dt-germs-cotangent) · [dt-bump-locality](ref:dt-bump-locality) · [dt-hadamard](ref:dt-hadamard) · [dt-flat](ref:dt-flat)
