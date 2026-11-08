---
id: dt.week6-compact-flow
title: 从局部积分曲线得到全局流
english: Constructing a global flow on a compact manifold
summary: 分别用紧性和唯一性证明全局存在与流的群律。
targets: [dt.integral-curve, dt.compact-flow]
tags: [课程作业, 证明, 积分曲线]
difficulty: 进阶
minutes: 20
order: 4
---
:::problem
设 $M$ 是紧的无边界光滑流形，$X\in\Gamma(TM)$。构造 $X$ 的光滑全局流 $\Phi:\R\times M\to M$，证明对任意 $p\in M$ 与 $s,t\in\R$，
$$\Phi(0,p)=p,\qquad \Phi(s,\Phi(t,p))=\Phi(s+t,p).$$
:::

:::hint
局部存在定理给的是整片初值邻域和同一个时间区间。用有限子覆盖取最短时间，再从曲线上接近假定终点的位置重新求解。
:::

:::hint
比较关于 $s$ 的两条曲线。写出它们在 $s=0$ 的初值和各自满足的微分方程。
:::

:::solution
用有限子覆盖取统一的局部存在时间 $\varepsilon$。若最大积分曲线有有限端点，则从距端点不足 $\varepsilon/2$ 的时刻重启，局部解会越过端点。唯一性允许拼接，得到矛盾。于是定义 $\Phi(t,p)=\gamma_p(t)$，它在 $t=0$ 取值 $p$。

固定 $t,p$，$s\mapsto\gamma_p(t+s)$ 和 $s\mapsto\gamma_{\gamma_p(t)}(s)$ 都是以 $\gamma_p(t)$ 为初值的积分曲线，由唯一性得到群律。联合光滑性来自把时间均分为足够短的固定步数并复合局部流，详见[紧流形上的向量场与全局流](ref:dt.compact-flow)。
:::

据 Differential Topology, Autumn 2026，Week 6，第 6.4 题整理。题面明确补出了构造的是给定向量场 $X$ 的流。
