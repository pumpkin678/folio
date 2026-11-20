---
id: "CA-E20261113-02"
track: "交换代数"
study_date: "2026-11-13"
source_pack: "folio-ca-2026-11-13-boolean-nilradical"
source_document: "examples/CA-E20261113-02-truncated-polynomials.md"
source_note: "用户提供的 2026-11-13 Boolean rings 与 nilradical 知识包；书目信息按原包保留，未独立核对。"
source_verified: false
title: "截断多项式环的唯一素理想"
english: "The unique prime ideal in truncated polynomials"
summary: "在 k[ε]/(ε³) 中计算幂零元、单位及其逆，得到唯一素理想 (ε)。"
requires: ["CA-K20261113-02"]
related: ["CA-E003"]
tags: ["nilradical", "truncated-polynomial", "local-ring", "unit", "counterexample"]
minutes: 5
type: "eg"
related_questions: ["CA-Q20261113-02"]
aliases: ["CA-E20261113-02", "Unique prime example: truncated polynomials"]
order: 24
---

:::example
## Example

设 $k$ 是 field，$A=k[\varepsilon]/(\varepsilon^3)$。任意元素唯一表示为

$$u=a+b\varepsilon+c\varepsilon^2,\qquad a,b,c\in k.$$

若 $a=0$，则 $u\in(\varepsilon)$，故 $u^3=0$，是 nilpotent。

若 $a\neq0$，写成 $u=a(1+t)$，其中 $t\in(\varepsilon)$ 且 $t^3=0$。因此

$$u^{-1}=a^{-1}(1-t+t^2).$$

故非单位元恰是 $\mathfrak N=(\varepsilon)$，并且

$$A/\mathfrak N\cong k.$$

所以 $\operatorname{Spec}(A)=\{(\varepsilon)\}$，且 $A$ 不是 field（$\varepsilon\ne0$ 但 nilpotent）。
:::

:::remark
## 关联

- [唯一 prime ideal 等价条件](ref:CA-Q20261113-02)
- [Nilradical / local ring](ref:CA-K20261113-02)
:::
