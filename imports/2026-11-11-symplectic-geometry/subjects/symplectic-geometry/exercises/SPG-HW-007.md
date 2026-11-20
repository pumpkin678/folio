---
id: "SPG-HW-007"
type: "hw"
subject_id: "symplectic-geometry"
title: "Homework 1 · Problem 7：Lagrangian 等价刻画"
title_en: "Three criteria for Lagrangian subspaces"
status: "completed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-007", "SPG-DEF-008", "SPG-DEF-009", "SPG-THM-002"]
related: ["SPG-THM-004"]
exercises: []
tags: ["linear-algebra", "lagrangian", "proof"]
---

# Homework 1 · Problem 7：Lagrangian 等价刻画

**ID** `SPG-HW-007` · **English** Three criteria for Lagrangian subspaces

### Problem (paraphrase)
依原书定义，$Y$ Lagrangian 当且仅当 $Y$ isotropic 且 $\dim Y=\frac12\dim V$。证明以下三个条件等价：
1. $Y$ Lagrangian；
2. $Y$ 同时 isotropic 和 coisotropic；
3. $Y=Y^\Omega$。

### Solution
设 $\dim V=2n$。

**1 $\Rightarrow$ 3.** 因为 $Y$ isotropic，$Y\subseteq Y^\Omega$。又 $\dim Y=n$，由 Problem 1，$\dim Y^\Omega=2n-n=n$，因此 $Y=Y^\Omega$。

**3 $\Rightarrow$ 2.** $Y=Y^\Omega$ 同时给出 $Y\subseteq Y^\Omega$ 与 $Y^\Omega\subseteq Y$，分别是 isotropic、coisotropic 的定义。

**2 $\Rightarrow$ 1.** 两个包含关系给出 $Y=Y^\Omega$，于是由 Problem 1 得 $2\dim Y=2n$，即 $\dim Y=n$。结合 $Y$ isotropic，正是 Lagrangian 定义。

### Personal review
- **状态**：已完成（按学习记录）。
- **个人错题**：无。
- **复习定位**：牢记原书以“isotropic + 半维”作定义，$Y=Y^\Omega$ 是等价刻画，不要混淆逻辑顺序。

## Folio links

- **先修**：[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-DEF-008 · 余各向同性子空间](../definitions/SPG-DEF-008.md)、[SPG-DEF-009 · 拉格朗日子空间](../definitions/SPG-DEF-009.md)、[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)
- **关联**：[SPG-THM-004 · Lagrangian 的三个等价刻画](../theorems/SPG-THM-004.md)
- **对应习题**：—
- **被关联的卡片（自动反向链接）**：[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-DEF-008 · 余各向同性子空间](../definitions/SPG-DEF-008.md)、[SPG-DEF-009 · 拉格朗日子空间](../definitions/SPG-DEF-009.md)、[SPG-THM-004 · Lagrangian 的三个等价刻画](../theorems/SPG-THM-004.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
