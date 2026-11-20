---
id: SPG-DEF-011
type: def
title: 辛流形与辛形式
english: Symplectic manifold and symplectic form
summary: 流形上的闭且逐点非退化的 2-form。
requires:
  - SPG-DEF-003
related:
  - SPG-DEF-012
  - SPG-THM-007
  - SPG-EX-001
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-DEF-011
  - Symplectic manifold and symplectic form
track: 辛线性代数
order: 11
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Definition

**Symplectic manifold** $(M^{2n},\omega)$ 是光滑流形及一个 2-form $\omega\in\Omega^2(M)$，使得
1. $d\omega=0$ (**closed**);
2. 对每个 $x\in M$，双线性型 $\omega_x$ 在 $T_xM$ 上 **nondegenerate**。
:::

:::remark
### Difference from linear algebra

线性辛向量空间只要求非退化的 skew-symmetric form；流形还需要 $d\omega=0$。
:::

:::example
### Local model

$(\mathbb R^{2n},\omega_0)$，$\omega_0=\sum_{i=1}^n dq_i\wedge dp_i$。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
