---
track: "模与张量积"
study_date: "2026-11-17"
source_pack: "folio-am-ch2-modules-2026-11-17"
source_verified: false
source_note: "用户提供的 Folio_AM_Ch2_Modules_Exercises.zip；A–M Chapter 2 的题号、页码沿用原包，未独立核实。"
id: "alg.modules-polynomial-module-theorem"
title: "多项式模与标量扩张"
english: "Polynomial modules and extension of scalars"
summary: "按系数定义多项式模的作用，构造 A[x] ⊗ M 与 M[x] 的自然同构和逐项逆映射。"
source_document: "02_Polynomial_Modules.md"
tags: ["模", "张量积", "polynomial-module", "extension-of-scalars"]
order: 33
type: "thm"
minutes: 6
related_questions: ["alg.modules-polynomial-module"]
related: ["alg.modules-tensor-path", "alg.modules-flat-direct-sums-theorem"]
requires: []
aliases: ["02", "Polynomial modules and extension of scalars"]
---

:::statement
设 $A$ 为交换含幺环，$M$ 为 $A$-模。$M[x]$ 由系数属于 $M$ 的有限多项式组成，并通过卷积

$$\left(\sum_i a_ix^i\right)\left(\sum_j m_jx^j\right)=\sum_k\left(\sum_{i+j=k}a_im_j\right)x^k$$

成为 $A[x]$-模。有自然的 $A[x]$-线性同构

$$\Phi:A[x]\otimes_AM\xrightarrow{\sim}M[x],\qquad f\otimes m\longmapsto fm,$$

其逆为 $\Psi(\sum_jm_jx^j)=\sum_jx^j\otimes m_j$。
:::

:::intuition
$A[x]=\bigoplus_{j\ge0}Ax^j$，所以张量积与直和交换解释了逐项拆出系数的构造。正向映射须由 $A$-balanced 映射诱导，逆映射用系数唯一性与有限支撑保证有定义。

对 $u:M\to N$，逐系数映射 $u[x]$ 满足 $u[x]\circ\Phi_M=\Phi_N\circ(1\otimes u)$。
:::

:::remark
[完整证明、易错点与复习检查](ref:alg.modules-polynomial-module)。
:::
