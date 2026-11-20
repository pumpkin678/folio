---
track: "模与张量积"
study_date: "2026-11-17"
source_pack: "folio-am-ch2-modules-2026-11-17"
source_verified: false
source_note: "用户提供的 Folio_AM_Ch2_Modules_Exercises.zip；A–M Chapter 2 的题号、页码沿用原包，未独立核实。"
id: "alg.modules-flat-direct-sums-theorem"
title: "平坦模与任意直和"
english: "Flat modules and arbitrary direct sums"
summary: "用张量积与直和的自然同构证明：任意直和平坦当且仅当每个分量平坦。"
source_document: "01_Flatness_and_Direct_Sums.md"
tags: ["模", "张量积", "flat-module", "direct-sum", "naturality"]
order: 32
type: "thm"
minutes: 6
related_questions: ["alg.modules-flat-direct-sums"]
related: ["alg.modules-tensor-path"]
requires: []
aliases: ["01", "Flat modules and arbitrary direct sums"]
---

:::statement
设 $A$ 为交换含幺环，$(M_i)_{i\in I}$ 为任意一族 $A$-模，则

$$\bigoplus_{i\in I}M_i\text{ 平坦}\iff\forall i\in I,\ M_i\text{ 平坦}.$$

这里 $P$ 平坦是指 $-\otimes_A P$ 保持正合列；等价地，它把每个单射 $N'\hookrightarrow N$ 送到单射。空族的直和为零模，也平坦。
:::

:::intuition
对每个 $N$，有自然同构

$$\Phi_N:N\otimes_A\bigoplus_iM_i\longrightarrow\bigoplus_i(N\otimes_AM_i),\qquad n\otimes(m_i)_i\longmapsto(n\otimes m_i)_i.$$

关键在于映射也对应：

$$\Phi_N\circ(f\otimes1)=\left(\bigoplus_i(f\otimes1_{M_i})\right)\circ\Phi_{N'}.$$

张量积保持 split injection，因为左逆在施加函子后仍为左逆。一般单射则需要平坦性保证。
:::

:::remark
[完整证明、易错点与复习检查](ref:alg.modules-flat-direct-sums)。
:::
