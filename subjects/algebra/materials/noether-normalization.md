---
id: alg.noether-normalization
type: thm
title: "代数独立与 Noether 正规化"
english: "Algebraic independence and Noether normalization"
summary: "复习代数独立与 Noether 正规化的核心结论与使用方法。"
requires: ["alg.integral-extension"]
tags: ["高等代数","课程复习"]
minutes: 8
order: 11
---
:::statement
若评价映射 $F[T_1,\ldots,T_d]\to B$ 发送 $T_i$ 到 $b_i$ 且为单射，则这些元素在 $F$ 上代数独立。对非零有限生成 $F$-代数 $B$，Noether 正规化给出代数独立元素，使 $B$ 成为子环 $F[b_1,\ldots,b_d]$ 的有限模。
:::

:::example
在 $B=F[X,Y]/(X^2+Y^2)$ 中，$\bar X$ 代数独立。按 $Y$ 除以首一关系式可唯一写成 $a(\bar X)+b(\bar X)\bar Y$，所以 $B$ 在 $F[\bar X]$ 上自由秩二。
:::

**出处**　Advanced Algebra Sheet 4，第 2、4 题涉及正规化与代数独立
