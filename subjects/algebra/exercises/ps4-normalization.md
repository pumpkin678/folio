---
id: alg.ps4-normalization
title: "求二次曲线坐标环的 Noether 基"
english: "Normalization of a quadratic curve"
summary: "Advanced Algebra · Problem Sheet 4，第 2 题（统一按题中定义商代数的系数域 F）。"
targets: ["alg.noether-normalization"]
tags: ["高等代数","课程作业"]
difficulty: 进阶
minutes: 15
order: 7
---
:::problem
设 $F$ 中 $-1$ 不是平方。证明 $X^2+Y^2$ 在 $F[X,Y]$ 中不可约，并为商代数找一组正规化参数。
:::

:::solution
在 $F(X)$ 中，若 $Y^2+X^2$ 有根，则 $F(X)$ 含有 $-1$ 的平方根。基域在纯超越扩张中相对代数闭（可用[函数域习题](ref:alg.ps3-function-field-valuation)），故不可能。由 Gauss 引理得到不可约性。参数 $\bar X$ 即可，且商代数作为 $F[\bar X]$-模有基 $1,\bar Y$。
:::

**出处**　Advanced Algebra · Problem Sheet 4，第 2 题（统一按题中定义商代数的系数域 F）。[AdA-ProblemSheet-4.pdf](https://chatgpt.com/library?file_id=libfile_ae51733ce5008191b97a6f06a3d5c79f&account_id=personal)
