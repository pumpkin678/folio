---
id: "dt-w4-3"
track: "微分拓扑 · Week 1–8"
chapter: "Week 4"
week: 4
tags: ["Week 4", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w4-3.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.3; W4DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-04", "dt-rank-embedding", "dt-inverse-constant-rank", "dt-level-sphere", "dt-week-04.practice"]
title: "4.3 · 球面 graph atlas 与 stereographic atlas 相容"
english: "Week 4 · Problem 4.3"
summary: "Week 4 · W4DiffTop2026.pdf · 4.3；按原包保留题面、解答及勘误。"
targets: ["dt-rank-embedding", "dt-inverse-constant-rank", "dt-level-sphere"]
source_number: "4.3"
source_kind: "course-exercise"
difficulty: "基础"
order: 404
minutes: 11
---

:::problem
题目：从四种球面结构中选两种，直接证明微分同胚。
:::

:::solution
选择：图像坐标与球极投影坐标。图像图在 $U_{i,\epsilon}=\{x\in S^2:\epsilon x_i>0\}$ 上删去第 $i$ 坐标，像为单位开圆盘；逆在第 $i$ 位补入 $\epsilon\sqrt{1-\|u\|^2}$，在圆盘中光滑。

北极投影 $s_N(x,y,z)=(x/(1-z),y/(1-z))$，其逆为
$$s_N^{-1}(u,v)=\frac{(2u,2v,u^2+v^2-1)}{1+u^2+v^2}.$$
南极投影 $s_S(x,y,z)=(x/(1+z),y/(1+z))$，逆为 $(2u,2v,1-u^2-v^2)/(1+u^2+v^2)$。

步骤 1：graph 坐标到 stereographic 坐标，是上述平方根逆图代入分式；在实际交叠上分母不为零，因此光滑。

步骤 2：stereographic 到 graph 坐标，是上述有理逆图后删去坐标，也光滑。

步骤 3：这些交叠覆盖球面，所以底层恒等映射在两个方向均光滑，给出所求 diffeomorphism。这里没有使用结构唯一性定理。全局极坐标因极点及经度接缝不能单独作为一张图。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.3; W4DiffTop2026.pdf

## 关联

[dt-week-04](ref:dt-week-04) · [dt-rank-embedding](ref:dt-rank-embedding) · [dt-inverse-constant-rank](ref:dt-inverse-constant-rank) · [dt-level-sphere](ref:dt-level-sphere)
