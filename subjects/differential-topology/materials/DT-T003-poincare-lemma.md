---
id: DT-T003
type: thm
title: Poincaré 引理
english: Poincaré lemma
summary: 星形开集上的正次数闭形式皆恰当；局部无上同调障碍，整体却可能不同。
requires: [dt-cartan-complex]
related: [DT-T004, DT-P12, DT-RM-010]
tags: [Poincaré 引理, 同伦算子, de Rham]
aliases: [Poincare lemma, 局部恰当, 星形开集]
track: 微分形式、Stokes 与 de Rham
order: 907
minutes: 8
source_pack: 2026-11-20-dt-forms-stokes-derham
source_document: 01_Knowledge_Forms_Stokes_DeRham.md#DT-T003
source_note: 用户提供的 DT-T003；沿原包的径向收缩提示写出同伦算子。
source_verified: false
---

:::statement
设非空开集 $U\subset\mathbb R^n$ 关于某点星形。则对 $k>0$，每个闭 $k$-形式都是恰当形式，即 $H^k_{\mathrm{dR}}(U)=0$；同时 $H^0_{\mathrm{dR}}(U)\cong\mathbb R$。
:::

:::proof
平移令星形中心为 0。对 $k\ge1$ 定义次数 $-1$ 算子
$$
(K\omega)_x(v_1,\ldots,v_{k-1})
=\int_0^1t^{k-1}\omega_{tx}(x,v_1,\ldots,v_{k-1})\,dt.
$$
对径向收缩 $H(t,x)=tx$ 的拉回取 $dt$ 分量并积分，微积分基本定理和分次 Leibniz 法则给出 $dK+Kd=\operatorname{id}-c_0^*$，其中 $c_0$ 为常值映射。正次数时 $c_0^*\omega=0$，故 $d\omega=0$ 蕴含 $\omega=d(K\omega)$。0 次的闭形式是局部常值函数，而非空星形开集连通，所以仅得到常数。
:::

:::remark
这是正次数的局部结论，不保证任意流形上的闭形式全局恰当。圆周上的反例与 $H^1(S^1)$ 的完整一维计算见 [P10](ref:DT-P10)、[P12](ref:DT-P12)。
:::
