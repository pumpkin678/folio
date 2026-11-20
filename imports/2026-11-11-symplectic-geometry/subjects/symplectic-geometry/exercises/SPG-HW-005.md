---
id: "SPG-HW-005"
type: "hw"
subject_id: "symplectic-geometry"
title: "Homework 1 · Problem 5：isotropic 维数上界"
title_en: "Isotropic dimension bound"
status: "completed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-007", "SPG-THM-002"]
related: ["SPG-THM-003"]
exercises: []
tags: ["linear-algebra", "isotropic", "proof"]
---

# Homework 1 · Problem 5：isotropic 维数上界

**ID** `SPG-HW-005` · **English** Isotropic dimension bound

### Problem (paraphrase)
设 $Y\subseteq(V,\Omega)$ 为 isotropic，证明
$$\dim Y\le\tfrac12\dim V.$$

### Solution
由 isotropic 定义，$Y\subseteq Y^\Omega$。于是
$$\dim Y\le\dim Y^\Omega=\dim V-\dim Y,$$
其中等号使用 Problem 1。移项得 $2\dim Y\le\dim V$，证毕。

### Personal review
- **状态**：已完成（按学习记录）。
- **个人错题**：无。
- **复习定位**：关键只有包含关系与维数公式。

## Folio links

- **先修**：[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)
- **关联**：[SPG-THM-003 · 各向同性维数上界](../theorems/SPG-THM-003.md)
- **对应习题**：—
- **被关联的卡片（自动反向链接）**：[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-THM-003 · 各向同性维数上界](../theorems/SPG-THM-003.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
