---
id: "CA-Q005"
title: "强化：f primitive 时 c(fg)=c(g)"
english: "Primitive factors preserve content"
summary: "在 A/c(fg) 中应用 McCoy 定理，证明 primitive 因子保持另一个因子的 content。"
track: "交换代数"
study_date: "2026-11-12"
source_note: "本次讨论题面与笔记（2026-11-12）；Atiyah–Macdonald Chapter 1 相关主题，原书精确习题编号未独立核对。"
source_verified: false
tags: ["交换代数", "primitive", "content", "mccoy", "dedekind-mertens"]
related_questions: ["CA-Q003", "CA-Q004"]
targets: ["CA-K003", "CA-K005", "CA-K006"]
mistake_ids: ["CA-M009"]
chapter: "Chapter 1 · Polynomial rings"
difficulty: "挑战"
difficulty_original: 4
imported_status: "可选挑战"
initial_status: "new"
order: 6
minutes: 20
---

:::problem
## 题目

证明任意交换含幺环 $A$、任意 $f,g\in A[x]$ 满足：

$$\boxed{c(f)=A\implies c(fg)=c(g).}$$

此命题强于 [CA-Q004](ref:CA-Q004) 的充分方向。
:::

:::hint
## Hint

考虑 $I=c(fg)$ 与 $B=A/I$。在 $B[x]$ 中有 $\bar f\bar g=0$；并且 $c_B(\bar f)=B$。尝试调用 [CA-Q003 · McCoy theorem](ref:CA-Q003)。
:::

:::solution
## 严格证明

通常有 $c(fg)\subseteq c(g)$。现在令 $I=c(fg)$、$B=A/I$。系数化到 $B$ 后，$\bar f\bar g=0$，且

$$c_B(\bar f)=\frac{c_A(f)+I}{I}=B.$$

假设 $\bar g\ne0$。由 McCoy theorem（在 $B$ 上适用），存在 $0\ne b\in B$ 使 $b\bar f=0$。但 $\bar f$ 的系数生成整个 $B$，所以

$$b=b\cdot1=b\sum_i r_i\bar a_i=\sum_i r_i(b\bar a_i)=0,$$

矛盾。因此 $\bar g=0$，即 $g$ 的每个系数都属于 $I$，得到 $c(g)\subseteq I=c(fg)$。两边包含合并即得 $c(fg)=c(g)$。$\square$
:::

:::remark
## 进一步了解

一般的 Dedekind–Mertens lemma：若 $m=\deg g$（$g\ne0$），则

$$c(f)^{m+1}c(g)=c(f)^mc(fg).$$

从中也可在 $c(f)=A$ 时直接得到 $c(fg)=c(g)$。此处不要求你证明 Dedekind–Mertens lemma。
:::

:::remark
## 关联

- [CA-Q003 · McCoy theorem](ref:CA-Q003)
- [CA-Q004 · Primitive product criterion](ref:CA-Q004)
- [CA-K006 · Content formula](ref:CA-K006)
:::
