---
id: "dt-fields-derivations"
track: "微分拓扑 · Week 1–8"
chapter: "Week 5"
week: 5
tags: ["Week 5", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-fields-derivations.md"
source_note: "为 Week 5 roadmap 编写的配套知识卡；原课程文件 W5DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-05", "dt-w5-1", "dt-w5-2", "dt-w5-3", "dt-w5-s1", "dt-w5-4", "dt-w5-5", "dt-w5-6", "dt-w5-s2"]
title: "光滑向量场与函数环导子同构"
type: "thm"
english: "Week 5 · Theorem"
summary: "将光滑向量场与全局光滑函数环上的导子逐点对应。"
order: 502
minutes: 4
related_questions: ["dt-w5-1", "dt-w5-2", "dt-w5-3", "dt-w5-s1", "dt-w5-4", "dt-w5-5", "dt-w5-6", "dt-w5-s2"]
---

:::statement
映射 $X\mapsto(f\mapsto Xf)$ 是 $C^\infty(M)$-模同构到导子模。
:::

:::proof
证明：向量场的坐标表达说明 $Xf$ 光滑并满足 Leibniz。反之，对环导子 $D$，$D_p(f)=(Df)(p)$ 是点导子，故确定唯一 $X_p\in T_pM$。在坐标图中任取较小邻域，用 bump 把局部 $x^i$ 延拓为全局 $\widetilde x^i$，在该小邻域 $X^i=D\widetilde x^i$ 光滑。故 $p\mapsto X_p$ 光滑。两构造在所有函数上的作用互逆，且保持函数乘法，所以为模同构。
:::

## 来源
- 为 Week 5 roadmap 编写的配套知识卡；原课程文件 W5DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-05](ref:dt-week-05) · [dt-w5-1](ref:dt-w5-1) · [dt-w5-2](ref:dt-w5-2) · [dt-w5-3](ref:dt-w5-3) · [dt-w5-s1](ref:dt-w5-s1) · [dt-w5-4](ref:dt-w5-4) · [dt-w5-5](ref:dt-w5-5) · [dt-w5-6](ref:dt-w5-6) · [dt-w5-s2](ref:dt-w5-s2)
