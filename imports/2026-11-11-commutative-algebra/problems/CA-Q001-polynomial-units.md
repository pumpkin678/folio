---
id: CA-Q001
title: 多项式环中的单位（Polynomial units）
track: 交换代数
chapter: Chapter 1
source: "Atiyah–Macdonald, Introduction to Commutative Algebra（当前 Hint 提及 Exercise 2(i)；题号未独立核对）"
source_verified: false
status: 待独立复做
difficulty: 2
tags: [polynomial-ring, unit, nilradical, prime-ideal, integral-domain]
concept_ids: [CA-K001, CA-K002]
related_questions: [CA-Q002]
mistake_ids: [CA-M003, CA-M004, CA-M006]
---

# CA-Q001 · 多项式环中的单位

## 题目
设 $A$ 为交换含幺环，$f(x)=a_0+a_1x+\cdots+a_nx^n\in A[x]$。证明

$$
f(x)\in A[x]^\times
\iff
 a_0\in A^\times \quad\text{且}\quad a_1,\ldots,a_n\in\operatorname{Nil}(A).
$$

## 提示（先不要看答案）
1. 当 $A$ 为 integral domain 时，非零多项式满足 $\deg(fg)=\deg f+\deg g$。假设 $fg=1$，可以得到什么？
2. 对任意 prime ideal $\mathfrak p$，把 $fg=1$ 映到 $(A/\mathfrak p)[x]$。
3. 对充分性，将 $f=a_0(1+h)$，证明 $h$ nilpotent，再写出有限几何级数。

## 严格证明

### 必要性
若 $fg=1$，比较常数项得到 $a_0b_0=1$，故 $a_0\in A^\times$。

任取 $\mathfrak p\in\operatorname{Spec}(A)$，系数取模 $\mathfrak p$ 的映射诱导

$$A[x]\longrightarrow(A/\mathfrak p)[x].$$

因为 $A/\mathfrak p$ 是 integral domain，$\bar f\bar g=1$ 意味着

$$\deg\bar f+\deg\bar g=\deg1=0,$$

所以 $\bar f$ 是常数多项式，即 $\bar a_i=0$（$i\ge1$）。这只意味着 $a_i\in\mathfrak p$，**不等于** $a_i=0$。

$\mathfrak p$ 任意，因此

$$a_i\in\bigcap_{\mathfrak p\in\operatorname{Spec}(A)}\mathfrak p=\operatorname{Nil}(A),\quad i\ge1.$$

### 充分性
若 $a_0\in A^\times$，各 $a_i$（$i\ge1$）nilpotent，令

$$h=a_0^{-1}\sum_{i=1}^na_ix^i,\qquad f=a_0(1+h).$$

取整数 $r_i\ge1$ 使得 $(a_0^{-1}a_i)^{r_i}=0$。令 $N=1+\sum_{i=1}^n(r_i-1)$。在 $h^N$ 的每个展开项中，必有一个系数出现至少 $r_i$ 次，因此 $h^N=0$。

于是

$$(1+h)^{-1}=1-h+h^2-\cdots+(-h)^{N-1},$$

从而 $f$ 是 unit。证毕。

## 关键转折 / 证明策略
- **整环中的 degree**：只允许常数多项式可逆。
- **模任意素理想**：把一般交换环的问题转到整环。
- **Nilradical theorem**：在每个素理想中消失 $\iff$ nilpotent。
- **有限个 nilpotents 的和仍然 nilpotent**（交换环条件不可忽略）。

## 易错点与纠正
- [CA-M003](../mistakes/CA-mistakes.md) $\deg(fg)=\deg f+\deg g$ 只在 integral domain 等适当条件下保证，不能对任意环直接用。
- [CA-M004](../mistakes/CA-mistakes.md) $\bar a_i=0$ 表示 $a_i\in\mathfrak p$，不表示 $a_i=0$。
- [CA-M006](../mistakes/CA-mistakes.md) “各系数 nilpotent”到“多项式 nilpotent”需解释为什么有限项的和 nilpotent。

## 自测
1. 为什么在 $\mathbb Z/4\mathbb Z[x]$ 中，$1+2x$ 是 unit？
2. 说明 $\operatorname{Nil}(A[x])=\operatorname{Nil}(A)[x]$。
3. 如果只对某个 $\mathfrak p$ 证明 $a_i\in\mathfrak p$，是否足够？
