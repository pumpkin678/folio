---
id: SPG-EX-001
type: eg
title: 标准辛空间与矩阵表示
english: Standard symplectic space
summary: (R²ⁿ,∑dqᵢ∧dpᵢ) 的标准表示。
requires:
  - SPG-DEF-003
  - SPG-DEF-004
related:
  - SPG-DEF-007
  - SPG-EX-002
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-EX-001
  - Standard symplectic space
track: 辛线性代数
order: 21
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::example
在 $\mathbb R^{2n}$ 中用 $(q_1,\ldots,q_n,p_1,\ldots,p_n)$ 作坐标，定义
$$\omega_0=\sum_{i=1}^n dq_i\wedge dp_i.$$
把向量写为 $u=(q,p)$、$v=(Q,P)$，则
$$\omega_0(u,v)=q\cdot P-p\cdot Q=u^T\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}v.$$
基 $e_i=\partial_{q_i}$、$f_i=\partial_{p_i}$ 构成 symplectic basis。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
