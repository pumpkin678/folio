---
id: "dt-w4-0"
track: "微分拓扑 · Week 1–8"
chapter: "Week 4"
week: 4
tags: ["Week 4", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w4-0.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.0; W4DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-04", "dt-rank-embedding", "dt-inverse-constant-rank", "dt-level-sphere", "dt-week-04.practice"]
title: "4.0 · 光滑过渡推出维数恒定"
english: "Week 4 · Problem 4.0"
summary: "Week 4 · W4DiffTop2026.pdf · 4.0；按原包保留题面、解答及勘误。"
targets: ["dt-rank-embedding", "dt-inverse-constant-rank", "dt-level-sphere"]
source_number: "4.0"
source_kind: "course-exercise"
difficulty: "基础"
order: 401
minutes: 8
---

:::problem
题目：连通空间有欧氏图，过渡为 diffeomorphism，直接证明各图维数相同。
:::

:::solution
勘误：须忽略空图域，否则可以加入任意维数的空图，原结论不成立。

步骤 1：非空交叠处，设过渡为 $F:\mathbb R^m\supset O\to P\subset\mathbb R^n$，逆为 $G$。链式法则给 $DG\,DF=I_m$ 和 $DF\,DG=I_n$。前式推出 $m\le n$，后式推出 $n\le m$，故 $m=n$。

步骤 2：固定一张非空图，取所有可经有限个非空图域交叠连接到它的图域之并 $C$。它开。任何未在其中的图域不与 $C$ 相交，否则也可连接，所以补集也是图域之并，开。

步骤 3：$C$ 非空，由连通性为全空间，每张非空图都与其中某图相交，故全部图维数相同。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.0; W4DiffTop2026.pdf

## 关联

[dt-week-04](ref:dt-week-04) · [dt-rank-embedding](ref:dt-rank-embedding) · [dt-inverse-constant-rank](ref:dt-inverse-constant-rank) · [dt-level-sphere](ref:dt-level-sphere)
