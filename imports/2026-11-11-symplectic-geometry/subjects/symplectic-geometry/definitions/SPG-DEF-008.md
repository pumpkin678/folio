---
id: "SPG-DEF-008"
type: "def"
subject_id: "symplectic-geometry"
title: "余各向同性子空间"
title_en: "Coisotropic subspace"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-005"]
related: ["SPG-DEF-007", "SPG-EX-003", "SPG-THM-006"]
exercises: ["SPG-HW-007"]
tags: []
---

# 余各向同性子空间

**ID** `SPG-DEF-008` · **English** Coisotropic subspace

### Definition
$Y\subseteq(V,\Omega)$ 称为 **coisotropic**，若
$$
Y^\Omega\subseteq Y.
$$
等价地，$Y^\Omega$ 是 isotropic subspace，因为 $(Y^\Omega)^\Omega=Y$。

### Dimension and representation
必有 $\dim Y\ge\tfrac12\dim V$。在标准坐标下
$$
Y=\{(q,p):p_1=\cdots=p_k=0\}\quad(0\le k\le n)
$$
是 coisotropic，其正交补为 $\operatorname{span}\{e_1,\ldots,e_k\}$。

若 $Y=\ker A$，其中 $A$ 为满行秩矩阵，且 $\Omega(u,v)=u^T Jv$，则
$$
Y\text{ coisotropic}\iff AJ^{-1}A^T=0.
$$

## Folio links

- **先修**：[SPG-DEF-005 · 辛正交补](../definitions/SPG-DEF-005.md)
- **关联**：[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-EX-003 · 标准 coisotropic 约束子空间](../examples/SPG-EX-003.md)、[SPG-THM-006 · 各向同性与余各向同性的对偶](../theorems/SPG-THM-006.md)
- **对应习题**：[SPG-HW-007 · Homework 1 · Problem 7：Lagrangian 等价刻画](../exercises/SPG-HW-007.md)
- **被关联的卡片（自动反向链接）**：[SPG-DEF-005 · 辛正交补](../definitions/SPG-DEF-005.md)、[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-DEF-009 · 拉格朗日子空间](../definitions/SPG-DEF-009.md)、[SPG-EX-002 · R⁴ 中四类子空间](../examples/SPG-EX-002.md)、[SPG-EX-003 · 标准 coisotropic 约束子空间](../examples/SPG-EX-003.md)、[SPG-HW-007 · Homework 1 · Problem 7：Lagrangian 等价刻画](../exercises/SPG-HW-007.md)、[SPG-THM-004 · Lagrangian 的三个等价刻画](../theorems/SPG-THM-004.md)、[SPG-THM-006 · 各向同性与余各向同性的对偶](../theorems/SPG-THM-006.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
