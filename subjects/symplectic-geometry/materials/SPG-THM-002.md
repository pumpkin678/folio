---
id: SPG-THM-002
type: thm
title: 辛正交补维数公式与双重正交
english: Orthogonal dimension and double complement
summary: dimY+dimYΩ=dimV 且 (YΩ)Ω=Y。
requires:
  - SPG-DEF-002
  - SPG-DEF-005
related:
  - SPG-THM-003
  - SPG-THM-004
related_questions:
  - SPG-HW-001
tags:
  - 辛几何
  - 辛线性代数
aliases:
  - SPG-THM-002
  - Orthogonal dimension and double complement
track: 辛线性代数
order: 15
minutes: 6
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
formula: \dim Y+\dim Y^\Omega=\dim V
---

:::statement
### Statement

设 $(V,\Omega)$ 为有限维 symplectic vector space，$Y\subseteq V$ 为任意线性子空间，则
$$
\boxed{\dim Y+\dim Y^\Omega=\dim V},\qquad\boxed{(Y^\Omega)^\Omega=Y}.
$$
:::

:::proof
### Proof

映射 $\Phi:V\to Y^*$，$\Phi(v)(y)=\Omega(v,y)$。由于 $\Omega^\flat:V\to V^*$ 是同构，而 restriction $V^*\twoheadrightarrow Y^*$ 是满射，$\Phi$ 满射。且 $\ker\Phi=Y^\Omega$。由 rank-nullity，
$$\dim V=\dim Y^\Omega+\dim Y^*=\dim Y^\Omega+\dim Y.$$
对 $y\in Y$、$v\in Y^\Omega$，有 $\Omega(y,v)=-\Omega(v,y)=0$，所以 $Y\subseteq(Y^\Omega)^\Omega$。对 $Y^\Omega$ 再使用维数公式，得 $\dim (Y^\Omega)^\Omega=\dim Y$。两者相等。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
