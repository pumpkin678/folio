---
id: "CA-K20261113-01"
track: "交换代数"
study_date: "2026-11-13"
source_pack: "folio-ca-2026-11-13-boolean-nilradical"
source_document: "concepts/CA-K20261113-01-boolean-rings.md"
source_note: "用户提供的 2026-11-13 Boolean rings 与 nilradical 知识包；书目信息按原包保留，未独立核对。"
source_verified: false
title: "Boolean ring：定义、特征与素理想"
english: "Boolean rings and prime quotients"
summary: "从幂等条件得到 2a=0，并在素理想商环中识别 F₂。"
requires: ["CA-K002"]
related: ["CA-K20261113-03", "CA-E20261113-01"]
tags: ["boolean-ring", "prime-ideal", "maximal-ideal", "idempotent"]
minutes: 7
type: "thm"
related_questions: ["CA-Q20261113-01", "CA-Q20261113-03"]
aliases: ["CA-K20261113-01", "Boolean rings and prime quotients"]
order: 20
---

:::statement
## Definition

含幺交换环 $A$ 称为 **Boolean ring**，若 $a^2=a$ 对所有 $a\in A$ 成立。称 $a$ 为 idempotent（幂等元）。

## Theorem

对 Boolean ring $A$：

1. $2a=0$ 对所有 $a\in A$ 成立（因此非零 Boolean ring 的 characteristic 为 $2$）。
2. 每个 prime ideal $\mathfrak p$ 是 maximal，且 $A/\mathfrak p\cong\mathbb F_2$。
3. 因此 $\operatorname{Spec}(A)=\operatorname{MaxSpec}(A)$。
:::

:::proof
## Proof sketch

用 $(-a)^2=-a$ 和 $(-a)^2=a^2=a$ 得到 $2a=0$。对 prime $\mathfrak p$，商环是 integral domain，$x(x-1)=0$ 强迫 $x\in\{0,1\}$，所以是 $\mathbb F_2$。
:::

:::example
## Example & counterexample

$\mathbb F_2\times\mathbb F_2$ 是 Boolean ring，但不是 integral domain，更不是 field。不能由所有素商环同构 $\mathbb F_2$ 推出原环同构 $\mathbb F_2$。
:::

:::remark
## 链接

- 证明：[Basic exercises](ref:CA-Q20261113-01)
- 练习：[Finite ideals](ref:CA-Q20261113-03)
- 例子：[$\mathbb F_2\times\mathbb F_2$](ref:CA-E20261113-01)
:::
