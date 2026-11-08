---
id: alg.modulo-exercise
title: 从整数到剩余类
english: The modulo homomorphism
summary: 计算模 n 映射的核与像，验证第一同构定理。
targets: [alg.homomorphism, alg.first-isomorphism]
tags: [计算, 商群]
difficulty: 基础
minutes: 8
order: 1
---
:::problem
设 $n\ge2$。考虑加法群同态 $\varphi:\Z\to\Z/n\Z$，$k\mapsto[k]$。求核与像，并写出第一同构定理在此处的结论。
:::

:::hint
哪些整数与 $0$ 属于同一个模 $n$ 的剩余类？每个剩余类是否都有整数代表？
:::

:::solution
核为 $n\Z$，像为整个 $\Z/n\Z$。第一同构定理给出 $\Z/n\Z\cong\operatorname{im}\varphi$，同构把陪集 $k+n\Z$ 映为剩余类 $[k]$。
:::
