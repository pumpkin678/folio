---
id: op.gb-leading-term
type: def
title: 首单项式、首系数与首项
english: Leading monomial, coefficient and term
summary: 区分不含系数的 LM、首系数 LC 和包含系数的 LT，避免约减计算中的系数错误。
requires: [op.gb-monomial-order]
tags: [Gröbner 基, 交换多项式]
aliases: [leading monomial, leading coefficient, leading term, LM, LC, LT]
track: Gröbner 基
order: 11
minutes: 5
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
在域 $k$ 上的 $R=k[x_1,\ldots,x_n]$ 中固定单项式序 $\succ$。对非零多项式

$$f=\sum_\alpha c_\alpha x^\alpha,$$

令 $x^\beta$ 是有限集合 $\{x^\alpha:c_\alpha\ne0\}$ 中最大的单项式，定义

$$\operatorname{LM}(f)=x^\beta,\qquad
\operatorname{LC}(f)=c_\beta,\qquad
\operatorname{LT}(f)=c_\beta x^\beta.$$

$\operatorname{LM}$ 不包含系数，$\operatorname{LT}$ 包含系数。本专题只对非零多项式使用这些记号；遇到零多项式时单独处理。
:::

:::example
采用字典序 $x\succ y$，对 $f=x-y^2$ 有

$$\operatorname{LM}(f)=x,\qquad \operatorname{LC}(f)=1,\qquad \operatorname{LT}(f)=x.$$

即使 $y^2$ 的总次数更高，字典序中的最大单项式仍为 $x$。
:::

:::remark
若 $a,b\in R$ 均非零，乘法相容性及 $k$ 为域保证

$$\operatorname{LM}(ab)=\operatorname{LM}(a)\operatorname{LM}(b),\qquad
\operatorname{LT}(ab)=\operatorname{LT}(a)\operatorname{LT}(b).$$

原因是两首项的乘积严格大于其他任何单项式乘积，且其系数为两个非零首系数之积，仍然非零。后续约减中的首项相消都依赖这一规则。
:::
