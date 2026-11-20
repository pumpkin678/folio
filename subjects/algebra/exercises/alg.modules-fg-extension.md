---
track: "模与短正合列"
study_date: "2026-11-14"
source_pack: "folio-algebra-part2-part4-2026-11-14"
source_verified: false
source_note: "用户提供的 folio_algebra_part2_part4_2026-11-14.zip，Part 2 / Part 4 笔记；原文未提供确定的书目或题号。"
id: "alg.modules-fg-extension"
title: "短正合列中有限生成模的扩张"
english: "Finite generation under extensions"
summary: "提升商模的有限生成元，再用核中的余项补齐中间模的有限生成集。"
source_document: "01-Part2-finitely-generated-extensions.md"
source_part: "Part 2"
targets: ["alg.modules-extension-theorem"]
related_questions: ["alg.modules-free-quotient-kernel"]
related: ["alg.modules-exact-sequences", "alg.daily-2026-11-14"]
tags: ["模", "short-exact-sequence", "finite-generation", "extension", "filtration"]
difficulty: "进阶"
minutes: 15
minutes_origin: "站内估计"
initial_status: "new"
order: 30
---

:::problem
> 主题：短正合列中的有限生成性（finite generation）  
> 关键词：short exact sequence, extension, lift, quotient, filtration

## 题目

设 $A$ 为交换环，有短正合列

$$
0\longrightarrow M'\xrightarrow{f}M\xrightarrow{g}M''\longrightarrow 0.
$$

若 $M'$ 与 $M''$ 都是 finitely generated $A$-modules，证明 $M$ 也是 finitely generated。
:::

:::hint
## 核心动机

这不是简单地把两个直和因子的生成元拼起来，因为短正合列一般**不 split**：

$$
M\not\cong M'\oplus M''\quad\text{(一般不成立)}.
$$

正合性提供的是 $M/\operatorname{im}f\cong M''$。因此思路是：先 lift 商模 $M''$ 的有限个生成元；再用 $M'$ 的生成元处理 lift 之后留在 $\ker g$ 的余项。
:::

:::solution
## 严格证明

取有限生成集

$$
M'=\langle u_1,\dots,u_r\rangle_A,\qquad
M''=\langle v_1,\dots,v_s\rangle_A.
$$

由 $g$ 满射，对每个 $j$ 取 $x_j\in M$ 满足 $g(x_j)=v_j$。

断言：

$$
M=\langle f(u_1),\dots,f(u_r),x_1,\dots,x_s\rangle_A.
$$

任取 $m\in M$。因 $v_j$ 生成 $M''$，存在 $a_j\in A$，使

$$
g(m)=\sum_{j=1}^{s}a_jv_j=g\!\left(\sum_{j=1}^{s}a_jx_j\right).
$$

所以

$$
m-\sum_{j=1}^{s}a_jx_j\in\ker g=\operatorname{im}f.
$$

存在 $u\in M'$ 使

$$
m-\sum_{j=1}^{s}a_jx_j=f(u).
$$

再由 $u_i$ 生成 $M'$，写成 $u=\sum_{i=1}^{r}b_iu_i$，得到

$$
m=\sum_{j=1}^{s}a_jx_j+\sum_{i=1}^{r}b_if(u_i).
$$

故 $M$ 有限生成。$\square$
:::

:::remark
## 为什么不能直接当作直和？

在 $\mathbb Z$-modules 中存在短正合列

$$
0\longrightarrow\mathbb Z/2\mathbb Z
\xrightarrow{\,\cdot 2\,}\mathbb Z/4\mathbb Z
\longrightarrow\mathbb Z/2\mathbb Z
\longrightarrow 0.
$$

其中 $\mathbb Z/4\mathbb Z\not\cong(\mathbb Z/2\mathbb Z)\oplus(\mathbb Z/2\mathbb Z)$；但有限生成性仍从两端传到中间。
:::

:::remark
## 更广泛的用途：filtration

给定有限 filtration

$$
0=M_0\subseteq M_1\subseteq\cdots\subseteq M_t=M.
$$

如果每个 $M_i/M_{i-1}$ 都有限生成，则由

$$
0\to M_{i-1}\to M_i\to M_i/M_{i-1}\to0
$$

逐层归纳可得 $M$ 有限生成。

**核心结论：** finitely generated modules are closed under extensions。
:::

:::remark
## 易混淆点：传递并不对称

- $M'$ 和 $M''$ 有限生成 $\Rightarrow M$ 有限生成。
- $M$ 有限生成 $\Rightarrow M''$ 有限生成（商模的生成元取像即可）。
- $M$ 和 $M''$ 有限生成 $\nRightarrow M'$ 有限生成（一般环上不成立）。

反例：令 $A=k[x_1,x_2,\ldots]$，$I=(x_1,x_2,\ldots)$，则

$$
0\to I\to A\to A/I\to0
$$

中 $A$ 和 $A/I$ 都是 cyclic $A$-modules，但 $I$ 不是有限生成理想。这个缺口引出 **Noetherian modules/rings**。
:::

:::remark
## 复习检查

1. 证明中在哪里分别用到 $g$ 满射、$\ker g=\operatorname{im}f$？
2. 若 filtration 无限长，结论是否还成立？为什么有限长度重要？
3. 为什么不能仅凭两端有限生成就推断短正合列 split？
:::

:::remark
## 关联

- [Part 4：Free Quotient and Splitting](ref:alg.modules-free-quotient-kernel)
:::
