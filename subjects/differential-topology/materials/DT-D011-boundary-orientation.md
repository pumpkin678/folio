---
id: DT-D011
type: def
title: 带边流形与向外优先的边界定向
english: Manifolds with boundary and boundary orientation
summary: 用半空间坐标识别边界，并按 outward normal first 约定固定积分符号。
requires: [dt-atlas, DT-D010]
related: [DT-T001, DT-P08, DT-RM-010]
tags: [带边流形, 边界定向, Stokes]
aliases: [manifold with boundary, outward normal first]
track: 微分形式、Stokes 与 de Rham
order: 902
minutes: 6
source_pack: 2026-11-20-dt-forms-stokes-derham
source_document: 01_Knowledge_Forms_Stokes_DeRham.md#DT-D011
source_note: 用户提供的知识条目 DT-D011；本专题在此引入带边流形，Week 1–8 的原约定仍为无边界。
source_verified: false
---

:::statement
$n\ge1$ 维光滑带边流形的局部模型是半空间 $\mathbb H^n=\{x_n\ge0\}$ 的相对开集，坐标过渡具有适当的光滑延拓。映到 $x_n=0$ 的点组成边界 $\partial M$；其余点为内部点。

设 $M$ 已定向。沿 $\partial M$ 选取光滑向外横截向量场 $N$；边界有序基 $(v_1,\ldots,v_{n-1})$ 为正，当且仅当 $(N,v_1,\ldots,v_{n-1})$ 在 $M$ 中为正。这是“向外优先”约定。若定向由最高次形式 $\mu$ 表示、$j:\partial M\hookrightarrow M$，则边界定向由 $j^*(\iota_N\mu)$ 表示。
:::

:::remark
这里不需要先选 Riemannian 度量：$N$ 只须向外且横截；若有度量，可取单位外法向。更换向外横截场时，其法向分量只乘正函数，切向分量在最高次交替形式上不改变边界定向。

标准定向区间 $[a,b]$ 的有向边界是 $\{b\}-\{a\}$；标准定向圆盘的边界按逆时针方向。球面的标准边界定向来自其作为欧氏球边界的外法向。
:::
