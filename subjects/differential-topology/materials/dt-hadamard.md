---
id: "dt-hadamard"
track: "微分拓扑 · Week 1–8"
chapter: "Week 3"
week: 3
tags: ["Week 3", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-hadamard.md"
source_note: "为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-03", "dt-w3-0", "dt-w3-1", "dt-w3-2", "dt-w3-3", "dt-w3-4", "dt-w3-5", "dt-w3-6", "dt-w3-7", "dt-w3-8", "dt-w3-9", "dt-w3-10", "dt-w3-11", "dt-w3-12", "dt-w3-optional", "dt-w3-13"]
title: "Hadamard lemma 与坐标切基"
type: "thm"
english: "Week 3 · Theorem"
summary: "用积分表达取出光滑函数的线性部分，建立坐标切基。"
order: 304
minutes: 4
related_questions: ["dt-w3-0", "dt-w3-1", "dt-w3-2", "dt-w3-3", "dt-w3-4", "dt-w3-5", "dt-w3-6", "dt-w3-7", "dt-w3-8", "dt-w3-9", "dt-w3-10", "dt-w3-11", "dt-w3-12", "dt-w3-optional", "dt-w3-13"]
---

:::statement
在原点的星形开邻域上，光滑 $f$ 满足 $f(x)-f(0)=\sum_i x_i g_i(x)$，$g_i(x)=\int_0^1\partial_i f(tx)dt$ 光滑，且 $g_i(0)=\partial_i f(0)$。因而模平方理想只保留线性部分。

所以 $[x^i-x^i(p)]$ 为 $T_p^*M$ 的基，对偶基 $\partial_i|_p$ 为 $T_pM$ 的基；$v(f)=\sum_i v(x^i)\partial_i f(p)$（局部坐标函数通过芽解释）。完整连接全局定义的论证见 6.3。
:::

## 来源
- 为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-03](ref:dt-week-03) · [dt-w3-0](ref:dt-w3-0) · [dt-w3-1](ref:dt-w3-1) · [dt-w3-2](ref:dt-w3-2) · [dt-w3-3](ref:dt-w3-3) · [dt-w3-4](ref:dt-w3-4) · [dt-w3-5](ref:dt-w3-5) · [dt-w3-6](ref:dt-w3-6) · [dt-w3-7](ref:dt-w3-7) · [dt-w3-8](ref:dt-w3-8) · [dt-w3-9](ref:dt-w3-9) · [dt-w3-10](ref:dt-w3-10) · [dt-w3-11](ref:dt-w3-11) · [dt-w3-12](ref:dt-w3-12) · [dt-w3-optional](ref:dt-w3-optional) · [dt-w3-13](ref:dt-w3-13)
