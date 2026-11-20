---
id: "SPG-THM-005"
type: "thm"
subject_id: "symplectic-geometry"
title: "辛子空间的三个等价刻画"
title_en: "Symplectic subspace criteria"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-006", "SPG-THM-002"]
related: ["SPG-EX-002"]
exercises: []
tags: []
---

# 辛子空间的三个等价刻画

**ID** `SPG-THM-005` · **English** Symplectic subspace criteria

### Statement
对 $Y\subseteq V$：
$$
\Omega|_Y\text{ nondegenerate}\iff Y\cap Y^\Omega=\{0\}\iff V=Y\oplus Y^\Omega.
$$

### Proof
$\Omega|_Y$ 的 radical 正是 $Y\cap Y^\Omega$，故前两个条件等价。结合 $\dim Y+\dim Y^\Omega=\dim V$，交集为零当且仅当直和为整个 $V$。

## Folio links

- **先修**：[SPG-DEF-006 · 辛子空间](../definitions/SPG-DEF-006.md)、[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)
- **关联**：[SPG-EX-002 · R⁴ 中四类子空间](../examples/SPG-EX-002.md)
- **对应习题**：—
- **被关联的卡片（自动反向链接）**：[SPG-DEF-006 · 辛子空间](../definitions/SPG-DEF-006.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
