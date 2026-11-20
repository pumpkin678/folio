---
id: "CA-E001"
title: "Z/6Z 的 primitive polynomial，系数全为 nonunits"
english: "Primitive polynomials with no unit coefficient"
summary: "在 Z/6Z 中，2 + 3x 的系数均不可逆，仍可生成单位理想并构成 primitive 多项式。"
track: "交换代数"
study_date: "2026-11-12"
source_note: "本次讨论题面与笔记（2026-11-12）；Atiyah–Macdonald Chapter 1 相关主题，原书精确习题编号未独立核对。"
source_verified: false
tags: ["交换代数", "primitive", "z6", "zero-divisors"]
related_questions: ["CA-Q004"]
type: "eg"
requires: ["CA-K003"]
related: []
order: 10
minutes: 5
---

:::example
令 $A=\mathbb Z/6\mathbb Z$，有 zero divisors。取

$$f(x)=2+3x,\qquad g(x)=3+2x.$$

因为 $(2,3)=A$（如 $2\cdot2+3\cdot1=7\equiv1\pmod6$），所以

$$c(f)=c(g)=A.$$

可是 $2,3\in A$ 都不是 units！

计算乘积：

$$fg=6+(4+9)x+6x^2=x\quad\text{in }A[x].$$

于是 $c(fg)=(1)=A$，验证 [CA-Q004](ref:CA-Q004)。

**收获：**判断 primitive 看的是系数生成的 ideal，**不是**“存在一个单位系数”。
:::
