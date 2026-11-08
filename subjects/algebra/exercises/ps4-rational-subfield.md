---
id: alg.ps4-rational-subfield
title: "什么时候有理函数生成原函数域"
english: "Generating a rational function field"
summary: "Advanced Algebra · Problem Sheet 4，第 1 题。"
targets: ["alg.field-extensions"]
tags: ["高等代数","课程作业"]
difficulty: 进阶
minutes: 15
order: 6
---
:::problem
设 $t$ 在 $\mathbb Q$ 上超越。对哪些 $f\in\mathbb Q[X]$ 有 $\mathbb Q(f(t))=\mathbb Q(t)$？
:::

:::solution
恰为一次多项式。常数显然不行。若 $f$ 非常数，则 $f(T)-U$ 在 $\mathbb Q[T,U]$ 不可约，因为关于 $U$ 一次且其首项系数为单位。由 Gauss 引理在 $\mathbb Q(U)[T]$ 仍不可约。代入超越元 $U=f(t)$，得到扩张次数等于 $\deg f$。
:::

**出处**　Advanced Algebra · Problem Sheet 4，第 1 题。[AdA-ProblemSheet-4.pdf](https://chatgpt.com/library?file_id=libfile_ae51733ce5008191b97a6f06a3d5c79f&account_id=personal)
