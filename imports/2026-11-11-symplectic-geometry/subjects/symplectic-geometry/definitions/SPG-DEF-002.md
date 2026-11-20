---
id: "SPG-DEF-002"
type: "def"
subject_id: "symplectic-geometry"
title: "非退化性"
title_en: "Nondegeneracy"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-001"]
related: ["SPG-THM-001", "SPG-HW-001"]
exercises: []
tags: []
---

# 非退化性

**ID** `SPG-DEF-002` · **English** Nondegeneracy

### Definition
双线性型 $\Omega$ 非退化指
$$
\bigl(\forall w\in V,\ \Omega(v,w)=0\bigr)\ \Longrightarrow\ v=0.
$$
等价于线性映射
$$
\Omega^\flat:V\to V^*,\qquad v\mapsto\Omega(v,\cdot)
$$
是同构（有限维情形）。

### Check
若 $\Omega$ 在某一基下的矩阵为 $J$，则非退化当且仅当 $\det J\ne0$。

## Folio links

- **先修**：[SPG-DEF-001 · 反对称双线性型](../definitions/SPG-DEF-001.md)
- **关联**：[SPG-THM-001 · 辛基标准形与偶维性](../theorems/SPG-THM-001.md)、[SPG-HW-001 · Homework 1 · Problem 1：辛正交补维数](../exercises/SPG-HW-001.md)
- **对应习题**：—
- **被关联的卡片（自动反向链接）**：[SPG-DEF-001 · 反对称双线性型](../definitions/SPG-DEF-001.md)、[SPG-DEF-003 · 辛向量空间](../definitions/SPG-DEF-003.md)、[SPG-HW-001 · Homework 1 · Problem 1：辛正交补维数](../exercises/SPG-HW-001.md)、[SPG-THM-001 · 辛基标准形与偶维性](../theorems/SPG-THM-001.md)、[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
