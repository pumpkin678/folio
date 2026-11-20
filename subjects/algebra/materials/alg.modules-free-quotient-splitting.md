---
track: "模与短正合列"
study_date: "2026-11-14"
source_pack: "folio-algebra-part2-part4-2026-11-14"
source_verified: false
source_note: "用户提供的 folio_algebra_part2_part4_2026-11-14.zip，Part 2 / Part 4 笔记；原文未提供确定的书目或题号。"
id: "alg.modules-free-quotient-splitting"
title: "自由商模的分裂与核的有限生成性"
english: "Free quotient, splitting and a finitely generated kernel"
summary: "提升自由基构造 section，并用投影显式给出核的有限生成集；不需 Noetherian 假设。"
source_document: "02-Part4-free-quotient-splitting.md"
type: "thm"
requires: ["alg.modules-extension-theorem"]
related_questions: ["alg.modules-free-quotient-kernel"]
related: ["alg.modules-extension-theorem", "alg.noetherian-ring", "CA-K20261113-03"]
tags: ["模", "short-exact-sequence", "finite-generation", "free-module", "splitting", "projective-module"]
aliases: ["Part 4"]
order: 31
minutes: 6
---

:::statement
## 题目

设 $A$ 为交换环，$M$ 为 finitely generated $A$-module，且有满射

$$
\varphi:M\twoheadrightarrow A^n
$$

（$n<\infty$）。证明 $\ker\varphi$ 是 finitely generated $A$-module。
:::

:::intuition
## 关键辨析：lift 的基不是 kernel 的生成元

取 $A^n$ 的标准基 $e_1,\dots,e_n$。满射性保证可选择 $u_i\in M$ 使

$$
\varphi(u_i)=e_i.
$$

但 $u_i\notin\ker\varphi$（对于 $e_i\ne0$）。因此不能说“lift 出来的基生成 kernel”。正确做法是：用 lifts 构造 section，或者把 $M$ 的生成元投影到 kernel。
:::

:::remark
完整证明、反例与复习检查见 [Part 4 题卡](ref:alg.modules-free-quotient-kernel)。
:::

:::remark
## 对应的结构性结论

自由模是 projective module：若 $P$ 为 projective，则任何满射 $M\twoheadrightarrow P$ 都存在 section。故

$$
0\to K\to M\to P\to0
$$

split，$M\cong K\oplus P$。

所以更一般地：只要 $M$ 有限生成，且商模 $P$ **projective**（不必有限生成），那么 $K$ 仍是有限生成的，因为它是 $M$ 的 direct summand。
:::
