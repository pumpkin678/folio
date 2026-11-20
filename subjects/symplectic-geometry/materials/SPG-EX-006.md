---
id: SPG-EX-006
type: eg
title: 余切丛零截面是 Lagrangian
english: Zero section of a cotangent bundle
summary: 一个从线性空间过渡到流形的典型例子。
requires:
  - SPG-DEF-011
  - SPG-DEF-013
related:
  - SPG-EX-003
tags:
  - 辛几何
  - 预习
aliases:
  - SPG-EX-006
  - Zero section of a cotangent bundle
track: 辛线性代数
order: 26
minutes: 4
source_note: Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8
source_url: https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
source_verified: false
imported_status: 预习
---

:::example
设 $X$ 是 $n$ 维流形，局部坐标 $q_i$，在 $T^*X$ 上用纤维坐标 $p_i$，典范辛形式为
$$\omega_{\mathrm{can}}=\sum_i dq_i\wedge dp_i.$$
zero section $X_0=\{p_1=\cdots=p_n=0\}$ 维数为 $n$。沿零截面的切向量没有 $p$ 方向分量，故 $\omega_{\mathrm{can}}|_{TX_0}=0$。所以 $X_0$ 为 Lagrangian submanifold。

*这是后续章节的提前示例，不是 Homework 1 的额外题目。*
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。书目信息按原包保留。
