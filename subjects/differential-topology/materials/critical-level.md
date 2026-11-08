---
id: dt.critical-level
type: eg
title: 一个交叉的临界等值集
english: A singular level set
summary: 当正则条件失效时，等值集可能出现交叉，无法保持子流形结构。
requires: [dt.regular-value]
tags: [反例, 临界值, 奇点]
formula: 'f(x,y)=xy,\qquad f^{-1}(0)=\{x=0\}\cup\{y=0\}'
order: 8
minutes: 4
---
:::example
取 $f:\R^2\to\R$，$f(x,y)=xy$。因为 $df_{(0,0)}=0$，$0$ 不是正则值。零等值集是两条坐标轴的并，在原点交叉。

它在原点附近不是一维拓扑流形：原点的一个充分小的连通邻域去掉原点后有四个分支，而开区间去掉内点后只有两个分支。
:::

:::remark
“不是正则值”不保证原像一定有奇点。例如 $g(x,y)=x^2$ 的零原像是一条直线。正则性是定理的充分条件。
:::
