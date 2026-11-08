---
id: alg.integral-extension
type: def
title: "整扩张、整闭包与素理想收缩"
english: "Integral extensions and lying over"
summary: "复习整扩张、整闭包与素理想收缩的核心结论与使用方法。"
requires: []
tags: ["高等代数","课程复习"]
minutes: 8
order: 9
---
:::statement
对交换环包含 $A\subseteq B$，若 $b\in B$ 满足 $A[X]$ 中的首一方程，则称 $b$ 在 $A$ 上整。所有整元素构成 $A$ 在 $B$ 中的整闭包。等价判据为 $A[b]$ 是有限生成 $A$-模。若整个扩张是整的，则每个 $\mathfrak p\in\operatorname{Spec}A$ 都是某个 $\mathfrak q\in\operatorname{Spec}B$ 的收缩（lying over）。
:::

:::intuition
证明 lying over 时，在 $A\setminus\mathfrak p$ 处局部化，在局部化后的上环取极大理想。整性保证其收缩是下环的极大理想，只能是 $\mathfrak p A_{\mathfrak p}$，然后用局部化的素理想对应拉回。
:::

**出处**　Advanced Algebra Sheet 2；项目讨论 · 整扩张与 lying over
