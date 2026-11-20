---
id: "dt-w1-3"
track: "微分拓扑 · Week 1–8"
chapter: "Week 1"
week: 1
tags: ["Week 1", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w1-3.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.3; DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-01", "dt-topology", "dt-metric", "dt-separation", "dt-induced-product", "dt-dimension-norm", "dt-compact-counterexample", "dt-week-01.practice"]
title: "1.3 · 开球唯一生成拓扑"
english: "Week 1 · Problem 1.3"
summary: "Week 1 · DiffTop2026.pdf · 1.3；按原包保留题面、解答及勘误。"
targets: ["dt-topology", "dt-metric", "dt-separation", "dt-induced-product", "dt-dimension-norm", "dt-compact-counterexample"]
source_number: "1.3"
source_kind: "course-exercise"
difficulty: "基础"
order: 103
minutes: 8
---

:::problem
题目：证明 metric space 的开球构成唯一一个拓扑的 basis。
:::

:::solution
步骤 1：每个 $x$ 属于 $B_1(x)$，所以开球覆盖 $X$。

步骤 2：若 $x\in B_r(a)\cap B_s(b)$，令 $\varepsilon=\min(r-d(x,a),s-d(x,b))>0$。三角不等式给出 $B_\varepsilon(x)\subset B_r(a)\cap B_s(b)$。

步骤 3：令 $\tau$ 为任意开球的并（允许空并）。它包含 $\varnothing,X$，对任意并封闭。若 $U,V\in\tau$，对每个 $x\in U\cap V$ 取步骤 2 的小球，得到 $U\cap V$ 是开球的并。因此 $\tau$ 为拓扑，开球为基。

步骤 4：任何以这些球为基的拓扑，其每个开集恰是球的并，故必为 $\tau$。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.3; DiffTop2026.pdf

## 关联

[dt-week-01](ref:dt-week-01) · [dt-topology](ref:dt-topology) · [dt-metric](ref:dt-metric) · [dt-separation](ref:dt-separation) · [dt-induced-product](ref:dt-induced-product) · [dt-dimension-norm](ref:dt-dimension-norm) · [dt-compact-counterexample](ref:dt-compact-counterexample)
