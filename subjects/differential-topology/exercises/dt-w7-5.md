---
id: "dt-w7-5"
track: "微分拓扑 · Week 1–8"
chapter: "Week 7"
week: 7
tags: ["Week 7", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w7-5.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.5; W7DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-07", "dt-exterior", "dt-exterior-basis", "dt-forms", "dt-wedge-example", "dt-week-07.practice"]
title: "7.5 · Exterior cotangent bundle 的流形结构"
english: "Week 7 · Problem 7.5"
summary: "Week 7 · W7DiffTop2026.pdf · 7.5；按原包保留题面、解答及勘误。"
targets: ["dt-exterior", "dt-exterior-basis", "dt-forms", "dt-wedge-example"]
source_number: "7.5"
source_kind: "course-exercise"
difficulty: "进阶"
order: 705
minutes: 15
---

:::problem
题目：为 $E=\coprod_{p\in M}\Lambda^kT_p^*M$ 构造光滑流形结构。
:::

:::solution
步骤 1：设 $\dim M=n$、$r=\binom nk$（$k>n$ 时 $r=0$）。在图 $(U,x)$ 上，每个纤维元唯一写为 $\omega_p=\sum_I a_I dx^{i_1}|_p\wedge\cdots\wedge dx^{i_k}|_p$。定义 $\Phi_x(\omega_p)=(x(p),(a_I))\in x(U)\times\mathbb R^r$，双射。

步骤 2：在另一图 $y$ 中，$dx^i=\sum_j(\partial x^i/\partial y^j)dy^j$，楔展开给
$$b_J=\sum_I a_I\det\left(\frac{\partial x^{i_a}}{\partial y^{j_b}}\right)_{a,b=1}^k.$$
故过渡 $(x,a)\mapsto(y(x),C(x)a)$，$C(x)$ 的元素为光滑 Jacobian minors。反向坐标同理，矩阵互逆，过渡是微分同胚。

步骤 3：由 atlas 生成拓扑的构造得到局部欧氏空间。投影 $\pi:E\to M$ 在图中是 $(x,a)\mapsto x$，连续。两点底点不同可用基空间的不交邻域原像分离；底点相同则同在一个平凡化域，在欧氏图中用不交开集分离，所以 Hausdorff。

步骤 4：第二可数流形有可数图覆盖（第二可数推出 Lindelöf）；每个平凡化域有可数欧氏基，其可数并是 $E$ 的可数基。因此 $E$ 是维数 $n+r$ 的流形。$k=0$ 时是 $M\times\mathbb R$；$k>n$ 时为零丛，总空间同胚且微分同胚于 $M$。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.5; W7DiffTop2026.pdf

## 关联

[dt-week-07](ref:dt-week-07) · [dt-exterior](ref:dt-exterior) · [dt-exterior-basis](ref:dt-exterior-basis) · [dt-forms](ref:dt-forms) · [dt-wedge-example](ref:dt-wedge-example)
