---
id: "SPG-DEF-007"
type: "def"
subject_id: "symplectic-geometry"
title: "各向同性子空间"
title_en: "Isotropic subspace"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-005"]
related: ["SPG-DEF-008", "SPG-DEF-009", "SPG-THM-003"]
exercises: ["SPG-HW-005", "SPG-HW-007"]
tags: []
---

# 各向同性子空间

**ID** `SPG-DEF-007` · **English** Isotropic subspace

### Definition
$Y\subseteq(V,\Omega)$ 称为 **isotropic**，若
$$
\Omega|_{Y\times Y}=0\quad\iff\quad Y\subseteq Y^\Omega.
$$
即 $Y$ 中任意两向量的辛配对为零。

### Dimension and matrix test
$$
\dim Y\le\tfrac12\dim V.
$$
若 $Y=\operatorname{Im}B$，则 $Y$ isotropic 当且仅当 $B^TJB=0$。

### Examples
$\operatorname{span}\{e_1,\ldots,e_k\}$（$0\le k\le n$）是 isotropic；任意一维子空间也是 isotropic。

## Folio links

- **先修**：[SPG-DEF-005 · 辛正交补](../definitions/SPG-DEF-005.md)
- **关联**：[SPG-DEF-008 · 余各向同性子空间](../definitions/SPG-DEF-008.md)、[SPG-DEF-009 · 拉格朗日子空间](../definitions/SPG-DEF-009.md)、[SPG-THM-003 · 各向同性维数上界](../theorems/SPG-THM-003.md)
- **对应习题**：[SPG-HW-005 · Homework 1 · Problem 5：isotropic 维数上界](../exercises/SPG-HW-005.md)、[SPG-HW-007 · Homework 1 · Problem 7：Lagrangian 等价刻画](../exercises/SPG-HW-007.md)
- **被关联的卡片（自动反向链接）**：[SPG-DEF-005 · 辛正交补](../definitions/SPG-DEF-005.md)、[SPG-DEF-008 · 余各向同性子空间](../definitions/SPG-DEF-008.md)、[SPG-DEF-009 · 拉格朗日子空间](../definitions/SPG-DEF-009.md)、[SPG-EX-001 · 标准辛空间与矩阵表示](../examples/SPG-EX-001.md)、[SPG-EX-002 · R⁴ 中四类子空间](../examples/SPG-EX-002.md)、[SPG-HW-005 · Homework 1 · Problem 5：isotropic 维数上界](../exercises/SPG-HW-005.md)、[SPG-HW-007 · Homework 1 · Problem 7：Lagrangian 等价刻画](../exercises/SPG-HW-007.md)、[SPG-THM-003 · 各向同性维数上界](../theorems/SPG-THM-003.md)、[SPG-THM-004 · Lagrangian 的三个等价刻画](../theorems/SPG-THM-004.md)、[SPG-THM-006 · 各向同性与余各向同性的对偶](../theorems/SPG-THM-006.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
