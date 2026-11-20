---
id: SPG-HW-007
title: Homework 1 · Problem 7：Lagrangian 等价刻画
english: Three criteria for Lagrangian subspaces
summary: 证明 Lagrangian ⇔ isotropic+coisotropic ⇔ Y=YΩ。
targets:
  - SPG-DEF-007
  - SPG-DEF-008
  - SPG-DEF-009
  - SPG-THM-002
related:
  - SPG-THM-004
tags:
  - 辛几何
  - 辛线性代数
  - linear-algebra
  - lagrangian
  - proof
aliases:
  - SPG-HW-007
  - Three criteria for Lagrangian subspaces
track: 辛线性代数
order: 29
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

依原书定义，$Y$ Lagrangian 当且仅当 $Y$ isotropic 且 $\dim Y=\frac12\dim V$。证明以下三个条件等价：
1. $Y$ Lagrangian；
2. $Y$ 同时 isotropic 和 coisotropic；
3. $Y=Y^\Omega$。
:::

:::solution
### Solution

设 $\dim V=2n$。

**1 $\Rightarrow$ 3.** 因为 $Y$ isotropic，$Y\subseteq Y^\Omega$。又 $\dim Y=n$，由 Problem 1，$\dim Y^\Omega=2n-n=n$，因此 $Y=Y^\Omega$。

**3 $\Rightarrow$ 2.** $Y=Y^\Omega$ 同时给出 $Y\subseteq Y^\Omega$ 与 $Y^\Omega\subseteq Y$，分别是 isotropic、coisotropic 的定义。

**2 $\Rightarrow$ 1.** 两个包含关系给出 $Y=Y^\Omega$，于是由 Problem 1 得 $2\dim Y=2n$，即 $\dim Y=n$。结合 $Y$ isotropic，正是 Lagrangian 定义。
:::

:::remark
### Personal review

- **状态**：已完成（按学习记录）。
- **个人错题**：无。
- **复习定位**：牢记原书以“isotropic + 半维”作定义，$Y=Y^\Omega$ 是等价刻画，不要混淆逻辑顺序。
:::

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译；书目与题号按原包保留。
