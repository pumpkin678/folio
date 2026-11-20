---
id: "dt-topology"
track: "微分拓扑 · Week 1–8"
chapter: "Week 1"
week: 1
tags: ["Week 1", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-topology.md"
source_note: "为 Week 1 roadmap 编写的配套知识卡；原课程文件 DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-01", "dt-w1-1", "dt-w1-2", "dt-w1-3", "dt-w1-4", "dt-w1-u1", "dt-w1-u2", "dt-w1-u3", "dt-w1-u4"]
title: "Topology、basis 与邻域"
type: "def"
english: "Week 1 · Definition"
summary: "用开集公理、基与逐点细化比较拓扑。"
order: 101
minutes: 4
related_questions: ["dt-w1-1", "dt-w1-2", "dt-w1-3", "dt-w1-4", "dt-w1-u1", "dt-w1-u2", "dt-w1-u3", "dt-w1-u4"]
---

:::statement
Topology 是集合 $X$ 的子集族 $\tau$，包含 $\varnothing,X$，对任意并和有限交封闭。Basis $\mathcal B$ 满足覆盖性及交点细化性：若 $x\in B_1\cap B_2$，存在 $B_3\in\mathcal B$ 使 $x\in B_3\subset B_1\cap B_2$。生成的开集恰为基元素的并。

判定 $U$ 开只需对每个 $x\in U$ 找到一个 $x\in B\subset U$，因为此时 $U=\bigcup_{x\in U}B_x$。这里证明的是某集合为开集，不是证明某个“集合族属于另一个集合族”。比较两拓扑通常对基元素做这种逐点细化。
:::

## 来源
- 为 Week 1 roadmap 编写的配套知识卡；原课程文件 DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-01](ref:dt-week-01) · [dt-w1-1](ref:dt-w1-1) · [dt-w1-2](ref:dt-w1-2) · [dt-w1-3](ref:dt-w1-3) · [dt-w1-4](ref:dt-w1-4) · [dt-w1-u1](ref:dt-w1-u1) · [dt-w1-u2](ref:dt-w1-u2) · [dt-w1-u3](ref:dt-w1-u3) · [dt-w1-u4](ref:dt-w1-u4)
