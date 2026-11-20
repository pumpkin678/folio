---
id: DT-D010
type: def
title: 定向、最高次非零形式与行列式线丛
english: Orientation and nowhere-vanishing top forms
summary: 用最高次形式的正比例等价类统一正定向标架、体积形式与可定向性。
requires: [dt-forms, dt-exterior-basis]
related: [DT-D011, DT-D012, DT-RM-010, SPG-DEF-011]
tags: [微分形式, 定向, 最高次形式]
aliases: [orientation, volume form, determinant line bundle, 可定向]
track: 微分形式、Stokes 与 de Rham
order: 901
minutes: 7
source_pack: 2026-11-20-dt-forms-stokes-derham
source_document: 01_Knowledge_Forms_Stokes_DeRham.md#DT-D010
source_note: 用户提供的知识条目 DT-D010；证明思路与说明按该专题整理。
source_verified: false
---

:::statement
设 $M$ 为 $n$ 维光滑流形。处处非零的 $n$-形式 $\mu$ 使有序切基 $(v_1,\ldots,v_n)$ 为正定向，当且仅当 $\mu_p(v_1,\ldots,v_n)>0$。两个这样的形式 $\mu,\nu$ 给出同一定向，当且仅当 $\nu=f\mu$，其中 $f:M\to(0,\infty)$ 光滑。给定定向后，与该定向相容的处处非零最高次形式称为体积形式；体积形式并不唯一。

在通常的 Hausdorff、第二可数假设下，以下等价：$M$ 可定向；$M$ 有处处非零的最高次形式；行列式线丛 $\Lambda^nT^*M$ 是平凡实线丛。正定向坐标图之间的 Jacobian 行列式为正。
:::

:::remark
**证明思路。** 因 $\Lambda^nT_p^*M$ 为一维，两个非零截面逐点相差唯一非零比例，其局部系数之比说明比例函数光滑，正号正好表达同一定向。反过来，由正定向图中的正体积形式和单位分解得到全局非零截面：同一点的各正形式位于同一正射线，带非负系数相加不会抵消。线丛有全局非零截面当且仅当平凡。

一般需要最高次 $n$-形式。高维流形上一张处处非零的 2-形式不足以保证定向；若它还是[辛形式](ref:SPG-DEF-011)，则在 $2m$ 维情形，$\omega^m/m!$ 才因非退化性成为非零最高次形式。
:::

参考：[定义与定理速查](ref:DT-K-010) · [P07：定向的等价刻画](ref:DT-P07)。
