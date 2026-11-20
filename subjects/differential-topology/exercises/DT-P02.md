---
id: DT-P02
title: P02 · Hadamard lemma 与余切空间
english: Proof and construction checkpoint P02
summary: 验收：证明“生成”和“线性无关”两个方向。
targets:
  - dt-germs-cotangent
  - dt-hadamard
related:
  - DT-RM-010
  - DT-P-010
  - DT-K-010
tags:
  - 微分形式
  - 证明检查
  - 局部代数
track: 微分形式、Stokes 与 de Rham
difficulty: 进阶
order: 1002
minutes: 18
source_pack: 2026-11-20-dt-forms-stokes-derham
source_document: 02_Practice_Forms_Stokes_DeRham.md#DT-P02
source_number: P02
source_kind: learning-checkpoint
source_verified: false
source_note: 用户资料包按主线设计的检查点，不是教材原题；原包仅提供题面、提示与验收标准。
---

:::problem
局部取 $x(p)=0$，证明 $f(x)-f(0)=\sum_i x^ig_i(x)$、$g_i(0)=\partial_i f(0)$；进而证明 $\mathfrak m_p/\mathfrak m_p^2\cong\mathbb R^n$。
:::

:::hint
沿线段 $t\mapsto tx$ 积分：$g_i(x)=\int_0^1\partial_i f(tx)\,dt$。
:::

:::remark
**验收标准：** 证明“生成”和“线性无关”两个方向。
:::

[学习主线](ref:DT-RM-010) · [知识速查](ref:DT-K-010) · [配套题组](ref:DT-P-010)。
