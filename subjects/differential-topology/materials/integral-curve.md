---
id: dt.integral-curve
type: def
title: 积分曲线与最大存在区间
english: Integral curves and maximal intervals
summary: 从向量场定义曲线的速度，并在局部坐标中写出对应的常微分方程。
requires: [dt.tangent-space]
tags: [向量场, 积分曲线, ODE]
order: 9
minutes: 7
---
:::statement
设 $X$ 是无边界光滑流形 $M$ 上的光滑向量场。经过 $p$ 的积分曲线是定义在含 $0$ 的开区间 $I$ 上的光滑曲线 $\gamma:I\to M$，满足
$$\gamma(0)=p,\qquad \dot\gamma(t)=X_{\gamma(t)}.$$
局部存在唯一性保证这些局部解能沿公共区间拼接，得到唯一的最大积分曲线 $\gamma_p:I_p\to M$。若每个 $p$ 都满足 $I_p=\R$，称 $X$ 完备（complete）。
:::

:::intuition
取坐标卡 $\varphi:U\to\R^n$。当曲线留在 $U$ 中时，令 $y=\varphi\circ\gamma$，链式法则把积分曲线方程化成 $\dot y=F(y)$，其中 $F(y)=d\varphi_{\varphi^{-1}(y)}(X_{\varphi^{-1}(y)})$。欧氏空间里的局部存在唯一性与对初值的光滑依赖，就在这张坐标卡里给出流形上的对应结论。
:::
