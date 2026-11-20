---
id: op.gb-normal-form-uniqueness
type: thm
title: Gröbner 基下正规形的唯一性
english: Uniqueness of normal forms
summary: 同一个多项式的两个合法余式之差仍在理想中，其首项整除性质迫使这个差为零。
requires: [op.gb-grobner-basis, op.gb-division-theorem]
tags: [Gröbner 基, 正规形, 唯一性]
track: Gröbner 基
order: 17
minutes: 6
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
固定域上的多项式环、单项式序及理想 $I$ 的 Gröbner 基 $G$。若同一个 $f$ 有两个除法表示

$$f=\sum_i a_i g_i+r_1=\sum_i b_i g_i+r_2,$$

且 $r_1,r_2$ 的每个单项式都不被任何 $\operatorname{LM}(g_i)$ 整除，则 $r_1=r_2$。

因此可无歧义地记余式为 $\operatorname{NF}_G(f)$。它不依赖除数的排列或合法约减路径，但仍依赖所固定的理想和单项式序。这里的唯一性针对余式，并不声称商多项式 $a_i$ 唯一。
:::

:::proof
**1. 差属于理想。** 两个表示相减得到

$$r_1-r_2=\sum_i(b_i-a_i)g_i\in I.$$

**2. 差仍只有不可约单项式。** 相减时，一个单项式的系数可能改变或抵消，但不会产生在 $r_1,r_2$ 中均未出现的新单项式。因此 $r_1-r_2$ 的每个非零单项式都不被任何 $\operatorname{LM}(g_i)$ 整除。

**3. 排除非零差。** 若 $r_1-r_2\ne0$，由它属于 $I$ 及 Gröbner 基定义，某个 $\operatorname{LM}(g_i)$ 必须整除 $\operatorname{LM}(r_1-r_2)$，与第 2 步矛盾。故 $r_1-r_2=0$。

核验：比较的是同一 $f$ 的两个合法余式。“两者每项不可约”本身不能证明它们相等，还必须使用其差属于同一个理想。
:::
