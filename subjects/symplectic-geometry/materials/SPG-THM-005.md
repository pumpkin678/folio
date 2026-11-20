---
id: SPG-THM-005
type: thm
title: 辛子空间的三个等价刻画
english: Symplectic subspace criteria
summary: 限制非退化 ⇔ Y∩YΩ=0 ⇔ V=Y⊕YΩ。
requires:
  - SPG-DEF-006
  - SPG-THM-002
related:
  - SPG-EX-002
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-THM-005
  - Symplectic subspace criteria
track: 辛线性代数
order: 18
minutes: 6
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Statement

对 $Y\subseteq V$：
$$
\Omega|_Y\text{ nondegenerate}\iff Y\cap Y^\Omega=\{0\}\iff V=Y\oplus Y^\Omega.
$$
:::

:::proof
### Proof

$\Omega|_Y$ 的 radical 正是 $Y\cap Y^\Omega$，故前两个条件等价。结合 $\dim Y+\dim Y^\Omega=\dim V$，交集为零当且仅当直和为整个 $V$。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
