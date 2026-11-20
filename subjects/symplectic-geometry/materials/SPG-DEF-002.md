---
id: SPG-DEF-002
type: def
title: 非退化性
english: Nondegeneracy
summary: v 与所有向量配对均为零，就只能 v=0。
requires:
  - SPG-DEF-001
related:
  - SPG-THM-001
  - SPG-HW-001
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-DEF-002
  - Nondegeneracy
track: 辛线性代数
order: 2
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Definition

双线性型 $\Omega$ 非退化指
$$
\bigl(\forall w\in V,\ \Omega(v,w)=0\bigr)\ \Longrightarrow\ v=0.
$$
等价于线性映射
$$
\Omega^\flat:V\to V^*,\qquad v\mapsto\Omega(v,\cdot)
$$
是同构（有限维情形）。
:::

:::remark
### Check

若 $\Omega$ 在某一基下的矩阵为 $J$，则非退化当且仅当 $\det J\ne0$。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
