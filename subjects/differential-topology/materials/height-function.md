---
id: dt.height-function
type: eg
title: 球面上的高度函数
english: Height function on the sphere
summary: 一层层切开球面：一般高度得到圆，南北两极对应临界值。
requires: [dt.sphere, dt.regular-value]
tags: [高度函数, 球面, 临界值]
formula: 'h:S^2\to\R,\qquad h(x,y,z)=z'
widget: sphere
order: 7
minutes: 6
---
:::example
对高度函数 $h(x,y,z)=z$，微分是 $dh_p(v)=v_z$，其中 $v\in T_pS^2$。

在南北两极，切平面是水平的，所以 $dh_p=0$。其余点的切平面中都存在竖直分量不为零的向量，因此微分满射。

由此得到：临界值恰为 $-1$ 和 $1$；当 $-1<c<1$ 时，$h^{-1}(c)$ 是半径为 $\sqrt{1-c^2}$ 的圆。
:::

:::remark
当 $|c|>1$ 时原像为空，$c$ 仍是正则值。页面中的滑块只展示 $[-1,1]$ 内的截面。
:::
