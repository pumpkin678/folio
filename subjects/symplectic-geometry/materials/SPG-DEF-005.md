---
id: SPG-DEF-005
type: def
title: 辛正交补
english: Symplectic orthogonal
summary: Y^Ω={v:Ω(v,y)=0 对所有 y∈Y}。
requires:
  - SPG-DEF-003
related:
  - SPG-THM-002
  - SPG-DEF-007
  - SPG-DEF-008
related_questions:
  - SPG-HW-001
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-DEF-005
  - Symplectic orthogonal
track: 辛线性代数
order: 5
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
formula: Y^\Omega=\{v\in V:\Omega(v,y)=0\text{ for all }y\in Y\}
---

:::statement
### Definition

对线性子空间 $Y\subseteq V$，定义
$$
Y^\Omega=\{v\in V:\Omega(v,y)=0\ \forall y\in Y\}.
$$
这是线性子空间。它与欧氏内积正交补不同：辛正交补**可能与 $Y$ 有非零交集**。
:::

:::remark
### Algebraic representation

若 $\Omega(u,v)=u^T Jv$ 且 $Y=\operatorname{Im}B$，则
$$
Y^\Omega=\ker(B^T J).
$$
这里 $B$ 的列是 $Y$ 的一组生成向量。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
