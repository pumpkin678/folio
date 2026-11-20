---
id: SPG-THM-004
type: thm
title: Lagrangian 的三个等价刻画
english: Three equivalent Lagrangian criteria
summary: Lagrangian ⇔ isotropic 且 coisotropic ⇔ 自辛正交。
requires:
  - SPG-DEF-007
  - SPG-DEF-008
  - SPG-THM-002
related:
  - SPG-DEF-009
related_questions:
  - SPG-HW-007
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-THM-004
  - Three equivalent Lagrangian criteria
track: 辛线性代数
order: 17
minutes: 6
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Statement

设 $\dim V=2n$，$Y\subseteq V$，下列三条件等价：
1. $Y$ 为 Lagrangian：$Y$ isotropic 且 $\dim Y=n$；
2. $Y$ 同时 isotropic 和 coisotropic；
3. $Y=Y^\Omega$。
:::

:::proof
### Proof

**(1) $\Rightarrow$ (3).** 由 isotropic 得 $Y\subseteq Y^\Omega$，而维数公式给 $\dim Y^\Omega=2n-n=n=\dim Y$，故相等。

**(3) $\Rightarrow$ (2).** 等式同时蕴含 $Y\subseteq Y^\Omega$ 及 $Y^\Omega\subseteq Y$。

**(2) $\Rightarrow$ (1).** 两个包含关系给出 $Y=Y^\Omega$，故 $\dim Y=2n-\dim Y$，于是 $\dim Y=n$；再结合 isotropic 性质即知是 Lagrangian。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
