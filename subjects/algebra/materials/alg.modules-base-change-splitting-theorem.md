---
track: "模与张量积"
study_date: "2026-11-17"
source_pack: "folio-am-ch2-modules-2026-11-17"
source_verified: false
source_note: "用户提供的 Folio_AM_Ch2_Modules_Exercises.zip；A–M Chapter 2 的题号、页码沿用原包，未独立核实。"
id: "alg.modules-base-change-splitting-theorem"
title: "标量扩张中的收缩与直和分解"
english: "Base change, retractions and direct summands"
summary: "已有 B-模的 canonical map 有乘法给出的左逆，因而是 A-模意义下的分裂单射。"
source_document: "04_Base_Change_and_Splitting.md"
tags: ["模", "张量积", "base-change", "splitting", "direct-summand"]
order: 35
source_label: "原包标注：A–M Chapter 2, Exercise 13, p. 32（未独立核实）"
type: "thm"
minutes: 6
related_questions: ["alg.modules-base-change-splitting"]
related: ["alg.modules-tensor-path", "alg.modules-free-quotient-splitting"]
requires: []
aliases: ["04", "Base change, retractions and direct summands"]
---

:::statement
设 $f:A\to B$ 是交换含幺环的含幺同态，$N$ 为 $B$-模，并按 $a\cdot y=f(a)y$ 视为 $A$-模。映射

$$g:N\to B\otimes_AN,\qquad y\mapsto1_B\otimes y$$

是 $A$-线性的分裂单射。其左逆为 $p(b\otimes y)=by$，且

$$B\otimes_AN=g(N)\oplus\ker p\qquad\text{（作为 $A$-模）}.$$

$p$ 是 $B$-线性的，但 $g$ 一般仅为 $A$-线性，故 $g(N)$ 未必是 $B$-子模。
:::

:::intuition
恒等式 $p\circ g=1_N$ 保证单射与分裂；通常 $g\circ p\ne1$。例如 $A=k$、$B=N=k[t]$ 时，$t\otimes1\ne1\otimes t$。张量积 $\otimes_A$ 的 balancing 只允许移动来自 $A$ 的标量。

这一结论依赖 $N$ 已具有 $B$-模结构；不能据此断言任意 $A$-模的标量扩张映射都单射。
:::

:::remark
[完整证明、易错点与复习检查](ref:alg.modules-base-change-splitting)。
:::
