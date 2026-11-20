---
id: DT-T001
type: thm
title: 广义 Stokes 定理
english: Generalized Stokes theorem
summary: 外微分与有向边界相容：区域上的 dη 积分等于边界上的 η 积分。
requires: [DT-D011, DT-D012, dt-exterior-derivative]
related: [DT-T002, DT-P09, DT-P10, DT-RM-010]
tags: [Stokes, 积分, 边界定向]
aliases: [Stokes theorem, Green theorem, 微积分基本定理]
track: 微分形式、Stokes 与 de Rham
order: 905
minutes: 10
source_pack: 2026-11-20-dt-forms-stokes-derham
source_document: 01_Knowledge_Forms_Stokes_DeRham.md#DT-T001
source_note: 用户提供的 DT-T001；原包给出证明主线，此处展开半空间符号与单位分解步骤。
source_verified: false
---

:::statement
设 $M$ 为紧致、定向的 $n\ge1$ 维光滑带边流形，$j:\partial M\hookrightarrow M$ 为包含映射，$\eta\in\Omega^{n-1}(M)$。边界取[向外优先定向](ref:DT-D011)，则
$$
\boxed{\int_M d\eta=\int_{\partial M}j^*\eta.}
$$
右侧通常简写为 $\int_{\partial M}\eta$。若 $M$ 不紧，要求 $\eta$ 紧支撑，同样成立；无边界时右侧为零。
:::

:::proof
用从属于正定向坐标覆盖的单位分解，把 $\eta$ 写成单张坐标图内紧支撑形式的有限和。外微分线性，只需逐项证明；内部图中的各坐标偏导积分因紧支撑均为零。

边界图中取半空间坐标 $(t,x^1,\ldots,x^{n-1})$、$t\ge0$，定向形式为 $dt\wedge dx^1\wedge\cdots\wedge dx^{n-1}$。把 $\eta$ 分成不含 $dt$ 的项 $a\,dx^1\wedge\cdots\wedge dx^{n-1}$ 与含 $dt$ 的项。前一项的外微分积分为
$$
\int_{\mathbb R^{n-1}}\int_0^\infty\partial_ta(t,x)\,dt\,dx
=-\int_{\mathbb R^{n-1}}a(0,x)\,dx.
$$
后一类项在外微分后只贡献切向坐标的偏导，其积分同样因紧支撑为零。

边界的外向横截向量是 $-\partial_t$，故边界定向为 $-dx^1\wedge\cdots\wedge dx^{n-1}$；拉回到边界时含 $dt$ 的项为零，边界积分恰为上式。最后对局部分量求和，利用 $\sum_i\rho_i=1$ 即得全局公式。
:::

:::remark
$n=1$ 给出微积分基本定理，平面区域给出 Green 公式，三维空间中的定向曲面给出经典曲面积分版本的 Stokes。决定符号的是有序基约定，不是图形上的直觉。
:::
