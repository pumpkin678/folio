---
id: SPG-THM-003
type: thm
title: 各向同性维数上界
english: Isotropic dimension bound
summary: Isotropic Y 满足 dimY≤n。
requires:
  - SPG-DEF-007
  - SPG-THM-002
related:
  - SPG-THM-004
related_questions:
  - SPG-HW-005
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-THM-003
  - Isotropic dimension bound
track: 辛线性代数
order: 16
minutes: 6
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Statement

若 $\dim V=2n$，且 $Y\subseteq V$ isotropic，则 $\dim Y\le n$。
:::

:::proof
### Proof

$Y$ isotropic 等价于 $Y\subseteq Y^\Omega$，于是
$$\dim Y\le\dim Y^\Omega=2n-\dim Y.$$
因此 $2\dim Y\le2n$，即 $\dim Y\le n$。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
