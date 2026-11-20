---
id: "SPG-THM-003"
type: "thm"
subject_id: "symplectic-geometry"
title: "各向同性维数上界"
title_en: "Isotropic dimension bound"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-007", "SPG-THM-002"]
related: ["SPG-THM-004"]
exercises: ["SPG-HW-005"]
tags: []
---

# 各向同性维数上界

**ID** `SPG-THM-003` · **English** Isotropic dimension bound

### Statement
若 $\dim V=2n$，且 $Y\subseteq V$ isotropic，则 $\dim Y\le n$。

### Proof
$Y$ isotropic 等价于 $Y\subseteq Y^\Omega$，于是
$$\dim Y\le\dim Y^\Omega=2n-\dim Y.$$
因此 $2\dim Y\le2n$，即 $\dim Y\le n$。

## Folio links

- **先修**：[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)
- **关联**：[SPG-THM-004 · Lagrangian 的三个等价刻画](../theorems/SPG-THM-004.md)
- **对应习题**：[SPG-HW-005 · Homework 1 · Problem 5：isotropic 维数上界](../exercises/SPG-HW-005.md)
- **被关联的卡片（自动反向链接）**：[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-HW-005 · Homework 1 · Problem 5：isotropic 维数上界](../exercises/SPG-HW-005.md)、[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
