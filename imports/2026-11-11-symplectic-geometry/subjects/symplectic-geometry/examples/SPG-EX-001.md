---
id: "SPG-EX-001"
type: "ex"
subject_id: "symplectic-geometry"
title: "标准辛空间与矩阵表示"
title_en: "Standard symplectic space"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-003", "SPG-DEF-004"]
related: ["SPG-DEF-007", "SPG-EX-002"]
exercises: []
tags: []
---

# 标准辛空间与矩阵表示

**ID** `SPG-EX-001` · **English** Standard symplectic space

在 $\mathbb R^{2n}$ 中用 $(q_1,\ldots,q_n,p_1,\ldots,p_n)$ 作坐标，定义
$$\omega_0=\sum_{i=1}^n dq_i\wedge dp_i.$$
把向量写为 $u=(q,p)$、$v=(Q,P)$，则
$$\omega_0(u,v)=q\cdot P-p\cdot Q=u^T\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}v.$$
基 $e_i=\partial_{q_i}$、$f_i=\partial_{p_i}$ 构成 symplectic basis。

## Folio links

- **先修**：[SPG-DEF-003 · 辛向量空间](../definitions/SPG-DEF-003.md)、[SPG-DEF-004 · 辛基](../definitions/SPG-DEF-004.md)
- **关联**：[SPG-DEF-007 · 各向同性子空间](../definitions/SPG-DEF-007.md)、[SPG-EX-002 · R⁴ 中四类子空间](../examples/SPG-EX-002.md)
- **对应习题**：—
- **被关联的卡片（自动反向链接）**：[SPG-DEF-004 · 辛基](../definitions/SPG-DEF-004.md)、[SPG-DEF-011 · 辛流形与辛形式](../definitions/SPG-DEF-011.md)、[SPG-THM-001 · 辛基标准形与偶维性](../theorems/SPG-THM-001.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
