---
id: "dt-w1-2"
track: "微分拓扑 · Week 1–8"
chapter: "Week 1"
week: 1
tags: ["Week 1", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w1-2.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.2; DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-01", "dt-topology", "dt-metric", "dt-separation", "dt-induced-product", "dt-dimension-norm", "dt-compact-counterexample", "dt-week-01.practice"]
title: "1.2 · Norm 诱导 metric"
english: "Week 1 · Problem 1.2"
summary: "Week 1 · DiffTop2026.pdf · 1.2；按原包保留题面、解答及勘误。"
targets: ["dt-topology", "dt-metric", "dt-separation", "dt-induced-product", "dt-dimension-norm", "dt-compact-counterexample"]
source_number: "1.2"
source_kind: "course-exercise"
difficulty: "基础"
order: 102
minutes: 8
---

:::problem
题目：由范数定义距离并核对公理。
:::

:::solution
解答：令 $d(x,y)=N(x-y)$。非负性以及 $d(x,y)=0\iff x=y$ 来自正定性；$d(y,x)=N(-(x-y))=d(x,y)$ 来自齐次性；$d(x,z)=N((x-y)+(y-z))\le d(x,y)+d(y,z)$。故这是 metric。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.2; DiffTop2026.pdf

## 关联

[dt-week-01](ref:dt-week-01) · [dt-topology](ref:dt-topology) · [dt-metric](ref:dt-metric) · [dt-separation](ref:dt-separation) · [dt-induced-product](ref:dt-induced-product) · [dt-dimension-norm](ref:dt-dimension-norm) · [dt-compact-counterexample](ref:dt-compact-counterexample)
