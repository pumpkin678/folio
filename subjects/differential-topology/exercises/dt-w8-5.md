---
id: "dt-w8-5"
track: "微分拓扑 · Week 1–8"
chapter: "Week 8"
week: 8
tags: ["Week 8", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w8-5.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.5; W8DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-08", "dt-exterior-derivative", "dt-contraction-lie", "dt-cartan-complex", "dt-cartan-example", "dt-week-08.practice"]
title: "8.5 · Flow pullback 的导数等于 Lie derivative"
english: "Week 8 · Problem 8.5"
summary: "Week 8 · W8DiffTop2026.pdf · 8.5；按原包保留题面、解答及勘误。"
targets: ["dt-exterior-derivative", "dt-contraction-lie", "dt-cartan-complex", "dt-cartan-example"]
source_number: "8.5"
source_kind: "course-exercise"
difficulty: "进阶"
order: 804
minutes: 15
---

:::problem
**代数约定：** $A$ 为交换含幺实代数，形式是导子模 $\operatorname{Der}(A)$ 上的交替 $A$-多线性映射，外幂取 $A$-模外幂。流与拉回相关题在光滑流形上讨论。

题目：对 $p$-形式证明 $\left.\frac d{dt}\right|_0F_t^*\omega=L_X\omega$。
:::

:::solution
步骤 1：固定 $m$，取坐标包含 $m$ 及小时间轨迹。对任意向量场 $Y$，由 flow 方程有
$$F_t^i(m)=m^i+tX^i(m)+O(t^2),\qquad (dF_t)_mY_m=Y^i(m)\partial_i|_{F_t(m)}+t\,\partial_jX^i(m)Y^j(m)\partial_i|_{F_t(m)}+O(t^2).$$
另一方面 $Y^i(F_t(m))=Y^i(m)+tX^j\partial_jY^i(m)+O(t^2)$。所以在该坐标平凡化中
$$\left.\frac d{dt}\right|_0\big((dF_t)_mY_m-Y_{F_t(m)}\big)=-[X,Y]_m.$$

步骤 2：定义标量函数 $g=\omega(Y_1,\ldots,Y_p)$。由拉回定义，
$$ (F_t^*\omega)_m(Y_1(m),\ldots,Y_p(m))=\omega_{F_t(m)}((dF_t)_mY_1(m),\ldots,(dF_t)_mY_p(m)).$$
把每个参数写成 $Y_j(F_t(m))$ 加上一阶差，利用多线性求导得
$$Xg(m)-\sum_j\omega_m(Y_1(m),\ldots,[X,Y_j]_m,\ldots,Y_p(m)),$$
即 $L_X\omega$ 的定义。两个或更多差因子的乘积是 $O(t^2)$，求一阶导数不贡献。

步骤 3：$m$ 任意，所以形式相等。局部 flow 只需在每个 $m$ 附近的小时间定义；不能假定不完备向量场的 $F_t$ 对所有时间全局存在。$p=0$ 时公式就是 $(f\circ F_t)'|_0=Xf$。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.5; W8DiffTop2026.pdf

## 关联

[dt-week-08](ref:dt-week-08) · [dt-exterior-derivative](ref:dt-exterior-derivative) · [dt-contraction-lie](ref:dt-contraction-lie) · [dt-cartan-complex](ref:dt-cartan-complex) · [dt-cartan-example](ref:dt-cartan-example)
