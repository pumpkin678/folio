---
id: op.gb-reduction-normal-form
type: def
title: 多项式约减与除法余式
english: Polynomial reduction and remainders
summary: 用首项消去进行约减，并区分一般生成集的除法余式与 Gröbner 基的唯一正规形。
requires: [op.gb-leading-term]
tags: [Gröbner 基, 交换多项式]
aliases: [reduction, normal form, remainder, 多变量除法]
track: Gröbner 基
order: 14
minutes: 8
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
设 $k$ 为域，在 $R=k[x_1,\ldots,x_n]$ 中固定单项式序。对非零 $f,g$，若 $\operatorname{LM}(g)\mid\operatorname{LM}(f)$，则首项约减为

$$f\longmapsto f-\frac{\operatorname{LT}(f)}{\operatorname{LT}(g)}g.$$

其中商是 $k$ 中的系数乘以一个单项式，因而仍属于 $R$。更一般地，若 $f$ 的某一项为 $c x^\alpha$，且 $\operatorname{LM}(g)\mid x^\alpha$，也可进行该项的约减

$$f\longmapsto f-\frac{c}{\operatorname{LC}(g)}
\frac{x^\alpha}{\operatorname{LM}(g)}g.$$

给定有限有序除数集 $G=(g_1,\ldots,g_s)$，其中每个 $g_i\ne0$。标准多变量除法产生

$$f=\sum_{i=1}^s q_i g_i+r,$$

并使 $r$ 的每个非零项的单项式都不被任何 $\operatorname{LM}(g_i)$ 整除。本专题称 $r$ 为合法余式时，同时要求上述表示成立，即 $f-r\in\langle G\rangle$，以及每项不可约这两个条件。
:::

:::remark
首项约减若产生非零多项式，其首单项式严格变小。约减任意非首项时，当前首单项式却可能保持不变，因此不能把“每步首单项式严格下降”原封不动地用于任意项约减。

标准除法始终处理工作多项式的当前首项：可以约减时就消去它，不能约减时就把它移入余式，并从工作多项式中删除。这样的算法及其终止性见[多变量除法定理](ref:op.gb-division-theorem)。
:::

:::remark
对一般的 $G$，生成元顺序或约减策略可能影响所得余式。只有在固定一个具体标准除法过程后，才用 $\operatorname{NF}_G(f)$ 表示该过程的结果。若 $G$ 是 Gröbner 基，[正规形唯一性](ref:op.gb-normal-form-uniqueness)保证同一 $f$ 的所有合法余式相同，此时 $\operatorname{NF}_G(f)$ 不再依赖除法选择。

即使 $G$ 不是 Gröbner 基，余式为零仍能推出 $f\in\langle G\rangle$；但非零余式一般不能推出 $f\notin\langle G\rangle$。
:::
