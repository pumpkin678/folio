---
id: SPG-EX-003
type: eg
title: 标准 coisotropic 约束子空间
english: Coisotropic constraint planes
summary: 由 p₁=···=pₖ=0 给出的线性余各向同性子空间。
requires:
  - SPG-DEF-008
related:
  - SPG-THM-006
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-EX-003
  - Coisotropic constraint planes
track: 辛线性代数
order: 23
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::example
对于 $0\le k\le n$，设
$$Y=\{(q,p)\in\mathbb R^{2n}:p_1=\cdots=p_k=0\}.$$
那么
$$Y=\operatorname{span}\{e_1,\ldots,e_n,f_{k+1},\ldots,f_n\},$$
$$Y^\omega=\operatorname{span}\{e_1,\ldots,e_k\}\subseteq Y.$$
故 $Y$ coisotropic，$\dim Y=2n-k$；当 $k=n$ 时它也是 Lagrangian。任意超平面（$k=1$，经辛基变换）都是 coisotropic。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
