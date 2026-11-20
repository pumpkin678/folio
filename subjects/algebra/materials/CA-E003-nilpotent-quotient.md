---
id: "CA-E003"
title: "Nilpotent 元素在所有 prime quotients 中消失"
english: "Nilpotents disappear in prime quotients"
summary: "双数环中的幂零系数在所有素理想商环里消失，说明归约不能恢复精确的 annihilator 信息。"
track: "交换代数"
study_date: "2026-11-12"
source_note: "本次讨论题面与笔记（2026-11-12）；Atiyah–Macdonald Chapter 1 相关主题，原书精确习题编号未独立核对。"
source_verified: false
tags: ["交换代数", "nilpotent", "prime-ideal", "zero-divisor"]
related_questions: ["CA-Q003"]
type: "eg"
requires: ["CA-K004", "CA-K005"]
related: []
order: 12
minutes: 5
---

:::example
令 $A=k[\varepsilon]/(\varepsilon^2)$，取

$$f(x)=\varepsilon x,\qquad g(x)=\varepsilon x.$$

它们都是非零多项式且

$$fg=\varepsilon^2x^2=0.$$

$A$ 唯一的 prime ideal 是 $(\varepsilon)$，在 $A/(\varepsilon)\cong k$ 中有

$$\bar f=\bar g=0.$$

虽然商环是 integral domain，信息却退化成 $0\cdot0=0$，并不能从中推出原来的 $g$ 是常数多项式或其首项系数的 annihilator 关系。

事实上本例确实存在常数 annihilator $a=\varepsilon$，但这需要回到原环计算 $\varepsilon f=0$。

**关键词：**reduction modulo all prime ideals 检测 nilradical；并非忠实保留 nilpotent 系数。
:::
