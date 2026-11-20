---
id: "SPG-THM-001"
type: "thm"
subject_id: "symplectic-geometry"
title: "辛基标准形与偶维性"
title_en: "Symplectic normal form"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-002", "SPG-DEF-003"]
related: ["SPG-DEF-004", "SPG-EX-001"]
exercises: []
tags: []
---

# 辛基标准形与偶维性

**ID** `SPG-THM-001` · **English** Symplectic normal form

### Statement
任意有限维 symplectic vector space $(V,\Omega)$ 都存在 symplectic basis $e_1,\ldots,e_n,f_1,\ldots,f_n$。特别地 $\dim V=2n$，且矩阵为
$$J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}.$$

### Proof sketch
取 $e_1\ne0$。由非退化性存在 $f_1$ 使 $\Omega(e_1,f_1)=1$。令 $U_1=\operatorname{span}\{e_1,f_1\}$，则 $\Omega|_{U_1}$ 非退化，且 $V=U_1\oplus U_1^\Omega$。在 $U_1^\Omega$ 上归纳，直到维数为零。

## Folio links

- **先修**：[SPG-DEF-002 · 非退化性](../definitions/SPG-DEF-002.md)、[SPG-DEF-003 · 辛向量空间](../definitions/SPG-DEF-003.md)
- **关联**：[SPG-DEF-004 · 辛基](../definitions/SPG-DEF-004.md)、[SPG-EX-001 · 标准辛空间与矩阵表示](../examples/SPG-EX-001.md)
- **对应习题**：—
- **被关联的卡片（自动反向链接）**：[SPG-DEF-002 · 非退化性](../definitions/SPG-DEF-002.md)、[SPG-DEF-004 · 辛基](../definitions/SPG-DEF-004.md)、[SPG-DEF-010 · 辛同胚（线性）](../definitions/SPG-DEF-010.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
