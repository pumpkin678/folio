---
id: "dt-w7-2"
track: "微分拓扑 · Week 1–8"
chapter: "Week 7"
week: 7
tags: ["Week 7", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w7-2.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.2; W7DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-07", "dt-exterior", "dt-exterior-basis", "dt-forms", "dt-wedge-example", "dt-week-07.practice"]
title: "7.2 · Exterior power 的基"
english: "Week 7 · Problem 7.2"
summary: "Week 7 · W7DiffTop2026.pdf · 7.2；按原包保留题面、解答及勘误。"
targets: ["dt-exterior", "dt-exterior-basis", "dt-forms", "dt-wedge-example"]
source_number: "7.2"
source_kind: "course-exercise"
difficulty: "进阶"
order: 702
minutes: 9
---

:::problem
题目：求 $\Lambda^pV$ 的一组基。
:::

:::solution
步骤 1：给 $V$ 的基 $e_1,\ldots,e_n$，取所有 $e_I=e_{i_1}\wedge\cdots\wedge e_{i_p}$，其中 $i_1<\cdots<i_p$。由多线性展开、重复因子为零、交换因子变号，所有纯楔都在其张成中；纯楔生成外幂，故它们张成。

步骤 2：对每个递增指标 $I$，令 $D_I(v_1,\ldots,v_p)=\det(e^{i_a}(v_b))_{a,b=1}^p$，其中 $e^i$ 为对偶基。它是交替多线性，下降为线性 $\bar D_I$，且 $\bar D_I(e_J)=\delta_{IJ}$。对线性关系逐一应用 $\bar D_I$，得到全部系数零，所以独立。

结论：维数 $\binom np$；$p>n$ 时无递增指标，空间为零；$p=0$ 时基为 $\{1\}$。原讲义泛性质须限定为 **alternating multilinear**，不能只说任意 multilinear；后者刻画 tensor power。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.2; W7DiffTop2026.pdf

## 关联

[dt-week-07](ref:dt-week-07) · [dt-exterior](ref:dt-exterior) · [dt-exterior-basis](ref:dt-exterior-basis) · [dt-forms](ref:dt-forms) · [dt-wedge-example](ref:dt-wedge-example)
