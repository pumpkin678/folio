---
id: "CA-Q20261113-02"
track: "交换代数"
study_date: "2026-11-13"
source_pack: "folio-ca-2026-11-13-boolean-nilradical"
source_document: "problems/CA-Q20261113-02-unique-prime-nilradical.md"
source_note: "本次对话题目；未确认原书题号；题号、页码按原包保留，未独立核对。"
source_verified: false
title: "唯一素理想、nilradical 与域商环"
english: "A unique prime ideal and the reduced quotient"
summary: "对非零交换含幺环，证明唯一素理想、非单位元幂零、幂零根基商环为域三个条件等价。"
minutes: 15
chapter: "Chapter 1 (topics)"
tags: ["交换代数", "nilradical", "prime-ideal", "local-ring", "unit", "quotient-ring"]
targets: ["CA-K20261113-02"]
related_questions: ["CA-Q20261113-01"]
mistake_ids: ["CA-M20261113-03", "CA-M20261113-05", "CA-M20261113-06"]
related: ["ca.boolean-nilradical-path", "ca.daily-2026-11-13", "CA-M-20261113"]
difficulty: "进阶"
difficulty_original: 3
imported_status: "待独立复做"
initial_status: "review"
order: 8
aliases: ["CA-Q20261113-02", "唯一 prime ideal、nilradical 与域商环"]
---

:::problem
> **出处**：本次对话中的题目（未提供确定书籍题号）；**建议用时**：15 分钟。
> 设 $A\neq0$ 是含单位元的 commutative ring，$\mathfrak N=\operatorname{Nil}(A)$。

## 题目

证明以下三项等价：

1. $A$ 恰有一个 prime ideal。
2. $A$ 的每个元素不是 unit 就是 nilpotent。
3. $A/\mathfrak N$ 是 field。
:::

:::hint
## 提示（先独立作答）

- $\mathfrak N=\bigcap_{\mathfrak p\in\operatorname{Spec} A}\mathfrak p$。
:::

:::hint
- 非单位元所属的 principal ideal 是 proper 的，故包含于某个 maximal ideal。
:::

:::hint
- Prime ideal correspondence 说明 $\operatorname{Spec}(A/\mathfrak N)$ 与 $\operatorname{Spec}(A)$ 对应。
:::

:::solution
## 严格证明

### (i) $\Rightarrow$ (ii)

设 $\operatorname{Spec}(A)=\{\mathfrak p\}$。因为 nilradical 是所有 prime ideals 的交集，故 $\mathfrak N=\mathfrak p$。

由于 $A\neq0$，$A$ 存在 maximal ideal $\mathfrak m$；它必为 prime ideal，故 $\mathfrak m=\mathfrak p$，这也是 $A$ 唯一的 maximal ideal。

任取非单位元 $a$，则 $(a)$ proper，因此存在 maximal ideal $\mathfrak m'$ 使 $(a)\subseteq\mathfrak m'$。由唯一性 $\mathfrak m'=\mathfrak p=\mathfrak N$，于是 $a\in\mathfrak N$，即 $a$ nilpotent。命题 (ii) 成立。

### (ii) $\Rightarrow$ (iii)

因为 $A\neq0$，$1_A$ 不可能 nilpotent，故 $1_A\notin\mathfrak N$；因此 $A/\mathfrak N$ 是非零环。

任取非零陪集 $\bar a=a+\mathfrak N$，则 $a\notin\mathfrak N$，所以 $a$ 不是 nilpotent。由 (ii)，$a$ 是 unit，存在 $b\in A$ 使得 $ab=1_A$。于是

$$\bar a\,\bar b=\overline{ab}=\bar 1.$$

故商环中每个非零元素可逆，$A/\mathfrak N$ 是 field。

### (iii) $\Rightarrow$ (i)

若 $A/\mathfrak N$ 是 field，则它的唯一 prime ideal 是 $(0)$。由 prime ideal correspondence theorem，$A/\mathfrak N$ 的 prime ideals 与 $A$ 中包含 $\mathfrak N$ 的 prime ideals 一一对应。

而所有 prime ideals 都包含 $\mathfrak N$，故 $A$ 恰有一个 prime ideal，且它正是 $\mathfrak N$。

综上，(i)、(ii)、(iii) 等价。
:::

:::remark
## 易错点

- “唯一 prime ideal 就是 maximal”需要说明 maximal ideals 存在、且它们都是 prime ideals。
- $\bar a\neq0$ 只推出 $a\notin\mathfrak N$；还需要 (ii) 才能得到 $a$ 是 unit。
- $A/\mathfrak N$ 为 field 不意味着 $A$ 为 field。$k[\varepsilon]/(\varepsilon^3)$ 是反例。
- “每个元素分别 nilpotent”不意味着存在统一 $n$ 使 $\mathfrak N^n=0$。
- **非零假设不可省**：零环没有 prime ideals，且零商环不是 field。
:::

:::remark
## 进一步结构

这些条件等价于：$A$ 是 Krull dimension 为 $0$ 的 local ring，其唯一 maximal ideal 等于 $\operatorname{Nil}(A)$。
:::

:::remark
## 双向链接

- 定理：[Nilradical、local rings 与商环](ref:CA-K20261113-02)
- 例子：[$k[\varepsilon]/(\varepsilon^3)$](ref:CA-E20261113-02)
- 易错点：[本题易错点](ref:CA-M-20261113)
:::
