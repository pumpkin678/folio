---
id: "SPG-DEF-005"
type: "def"
subject_id: "symplectic-geometry"
title: "辛正交补"
title_en: "Symplectic orthogonal"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-003"]
related: ["SPG-THM-002", "SPG-DEF-007", "SPG-DEF-008"]
exercises: ["SPG-HW-001"]
tags: []
---

# 辛正交补

**ID** `SPG-DEF-005` · **English** Symplectic orthogonal

### Definition
对线性子空间 $Y\subseteq V$，定义
$$
Y^\Omega=\{v\in V:\Omega(v,y)=0\ \forall y\in Y\}.
$$
这是线性子空间。它与欧氏内积正交补不同：辛正交补**可能与 $Y$ 有非零交集**。

### Algebraic representation
若 $\Omega(u,v)=u^T Jv$ 且 $Y=\operatorname{Im}B$，则
$$
Y^\Omega=\ker(B^T J).
$$
这里 $B$ 的列是 $Y$ 的一组生成向量。

## Folio links

- **先修**：[SPG-DEF-003 · 辛向量空间](../definitions/SPG-DEF-003.md)
- **关联**：[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)、[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-DEF-008 · 余各向同性子空间](../definitions/SPG-DEF-008.md)
- **对应习题**：[SPG-HW-001 · Homework 1 · Problem 1：辛正交补维数](../exercises/SPG-HW-001.md)
- **被关联的卡片（自动反向链接）**：[SPG-DEF-006 · 辛子空间](../definitions/SPG-DEF-006.md)、[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-DEF-008 · 余各向同性子空间](../definitions/SPG-DEF-008.md)、[SPG-EX-002 · R⁴ 中四类子空间](../examples/SPG-EX-002.md)、[SPG-HW-001 · Homework 1 · Problem 1：辛正交补维数](../exercises/SPG-HW-001.md)、[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
