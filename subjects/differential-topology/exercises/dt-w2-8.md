---
id: "dt-w2-8"
track: "微分拓扑 · Week 1–8"
chapter: "Week 2"
week: 2
tags: ["Week 2", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w2-8.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.8; W2DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-02", "dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective", "dt-week-02.practice"]
title: "2.8 · 不相容图册仍可微分同胚"
english: "Week 2 · Problem 2.8"
summary: "Week 2 · W2DiffTop2026.pdf · 2.8；按原包保留题面、解答及勘误。"
targets: ["dt-atlas", "dt-compatibility", "dt-atlas-topology", "dt-exotic-coordinate", "dt-projective"]
source_number: "2.8"
source_kind: "course-exercise"
difficulty: "基础"
order: 207
minutes: 8
---

:::problem
题目：$\mathbb R$ 上图册 $A=\{\mathrm{id}\}$ 与 $B=\{\varphi(x)=x^3\}$ 所得流形微分同胚。
:::

:::solution
解答：定义底层映射 $F(x)=\sqrt[3]{x}$，它是双射。其从 $A$ 到 $B$ 的坐标表达为 $\varphi\circ F\circ\mathrm{id}^{-1}(u)=u$，光滑。逆映射的坐标表达为 $\mathrm{id}\circ F^{-1}\circ\varphi^{-1}(v)=v$，也光滑。故 $F$ 是所求 diffeomorphism。不能用底层函数在标准坐标中是否光滑来替代两端实际图册中的判断。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.8; W2DiffTop2026.pdf

## 关联

[dt-week-02](ref:dt-week-02) · [dt-atlas](ref:dt-atlas) · [dt-compatibility](ref:dt-compatibility) · [dt-atlas-topology](ref:dt-atlas-topology) · [dt-exotic-coordinate](ref:dt-exotic-coordinate) · [dt-projective](ref:dt-projective)
