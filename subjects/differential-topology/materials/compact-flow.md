---
id: dt.compact-flow
type: thm
title: 紧流形上的向量场与全局流
english: Completeness and global flows on compact manifolds
summary: 用紧性选取统一的局部存在时间，再用唯一性延拓并证明流的群律。
requires: [dt.integral-curve]
tags: [紧性, 完备性, 全局流]
order: 10
minutes: 12
---
:::statement
设 $M$ 是紧的无边界光滑流形，$X$ 是 $M$ 上的光滑向量场。则 $X$ 完备，其全局流 $\Phi:\R\times M\to M$ 光滑，满足
$$\Phi_0=\operatorname{id}_M,\qquad \Phi_{s+t}=\Phi_s\circ\Phi_t.$$
此外，$\Phi_{-t}$ 是 $\Phi_t$ 的光滑逆。
:::

:::proof
局部 ODE 定理及对初值的光滑依赖给出每个 $p$ 的邻域 $U_p$ 和 $\varepsilon_p>0$，使初值在 $U_p$ 内的积分曲线都至少在 $(-\varepsilon_p,\varepsilon_p)$ 上存在。有限子覆盖给出统一的 $\varepsilon>0$。唯一性使这些局部流在重叠处一致，于是有光滑映射 $\Psi:(-\varepsilon,\varepsilon)\times M\to M$。

若某条最大积分曲线有有限右端点 $b$，取区间内的 $t_0$ 满足 $b-t_0<\varepsilon/2$。从 $\gamma(t_0)$ 重新起步，解 $t\mapsto\Psi(t-t_0,\gamma(t_0))$ 延伸到 $b$ 之后。由唯一性，新旧解在公共区间一致，矛盾。有限左端点同理，因此 $\Phi_t(p)=\gamma_p(t)$ 对所有 $t,p$ 有定义。

固定 $t,p$ 后，$s\mapsto\Phi_{s+t}(p)$ 和 $s\mapsto\Phi_s(\Phi_t(p))$ 是经过同一初值的积分曲线，故群律成立。最后，在任意给定时间附近选一个固定整数 $N$，使这段邻域中的每个 $t$ 都满足 $|t/N|<\varepsilon$。群律把 $\Phi_t$ 写成 $\Psi_{t/N}$ 的 $N$ 次复合，故对 $(t,p)$ 联合光滑。取 $s=-t$ 即得逆映射。
:::
