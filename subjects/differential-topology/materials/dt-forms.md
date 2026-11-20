---
id: "dt-forms"
track: "微分拓扑 · Week 1–8"
chapter: "Week 7"
week: 7
tags: ["Week 7", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-forms.md"
source_note: "为 Week 7 roadmap 编写的配套知识卡；原课程文件 W7DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-07", "dt-w7-1", "dt-w7-2", "dt-w7-3", "dt-w7-4", "dt-w7-5"]
title: "Differential form 与 wedge"
type: "def"
english: "Week 7 · Definition"
summary: "以局部坐标和外积理解微分形式与形式丛。"
order: 703
minutes: 6
related_questions: ["dt-w7-1", "dt-w7-2", "dt-w7-3", "dt-w7-4", "dt-w7-5"]
---

:::statement
$p$-形式是 $\Lambda^pT^*M$ 的光滑截面，记 $\Omega^p(M)$。等价地，它是向量场上的交替 $C^\infty(M)$-多线性函数，值在 $C^\infty(M)$。局部唯一写成 $\sum_{i_1<\cdots<i_p}a_I dx^{i_1}\wedge\cdots\wedge dx^{i_p}$。

等价性的局部理由：截面可逐点评价；反向由 $C^\infty$-多线性和 bump 得到局部性，用坐标向量场的取值确定光滑系数 $a_I$。点值只依赖各参数在该点的值，因为局部坐标分量在该点消失时，每项都乘上一个在该点为零的函数。

Wedge 用 shuffle convention：$(\alpha\wedge\beta)(v_1,\ldots,v_{p+q})=\sum_{\sigma\in\mathrm{Sh}(p,q)}\operatorname{sgn}(\sigma)\alpha(v_{\sigma1},\ldots,v_{\sigma p})\beta(v_{\sigma(p+1)},\ldots,v_{\sigma(p+q)})$。因此 $\alpha\wedge\beta=(-1)^{pq}\beta\wedge\alpha$。
:::

## 来源
- 为 Week 7 roadmap 编写的配套知识卡；原课程文件 W7DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-07](ref:dt-week-07) · [dt-w7-1](ref:dt-w7-1) · [dt-w7-2](ref:dt-w7-2) · [dt-w7-3](ref:dt-w7-3) · [dt-w7-4](ref:dt-w7-4) · [dt-w7-5](ref:dt-w7-5)
