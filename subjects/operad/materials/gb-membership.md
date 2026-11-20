---
id: op.gb-membership
type: thm
title: Gröbner 基生成理想与成员判定
english: Generation and ideal membership criterion
summary: 首单项式整除性质迫使理想元素的除法余式为零，因而 Gröbner 基确实生成原理想。
requires: [op.gb-grobner-basis, op.gb-division-theorem]
tags: [Gröbner 基, 理想成员问题, 证明]
track: Gröbner 基
order: 16
minutes: 7
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
设 $k$ 为域，$R=k[x_1,\ldots,x_n]$ 固定单项式序，$G\subseteq I\setminus\{0\}$ 是理想 $I$ 的有限 Gröbner 基。则

$$I=\langle G\rangle.$$

对任意 $f\in R$，将其对 $G$ 做标准多变量除法，所得余式 $r$ 满足

$$f\in I\quad\Longleftrightarrow\quad r=0.$$

这个等价对任何合法的除法选择成立；此时也可写成 $f\in I\Longleftrightarrow\operatorname{NF}_G(f)=0$，正规形的唯一性见[下一定理](ref:op.gb-normal-form-uniqueness)。
:::

:::proof
**1. 零余式推出成员资格。** 除法表示为

$$f=\sum_i q_i g_i+r.$$

若 $r=0$，因为每个 $g_i\in I$，理想对任意环元素的乘法及有限和封闭，所以 $f=\sum_i q_i g_i\in I$。

**2. 成员资格推出零余式。** 若 $f\in I$，仍由上述等式及理想对减法封闭，得到

$$r=f-\sum_iq_i g_i\in I.$$

假设 $r\ne0$。Gröbner 基的首单项式整除性质给出某个 $i$，使

$$\operatorname{LM}(g_i)\mid\operatorname{LM}(r).$$

但除法余式的每一项都不能被任何基元素的首单项式整除，特别是其首项也不能。这是矛盾，故 $r=0$。

**3. 证明生成性。** 因 $G\subseteq I$，已有 $\langle G\rangle\subseteq I$。对任意 $f\in I$，第 2 步和除法表示给出 $f=\sum_iq_i g_i\in\langle G\rangle$，因此另一包含也成立。

核验：证明使用的是初始理想意义下的 Gröbner 基定义，没有预先把“生成 $I$”当作已知；理想性质分别用于乘法、加法以及由 $f$ 减去除数倍数。
:::

:::remark
若 $I=(0)$、$G=\varnothing$，除法余式为 $f$，仍有 $f\in I$ 当且仅当 $r=f=0$。
:::
