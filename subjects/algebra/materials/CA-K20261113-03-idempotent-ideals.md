---
id: "CA-K20261113-03"
track: "交换代数"
study_date: "2026-11-13"
source_pack: "folio-ca-2026-11-13-boolean-nilradical"
source_document: "concepts/CA-K20261113-03-idempotent-ideals.md"
source_note: "用户提供的 2026-11-13 Boolean rings 与 nilradical 知识包；书目信息按原包保留，未独立核对。"
source_verified: false
title: "幂等生成元、join 与直和分解"
english: "Idempotent ideals, joins and direct summands"
summary: "用 e=a+b−ab 合并幂等生成元，并通过直和分解理解有限生成理想的投射性。"
requires: ["CA-K20261113-01"]
related: ["CA-E20261113-01"]
tags: ["idempotent", "principal-ideal", "direct-summand", "projective-module"]
minutes: 7
type: "thm"
related_questions: ["CA-Q20261113-03", "CA-Q20261113-01"]
aliases: ["CA-K20261113-03", "Idempotent ideals and direct summands"]
order: 22
---

:::statement
## Definition

$e\in A$ 是 idempotent 如果 $e^2=e$。对含幺交换环，任意 idempotent $e$ 给出理想 $eA$。

## Two-idempotent join

若 $a^2=a,b^2=b$，令

$$a\vee b=a+b-ab=1-(1-a)(1-b).$$

则 $a(a\vee b)=a$、$b(a\vee b)=b$，因此

$$(a,b)=(a\vee b).$$

对有限族递归操作，得到

$$(a_1,\ldots,a_n)=\left(1-\prod_{i=1}^n(1-a_i)\right).$$
:::

:::proof
## Direct sum decomposition

若 $e^2=e$，则

$$A=eA\oplus(1-e)A.$$

证明：$1=e+(1-e)$，因而和为 $A$；若 $z\in eA\cap(1-e)A$，则 $ez=z$，同时 $ez=0$，故 $z=0$。

因此由 idempotent 生成的理想是 projective $A$-module。特别地，Boolean ring 的每个 finitely generated ideal 都是 projective。
:::

:::remark
## 链接

- 完整练习：[Boolean ring 的有限生成理想](ref:CA-Q20261113-03)
- 基础定义：[Boolean rings](ref:CA-K20261113-01)
:::
