---
id: "CA-K20261113-02"
track: "交换代数"
study_date: "2026-11-13"
source_pack: "folio-ca-2026-11-13-boolean-nilradical"
source_document: "concepts/CA-K20261113-02-nilradical-local-rings.md"
source_note: "用户提供的 2026-11-13 Boolean rings 与 nilradical 知识包；书目信息按原包保留，未独立核对。"
source_verified: false
title: "Nilradical、唯一素理想与局部环"
english: "Nilradical, prime correspondence and local rings"
summary: "在非零交换含幺环中，联系唯一素理想、非单位元幂零与幂零根基商环为域。"
requires: ["CA-K002"]
related: ["CA-E20261113-02"]
tags: ["nilradical", "prime-ideal", "local-ring", "unit", "quotient-ring"]
minutes: 10
type: "thm"
related_questions: ["CA-Q20261113-02"]
aliases: ["CA-K20261113-02", "Nilradical, prime correspondence and local ring"]
order: 21
---

:::statement
## Definition

对含幺交换环 $A$，

$$\operatorname{Nil}(A)=\{a\in A:\exists n\ge1,\ a^n=0\}.$$

**Nilradical theorem**：

$$\operatorname{Nil}(A)=\bigcap_{\mathfrak p\in\operatorname{Spec}(A)}\mathfrak p.$$

**Local ring**：恰有一个 maximal ideal 的含幺交换环。

## 基本判别法

- $\mathfrak p$ prime $\Longleftrightarrow$ $A/\mathfrak p$ 是 integral domain。
- $\mathfrak m$ maximal $\Longleftrightarrow$ $A/\mathfrak m$ 是 field。
- 对 ideal $I$，$\operatorname{Spec}(A/I)\cong\{\mathfrak p\in\operatorname{Spec}(A): I\subseteq\mathfrak p\}$，通过原像映射对应。

## Theorem（非零环）

对于非零交换含幺环 $A$，以下等价：

$$
|\operatorname{Spec}(A)|=1
\iff
A\setminus A^\times=\operatorname{Nil}(A)
\iff
A/\operatorname{Nil}(A)\text{ is a field}.
$$

这是 Krull dimension 为 $0$ 的 local ring 的刻画。
:::

:::remark
## 一个常见误区

“$\operatorname{Nil}(A)$ 是 nil ideal”（其中每个元素各自 nilpotent）与“$\operatorname{Nil}(A)$ 是 nilpotent ideal”（存在 $N$ 使 $\operatorname{Nil}(A)^N=0$）不同。
:::

:::remark
## 补充引理（商去 nil ideal 的单位可提升）

若 $a+\mathfrak N$ 是 $A/\mathfrak N$ 中的 unit，则存在 $b\in A$ 使 $ab=1+n$，其中 $n\in\mathfrak N$。取 $n^r=0$，有限几何级数给出 $(1+n)^{-1}=1-n+\cdots+(-n)^{r-1}$，故 $a$ 也可逆。
:::

:::remark
## 链接

- 严格证明：[唯一 prime ideal 等价条件](ref:CA-Q20261113-02)
- 例子：[$k[\varepsilon]/(\varepsilon^3)$](ref:CA-E20261113-02)
:::
