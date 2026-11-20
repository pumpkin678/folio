---
id: "dt-curves-flow"
track: "微分拓扑 · Week 1–8"
chapter: "Week 6"
week: 6
tags: ["Week 6", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-curves-flow.md"
source_note: "为 Week 6 roadmap 编写的配套知识卡；原课程文件 W6DiffTop2026(1).pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-06", "dt-w6-1", "dt-w6-2", "dt-w6-3", "dt-w6-4", "dt-w6-5", "dt-w6-6", "dt-w6-7"]
title: "Integral curve、maximal flow、complete"
type: "def"
english: "Week 6 · Definition"
summary: "区分积分曲线、最大流、完备性及流的群律。"
order: 601
minutes: 5
related_questions: ["dt-w6-1", "dt-w6-2", "dt-w6-3", "dt-w6-4", "dt-w6-5", "dt-w6-6", "dt-w6-7"]
---

:::statement
$X$ 的积分曲线是光滑 $\gamma:I\to M$（$I$ 为开区间），满足 $\gamma'(t)=X_{\gamma(t)}$。$\gamma'(t)(f)=\frac d{dt}(f\circ\gamma)(t)$。同初值的最大积分曲线是不能再延拓到更大区间的解。

最大 flow 的域 $\mathcal D\subset\mathbb R\times M$ 开，每个纤维 $\mathcal D_p=I_p$ 是含零的最大存在区间，$F(t,p)=\gamma_p(t)$。$X$ complete 指所有 $I_p=\mathbb R$。全局 flow 是光滑 $\mathbb R$-作用，$F_{s+t}=F_s\circ F_t$，$F_0=\mathrm{id}$，各 $F_t$ 的逆为 $F_{-t}$。

局部 flow 的群律仅在相应复合有定义时陈述；不能把“maximal”误认为“complete”。
:::

## 来源
- 为 Week 6 roadmap 编写的配套知识卡；原课程文件 W6DiffTop2026(1).pdf；补充内容在正文标识

## 关联

[dt-week-06](ref:dt-week-06) · [dt-w6-1](ref:dt-w6-1) · [dt-w6-2](ref:dt-w6-2) · [dt-w6-3](ref:dt-w6-3) · [dt-w6-4](ref:dt-w6-4) · [dt-w6-5](ref:dt-w6-5) · [dt-w6-6](ref:dt-w6-6) · [dt-w6-7](ref:dt-w6-7)
