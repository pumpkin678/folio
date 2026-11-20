---
id: "CA-E004"
title: "一般 content product 只有包含，不必相等"
english: "Strict inclusion for content products"
summary: "以 k[u,v] 上的 u + vx 与 u − vx 说明 content 乘法一般只有包含关系。"
track: "交换代数"
study_date: "2026-11-12"
source_note: "本次讨论题面与笔记（2026-11-12）；Atiyah–Macdonald Chapter 1 相关主题，原书精确习题编号未独立核对。"
source_verified: false
tags: ["交换代数", "counterexample", "content-ideal", "ideal-product"]
related_questions: ["CA-Q004", "CA-Q005"]
type: "eg"
requires: ["CA-K006"]
related: []
order: 13
minutes: 5
---

:::example
取 field $k$，令 $A=k[u,v]$，且 $x$ 是另一个 indeterminate。设

$$f=u+vx,\quad g=u-vx.$$

于是

$$c(f)=c(g)=(u,v),\quad c(f)c(g)=(u^2,uv,v^2).$$

但

$$fg=u^2-v^2x^2,\quad c(fg)=(u^2,v^2).$$

因为 $uv\notin(u^2,v^2)$（它的单项式同时不被 $u^2$ 或 $v^2$ 整除），所以

$$\boxed{c(fg)\subsetneq c(f)c(g).}$$

**说明：**此前讨论中的 $(\mathbb Z/4\mathbb Z)[x]$ 例子 $f=2+x$、$g=2-x$ 的确有 $c(fg)=c(f)c(g)=A$，**不是严格包含的反例**；这里给出正确反例。
:::
