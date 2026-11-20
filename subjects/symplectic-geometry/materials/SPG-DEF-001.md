---
id: SPG-DEF-001
type: def
title: 反对称双线性型
english: Skew-symmetric bilinear form
summary: 一个满足 Ω(u,v)=−Ω(v,u) 的双线性形式。
requires: []
related:
  - SPG-DEF-002
  - SPG-DEF-003
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-DEF-001
  - Skew-symmetric bilinear form
track: 辛线性代数
order: 1
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Definition

设 $V$ 为有限维实向量空间。双线性映射 $\Omega:V\times V\to\mathbb R$ 称为 **skew-symmetric**，若
$$
\Omega(u,v)=-\Omega(v,u)\qquad (u,v\in V).
$$
因此 $\Omega(v,v)=0$。在特征不为 $2$ 的域上，skew-symmetric 与 alternating 等价。
:::

:::intuition
### Intuition

$\Omega(u,v)$ 测量的是带方向的二元配对，而不是向量的长度或夹角。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
