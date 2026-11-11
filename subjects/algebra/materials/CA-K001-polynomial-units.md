---
id: CA-K001
type: thm
title: 多项式单位判别
english: Polynomial unit criterion
summary: 常数项可逆且所有正次数系数幂零，恰好刻画交换环上多项式的可逆性。
requires:
  - CA-K002
related_questions:
  - CA-Q001
  - CA-Q002
tags:
  - 交换代数
  - 单位
  - 幂零系数
aliases:
  - polynomial units
  - CA-K001
track: 交换代数
study_date: 2026-11-11
order: 4
minutes: 8
formula: f\in A[x]^\times\iff a_0\in A^\times,\ a_i\in\operatorname{Nil}(A)\ (i>0)
---

:::statement
**定理（Polynomial unit criterion）**：对交换含幺环 $A$，

$$\sum_{i=0}^n a_ix^i\in A[x]^\times\iff a_0\in A^\times\text{ 且 }a_i\in\operatorname{Nil}(A)\ (i\ge1).$$
:::

:::remark
**整环中的度数**：若 $D$ 为 integral domain 且 $f,g\in D[x]$ 非零，则

$$\deg(fg)=\deg f+\deg g.$$

因此 $D[x]^\times=D^\times$。对于有 zero divisors 的环不能随意使用。
:::

:::example
**例子**：在 $(\mathbb Z/4\mathbb Z)[x]$ 中，$2x$ nilpotent，且 $(1+2x)^2=1$。所以非零次数多项式也可能是 unit。
:::
