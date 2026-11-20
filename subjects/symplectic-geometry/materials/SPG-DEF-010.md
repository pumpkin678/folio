---
id: SPG-DEF-010
type: def
title: 辛同胚（线性）
english: Linear symplectomorphism
summary: 保持 Ω 的可逆线性映射。
requires:
  - SPG-DEF-003
  - SPG-DEF-004
related:
  - SPG-THM-001
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-DEF-010
  - Linear symplectomorphism
track: 辛线性代数
order: 10
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
---

:::statement
### Definition

$\Phi:(V,\Omega)\to(V',\Omega')$ 是 **linear symplectomorphism**，若 $\Phi$ 是线性同构且
$$
\Omega'(\Phi u,\Phi v)=\Omega(u,v)\quad\forall u,v\in V.
$$
在同一标准基下，矩阵条件为 $S^TJS=J$。
:::

:::remark
### Remark

满足这一条件的可逆矩阵组成 symplectic group $\operatorname{Sp}(2n,\mathbb R)$。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
