---
id: SPG-THM-001
type: thm
title: 辛基标准形与偶维性
english: Symplectic normal form
summary: 非退化反对称型在辛基下有标准矩阵，故维数为偶数。
requires:
  - SPG-DEF-002
  - SPG-DEF-003
related:
  - SPG-DEF-004
  - SPG-EX-001
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-THM-001
  - Symplectic normal form
track: 辛线性代数
order: 14
minutes: 6
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Statement

任意有限维 symplectic vector space $(V,\Omega)$ 都存在 symplectic basis $e_1,\ldots,e_n,f_1,\ldots,f_n$。特别地 $\dim V=2n$，且矩阵为
$$J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}.$$
:::

:::proof
### Proof sketch

取 $e_1\ne0$。由非退化性存在 $f_1$ 使 $\Omega(e_1,f_1)=1$。令 $U_1=\operatorname{span}\{e_1,f_1\}$，则 $\Omega|_{U_1}$ 非退化，且 $V=U_1\oplus U_1^\Omega$。在 $U_1^\Omega$ 上归纳，直到维数为零。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
