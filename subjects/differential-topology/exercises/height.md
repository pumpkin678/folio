---
id: dt.height-exercise
title: 为什么两极是临界点？
english: Finding the critical points of height
summary: 在球面的切空间上限制微分，找出全部临界点与正则值。
targets: [dt.height-function, dt.regular-value]
tags: [几何理解, 证明]
difficulty: 进阶
minutes: 15
order: 2
---
:::problem
对 $h:S^2\to\R$，$h(x,y,z)=z$，证明临界点只有南北两极。进一步说明 $2$ 是不是正则值。
:::

:::hint
已知 $T_pS^2=p^\perp$。微分为 $v\mapsto v\cdot e_3$；何时它在整个切平面上为零？
:::

:::hint
一个向量在 $p^\perp$ 上的内积恒为零，等价于该向量属于直线 $\operatorname{span}(p)$。
:::

:::solution
$dh_p$ 为零当且仅当 $e_3$ 平行于 $p$。由于 $p$ 在单位球面上，这恰好发生在 $p=\pm e_3$。

目标是一维的，所以微分不为零就满射。其他点均为正则点。因为 $h^{-1}(2)=\varnothing$，$2$ 是正则值。
:::
