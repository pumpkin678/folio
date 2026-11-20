---
id: "SPG-EX-004"
type: "ex"
subject_id: "symplectic-geometry"
title: "对称线性映射的图像是 Lagrangian"
title_en: "Graphs of symmetric linear maps"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-009"]
related: ["SPG-THM-004"]
exercises: []
tags: []
---

# 对称线性映射的图像是 Lagrangian

**ID** `SPG-EX-004` · **English** Graphs of symmetric linear maps

设 $A:\mathbb R^n\to\mathbb R^n$ 为线性映射，取
$$L_A=\{(q,Aq):q\in\mathbb R^n\}\subseteq\mathbb R^{2n}.$$
因为 $\dim L_A=n$，只需验证 isotropic：对 $q,Q\in\mathbb R^n$，
$$\omega_0((q,Aq),(Q,AQ))=q^TAQ-(Aq)^TQ=q^T(A-A^T)Q.$$
所以
$$L_A\text{ Lagrangian}\iff A=A^T.$$
这为后续 generating functions 与 Lagrangian graphs 做准备。

## Folio links

- **先修**：[SPG-DEF-009 · 拉格朗日子空间](../definitions/SPG-DEF-009.md)
- **关联**：[SPG-THM-004 · Lagrangian 的三个等价刻画](../theorems/SPG-THM-004.md)
- **对应习题**：—
- **被关联的卡片（自动反向链接）**：[SPG-DEF-009 · 拉格朗日子空间](../definitions/SPG-DEF-009.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
