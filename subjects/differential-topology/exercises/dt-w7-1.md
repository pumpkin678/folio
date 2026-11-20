---
id: "dt-w7-1"
track: "微分拓扑 · Week 1–8"
chapter: "Week 7"
week: 7
tags: ["Week 7", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w7-1.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.1; W7DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-07", "dt-exterior", "dt-exterior-basis", "dt-forms", "dt-wedge-example", "dt-week-07.practice"]
title: "7.1 · Top exterior power 一维"
english: "Week 7 · Problem 7.1"
summary: "Week 7 · W7DiffTop2026.pdf · 7.1；按原包保留题面、解答及勘误。"
targets: ["dt-exterior", "dt-exterior-basis", "dt-forms", "dt-wedge-example"]
source_number: "7.1"
source_kind: "course-exercise"
difficulty: "进阶"
order: 701
minutes: 8
---

:::problem
题目：$\dim V=n$，证明 $\dim\Lambda^nV=1$。
:::

:::solution
步骤 1：选基 $e_1,\ldots,e_n$。展开任意 $n$ 重楔，每项有重复基向量即为零，无重复者为 $e_1\wedge\cdots\wedge e_n$ 的带符号排列。因此该元素生成 $\Lambda^nV$。

步骤 2：相对所选基的坐标行列式 $D(v_1,\ldots,v_n)$ 是交替多线性映射，泛性质给线性 $\bar D:\Lambda^nV\to\mathbb R$，满足 $\bar D(e_1\wedge\cdots\wedge e_n)=1$。故生成元不为零，维数为 1。$n=0$ 时约定 $\Lambda^0(0)=\mathbb R$，结论仍成立。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.1; W7DiffTop2026.pdf

## 关联

[dt-week-07](ref:dt-week-07) · [dt-exterior](ref:dt-exterior) · [dt-exterior-basis](ref:dt-exterior-basis) · [dt-forms](ref:dt-forms) · [dt-wedge-example](ref:dt-wedge-example)
