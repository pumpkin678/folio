---
id: "CA-K006"
title: "Content product 的包含关系、反例与强化结论"
english: "Products of content ideals"
summary: "区分 content 乘积的一般包含关系、严格包含反例和 primitive 因子的强化结论。"
track: "交换代数"
study_date: "2026-11-12"
source_note: "本次讨论题面与笔记（2026-11-12）；Atiyah–Macdonald Chapter 1 相关主题，原书精确习题编号未独立核对。"
source_verified: false
tags: ["交换代数", "content-ideal", "ideal-product", "dedekind-mertens", "primitive"]
related_questions: ["CA-Q004", "CA-Q005"]
type: "thm"
requires: ["CA-K003", "CA-K005"]
order: 9
minutes: 10
---

:::statement
## 普遍成立的包含关系

对 $f=\sum a_ix^i$、$g=\sum b_jx^j$，由于 $fg$ 的系数为 $d_k=\sum_{i+j=k}a_ib_j$，所以

$$\boxed{c(fg)\subseteq c(f)c(g).}$$

这对**所有交换含幺环**成立。
:::

:::remark
## 等号未必成立

令 $A=k[u,v]$，把 $x$ 当成新的 indeterminate，取

$$f=u+vx,\qquad g=u-vx.$$

则 $c(f)c(g)=(u,v)^2=(u^2,uv,v^2)$，而

$$fg=u^2-v^2x^2,\qquad c(fg)=(u^2,v^2),$$

且 $uv\notin(u^2,v^2)$。故为真包含。参见 [CA-E004](ref:CA-E004)。
:::

:::remark
## Primitive 情形的强化

如果 $c(f)=A$，则

$$\boxed{c(fg)=c(g).}$$

可用 McCoy theorem 在 $A/c(fg)$ 上证明；参见 [CA-Q005](ref:CA-Q005)。它特别推出 primitive product criterion。
:::

:::remark
## 可选：Dedekind–Mertens lemma

若 $g\ne0$ 且 $m=\deg g$，有

$$c(f)^{m+1}c(g)=c(f)^mc(fg).$$

这是一般交换环上的更强结论，不要把它误写为无条件 $c(fg)=c(f)c(g)$。
:::

:::remark
## 关联

- [CA-Q004](ref:CA-Q004)
- [CA-Q005](ref:CA-Q005)
- [CA-E004](ref:CA-E004)
:::
