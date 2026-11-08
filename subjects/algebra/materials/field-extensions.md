---
id: alg.field-extensions
type: def
title: "代数扩张、分裂域与可分性"
english: "Algebraic, normal and separable extensions"
summary: "复习代数扩张、分裂域与可分性的核心结论与使用方法。"
requires: []
tags: ["高等代数","课程复习"]
minutes: 8
order: 7
---
:::statement
若 $\alpha$ 是 $F[X]$ 中非零多项式的根，则称它在 $F$ 上代数。其首一最小多项式 $m_\alpha$ 生成评价映射的核，故 $[F(\alpha):F]=\deg m_\alpha$。代数扩张正规，当且仅当在其中有根的基域不可约多项式都完全分裂。可分性要求每个元素的最小多项式无重根。有限扩张为 Galois 当且仅当它正规且可分。
:::

:::example
在特征 $p$ 的 $F=\mathbb F_p(t)$ 中，$X^p-t$ 由 Eisenstein 判别法不可约，导数为零，在分裂域中只有一个不同的根。特征零的不可约多项式则可分。
:::

**出处**　ln-AdvAlg-week1-1.md；Advanced Algebra Sheet 1。[ln-AdvAlg-week1-1.md](https://chatgpt.com/library?file_id=libfile_003695f33fbc8191ae9437ce7378080a&account_id=personal)
