---
id: "dt-w2-3"
track: "微分拓扑 · Week 1–8"
chapter: "Week 2"
week: 2
tags: ["Week 2", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w2-3.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.3; W2DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-02", "dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective", "dt-week-02.practice"]
title: "2.3 · 平面中全部仿射直线的 atlas"
english: "Week 2 · Problem 2.3"
summary: "Week 2 · W2DiffTop2026.pdf · 2.3；按原包保留题面、解答及勘误。"
targets: ["dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective"]
source_number: "2.3"
source_kind: "course-exercise"
difficulty: "基础"
order: 203
minutes: 8
---

:::problem
题目：给平面中直线的集合构造二维 atlas。
:::

:::solution
步骤 1：$U$ 为非竖直线，唯一写作 $y=mx+b$，取坐标 $(m,b)$。$V$ 为非水平线，唯一写作 $x=ny+c$，取坐标 $(n,c)$。任意直线至少属于其中一个图，两个坐标像均为 $\mathbb R^2$。

步骤 2：在交集上 $m\ne0$，由 $y=mx+b$ 得 $x=m^{-1}y-b/m$，所以过渡为 $(m,b)\mapsto(1/m,-b/m)$，定义域 $\{m\ne0\}$ 开。

步骤 3：反向公式 $(n,c)\mapsto(1/n,-c/n)$ 在 $n\ne0$ 上光滑，因而是二维 atlas。这里是所有仿射直线，不能误用过原点直线的 $\mathbb{RP}^1$。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.3; W2DiffTop2026.pdf

## 关联

[dt-week-02](ref:dt-week-02) · [dt-atlas](ref:dt-atlas) · [dt-compatibility](ref:dt-compatibility) · [dt-atlas-topology](ref:dt-atlas-topology) · [dt-exotic-coordinate](ref:dt-exotic-coordinate) · [dt-projective](ref:dt-projective)
