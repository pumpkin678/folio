---
id: SPG-EX-004
type: eg
title: 对称线性映射的图像是 Lagrangian
english: Graphs of symmetric linear maps
summary: Graph(A) 为 Lagrangian ⇔ A=Aᵀ。
requires:
  - SPG-DEF-009
related:
  - SPG-THM-004
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-EX-004
  - Graphs of symmetric linear maps
track: 辛线性代数
order: 24
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::example
设 $A:\mathbb R^n\to\mathbb R^n$ 为线性映射，取
$$L_A=\{(q,Aq):q\in\mathbb R^n\}\subseteq\mathbb R^{2n}.$$
因为 $\dim L_A=n$，只需验证 isotropic：对 $q,Q\in\mathbb R^n$，
$$\omega_0((q,Aq),(Q,AQ))=q^TAQ-(Aq)^TQ=q^T(A-A^T)Q.$$
所以
$$L_A\text{ Lagrangian}\iff A=A^T.$$
这为后续 generating functions 与 Lagrangian graphs 做准备。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
