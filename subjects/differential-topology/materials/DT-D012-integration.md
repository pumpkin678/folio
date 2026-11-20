---
id: DT-D012
type: def
title: 紧支撑、单位分解与最高次形式的积分
english: Compact support, partitions of unity and integration
summary: 在正定向坐标中积分，再用单位分解拼接成与坐标选择无关的全局积分。
requires: [DT-D010, dt-bump-locality]
related: [DT-D011, DT-T001, DT-RM-010]
tags: [积分, 紧支撑, 单位分解]
aliases: [compact support, partition of unity, integration of forms]
track: 微分形式、Stokes 与 de Rham
order: 903
minutes: 7
source_pack: 2026-11-20-dt-forms-stokes-derham
source_document: 01_Knowledge_Forms_Stokes_DeRham.md#DT-D012
source_note: 用户提供的知识条目 DT-D012；补充单位分解的条件与积分公式。
source_verified: false
---

:::statement
微分形式 $\omega$ 的支撑为 $\operatorname{supp}\omega=\overline{\{p:\omega_p\ne0\}}$；支撑紧致时称其为紧支撑形式。

从属于开覆盖 $\{U_i\}$ 的光滑单位分解是非负光滑函数族 $\{\rho_i\}$，满足 $\operatorname{supp}\rho_i\subset U_i$、局部有限及 $\sum_i\rho_i=1$。Hausdorff、第二可数光滑流形具有所需的单位分解。

对已定向 $n$-流形上的紧支撑 $n$-形式，选正定向参数化 $\varphi_i:V_i\to U_i\subset M$，定义
$$
\int_M\omega=\sum_i\int_{V_i}\varphi_i^*(\rho_i\omega).
$$
右侧将 $f\,dx^1\wedge\cdots\wedge dx^n$ 积成通常的 $\int f\,dx^1\cdots dx^n$；带边坐标则在半空间中的区域上积分。紧支撑与局部有限保证只有有限个相关项。
:::

:::remark
正定向换元的 Jacobian 行列式为正，因此通常换元公式与形式拉回一致；在两组坐标、单位分解的共同细分上比较，得到积分不依赖这些选择。整体反转定向使积分变号。

此处用紧支撑保证积分定义良好；不把非紧流形上任意形式默认视为可积。[Stokes 定理](ref:DT-T001) 对非紧情形也会明确采用紧支撑条件。
:::
