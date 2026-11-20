---
id: op.gb-reduced-basis
type: def
title: 约化 Gröbner 基
english: Reduced Gröbner bases
summary: 在 Gröbner 基上进一步要求首一和相互不可约，为完整计算中的简化步骤提供准确标准。
requires: [op.gb-grobner-basis, op.gb-reduction-normal-form]
tags: [Gröbner 基, 交换多项式]
aliases: [reduced Groebner basis, reduced Grobner basis, 约化基]
track: Gröbner 基
order: 22
minutes: 6
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
设 $k$ 为域，在 $R=k[x_1,\ldots,x_n]$ 中固定单项式序。理想 $I$ 的 Gröbner 基 $G\subseteq I\setminus\{0\}$ 称为约化 Gröbner 基，若：

1. 每个 $g\in G$ 都首一，即 $\operatorname{LC}(g)=1$。
2. 对每个 $g\in G$，$g$ 中出现的每个单项式，都不被任意其他 $h\in G\setminus\{g\}$ 的 $\operatorname{LM}(h)$ 整除。

第二项包括首单项式和非首项的单项式。若 $I=(0)$，约定空集合为其约化 Gröbner 基。
:::

:::example
取 lex 序 $x\succ y$，对 $I=\langle xy-1,x-y^2\rangle$，集合

$$G_{\mathrm{red}}=\{x-y^2,\ y^3-1\}$$

是约化 Gröbner 基。其 Gröbner 性质在[完整算例](ref:op.gb-worked-example)中验证；检查约化条件时，两元素都首一，第一项中的 $x,y^2$ 不被 $y^3$ 整除，第二项中的 $y^3,1$ 不被 $x$ 整除。
:::

:::remark
若要从一组普通生成元中删除一个元素，仅知道它的首单项式被其他首单项式整除，还不足以证明生成的理想保持不变。算例中删去 $xy-1$ 时，同时使用了

$$xy-1=y(x-y^2)+(y^3-1).$$

这个恒等式才直接说明被删除的元素仍属于其余元素生成的理想。本卡补全原笔记在算例中使用的“reduced Gröbner basis”一词的定义。
:::
