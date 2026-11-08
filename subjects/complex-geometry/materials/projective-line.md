---
id: cg.projective-line
type: eg
title: 复射影直线
english: Complex projective line
summary: 用两张复坐标卡，拼出一个紧致的复一维流形。
requires: [cg.complex-manifold]
tags: [射影空间, 坐标转换, 黎曼球面]
aliases: [CP1, CP^1, Riemann sphere, 黎曼球面]
formula: '\mathbb{CP}^1=(\C^2\setminus\{0\})/\C^{\times}'
order: 2
minutes: 7
---
:::example
齐次坐标 $[z_0:z_1]$ 表示 $\C^2$ 中过原点的一条复直线。在 $z_0\ne0$ 的区域取坐标 $w=z_1/z_0$，在 $z_1\ne0$ 的区域取坐标 $v=z_0/z_1$。

交集上的转换为 $v=1/w$，它在 $\C^{\times}$ 上双全纯。因此这两张坐标卡给出复射影直线的复一维流形结构。
:::

:::intuition
第一张坐标卡覆盖一个复平面，第二张卡补上“无穷远点”。其底层拓扑空间同胚于二维球面。
:::
