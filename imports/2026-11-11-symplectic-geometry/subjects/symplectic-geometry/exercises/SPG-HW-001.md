---
id: "SPG-HW-001"
type: "hw"
subject_id: "symplectic-geometry"
title: "Homework 1 · Problem 1：辛正交补维数"
title_en: "Dimension of symplectic orthogonal"
status: "completed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-002", "SPG-DEF-005"]
related: ["SPG-THM-002"]
exercises: []
tags: ["linear-algebra", "orthogonal", "proof"]
---

# Homework 1 · Problem 1：辛正交补维数

**ID** `SPG-HW-001` · **English** Dimension of symplectic orthogonal

### Problem (paraphrase)
给定 $(V,\Omega)$ 的子空间 $Y$，证明
$$\dim Y+\dim Y^\Omega=\dim V.$$

### Key hint
考虑 $\Phi:V\to Y^*$，$\Phi(v)(y)=\Omega(v,y)$；计算核与像。

### Solution
由 $\Omega$ 非退化，$\Omega^\flat:V\xrightarrow{\sim}V^*$ 是同构；限制映射 $\rho:V^*\to Y^*$ 满射，因为 $Y$ 上的任意线性泛函都可延拓到 $V$。于是 $\Phi=\rho\circ\Omega^\flat$ 满射，且
$$\ker\Phi=\{v:\Omega(v,y)=0\ \forall y\in Y\}=Y^\Omega.$$
利用 rank-nullity，
$$\dim V=\dim\ker\Phi+\dim\operatorname{Im}\Phi=\dim Y^\Omega+\dim Y^*=\dim Y^\Omega+\dim Y.$$
证毕。

### Personal review
- **状态**：已完成（按学习记录）。
- **个人错题**：无。
- **复习定位**：这是非退化性 $V\simeq V^*$ 与 rank-nullity 的直接应用。

## Folio links

- **先修**：[SPG-DEF-002 · 非退化性](../definitions/SPG-DEF-002.md)、[SPG-DEF-005 · 辛正交补](../definitions/SPG-DEF-005.md)
- **关联**：[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)
- **对应习题**：—
- **被关联的卡片（自动反向链接）**：[SPG-DEF-002 · 非退化性](../definitions/SPG-DEF-002.md)、[SPG-DEF-005 · 辛正交补](../definitions/SPG-DEF-005.md)、[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
