---
id: alg.galois-correspondence
type: thm
title: "Galois 对应与判别式"
english: "Galois correspondence and discriminants"
summary: "复习Galois 对应与判别式的核心结论与使用方法。"
requires: ["alg.field-extensions"]
tags: ["高等代数","课程复习"]
minutes: 8
order: 8
---
:::statement
有限 Galois 扩张 $L/F$ 的中间域 $E$ 与 $\operatorname{Gal}(L/F)$ 的子群反序对应，分别取 $\operatorname{Gal}(L/E)$ 和固定域 $L^H$。若 $f$ 是特征不为 $2$ 的域上不可约可分三次式，则其 Galois 群在根上的传递作用给出 $A_3$ 或 $S_3$。判别式为基域的平方当且仅当群为 $A_3$。
:::

:::proof
取根差乘积 $\delta=\prod_{i<j}(r_i-r_j)$。根的置换在 $\delta$ 上乘以其符号，且 $\delta^2$ 为首一多项式的判别式（可先把 $f$ 化为首一）。所以 $\delta\in F$ 等价于群只含偶置换。传递性保证群阶是 $3$ 的倍数，故只剩两种可能。
:::

**出处**　项目讨论 · 三次多项式、Galois 群与判别式
