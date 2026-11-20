---
id: SPG-DEF-008
type: def
title: 余各向同性子空间
english: Coisotropic subspace
summary: Y^Ω⊆Y，亦即 Y^Ω 为 isotropic。
requires:
  - SPG-DEF-005
related:
  - SPG-DEF-007
  - SPG-EX-003
  - SPG-THM-006
related_questions:
  - SPG-HW-007
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-DEF-008
  - Coisotropic subspace
track: 辛线性代数
order: 8
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Definition

$Y\subseteq(V,\Omega)$ 称为 **coisotropic**，若
$$
Y^\Omega\subseteq Y.
$$
等价地，$Y^\Omega$ 是 isotropic subspace，因为 $(Y^\Omega)^\Omega=Y$。
:::

:::remark
### Dimension and representation

必有 $\dim Y\ge\tfrac12\dim V$。在标准坐标下
$$
Y=\{(q,p):p_1=\cdots=p_k=0\}\quad(0\le k\le n)
$$
是 coisotropic，其正交补为 $\operatorname{span}\{e_1,\ldots,e_k\}$。

若 $Y=\ker A$，其中 $A$ 为满行秩矩阵，且 $\Omega(u,v)=u^T Jv$，则
$$
Y\text{ coisotropic}\iff AJ^{-1}A^T=0.
$$
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
