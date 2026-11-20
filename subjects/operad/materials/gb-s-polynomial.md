---
id: op.gb-s-polynomial
type: def
title: S-多项式与首项抵消
english: S-polynomials and leading-term cancellation
summary: 把两个首项提升到同一最小公倍单项式，再相减以检测尚未处理的首项关系。
requires: [op.gb-leading-term]
tags: [Gröbner 基, 交换多项式]
aliases: [S-polynomial, S-pair, S 多项式]
track: Gröbner 基
order: 18
minutes: 6
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
设 $k$ 为域，在 $R=k[x_1,\ldots,x_n]$ 中固定单项式序。对两个非零多项式 $f,g$，令

$$m=\operatorname{lcm}(\operatorname{LM}(f),\operatorname{LM}(g)).$$

如果 $\operatorname{LM}(f)=x^\alpha$、$\operatorname{LM}(g)=x^\beta$，则 $m$ 在第 $i$ 个变量上的指数为 $\max(\alpha_i,\beta_i)$。定义 S-多项式

$$S(f,g)=\frac{m}{\operatorname{LT}(f)}f
-\frac{m}{\operatorname{LT}(g)}g.$$

这里

$$\frac{m}{\operatorname{LT}(f)}
=\frac{1}{\operatorname{LC}(f)}\frac{m}{\operatorname{LM}(f)}\in R,$$

所以公式中的除法合法；对 $g$ 同理。
:::

:::intuition
两项的首项都恰好变成系数为 $1$ 的单项式 $m$，因此相减后抵消。由乘法相容性，若 $S(f,g)\ne0$，则

$$\operatorname{LM}(S(f,g))\prec m.$$

这个较小的首单项式可能是原来的首单项式集合未能覆盖的新关系。
:::

:::example
取 lex 序 $x\succ y$，令 $f=xy-1$、$g=x-y^2$。因为 $m=xy$，有

$$S(f,g)=(xy-1)-y(x-y^2)=y^3-1.$$

$y^3$ 不能被 $xy$ 或 $x$ 整除，这正是原生成集遗漏的首项关系。后续完整计算见[从普通生成元到约化 Gröbner 基](ref:op.gb-worked-example)。
:::

:::remark
总有 $S(f,g)\in\langle f,g\rangle$。因此“它属于生成的理想”不是额外判据；[Buchberger 判据](ref:op.gb-buchberger-criterion)要求的是所有相关 S-多项式能对当前生成集约减到零。
:::
