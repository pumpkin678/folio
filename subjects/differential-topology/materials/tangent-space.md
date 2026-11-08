---
id: dt.tangent-space
type: def
title: 切空间与微分
english: Tangent space and differential
summary: 用过一点的曲线速度刻画方向，并研究光滑映射如何传递这些方向。
requires: [dt.smooth-map]
aliases: [切映射, derivative, tangent vector]
tags: [切空间, 微分, 线性化]
formula: 'd f_p:T_pM\longrightarrow T_{f(p)}N'
order: 3
minutes: 7
---
:::statement
过 $p\in M$ 的光滑曲线 $\gamma$ 满足 $\gamma(0)=p$。若两条曲线在一个局部坐标下的速度相同，就称它们等价。等价类组成切空间 $T_pM$；当 $\dim M=m$ 时，它是一个 $m$ 维实向量空间。

对光滑映射 $f:M\to N$，微分由曲线复合定义：

$$d f_p([\gamma])=[f\circ\gamma].$$
:::

:::intuition
微分给出 $f$ 在一点附近的一阶线性近似。在坐标下，它由 Jacobian 矩阵表示；它的秩不依赖坐标选择。
:::

:::example
若 $F:\R^3\to\R$ 定义为 $F(x,y,z)=x^2+y^2+z^2$，那么

$$dF_{(x,y,z)}(u,v,w)=2xu+2yv+2zw.$$
:::
