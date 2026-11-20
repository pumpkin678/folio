---
id: "SPG-THM-004"
type: "thm"
subject_id: "symplectic-geometry"
title: "Lagrangian 的三个等价刻画"
title_en: "Three equivalent Lagrangian criteria"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-007", "SPG-DEF-008", "SPG-THM-002"]
related: ["SPG-DEF-009"]
exercises: ["SPG-HW-007"]
tags: []
---

# Lagrangian 的三个等价刻画

**ID** `SPG-THM-004` · **English** Three equivalent Lagrangian criteria

### Statement
设 $\dim V=2n$，$Y\subseteq V$，下列三条件等价：
1. $Y$ 为 Lagrangian：$Y$ isotropic 且 $\dim Y=n$；
2. $Y$ 同时 isotropic 和 coisotropic；
3. $Y=Y^\Omega$。

### Proof
**(1) $\Rightarrow$ (3).** 由 isotropic 得 $Y\subseteq Y^\Omega$，而维数公式给 $\dim Y^\Omega=2n-n=n=\dim Y$，故相等。

**(3) $\Rightarrow$ (2).** 等式同时蕴含 $Y\subseteq Y^\Omega$ 及 $Y^\Omega\subseteq Y$。

**(2) $\Rightarrow$ (1).** 两个包含关系给出 $Y=Y^\Omega$，故 $\dim Y=2n-\dim Y$，于是 $\dim Y=n$；再结合 isotropic 性质即知是 Lagrangian。

## Folio links

- **先修**：[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-DEF-008 · 余各向同性子空间](../definitions/SPG-DEF-008.md)、[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)
- **关联**：[SPG-DEF-009 · 拉格朗日子空间](../definitions/SPG-DEF-009.md)
- **对应习题**：[SPG-HW-007 · Homework 1 · Problem 7：Lagrangian 等价刻画](../exercises/SPG-HW-007.md)
- **被关联的卡片（自动反向链接）**：[SPG-DEF-009 · 拉格朗日子空间](../definitions/SPG-DEF-009.md)、[SPG-EX-002 · R⁴ 中四类子空间](../examples/SPG-EX-002.md)、[SPG-EX-004 · 对称线性映射的图像是 Lagrangian](../examples/SPG-EX-004.md)、[SPG-HW-007 · Homework 1 · Problem 7：Lagrangian 等价刻画](../exercises/SPG-HW-007.md)、[SPG-THM-002 · 辛正交补维数公式与双重正交](../theorems/SPG-THM-002.md)、[SPG-THM-003 · 各向同性维数上界](../theorems/SPG-THM-003.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
