---
id: "dt-w4-2"
track: "微分拓扑 · Week 1–8"
chapter: "Week 4"
week: 4
tags: ["Week 4", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w4-2.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.2; W4DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-04", "dt-rank-embedding", "dt-inverse-constant-rank", "dt-level-sphere", "dt-week-04.practice"]
title: "4.2 · Regular level set 的 slice"
english: "Week 4 · Problem 4.2"
summary: "Week 4 · W4DiffTop2026.pdf · 4.2；按原包保留题面、解答及勘误。"
targets: ["dt-rank-embedding", "dt-inverse-constant-rank", "dt-level-sphere"]
source_number: "4.2"
source_kind: "course-exercise"
difficulty: "基础"
order: 403
minutes: 9
---

:::problem
题目修正：$f:\mathbb R^{n+k}\to\mathbb R^n$ 处处满秩，则非空纤维是 **$k$ 维**，局部 slice 为 $\mathbb R^k\times\{0\}\subset\mathbb R^{k+n}$。原文写 $n$ 维是笔误。
:::

:::solution
步骤 1：给 $p\in f^{-1}(y)$。满秩保证可重排源坐标为 $(u,v)\in\mathbb R^k\times\mathbb R^n$，使 $\partial f/\partial v(p)$ 可逆。

步骤 2：令 $H(u,v)=(u,f(u,v)-y)$。其导数为块矩阵
$$DH_p=\begin{pmatrix}I_k&0\\ *&\partial f/\partial v(p)\end{pmatrix},$$
可逆。反函数定理给邻域 $U,V$ 使 $H:U\to V$ 微分同胚。

步骤 3：对 $q\in U$，$f(q)=y$ 当且仅当 $H(q)$ 最后 $n$ 坐标为零，故 $H(U\cap f^{-1}(y))=V\cap(\mathbb R^k\times\{0\})$。这正是 embedded submanifold 的 slice 条件，维数 $k$。纤维空时按空子流形约定处理。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.2; W4DiffTop2026.pdf

## 关联

[dt-week-04](ref:dt-week-04) · [dt-rank-embedding](ref:dt-rank-embedding) · [dt-inverse-constant-rank](ref:dt-inverse-constant-rank) · [dt-level-sphere](ref:dt-level-sphere)
