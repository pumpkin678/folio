---
id: alg.ps5-infinite-nullstellensatz
title: "无限变量时的零点定理反例"
english: "A counterexample in infinitely many variables"
summary: "Advanced Algebra · Problem Sheet 5，第 2 题。"
targets: ["alg.nullstellensatz"]
tags: ["高等代数","课程作业"]
difficulty: 进阶
minutes: 15
order: 8
---
:::problem
代数闭域上的可数变量多项式环中，真理想是否一定有公共零点？
:::

:::solution
取可数代数闭域 $k=\overline{\mathbb Q}$。在 $k[x,y_a:a\in k]$ 取理想 $J=((x-a)y_a-1:a\in k)$。令 $x\mapsto t$、$y_a\mapsto(t-a)^{-1}$ 映到 $k(t)$，可知 $J$ 为真理想。若有 $k$-值公共零点并令 $x=b\in k$，则 $a=b$ 的方程变成 $-1=0$。
:::

**出处**　Advanced Algebra · Problem Sheet 5，第 2 题。[AdA-ProblemSheet-5.pdf](https://chatgpt.com/library?file_id=libfile_ee5761ce4dec8191a91a12bf970cb512&account_id=personal)
