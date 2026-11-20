---
id: SPG-THM-006
type: thm
title: 各向同性与余各向同性的对偶
english: Isotropic–coisotropic duality
summary: Y isotropic 当且仅当 YΩ coisotropic。
requires:
  - SPG-DEF-007
  - SPG-DEF-008
  - SPG-THM-002
related:
  - SPG-EX-003
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-THM-006
  - Isotropic–coisotropic duality
track: 辛线性代数
order: 19
minutes: 6
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Statement

$$
Y\text{ isotropic}\iff Y^\Omega\text{ coisotropic}.
$$
且 $\dim Y^\Omega\ge n$ 当 $Y$ isotropic。
:::

:::proof
### Proof

$Y$ isotropic 意味着 $Y\subseteq Y^\Omega$。由 $(Y^\Omega)^\Omega=Y$，这等价于 $(Y^\Omega)^\Omega\subseteq Y^\Omega$，即 $Y^\Omega$ coisotropic。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
