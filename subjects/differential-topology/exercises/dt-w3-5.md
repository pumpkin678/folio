---
id: "dt-w3-5"
track: "微分拓扑 · Week 1–8"
chapter: "Week 3"
week: 3
tags: ["Week 3", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w3-5.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.5; W3DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-03", "dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat", "dt-week-03.practice"]
title: "3.5 · 所有扩张的并与极大性"
english: "Week 3 · Problem 3.5"
summary: "Week 3 · W3DiffTop2026.pdf · 3.5；按原包保留题面、解答及勘误。"
targets: ["dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat"]
source_number: "3.5"
source_kind: "course-exercise"
difficulty: "基础"
order: 306
minutes: 8
---

:::problem
题目：$S\subset2^T$，$a\in S$，令 $\bar a=\bigcup_{a\subset b\in S}b$。若 $\bar a\in S$，证明其极大。
:::

:::solution
解答：因 $a$ 自身在并中，$a\subset\bar a$。若 $\bar a\subset c\in S$，则 $a\subset c$，所以 $c$ 是定义 $\bar a$ 的一个并项，故 $c\subset\bar a$。两包含给出 $c=\bar a$，这正是极大性。一般 $\bar a$ 未必属于 $S$，故该假设不可省。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.5; W3DiffTop2026.pdf

## 关联

[dt-week-03](ref:dt-week-03) · [dt-quotient](ref:dt-quotient) · [dt-germs-cotangent](ref:dt-germs-cotangent) · [dt-bump-locality](ref:dt-bump-locality) · [dt-hadamard](ref:dt-hadamard) · [dt-flat](ref:dt-flat)
