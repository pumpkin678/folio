---
id: "SPG-THM-002"
type: "thm"
subject_id: "symplectic-geometry"
title: "辛正交补维数公式与双重正交"
title_en: "Orthogonal dimension and double complement"
status: "reviewed"
source: "Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8"
source_url: "https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf"
prerequisites: ["SPG-DEF-002", "SPG-DEF-005"]
related: ["SPG-THM-003", "SPG-THM-004"]
exercises: ["SPG-HW-001"]
tags: []
---

# 辛正交补维数公式与双重正交

**ID** `SPG-THM-002` · **English** Orthogonal dimension and double complement

### Statement
设 $(V,\Omega)$ 为有限维 symplectic vector space，$Y\subseteq V$ 为任意线性子空间，则
$$
\boxed{\dim Y+\dim Y^\Omega=\dim V},\qquad\boxed{(Y^\Omega)^\Omega=Y}.
$$

### Proof
映射 $\Phi:V\to Y^*$，$\Phi(v)(y)=\Omega(v,y)$。由于 $\Omega^\flat:V\to V^*$ 是同构，而 restriction $V^*\twoheadrightarrow Y^*$ 是满射，$\Phi$ 满射。且 $\ker\Phi=Y^\Omega$。由 rank-nullity，
$$\dim V=\dim Y^\Omega+\dim Y^*=\dim Y^\Omega+\dim Y.$$
对 $y\in Y$、$v\in Y^\Omega$，有 $\Omega(y,v)=-\Omega(v,y)=0$，所以 $Y\subseteq(Y^\Omega)^\Omega$。对 $Y^\Omega$ 再使用维数公式，得 $\dim (Y^\Omega)^\Omega=\dim Y$。两者相等。

## Folio links

- **先修**：[SPG-DEF-002 · 非退化性](../definitions/SPG-DEF-002.md)、[SPG-DEF-005 · 辛正交补](../definitions/SPG-DEF-005.md)
- **关联**：[SPG-THM-003 · 各向同性维数上界](../theorems/SPG-THM-003.md)、[SPG-THM-004 · Lagrangian 的三个等价刻画](../theorems/SPG-THM-004.md)
- **对应习题**：[SPG-HW-001 · Homework 1 · Problem 1：辛正交补维数](../exercises/SPG-HW-001.md)
- **被关联的卡片（自动反向链接）**：[SPG-DEF-005 · 辛正交补](../definitions/SPG-DEF-005.md)、[SPG-DEF-009 · 拉格朗日子空间](../definitions/SPG-DEF-009.md)、[SPG-HW-001 · Homework 1 · Problem 1：辛正交补维数](../exercises/SPG-HW-001.md)、[SPG-HW-005 · Homework 1 · Problem 5：isotropic 维数上界](../exercises/SPG-HW-005.md)、[SPG-HW-007 · Homework 1 · Problem 7：Lagrangian 等价刻画](../exercises/SPG-HW-007.md)、[SPG-THM-003 · 各向同性维数上界](../theorems/SPG-THM-003.md)、[SPG-THM-004 · Lagrangian 的三个等价刻画](../theorems/SPG-THM-004.md)、[SPG-THM-005 · 辛子空间的三个等价刻画](../theorems/SPG-THM-005.md)、[SPG-THM-006 · 各向同性与余各向同性的对偶](../theorems/SPG-THM-006.md)

> 来源：Ana Cannas da Silva, Lectures on Symplectic Geometry, Chapter 1 (§1.1–1.4), Homework 1, p. 8 · [原始讲义](https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf)。题面为中文意译，不代替原书。
