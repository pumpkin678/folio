---
id: alg.ps5-parametrized-set
title: "参数像是否 Zariski 闭"
english: "Is the parametrized image Zariski closed?"
summary: "Advanced Algebra · Problem Sheet 5，第 3 题。"
targets: ["alg.affine-algebraic-set","alg.nullstellensatz"]
tags: ["高等代数","课程作业"]
difficulty: 进阶
minutes: 15
order: 9
---
:::problem
考察 $V=\{(t^2,s^3,st):s,t\in\C\}$。求其定义方程和定义域。
:::

:::solution
令坐标为 $(x,y,z)$。显然 $z^6=x^3y^2$。若 $xy=0$，则 $z=0$，可各自选择平方根和立方根。若 $xy\ne0$，先取任意根 $t_0,s_0$；比值 $z/(s_0t_0)$ 为六次单位根，可由一个二次与一个三次单位根相乘实现。故整个零点集均被取到。最小系数域是 $\mathbb Q$。在 $\mathbb Q[x,y,z]/(z^6-x^3y^2)$ 中可把 $z$ 次数降至小于 $6$；不同标准单项式 $x^iy^jz^\ell$ 的像 $t^{2i+\ell}s^{3j+\ell}$ 不同，因为两个指数决定 $\ell$ 模 $2$ 与模 $3$。所以消失理想就是该主理想。
:::

**出处**　Advanced Algebra · Problem Sheet 5，第 3 题。[AdA-ProblemSheet-5.pdf](https://chatgpt.com/library?file_id=libfile_ee5761ce4dec8191a91a12bf970cb512&account_id=personal)
