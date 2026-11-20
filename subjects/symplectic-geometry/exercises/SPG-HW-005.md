---
id: SPG-HW-005
title: Homework 1 · Problem 5：isotropic 维数上界
english: Isotropic dimension bound
summary: 证明 isotropic Y 的维数至多 dimV/2。
targets:
  - SPG-DEF-007
  - SPG-THM-002
related:
  - SPG-THM-003
tags:
  - 辛几何
  - 辛线性代数
  - linear-algebra
  - isotropic
  - proof
aliases:
  - SPG-HW-005
  - Isotropic dimension bound
track: 辛线性代数
order: 28
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

设 $Y\subseteq(V,\Omega)$ 为 isotropic，证明
$$\dim Y\le\tfrac12\dim V.$$
:::

:::solution
### Solution

由 isotropic 定义，$Y\subseteq Y^\Omega$。于是
$$\dim Y\le\dim Y^\Omega=\dim V-\dim Y,$$
其中等号使用 Problem 1。移项得 $2\dim Y\le\dim V$，证毕。
:::

:::remark
### Personal review

- **状态**：已完成（按学习记录）。
- **个人错题**：无。
- **复习定位**：关键只有包含关系与维数公式。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译；书目与题号按原包保留。
