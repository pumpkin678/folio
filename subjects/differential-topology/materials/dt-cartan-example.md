---
id: "dt-cartan-example"
track: "微分拓扑 · Week 1–8"
chapter: "Week 8"
week: 8
tags: ["Week 8", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-cartan-example.md"
source_note: "为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-08", "dt-w8-2", "dt-w8-3", "dt-w8-4", "dt-w8-5", "dt-w8-6"]
title: "用一个可计算例子检查符号"
type: "eg"
english: "Week 8 · Example"
summary: "用可计算的形式检验 Cartan 公式中的符号。"
order: 804
minutes: 4
related_questions: ["dt-w8-2", "dt-w8-3", "dt-w8-4", "dt-w8-5", "dt-w8-6"]
---

:::example
在 $\mathbb R^2$ 取 $\omega=x\,dy$、$X=\partial_x$。$d\omega=dx\wedge dy$，$i_X\omega=0$，$i_Xd\omega=dy$，故 Cartan 给 $L_X\omega=dy$。

直接验证：flow 为 $F_t(x,y)=(x+t,y)$，所以 $F_t^*\omega=(x+t)dy$，在零时求导也是 $dy$。另外 $d(d\omega)=d(dx\wedge dy)=0$。这个例子可同时核对 pullback、contraction 的首槽位置以及 Lie derivative 的正负号。
:::

## 来源
- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-08](ref:dt-week-08) · [dt-w8-2](ref:dt-w8-2) · [dt-w8-3](ref:dt-w8-3) · [dt-w8-4](ref:dt-w8-4) · [dt-w8-5](ref:dt-w8-5) · [dt-w8-6](ref:dt-w8-6)
