---
id: DT-T002
type: thm
title: 积分是上链映射
english: Integration is a cochain map
summary: 用单形上的 Stokes 证明 I∘d=δ∘I，从而得到上同调之间的自然映射。
requires: [DT-T001, DT-D015, dt-cartan-complex]
related: [DT-T004, DT-P11, DT-RM-010]
tags: [积分映射, 上链映射, de Rham]
aliases: [integration map, cochain map, Stokes 的代数形式]
track: 微分形式、Stokes 与 de Rham
order: 906
minutes: 7
source_pack: 2026-11-20-dt-forms-stokes-derham
source_document: 01_Knowledge_Forms_Stokes_DeRham.md#DT-T002
source_note: 用户提供的 DT-T002；明确 η、单形和上链的次数，以及带角 Stokes 的使用。
source_verified: false
---

:::statement
对 $\omega\in\Omega^k(M)$ 和光滑奇异 $k$-单形 $\sigma$，定义
$$
I(\omega)(\sigma)=\int_{\Delta^k}\sigma^*\omega,
$$
并对有限实链线性延拓。于是 $I:\Omega^\bullet(M)\to C^\bullet_\infty(M)$ 满足 $I\circ d=\delta\circ I$，因而诱导 de Rham 上同调到光滑奇异上同调的映射。
:::

:::proof
设 $\eta\in\Omega^{k-1}(M)$，$\sigma:\Delta^k\to M$。由外微分自然性、带角单形上的 Stokes 及其面定向，
$$
\begin{aligned}
I(d\eta)(\sigma)
&=\int_{\Delta^k}d(\sigma^*\eta)\\
&=\int_{\partial\Delta^k}\sigma^*\eta\\
&=\sum_{i=0}^k(-1)^i\int_{\Delta^{k-1}}(\sigma\circ\iota_i)^*\eta\\
&=I(\eta)(\partial\sigma)=(\delta I(\eta))(\sigma).
\end{aligned}
$$
因此闭形式给出上闭链，恰当形式给出上边界，映射可下降到上同调。
:::

:::remark
积分使用每个标准单形自身的定向，所以这里不要求 $M$ 全局可定向。这个结论只说明 $I$ 是上链映射；它是否诱导同构，还需要 [de Rham 定理](ref:DT-T004)。
:::
