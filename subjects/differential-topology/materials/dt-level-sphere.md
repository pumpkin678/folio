---
id: "dt-level-sphere"
track: "微分拓扑 · Week 1–8"
chapter: "Week 4"
week: 4
tags: ["Week 4", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-level-sphere.md"
source_note: "为 Week 4 roadmap 编写的配套知识卡；原课程文件 W4DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-04", "dt-w4-0", "dt-w4-1", "dt-w4-2", "dt-w4-3", "dt-w4-4"]
title: "球面作为 regular level set"
type: "eg"
english: "Week 4 · Example"
summary: "用平方半径函数把球面写成正则水平集并确定切空间。"
order: 403
minutes: 4
related_questions: ["dt-w4-0", "dt-w4-1", "dt-w4-2", "dt-w4-3", "dt-w4-4"]
---

:::example
取 $f:\mathbb R^{n+1}\to\mathbb R$，$f(x)=\sum x_i^2$。$df_x(v)=2\langle x,v\rangle$，在 $f^{-1}(1)$ 上因 $x\ne0$ 满射，故 $S^n$ 是 $n$ 维嵌入子流形，$T_xS^n=x^\perp$。

球面点的单位长度约束不意味着坐标变换导数是单位矩阵。标准两张球极图过渡为 $T(u)=u/\|u\|^2$，定义于 $\mathbb R^n\setminus0$；
$$DT_u=\|u\|^{-2}I-2\|u\|^{-4}uu^T.$$
这是坐标域中变量 $u$ 的导数，$u$ 并非单位球面上的点。
:::

## 来源
- 为 Week 4 roadmap 编写的配套知识卡；原课程文件 W4DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-04](ref:dt-week-04) · [dt-w4-0](ref:dt-w4-0) · [dt-w4-1](ref:dt-w4-1) · [dt-w4-2](ref:dt-w4-2) · [dt-w4-3](ref:dt-w4-3) · [dt-w4-4](ref:dt-w4-4)
