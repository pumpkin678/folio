---
id: "CA-Q003"
title: "McCoy theorem：多项式零因子的常数 annihilator"
english: "McCoy theorem for polynomial zero divisors"
summary: "在一般交换环上，用最小次数反证法将多项式 annihilator 降为非零常数。"
track: "交换代数"
study_date: "2026-11-12"
source_note: "本次讨论题面与笔记（2026-11-12）；Atiyah–Macdonald Chapter 1 相关主题，原书精确习题编号未独立核对。"
source_verified: false
tags: ["交换代数", "polynomial-ring", "zero-divisor", "annihilator", "minimal-degree", "mccoy"]
related_questions: ["CA-Q004", "CA-Q005"]
targets: ["CA-K005", "CA-K003"]
mistake_ids: ["CA-M007"]
chapter: "Chapter 1 · Polynomial rings"
difficulty: "进阶"
difficulty_original: 3
imported_status: "待独立复做"
initial_status: "review"
order: 4
minutes: 25
---

:::problem
## 题目

令 $A$ 为交换含幺环，$f(x)=\sum_{i=0}^{n}a_ix^i\in A[x]$。zero divisor 采用“存在非零 annihilator”的定义。证明

$$
f\text{ is a zero divisor in }A[x]
\iff \exists\,0\ne a\in A,\quad af=0.
$$

**不可假设 $A$ 为 integral domain。**
:::

:::hint
## 提示（先做题）

从所有 $fg=0$ 且 $g\ne0$ 的多项式中，取 degree 最小的 $g=\sum_{j=0}^m b_jx^j$，其中 $b_m\ne0$。目标：证明 $fb_m=0$。
:::

:::solution
## 严格证明

“$\Leftarrow$”：若 $a\ne0$ 且 $af=0$，则把 $a$ 视为非零常数多项式即可。

“$\Rightarrow$”：选择 degree 最小的非零 $g$ 满足 $fg=0$，并设 $\deg g=m$、$b_m\ne0$。

先证明每个系数 $a_i$ 都满足 $a_i g=0$。否则，取最大的下标 $j$ 使 $a_jg\ne0$。由 $a_i g=0$（$i>j$）及 $fg=0$，得到

$$
\left(\sum_{i=0}^{j}a_ix^i\right)g=0.
$$

比较 $x^{j+m}$ 系数，得 $a_jb_m=0$。令 $h=a_jg$，则

$$
fh=a_jfg=0,\qquad h\ne0,\qquad \deg h<m,
$$

最后一个不等式来自 $h$ 的 $x^m$ 系数 $a_jb_m=0$。这违反 $g$ 的最小次数性。因此所有 $a_i g=0$。

比较 $a_i g$ 的 $x^m$ 系数，有 $a_i b_m=0$ 对每个 $i$ 成立，从而

$$fb_m=\sum_i(a_i b_m)x^i=0.$$

由于 $b_m\ne0$，取 $a=b_m$ 即得结论。 $\square$

## 证明主线

1. 选择最小次数的 annihilator $g$。
2. 若有 $a_jg\ne0$，用最高未消去系数构造 $h=a_jg$。
3. 因为 $fh=0$ 且 $\deg h<\deg g$，矛盾。
4. 全部 $a_i g=0$，因此非零首项系数 $b_m$ 是常数 annihilator。
:::

:::remark
## 用户的探索与待修正点

你提出把 $A$ 模去所有 prime ideals，先进入 integral domains。这个想法揭示了一种常用手段，但**不能由商环上 $\bar f\bar g=0$ 推出 $g$ 的次数为 0**：每个素理想商环只给出 $\bar f=0$ 或 $\bar g=0$，而非原环的系数逐项相消信息；nilpotent 系数也可能在全部素理想商环中消失。

见 [CA-E003](ref:CA-E003)。
:::

:::remark
## 关联

- 定理卡：[CA-K005 · McCoy](ref:CA-K005)
- 概念卡：[CA-K003 · Content ideal](ref:CA-K003)
- 强化题：[CA-Q005](ref:CA-Q005)
- 易错点：[CA-M007](ref:CA-M-ADD-20261112)
:::

:::remark
## 自测

1. 为什么这份证明中**不需要** $\deg(fg)=\deg f+\deg g$？
2. 固定最小次数 $g$ 后，是否所有 $b_j$ 都满足 $fb_j=0$？（是；解释原因。）
3. 在 $k[\varepsilon]/(\varepsilon^2)[x]$ 中验证例子 $f=\varepsilon x$。
:::
