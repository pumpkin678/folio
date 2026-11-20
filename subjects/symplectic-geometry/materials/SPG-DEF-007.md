---
id: SPG-DEF-007
type: def
title: 各向同性子空间
english: Isotropic subspace
summary: Ω|_Y=0，亦即 Y⊆Y^Ω。
requires:
  - SPG-DEF-005
related:
  - SPG-DEF-008
  - SPG-DEF-009
  - SPG-THM-003
related_questions:
  - SPG-HW-005
  - SPG-HW-007
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-DEF-007
  - Isotropic subspace
track: 辛线性代数
order: 7
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Definition

$Y\subseteq(V,\Omega)$ 称为 **isotropic**，若
$$
\Omega|_{Y\times Y}=0\quad\iff\quad Y\subseteq Y^\Omega.
$$
即 $Y$ 中任意两向量的辛配对为零。
:::

:::remark
### Dimension and matrix test

$$
\dim Y\le\tfrac12\dim V.
$$
若 $Y=\operatorname{Im}B$，则 $Y$ isotropic 当且仅当 $B^TJB=0$。
:::

:::example
### Examples

$\operatorname{span}\{e_1,\ldots,e_k\}$（$0\le k\le n$）是 isotropic；任意一维子空间也是 isotropic。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
