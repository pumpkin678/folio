---
id: SPG-DEF-013
type: def
title: 拉格朗日子流形
english: Lagrangian submanifold
summary: 每一点的切空间都是拉格朗日子空间。
requires:
  - SPG-DEF-009
  - SPG-DEF-011
related:
  - SPG-EX-006
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-DEF-013
  - Lagrangian submanifold
track: 辛线性代数
order: 13
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Definition

设 $(M^{2n},\omega)$ 为辛流形，$i:L\hookrightarrow M$ 为嵌入子流形。称 $L$ 为 **Lagrangian submanifold**，若
$$
T_xL=(T_xL)^{\omega_x}\quad\forall x\in L.
$$
等价于
$$
\dim L=n,\qquad i^*\omega=0.
$$
:::

:::example
### Example and connection

在余切丛 $T^*X$ 的典范辛形式下，zero section 是 Lagrangian；这也是后续 Fukaya category 的基本几何对象之一。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
