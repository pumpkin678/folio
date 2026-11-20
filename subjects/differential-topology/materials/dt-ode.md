---
id: "dt-ode"
track: "微分拓扑 · Week 1–8"
chapter: "Week 6"
week: 6
tags: ["Week 6", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-ode.md"
source_note: "为 Week 6 roadmap 编写的配套知识卡；原课程文件 W6DiffTop2026(1).pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-06", "dt-w6-1", "dt-w6-2", "dt-w6-3", "dt-w6-4", "dt-w6-5", "dt-w6-6", "dt-w6-7"]
title: "流形上的局部 ODE 定理"
type: "thm"
english: "Week 6 · Theorem"
summary: "把欧氏 ODE 的存在、唯一性及对初值的光滑依赖搬到流形。"
order: 602
minutes: 4
related_questions: ["dt-w6-1", "dt-w6-2", "dt-w6-3", "dt-w6-4", "dt-w6-5", "dt-w6-6", "dt-w6-7"]
---

:::statement
对光滑 $X$ 和 $p\in M$，存在 $U\ni p$、$\varepsilon>0$、光滑 $F:(-\varepsilon,\varepsilon)\times U\to M$，满足 $F(0,q)=q$、$\partial_tF(t,q)=X(F(t,q))$，且积分曲线局部唯一。这是对一整个初值邻域的统一时间与光滑依赖，不只是一个初值的存在性。
:::

:::proof
推导：图中写 $X=\sum a^i(x)\partial_i$，求解欧氏方程 $x'=a(x)$，其右端光滑故局部 Lipschitz，应用欧氏局部存在唯一和光滑依赖定理，再用逆坐标图搬回。重叠图上解由唯一性一致。所有局部解粘成最大积分曲线；紧流形上通过有限子覆盖得到统一短时间，进而 complete，完整证明见 6.4。
:::

## 来源
- 为 Week 6 roadmap 编写的配套知识卡；原课程文件 W6DiffTop2026(1).pdf；补充内容在正文标识

## 关联

[dt-week-06](ref:dt-week-06) · [dt-w6-1](ref:dt-w6-1) · [dt-w6-2](ref:dt-w6-2) · [dt-w6-3](ref:dt-w6-3) · [dt-w6-4](ref:dt-w6-4) · [dt-w6-5](ref:dt-w6-5) · [dt-w6-6](ref:dt-w6-6) · [dt-w6-7](ref:dt-w6-7)
