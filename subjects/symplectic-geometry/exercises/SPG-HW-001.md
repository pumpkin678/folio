---
id: SPG-HW-001
title: Homework 1 · Problem 1：辛正交补维数
english: Dimension of symplectic orthogonal
summary: 证明 dimY+dimYΩ=dimV。
targets:
  - SPG-DEF-002
  - SPG-DEF-005
related:
  - SPG-THM-002
tags:
  - 辛几何
  - 辛线性代数
  - linear-algebra
  - orthogonal
  - proof
aliases:
  - SPG-HW-001
  - Dimension of symplectic orthogonal
track: 辛线性代数
order: 27
minutes: 10
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
difficulty: 基础
chapter: Chapter 1 · Homework 1
study_date: 2026-11-11
imported_status: 已完成（原学习记录，未区分是否借助提示）
initial_status: completed
---

:::problem
### Problem (paraphrase)

给定 $(V,\Omega)$ 的子空间 $Y$，证明
$$\dim Y+\dim Y^\Omega=\dim V.$$
:::

:::hint
### Key hint

考虑 $\Phi:V\to Y^*$，$\Phi(v)(y)=\Omega(v,y)$；计算核与像。
:::

:::solution
### Solution

由 $\Omega$ 非退化，$\Omega^\flat:V\xrightarrow{\sim}V^*$ 是同构；限制映射 $\rho:V^*\to Y^*$ 满射，因为 $Y$ 上的任意线性泛函都可延拓到 $V$。于是 $\Phi=\rho\circ\Omega^\flat$ 满射，且
$$\ker\Phi=\{v:\Omega(v,y)=0\ \forall y\in Y\}=Y^\Omega.$$
利用 rank-nullity，
$$\dim V=\dim\ker\Phi+\dim\operatorname{Im}\Phi=\dim Y^\Omega+\dim Y^*=\dim Y^\Omega+\dim Y.$$
证毕。
:::

:::remark
### Personal review

- **状态**：已完成（按学习记录）。
- **个人错题**：无。
- **复习定位**：这是非退化性 $V\simeq V^*$ 与 rank-nullity 的直接应用。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译；书目与题号按原包保留。
