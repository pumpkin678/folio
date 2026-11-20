---
id: SPG-DEF-004
type: def
title: 辛基
english: Symplectic basis
summary: 基 e₁,…,eₙ,f₁,…,fₙ 满足标准配对关系。
requires:
  - SPG-DEF-003
related:
  - SPG-THM-001
  - SPG-EX-001
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-DEF-004
  - Symplectic basis
track: 辛线性代数
order: 4
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Definition

$(V^{2n},\Omega)$ 的基 $e_1,\ldots,e_n,f_1,\ldots,f_n$ 是 **symplectic basis**，若
$$
\Omega(e_i,e_j)=0,\quad \Omega(f_i,f_j)=0,\quad \Omega(e_i,f_j)=\delta_{ij}.
$$
在这组基中
$$
[\Omega]=J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}.
$$
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
