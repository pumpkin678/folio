---
id: "dt-w8-4"
track: "微分拓扑 · Week 1–8"
chapter: "Week 8"
week: 8
tags: ["Week 8", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w8-4.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.4; W8DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-08", "dt-exterior-derivative", "dt-contraction-lie", "dt-cartan-complex", "dt-cartan-example", "dt-week-08.practice"]
title: "8.4 · Lie derivative 的 A-multilinearity"
english: "Week 8 · Problem 8.4"
summary: "Week 8 · W8DiffTop2026.pdf · 8.4；按原包保留题面、解答及勘误。"
targets: ["dt-exterior-derivative", "dt-contraction-lie", "dt-cartan-complex", "dt-cartan-example"]
source_number: "8.4"
source_kind: "course-exercise"
difficulty: "进阶"
order: 803
minutes: 8
---

:::problem
**代数约定：** $A$ 为交换含幺实代数，形式是导子模 $\operatorname{Der}(A)$ 上的交替 $A$-多线性映射，外幂取 $A$-模外幂。流与拉回相关题在光滑流形上讨论。

题目：证明
$$L_X\omega(Y_1,\ldots,Y_p)=X\omega(Y_1,\ldots,Y_p)-\sum_j\omega(Y_1,\ldots,[X,Y_j],\ldots,Y_p)$$
对每个参数 $A$-线性。
:::

:::solution
步骤 1：先由导子 Leibniz 规则直接计算 $[X,aY]=X(a)Y+a[X,Y]$。

步骤 2：把第 $j$ 槽换成 $aY_j$。首项变为 $X(a)\omega(Y_1,\ldots,Y_p)+aX(\omega(Y_1,\ldots,Y_p))$。和式中第 $j$ 项是 $-X(a)\omega(Y_1,\ldots,Y_p)-a\omega(\ldots,[X,Y_j],\ldots)$；其他各项因 $\omega$ 的 $A$-多线性均可提出 $a$。

步骤 3：两项 $X(a)\omega$ 抵消，剩下恰为 $aL_X\omega(Y_1,\ldots,Y_p)$。加法性由各运算的实线性和括号加法性直接得到，因此每个槽均 $A$-线性。$p=0$ 时没有槽，$L_Xf=Xf$。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.4; W8DiffTop2026.pdf

## 关联

[dt-week-08](ref:dt-week-08) · [dt-exterior-derivative](ref:dt-exterior-derivative) · [dt-contraction-lie](ref:dt-contraction-lie) · [dt-cartan-complex](ref:dt-cartan-complex) · [dt-cartan-example](ref:dt-cartan-example)
