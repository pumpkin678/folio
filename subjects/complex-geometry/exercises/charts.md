---
id: cg.charts-exercise
title: 无穷远点在哪张图里？
english: Locating the point at infinity
summary: 写出坐标转换，并找出第一张坐标卡遗漏的点。
targets: [cg.complex-manifold, cg.projective-line]
tags: [计算, 坐标卡]
difficulty: 基础
minutes: 8
order: 1
---
:::problem
在 $\mathbb{CP}^1$ 中，坐标 $w=z_1/z_0$ 没有覆盖哪个点？这个点在另一张坐标卡 $v=z_0/z_1$ 中的坐标是多少？说明坐标转换为何只需要在交集上定义。
:::

:::hint
令 $z_0=0$。注意齐次坐标不能同时为零，并且可以乘以非零复数。
:::

:::solution
遗漏的点是 $[0:1]$，它在第二张卡中的坐标是 $v=0$。交集由 $z_0z_1\ne0$ 给出，因此在那里 $w\ne0$，$v=1/w$ 是良定义的双全纯映射。坐标卡只在重叠区域比较，所以不需要把 $1/w$ 延拓到 $w=0$。
:::
