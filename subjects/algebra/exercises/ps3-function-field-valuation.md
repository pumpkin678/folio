---
id: alg.ps3-function-field-valuation
title: "用赋值环排除有理函数"
english: "Excluding a rational function via a valuation"
summary: "Advanced Algebra · Problem Sheet 3，第 1 题。"
targets: ["alg.valuation-ring"]
tags: ["高等代数","课程作业"]
difficulty: 进阶
minutes: 15
order: 5
---
:::problem
令 $K=F(t)$。证明 $F$ 在 $K$ 中相对代数闭。给定超越于 $F$ 的 $b\in K$，构造不含 $b$ 的 $K$ 的赋值环。
:::

:::solution
写 $b=P(t)/Q(t)$ 且分子分母互素。若 $b$ 非常数，则 $P(T)-bQ(T)$ 在 $F(b)[T]$ 中非零且以 $t$ 为根。若 $b/F$ 代数，传递性会推出 $t/F$ 代数，矛盾。若 $Q$ 非常数，取其不可约因子 $q$，由 $q$ 进阶数得 $v_q(b)<0$。若 $Q$ 为常数，则用无穷远处的赋值 $v_\infty(P/Q)=\deg Q-\deg P$。
:::

**出处**　Advanced Algebra · Problem Sheet 3，第 1 题。[AdA-ProblemSheet-3\(1\).pdf](https://chatgpt.com/library?file_id=libfile_8fc4e5e3d1a8819183c055a5e1dac0f6&account_id=personal)
