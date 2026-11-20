---
id: "SPG-DEF-011"
type: "def"
subject_id: "symplectic-geometry"
title: "辛流形与辛形式"
title_en: "Symplectic manifold and symplectic form"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-003"]
related: ["SPG-DEF-012", "SPG-THM-007", "SPG-EX-001"]
exercises: []
tags: []
---

# 辛流形与辛形式

**ID** `SPG-DEF-011` · **English** Symplectic manifold and symplectic form

### Definition
**Symplectic manifold** $(M^{2n},\omega)$ 是光滑流形及一个 2-form $\omega\in\Omega^2(M)$，使得
1. $d\omega=0$ (**closed**);
2. 对每个 $x\in M$，双线性型 $\omega_x$ 在 $T_xM$ 上 **nondegenerate**。

### Difference from linear algebra
线性辛向量空间只要求非退化的 skew-symmetric form；流形还需要 $d\omega=0$。

### Local model
$(\mathbb R^{2n},\omega_0)$，$\omega_0=\sum_{i=1}^n dq_i\wedge dp_i$。

## Folio links

- **先修**：[SPG-DEF-003 · 辛向量空间](../definitions/SPG-DEF-003.md)
- **关联**：[SPG-DEF-012 · 辛微分同胚](../definitions/SPG-DEF-012.md)、[SPG-THM-007 · Darboux 定理（预习）](../theorems/SPG-THM-007.md)、[SPG-EX-001 · 标准辛空间与矩阵表示](../examples/SPG-EX-001.md)
- **对应习题**：—
- **被关联的卡片（自动反向链接）**：[SPG-DEF-003 · 辛向量空间](../definitions/SPG-DEF-003.md)、[SPG-DEF-012 · 辛微分同胚](../definitions/SPG-DEF-012.md)、[SPG-DEF-013 · 拉格朗日子流形](../definitions/SPG-DEF-013.md)、[SPG-EX-006 · 余切丛零截面是 Lagrangian](../examples/SPG-EX-006.md)、[SPG-THM-007 · Darboux 定理（预习）](../theorems/SPG-THM-007.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
