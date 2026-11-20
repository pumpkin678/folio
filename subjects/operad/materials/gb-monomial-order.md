---
id: op.gb-monomial-order
type: def
title: 单项式与单项式序
english: Monomials and monomial orders
summary: 用与乘法相容的良序比较单项式，为首项选择和终止性证明建立共同规则。
tags: [Gröbner 基, 交换多项式]
aliases: [monomial order, term order, lex, grlex, grevlex]
track: Gröbner 基
order: 10
minutes: 6
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
设 $k$ 为域，$R=k[x_1,\ldots,x_n]$，记 $\mathbb N=\{0,1,2,\ldots\}$。对 $\alpha=(\alpha_1,\ldots,\alpha_n)\in\mathbb N^n$，称

$$x^\alpha=x_1^{\alpha_1}\cdots x_n^{\alpha_n}$$

为单项式。这里不把非零系数包含在单项式中。

一个全局单项式序 $\succ$ 是所有单项式上的严格全序，满足：

1. $1\preceq x^\alpha$ 对每个 $\alpha$ 成立。
2. 若 $x^\alpha\succ x^\beta$，则对每个单项式 $x^\gamma$ 都有 $x^{\alpha+\gamma}\succ x^{\beta+\gamma}$。
3. 相应的递增次序是良序，即每个非空单项式集合都有最小元；等价地，不存在无限严格下降链。

本专题始终先固定一个单项式序，后续的首项、初始理想和 Gröbner 基都相对于这个同一的序定义。
:::

:::example
在 $k[x,y]$ 中取字典序（lex）且变量次序为 $x\succ y$：先比较 $x$ 的指数，相同时再比较 $y$ 的指数。例如

$$x\succ y^m\qquad(m\ge1).$$

所以字典序并不先比较总次数。其他常用序包括分次字典序（grlex）和分次逆字典序（grevlex）。使用它们时也必须固定变量次序。
:::

:::intuition
乘法相容性保证：把同一个单项式乘到不等式两边，不会颠倒大小关系。良序性则保证标准首项除法中的严格下降过程不会无限进行；Buchberger 算法不断加入新多项式的终止性还需要另一个上升链论证。
:::
