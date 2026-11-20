---
id: "dt-w1-1"
track: "微分拓扑 · Week 1–8"
chapter: "Week 1"
week: 1
tags: ["Week 1", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w1-1.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.1; DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-01", "dt-topology", "dt-metric", "dt-separation", "dt-induced-product", "dt-dimension-norm", "dt-compact-counterexample", "dt-week-01.practice"]
title: "1.1 · Norm 的定义"
english: "Week 1 · Problem 1.1"
summary: "Week 1 · DiffTop2026.pdf · 1.1；按原包保留题面、解答及勘误。"
targets: ["dt-topology", "dt-metric", "dt-separation", "dt-induced-product", "dt-dimension-norm", "dt-compact-counterexample"]
source_number: "1.1"
source_kind: "course-exercise"
difficulty: "基础"
order: 101
minutes: 8
---

:::problem
题目：陈述 $\mathbb R^n$ 上范数的定义。
:::

:::solution
解答：函数 $N:\mathbb R^n\to[0,\infty)$ 是 norm，当且仅当：(1) $N(v)=0\iff v=0$；(2) 对 $a\in\mathbb R$ 有 $N(av)=|a|N(v)$；(3) $N(u+v)\le N(u)+N(v)$。三个条件对所有向量成立。例如 $N(v)=(\sum v_i^2)^{1/2}$；三角不等式由 Cauchy–Schwarz 给出。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.1; DiffTop2026.pdf

## 关联

[dt-week-01](ref:dt-week-01) · [dt-topology](ref:dt-topology) · [dt-metric](ref:dt-metric) · [dt-separation](ref:dt-separation) · [dt-induced-product](ref:dt-induced-product) · [dt-dimension-norm](ref:dt-dimension-norm) · [dt-compact-counterexample](ref:dt-compact-counterexample)
