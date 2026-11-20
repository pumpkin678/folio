---
id: "CA-K003"
title: "Content ideal、primitive polynomial 与常数 annihilator"
english: "Content ideals and primitive polynomials"
summary: "以系数生成的理想定义 content 与 primitive，并区分单位系数与系数线性组合等于 1。"
track: "交换代数"
study_date: "2026-11-12"
source_note: "本次讨论题面与笔记（2026-11-12）；Atiyah–Macdonald Chapter 1 相关主题，原书精确习题编号未独立核对。"
source_verified: false
tags: ["交换代数", "content-ideal", "primitive", "annihilator"]
related_questions: ["CA-Q003", "CA-Q004", "CA-Q005"]
type: "def"
requires: []
order: 6
minutes: 8
---

:::statement
## 定义

设 $A$ 是交换含幺环，$f(x)=a_0+\cdots+a_nx^n\in A[x]$。

$$\boxed{c(f):=(a_0,\ldots,a_n)\subseteq A.}$$

这叫 **content ideal（系数理想）**。若 $c(f)=A$，称 $f$ 为 **primitive polynomial**。
:::

:::remark
## 等价刻画

$$f\text{ primitive}\iff \exists r_0,\ldots,r_n\in A,\quad \sum_i r_i a_i=1.$$

**注意：**primitive 不要求某一个系数可逆。例见 [CA-E001](ref:CA-E001)。
:::

:::remark
## 与 annihilator 的关系

若 $f$ primitive 且 $af=0$（$a\in A$），则 $a a_i=0$（所有 $i$），所以

$$a=a\sum_i r_ia_i=\sum_i r_i(aa_i)=0.$$

因此 primitive polynomial 没有非零的**常数** annihilator。结合 [McCoy theorem](ref:CA-K005) 得：primitive polynomial 在 $A[x]$ 中不是 zero divisor（这里 zero divisor 按存在非零 annihilator 定义）。
:::

:::remark
## 关联

- [CA-Q004 · Primitive product criterion](ref:CA-Q004)
- [CA-Q005 · Primitive preserves content](ref:CA-Q005)
- [CA-K004 · Quotient detection](ref:CA-K004)
- [CA-E002 · 非 primitive 多项式](ref:CA-E002)
:::
