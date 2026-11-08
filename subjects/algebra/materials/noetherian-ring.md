---
id: alg.noetherian-ring
type: thm
title: "Noether 环与 Hilbert 基定理"
english: "Noetherian rings and Hilbert's basis theorem"
summary: "复习Noether 环与 Hilbert 基定理的核心结论与使用方法。"
requires: []
tags: ["高等代数","课程复习"]
minutes: 8
order: 15
---
:::statement
交换环 $A$ 为 Noether 环，当且仅当每个理想有限生成，也等价于理想的升链条件。Hilbert 基定理断言，若 $A$ 是 Noether 环，则 $A[X]$ 也是。故域上有限生成代数的理想均有限生成。
:::

:::intuition
对 $I\subseteq A[X]$，收集各次数上界允许的最高次系数，得到一条理想升链。它稳定后，只需取有限个次数中的有限组代表多项式。对任意 $f\in I$，用这些代表消去最高项，再对次数归纳。
:::

**出处**　Advanced Algebra Fall 2026 课程大纲 · Noetherian rings and modules
