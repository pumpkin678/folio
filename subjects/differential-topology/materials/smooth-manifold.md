---
id: dt.smooth-manifold
type: def
title: 光滑流形
english: Smooth manifold
summary: 局部看起来像欧氏空间，并且坐标之间可以光滑转换的空间。
tags: [流形, 坐标卡, 光滑结构]
aliases: [光滑结构, coordinate chart, smooth atlas]
order: 1
minutes: 6
---
:::statement
一个 **无边界的 $n$ 维光滑流形**，是一个 Hausdorff、第二可数的拓扑空间 $M$，配备一个极大光滑图册。每张坐标卡 $\varphi:U\to\varphi(U)\subset\R^n$ 是到开集的同胚，且重叠坐标卡之间的转换映射 $\psi\circ\varphi^{-1}$ 都是 $C^\infty$ 的。
:::

:::intuition
坐标卡像一张张局部地图。每张地图可以使用微积分，而光滑的坐标转换保证微积分的结论不依赖你选了哪张地图。

“局部像欧氏空间”并不要求流形整体就是欧氏空间：圆周没有一个覆盖全部的单一实坐标。
:::

:::remark
本专题默认流形无边界。Hausdorff 与第二可数是定义的一部分；讨论具体例子时也应检查这些条件。
:::
