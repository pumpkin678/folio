---
id: "dt-w6-1"
track: "微分拓扑 · Week 1–8"
chapter: "Week 6"
week: 6
tags: ["Week 6", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w6-1.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.1; W6DiffTop2026(1).pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-06", "dt-curves-flow", "dt-ode", "dt-incomplete", "dt-week-06.practice"]
title: "6.1 · 有限乘积的泛性质"
english: "Week 6 · Problem 6.1"
summary: "Week 6 · W6DiffTop2026(1).pdf · 6.1；按原包保留题面、解答及勘误。"
targets: ["dt-curves-flow", "dt-ode", "dt-incomplete"]
source_number: "6.1"
source_kind: "course-exercise"
difficulty: "基础"
order: 601
minutes: 8
---

:::problem
题目：陈述 $M_1\times\cdots\times M_n$ 的流形泛性质。
:::

:::solution
解答：存在流形 $P$ 及光滑投影 $\pi_i:P\to M_i$，使对任意流形 $Z$ 和光滑 $f_i:Z\to M_i$，存在唯一光滑 $f:Z\to P$ 满足 $\pi_i f=f_i$。在集合乘积上必为 $f(z)=(f_1(z),\ldots,f_n(z))$，唯一性逐分量成立。等价地 $C^\infty(Z,P)\cong\prod_i C^\infty(Z,M_i)$，自然于 $Z$。存在性由积图（5.4）有限次迭代得到。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.1; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](ref:dt-week-06) · [dt-curves-flow](ref:dt-curves-flow) · [dt-ode](ref:dt-ode) · [dt-incomplete](ref:dt-incomplete)
