---
id: dt.flow-examples
type: eg
title: 圆周旋转与有限时间爆破
english: Rotation and finite-time blow-up
summary: 对照显式的全局流和只能在有限时间内存在的解。
requires: [dt.integral-curve]
tags: [积分曲线, 完备性, 反例]
order: 11
minutes: 6
---
:::example
在单位圆 $S^1$ 上取切向量场 $X_{(x,y)}=(-y,x)$。用复数记号写，流为 $\Phi_t(z)=e^{it}z$，对每个实数 $t$ 有定义。群律直接对应 $e^{i(s+t)}=e^{is}e^{it}$。
:::

:::example
在 $\R$ 上取 $X=x^2\partial_x$。从 $x_0=1$ 出发，解是 $x(t)=1/(1-t)$，最大存在区间为 $(-\infty,1)$。当 $t\uparrow1$ 时，解趋向无穷，无法在 $t=1$ 连续延拓为实值曲线，因此 $X$ 不完备。
:::
