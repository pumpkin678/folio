---
id: "dt-w1-u4"
track: "微分拓扑 · Week 1–8"
chapter: "Week 1"
week: 1
tags: ["Week 1", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w1-u4.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, 未编号问题 1.u4; DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-01", "dt-topology", "dt-metric", "dt-separation", "dt-induced-product", "dt-dimension-norm", "dt-compact-counterexample", "dt-week-01.practice"]
title: "1.u4 · 连通局部欧氏空间的维数恒定"
english: "Week 1 · 原题未编号"
summary: "Week 1 · DiffTop2026.pdf · 1.u4；原稿未编号问题，保留包内定位编号。"
targets: ["dt-topology", "dt-metric", "dt-separation", "dt-induced-product", "dt-dimension-norm", "dt-compact-counterexample"]
source_number: "1.u4"
source_kind: "unnumbered"
difficulty: "基础"
order: 108
minutes: 8
---

:::problem
题目：在非空连通空间上，各点具有可能不同维数的欧氏邻域；用 Theorem 1.5 证明维数恒定。
:::

:::solution
步骤 1：若两个这样的邻域相交，在交点附近的非空开交集中，两张坐标图分别给出维数 $m,n$ 的局部欧氏结构。维数不变性给出 $m=n$，故每点的局部维数定义良好。

步骤 2：令 $X_n$ 为局部维数为 $n$ 的点集。一张 $n$ 维图内每点维数均为 $n$，故 $X_n$ 开。其补集为其他 $X_m$ 的并，也开。

步骤 3：非空连通性使某个非空 $X_n$ 必为全空间，因此维数恒为 $n$。若 $X=\varnothing$，则按约定任意维数皆可，不存在唯一维数；原题的非空情形才有此唯一性。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, 未编号问题 1.u4; DiffTop2026.pdf

## 关联

[dt-week-01](ref:dt-week-01) · [dt-topology](ref:dt-topology) · [dt-metric](ref:dt-metric) · [dt-separation](ref:dt-separation) · [dt-induced-product](ref:dt-induced-product) · [dt-dimension-norm](ref:dt-dimension-norm) · [dt-compact-counterexample](ref:dt-compact-counterexample)
