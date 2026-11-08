---
id: alg.ps2-nilpotent-integrality
title: "带幂零元的整闭包"
english: "Integral closure with nilpotents"
summary: "Advanced Algebra · Problem Sheet 2，第 3 题。"
targets: ["alg.integral-extension"]
tags: ["高等代数","课程作业"]
difficulty: 进阶
minutes: 15
order: 4
---
:::problem
在 $A=\Z[X]/((X-1)^2)\subseteq B=\mathbb Q[X]/((X-1)^2)$ 中证明此包含确实是单射，并求 $A$ 在 $B$ 中的整闭包。
:::

:::hint
以 $\epsilon=X-1$ 改写，先模掉 $\epsilon$。
:::

:::solution
二者分别写成 $\Z\oplus\Z\epsilon$ 与 $\mathbb Q\oplus\mathbb Q\epsilon$，所以包含为单射。若 $a+b\epsilon$ 在 $A$ 上整，则模 $\epsilon$ 后 $a$ 在 $\Z$ 上整，故 $a\in\Z$。反之，若 $a\in\Z$，则 $(a+b\epsilon-a)^2=0$，是首一方程。整闭包为 $\Z\oplus\mathbb Q\epsilon$。
:::

**出处**　Advanced Algebra · Problem Sheet 2，第 3 题。[AdA-ProblemSheet-2.pdf](https://chatgpt.com/library?file_id=libfile_5e61d7e48e548191a7ae1582a6fa1865&account_id=personal)
