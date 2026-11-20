---
id: "dt-w7-3"
track: "微分拓扑 · Week 1–8"
chapter: "Week 7"
week: 7
tags: ["Week 7", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w7-3.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.3; W7DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-07", "dt-exterior", "dt-exterior-basis", "dt-forms", "dt-wedge-example", "dt-week-07.practice"]
title: "7.3 · Exterior power 的函子性"
english: "Week 7 · Problem 7.3"
summary: "Week 7 · W7DiffTop2026.pdf · 7.3；按原包保留题面、解答及勘误。"
targets: ["dt-exterior", "dt-exterior-basis", "dt-forms", "dt-wedge-example"]
source_number: "7.3"
source_kind: "course-exercise"
difficulty: "进阶"
order: 703
minutes: 8
---

:::problem
题目：线性 $f:V\to W$ 诱导 $\Lambda^pf$，满足对纯楔逐因子作用。
:::

:::solution
解答：$(v_1,\ldots,v_p)\mapsto f(v_1)\wedge\cdots\wedge f(v_p)$ 是交替多线性，泛性质给唯一线性映射 $\Lambda^pf$，满足所求公式。若 $g:W\to Z$，则 $\Lambda^pg\circ\Lambda^pf$ 与 $\Lambda^p(gf)$ 在每个纯楔上相等，纯楔张成，故两映射相等。同理 $\Lambda^p\mathrm{id}=\mathrm{id}$。$p=0$ 时诱导映射是 $\mathbb R$ 的恒等映射。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.3; W7DiffTop2026.pdf

## 关联

[dt-week-07](ref:dt-week-07) · [dt-exterior](ref:dt-exterior) · [dt-exterior-basis](ref:dt-exterior-basis) · [dt-forms](ref:dt-forms) · [dt-wedge-example](ref:dt-wedge-example)
