---
id: dt.regular-value
type: def
title: 正则值
english: Regular value
summary: 原像中的每一点上，微分都能覆盖目标的全部切方向。
requires: [dt.tangent-space]
tags: [正则值, 临界值, 满射]
aliases: [regular point, critical value, 临界点]
formula: 'd f_p:T_pM\twoheadrightarrow T_yN'
order: 4
minutes: 5
---
:::statement
设 $f:M\to N$ 光滑。若对每个 $p\in f^{-1}(y)$，线性映射 $df_p:T_pM\to T_yN$ 都是满射，则称 $y\in N$ 为 $f$ 的 **正则值**。

微分不满射的点称为临界点；临界点的像称为临界值。
:::

:::intuition
对于实值函数，正则意味着沿某个切方向，函数的一阶变化不为零。在这一方向上可以解出一个坐标，其余方向则留在等值集中。
:::

:::remark
若 $f^{-1}(y)=\varnothing$，全称条件自动成立，因此 $y$ 也是正则值。正则值不必属于 $f$ 的像。
:::
