---
id: "dt-w3-9"
track: "微分拓扑 · Week 1–8"
chapter: "Week 3"
week: 3
tags: ["Week 3", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w3-9.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.9; W3DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-03", "dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat", "dt-week-03.practice"]
title: "3.9 · 指数平坦函数在零点的导数"
english: "Week 3 · Problem 3.9"
summary: "Week 3 · W3DiffTop2026.pdf · 3.9；按原包保留题面、解答及勘误。"
targets: ["dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat"]
source_number: "3.9"
source_kind: "course-exercise"
difficulty: "基础"
order: 310
minutes: 8
---

:::problem
题目：$\chi(t)=\omega(t)e^{-1/t}$（$t>0$），$t\le0$ 时为零，其中 $\omega$ 为 $t^{-1}$ 的多项式；证明零点导数及两侧导数极限相等。
:::

:::solution
步骤 1：对任意整数 $m\ge0$，令 $s=1/t$，由 $e^s\ge s^{m+1}/(m+1)!$ 得 $s^me^{-s}\le(m+1)!/s\to0$。故 $t^{-m}e^{-1/t}\to0$。

步骤 2：正侧差商 $\chi(t)/t$ 是有限个 $t^{-m}e^{-1/t}$ 的线性组合，极限为零；负侧差商恒为零。因此 $\chi'(0)=0$。

步骤 3：对 $t>0$，$\chi'(t)=(\omega'(t)+t^{-2}\omega(t))e^{-1/t}$，系数仍为 $t^{-1}$ 的多项式，极限为零。负侧导数为零，所以三者相等。同一论证归纳给出所有阶导数存在、连续并在零点为零。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.9; W3DiffTop2026.pdf

## 关联

[dt-week-03](ref:dt-week-03) · [dt-quotient](ref:dt-quotient) · [dt-germs-cotangent](ref:dt-germs-cotangent) · [dt-bump-locality](ref:dt-bump-locality) · [dt-hadamard](ref:dt-hadamard) · [dt-flat](ref:dt-flat)
