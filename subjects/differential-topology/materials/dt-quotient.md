---
id: "dt-quotient"
track: "微分拓扑 · Week 1–8"
chapter: "Week 3"
week: 3
tags: ["Week 3", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-quotient.md"
source_note: "为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-03", "dt-w3-0", "dt-w3-1", "dt-w3-2", "dt-w3-3", "dt-w3-4", "dt-w3-5", "dt-w3-6", "dt-w3-7", "dt-w3-8", "dt-w3-9", "dt-w3-10", "dt-w3-11", "dt-w3-12", "dt-w3-optional", "dt-w3-13"]
title: "Quotient topology 与 quotient map"
type: "def"
english: "Week 3 · Definition"
summary: "用商拓扑的原像判据及泛性质判断连续性和开性。"
order: 301
minutes: 4
related_questions: ["dt-w3-0", "dt-w3-1", "dt-w3-2", "dt-w3-3", "dt-w3-4", "dt-w3-5", "dt-w3-6", "dt-w3-7", "dt-w3-8", "dt-w3-9", "dt-w3-10", "dt-w3-11", "dt-w3-12", "dt-w3-optional", "dt-w3-13"]
---

:::statement
满射 $q:X\to Y$ 是 quotient map 指 $V\subset Y$ 开当且仅当 $q^{-1}(V)$ 开。连续满射仅保证一个方向，不必是商映射。给等价关系时，商集使用这个拓扑。

泛性质：$h:Y\to Z$ 连续当且仅当 $h\circ q$ 连续。证明由 $(h\circ q)^{-1}(O)=q^{-1}(h^{-1}(O))$ 和定义得到。若 $q$ 连续满射且开或闭，则是商映射。群轨道投影是开映射；一般商映射不必开（3.3）。

“连续满射未必商”的简单例子：identity 从离散拓扑的 $\mathbb R$ 到通常拓扑的 $\mathbb R$ 连续满射，但若是商映射，目标应也离散。
:::

## 来源
- 为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-03](ref:dt-week-03) · [dt-w3-0](ref:dt-w3-0) · [dt-w3-1](ref:dt-w3-1) · [dt-w3-2](ref:dt-w3-2) · [dt-w3-3](ref:dt-w3-3) · [dt-w3-4](ref:dt-w3-4) · [dt-w3-5](ref:dt-w3-5) · [dt-w3-6](ref:dt-w3-6) · [dt-w3-7](ref:dt-w3-7) · [dt-w3-8](ref:dt-w3-8) · [dt-w3-9](ref:dt-w3-9) · [dt-w3-10](ref:dt-w3-10) · [dt-w3-11](ref:dt-w3-11) · [dt-w3-12](ref:dt-w3-12) · [dt-w3-optional](ref:dt-w3-optional) · [dt-w3-13](ref:dt-w3-13)
