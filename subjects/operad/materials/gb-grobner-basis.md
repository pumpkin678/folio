---
id: op.gb-grobner-basis
type: def
title: Gröbner 基及首单项式整除条件
english: Gröbner bases and leading-monomial divisibility
summary: Gröbner 基不仅控制理想的生成，还捕捉理想中所有非零多项式的首单项式。
requires: [op.gb-initial-ideal]
tags: [Gröbner 基, 交换多项式]
aliases: [Groebner basis, Grobner basis, 格罗布纳基]
track: Gröbner 基
order: 13
minutes: 7
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
设 $k$ 为域，$R=k[x_1,\ldots,x_n]$，固定单项式序 $\succ$。令 $I\subseteq R$ 为理想，$G=\{g_1,\ldots,g_s\}\subseteq I\setminus\{0\}$ 为有限集合。

若

$$\operatorname{in}_{\succ}(I)
=\langle\operatorname{LM}(g_1),\ldots,\operatorname{LM}(g_s)\rangle,$$

就称 $G$ 为 $I$ 关于 $\succ$ 的 Gröbner 基。等价地，对每个 $0\ne f\in I$，存在 $g_i\in G$ 满足

$$\operatorname{LM}(g_i)\mid\operatorname{LM}(f).$$

对于零理想，允许取空集合为 Gröbner 基；此时两个条件都成立。
:::

:::proof
若初始理想的等式成立，则 $0\ne f\in I$ 的首单项式属于由 $\operatorname{LM}(g_i)$ 生成的单项式理想。由单项式理想的整除判别，某个 $\operatorname{LM}(g_i)$ 整除它。

反过来，若首单项式整除条件成立，则初始理想的每个生成元 $\operatorname{LM}(f)$ 都属于 $\langle\operatorname{LM}(g_1),\ldots,\operatorname{LM}(g_s)\rangle$，给出一个方向的包含。另一个方向来自 $g_i\in I$，所以两个理想相等。
:::

:::intuition
理想中的线性组合可能让生成元的首项相互抵消，并露出新的首单项式。Gröbner 基要求这些新首单项式仍然能被当前基的某个首单项式整除，因此可以继续消去。
:::

:::remark
这个定义没有预先假定 $I=\langle G\rangle$；该等式会由除法与首项整除条件推出，见[生成性质与理想成员判别](ref:op.gb-membership)。仅有 $I=\langle G\rangle$ 则不足以保证 $G$ 是 Gröbner 基。
:::
