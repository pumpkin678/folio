---
id: "CA-E002"
title: "一个 prime quotient 非零不意味着 primitive"
english: "One prime quotient is not enough"
summary: "2x + 4 在素理想 (0) 下非零，却不是 primitive；判别所需的是全称量词。"
track: "交换代数"
study_date: "2026-11-12"
source_note: "本次讨论题面与笔记（2026-11-12）；Atiyah–Macdonald Chapter 1 相关主题，原书精确习题编号未独立核对。"
source_verified: false
tags: ["交换代数", "counterexample", "prime-ideal", "quantifier"]
related_questions: ["CA-Q004"]
type: "eg"
requires: ["CA-K003", "CA-K004"]
related: []
order: 11
minutes: 5
---

:::example
设 $A=\mathbb Z$，$f(x)=2x+4$，则

$$c(f)=(2,4)=(2)\ne\mathbb Z,$$

故 $f$ 非 primitive。

选取 prime ideal $\mathfrak p=(0)$，在 $(A/\mathfrak p)[x]\cong\mathbb Z[x]$ 中

$$\bar f=2x+4\ne0.$$

但选取 maximal ideal $\mathfrak m=(2)$，在 $\mathbb F_2[x]$ 中 $\bar f=0$。

**结论：**

$$f\text{ primitive}\iff\bar f\ne0\text{ for ALL prime (or maximal) ideals}.$$

不能把 ALL 偷换成 SOME。
:::
