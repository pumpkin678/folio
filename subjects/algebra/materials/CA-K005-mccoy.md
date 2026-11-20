---
id: "CA-K005"
title: "McCoy theorem 与最小次数技巧"
english: "McCoy theorem and minimal degree"
summary: "用最小次数的非零 annihilator，证明多项式零因子必有非零常数 annihilator。"
track: "交换代数"
study_date: "2026-11-12"
source_note: "本次讨论题面与笔记（2026-11-12）；Atiyah–Macdonald Chapter 1 相关主题，原书精确习题编号未独立核对。"
source_verified: false
tags: ["交换代数", "mccoy", "zero-divisor", "annihilator", "minimal-degree"]
related_questions: ["CA-Q003", "CA-Q005"]
type: "thm"
requires: ["CA-K003"]
order: 8
minutes: 10
---

:::statement
## 定理

令 $A$ 为交换含幺环，$f\in A[x]$。zero divisor 指存在非零 annihilator，则

$$\boxed{\exists\,0\ne g\in A[x]:fg=0\iff\exists\,0\ne a\in A:fa=0.}$$

即多项式的 zero divisor 总有一个**常数 annihilator**。
:::

:::proof
## 精髓

从所有 $0\ne g$ 且 $fg=0$ 中取 degree 最小的。若最高首项系数 $b_m\ne0$，证明 $fb_m=0$。

核心推理是：若 $a_jg\ne0$，但由最高次项比较得 $a_jb_m=0$，则 $h=a_jg$ 满足 $fh=0$、$0\ne h$ 且 $\deg h<\deg g$，与最小性矛盾。
:::

:::remark
## 衍生推论

若 $f$ primitive，则 $f$ 不是 zero divisor：常数 $a$ 若满足 $af=0$，由 $c(f)=A$ 得 $a=0$；再用本定理。

**不要混淆**：并非说任一非零 annihilator $g$ 都是常数，而是说存在非零常数 annihilator。
:::

:::remark
## 关联

- [CA-Q003 · 完整证明](ref:CA-Q003)
- [CA-Q005 · 在 quotient ring 上应用](ref:CA-Q005)
- [CA-E003 · 模 prime 丢失 nilpotent 信息](ref:CA-E003)
:::
