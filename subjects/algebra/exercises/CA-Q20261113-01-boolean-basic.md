---
id: "CA-Q20261113-01"
track: "交换代数"
study_date: "2026-11-13"
source_pack: "folio-ca-2026-11-13-boolean-nilradical"
source_document: "problems/CA-Q20261113-01-boolean-basic.md"
source_note: "Atiyah–Macdonald, Exercise 11(i)–(ii), p. 11（用户提供）；题号、页码按原包保留，未独立核对。"
source_verified: false
title: "Boolean ring：2a=0 与素理想"
english: "Boolean rings: characteristic and prime quotients"
summary: "证明 Boolean ring 中 2a=0，并通过素理想商环得到 F₂。"
minutes: 15
chapter: "Chapter 1"
tags: ["交换代数", "boolean-ring", "prime-ideal", "maximal-ideal", "quotient-ring"]
targets: ["CA-K20261113-01", "CA-K20261113-03"]
related_questions: ["CA-Q20261113-03"]
mistake_ids: ["CA-M20261113-01", "CA-M20261113-02", "CA-M20261113-03"]
related: ["ca.boolean-nilradical-path", "ca.daily-2026-11-13", "CA-M-20261113"]
difficulty: "进阶"
difficulty_original: 2
imported_status: "待独立复做"
initial_status: "review"
order: 7
aliases: ["CA-Q20261113-01", "Boolean ring：$2a=0$ 与 prime ideals"]
---

:::problem
> **出处**：Atiyah–Macdonald, *Introduction to Commutative Algebra*, Chapter 1, Exercise 11(i)–(ii), p. 11（题号和页码来自本次提问，尚未独立核对）。
> **建议用时**：15 分钟。**术语约定**：所有 ring 均为含单位元的 commutative ring；prime ideal 总为 proper ideal。

## 题目

称 $A$ 为 **Boolean ring**，如果对每个 $a\in A$，$a^2=a$。

1. 证明 $2a=0$ 对所有 $a\in A$ 成立。
2. 证明任意 prime ideal $\mathfrak p\subset A$ 都是 maximal，并且 $A/\mathfrak p\cong\mathbb F_2$。
:::

:::hint
## 提示（先独立作答）

1. 比较 $(-a)^2$ 与 $-a$，或展开 $(a+a)^2$。
:::

:::hint
2. $A/\mathfrak p$ 是 integral domain；商环中的每个元素仍满足 $x^2=x$。
:::

:::hint
3. 在 integral domain 中，$x(x-1)=0$ 说明了什么？
:::

:::solution
## 严格证明

### (i) 每个元素都满足 $2a=0$

因为 $-a\in A$ 也幂等，故

$$(-a)^2=-a.$$

另一方面，$(-a)^2=a^2=a$，故 $a=-a$，从而

$$\boxed{2a=0.}$$

特别地，取 $a=1$，得到 $1+1=0$（当 $A\neq0$ 时，$\operatorname{char} A=2$）。

### (ii) 素理想的商环是 $\mathbb F_2$

任取 prime ideal $\mathfrak p$，设 $B=A/\mathfrak p$。由素理想判别法，$B$ 是 integral domain；由于 $\mathfrak p$ proper，$1_B\neq0_B$。

任意 $\bar a\in B$ 都满足

$$\bar a^2=\overline{a^2}=\bar a,$$

因此

$$\bar a(\bar a-1_B)=0.$$

由于 $B$ 是 integral domain，必有 $\bar a=0_B$ 或 $\bar a=1_B$。两者不同，因而 $B$ 恰有两个元素。映射 $\mathbb F_2\to B$，$\bar0\mapsto0_B$、$\bar1\mapsto1_B$，是环同构：

$$\boxed{A/\mathfrak p\cong\mathbb F_2.}$$

特别地，$A/\mathfrak p$ 是 field，由 maximal ideal 判别法，$\mathfrak p$ 是 maximal。
:::

:::remark
## 用户已出现的疑惑与修正

- **环有没有 $1$？** 本题采用 A–M 的含幺交换环约定。商环 $A/\mathfrak p$ 的单位是 $1_A+\mathfrak p$。
- **“得到 $A=\mathbb F_2$”**：只有在 $A$ 本身还是 integral domain 时才成立；一般只能推出 $A/\mathfrak p\cong\mathbb F_2$。
- **“素理想是整环”**：准确陈述为“$A/\mathfrak p$ 是 integral domain”，随后进一步推出“$\mathfrak p$ 是 maximal ideal”。
:::

:::remark
## 结构总结与自测

$$\operatorname{Spec}(A)=\operatorname{MaxSpec}(A)\qquad\text{(Boolean ring)}.$$

自测：为什么 $\mathbb F_2\times\mathbb F_2$ 是 Boolean ring 却不是 field？找出其所有 prime ideals。
:::

:::remark
## 双向链接

- 定义 / 定理：[Boolean ring](ref:CA-K20261113-01)
- 例子：[$\mathbb F_2\times\mathbb F_2$](ref:CA-E20261113-01)
- 后续练习：[Boolean ring 的有限生成理想](ref:CA-Q20261113-03)
- 易错点：[本题易错点](ref:CA-M-20261113)
:::
