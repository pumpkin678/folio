---
id: DT-D015
type: def
title: 光滑奇异单形、链与上链
english: Smooth singular simplices, chains and cochains
summary: 用单形面的交错和定义边界，并对偶得到奇异上链的微分。
requires: [dt-atlas, dt-cartan-complex]
related: [DT-T002, DT-T004, DT-P11, DT-RM-010]
tags: [奇异链, 上链复形, de Rham]
aliases: [smooth singular simplex, singular cochain, boundary operator]
track: 微分形式、Stokes 与 de Rham
order: 904
minutes: 7
source_pack: 2026-11-20-dt-forms-stokes-derham
source_document: 01_Knowledge_Forms_Stokes_DeRham.md#DT-D015
source_note: 用户提供的知识条目 DT-D015；保留标准单形的带角光滑性约定。
source_verified: false
---

:::statement
光滑奇异 $k$-单形是映射 $\sigma:\Delta^k\to M$，在标准单形的边角附近要求存在适当的光滑延拓。标准单形按顶点顺序定向，以这些单形为基生成实链群 $C_k^\infty(M;\mathbb R)$，链是有限实线性组合。

设 $\iota_i:\Delta^{k-1}\to\Delta^k$ 为删去第 $i$ 个顶点的面嵌入。对 $k\ge1$，定义
$$
\partial\sigma=\sum_{i=0}^k(-1)^i\sigma\circ\iota_i;
$$
在 0 次令边界为零。余维 2 的每个面出现两次且符号相反，所以 $\partial^2=0$。

对偶上链空间为 $C^k_\infty(M)=\operatorname{Hom}_{\mathbb R}(C_k^\infty(M;\mathbb R),\mathbb R)$，其微分为 $(\delta\varphi)(c)=\varphi(\partial c)$，因此 $\delta^2=0$。上同调按已有[上链复形定义](ref:dt-cartan-complex)取核除以像。
:::

:::remark
标准单形是带角空间。对其应用 Stokes 时使用面上的交错定向及带角版本；不能把它直接当作只有一个光滑边界超曲面的流形。光滑奇异链与通常连续奇异链的比较，是 [de Rham 定理](ref:DT-T004) 中需要说明的一步。
:::
