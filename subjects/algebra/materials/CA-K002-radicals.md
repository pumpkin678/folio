---
id: CA-K002
type: def
title: 幂零根基与 Jacobson 根基
english: Nilradical and Jacobson radical
summary: 区分素理想的交与极大理想的交，掌握 Jacobson 根基的单位判别法。
related_questions:
  - CA-Q001
  - CA-Q002
tags:
  - 交换代数
  - Nilradical
  - Jacobson radical
  - 素理想
aliases:
  - nilradical
  - Jacobson radical
  - 根基
track: 交换代数
study_date: 2026-11-11
order: 5
minutes: 10
---

:::statement
对交换含幺环 $R$，

$$\operatorname{Nil}(R)=\{a\in R:\exists n\ge1,\ a^n=0\}=\bigcap_{\mathfrak p\in\operatorname{Spec}(R)}\mathfrak p,$$

$$\operatorname{Jac}(R)=\bigcap_{\mathfrak m\in\operatorname{MaxSpec}(R)}\mathfrak m.$$

总有 $\operatorname{Nil}(R)\subseteq\operatorname{Jac}(R)$，但通常不等。
:::

:::remark
**Jac 判别法**：

$$a\in\operatorname{Jac}(R)\iff \forall b\in R,\ 1-ab\in R^\times.$$

**Prime quotient**：$\mathfrak p$ 是 prime ideal 当且仅当 $R/\mathfrak p$ 是 integral domain。$\bar a=0$ 的准确意思是 $a\in\mathfrak p$，不是 $a=0$。
:::

:::example
**反例**：局部整环 $R=k[t]_{(t)}$ 中，$\operatorname{Jac}(R)=(t)R\ne0$，但 $\operatorname{Nil}(R)=0$。
:::

:::remark
**多项式环的特殊结论**：

$$\operatorname{Jac}(A[x])=\operatorname{Nil}(A[x])=\operatorname{Nil}(A)[x].$$
:::
