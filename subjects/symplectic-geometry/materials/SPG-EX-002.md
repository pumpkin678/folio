---
id: SPG-EX-002
type: eg
title: R⁴ 中四类子空间
english: Four types of subspaces in R4
summary: 一组清晰区分 isotropic/coisotropic/Lagrangian/symplectic 的 toy model。
requires:
  - SPG-DEF-005
  - SPG-DEF-006
  - SPG-DEF-007
  - SPG-DEF-008
  - SPG-DEF-009
related:
  - SPG-THM-004
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-EX-002
  - Four types of subspaces in R4
track: 辛线性代数
order: 22
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::example
在 $V=\mathbb R^4$，$\omega=dq_1\wedge dp_1+dq_2\wedge dp_2$，取 $e_i=\partial_{q_i}$、$f_i=\partial_{p_i}$：

| $Y$ | $Y^\omega$ | 类型 |
|---|---|---|
| $\langle e_1\rangle$ | $\langle e_1,e_2,f_2\rangle$ | isotropic，非 Lagrangian |
| $\langle e_1,e_2\rangle$ | $\langle e_1,e_2\rangle$ | Lagrangian |
| $\langle e_1,e_2,f_2\rangle$ | $\langle e_1\rangle$ | coisotropic，非 Lagrangian |
| $\langle e_1,f_1\rangle$ | $\langle e_2,f_2\rangle$ | symplectic，既非 isotropic 也非 coisotropic |

最后一行表明：不是所有子空间都属于前三类。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
