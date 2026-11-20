---
id: "dt-exterior-derivative"
track: "微分拓扑 · Week 1–8"
chapter: "Week 8"
week: 8
tags: ["Week 8", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-exterior-derivative.md"
source_note: "为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-08", "dt-w8-2", "dt-w8-3", "dt-w8-4", "dt-w8-5", "dt-w8-6"]
title: "Exterior derivative 的符号约定"
type: "def"
english: "Week 8 · Definition"
summary: "明确外微分的导子公式、坐标表达与全部符号约定。"
order: 801
minutes: 5
related_questions: ["dt-w8-2", "dt-w8-3", "dt-w8-4", "dt-w8-5", "dt-w8-6"]
---

:::statement
对 $p$-形式采用
$$d\omega(X_1,\ldots,X_{p+1})=\sum_i(-1)^{i-1}X_i\omega(X_1,\widehat X_i,\ldots,X_{p+1})+\sum_{i<j}(-1)^{i+j}\omega([X_i,X_j],X_1,\widehat X_i,\widehat X_j,\ldots,X_{p+1}).$$
后面未删参数保持原顺序。特别地 $df(X)=Xf$，$d\alpha(X,Y)=X\alpha(Y)-Y\alpha(X)-\alpha([X,Y])$。

在流形坐标中，若 $\omega=\sum_Ia_I dx^I$，则 $d\omega=\sum_{j,I}\partial_ja_I dx^j\wedge dx^I$。与上式相等可在坐标向量场上检验：它们括号为零，二者都是张量，坐标基取值决定形式。上式的 $A$-多线性来自 $[X,aY]=X(a)Y+a[X,Y]$ 中的额外项与第一和的 Leibniz 项抵消。
:::

## 来源
- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-08](ref:dt-week-08) · [dt-w8-2](ref:dt-w8-2) · [dt-w8-3](ref:dt-w8-3) · [dt-w8-4](ref:dt-w8-4) · [dt-w8-5](ref:dt-w8-5) · [dt-w8-6](ref:dt-w8-6)
