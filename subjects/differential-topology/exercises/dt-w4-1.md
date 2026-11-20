---
id: "dt-w4-1"
track: "微分拓扑 · Week 1–8"
chapter: "Week 4"
week: 4
tags: ["Week 4", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w4-1.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.1; W4DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-04", "dt-rank-embedding", "dt-inverse-constant-rank", "dt-level-sphere", "dt-week-04.practice"]
title: "4.1 · 从 Euclidean IFT 到 manifold IFT"
english: "Week 4 · Problem 4.1"
summary: "Week 4 · W4DiffTop2026.pdf · 4.1；按原包保留题面、解答及勘误。"
targets: ["dt-rank-embedding", "dt-inverse-constant-rank", "dt-level-sphere"]
source_number: "4.1"
source_kind: "course-exercise"
difficulty: "基础"
order: 402
minutes: 9
---

:::problem
题目：从 Jacobian 版反函数定理推出切空间版及流形版。
:::

:::solution
步骤 1：在欧氏坐标基下 $d f_0(\partial_i)=\sum_j(\partial_i f^j)(0)\partial_j$，所以 $df_0$ 的矩阵正是 $Jf(0)$。线性同构等价于矩阵可逆，故 (i) 推出 (ii)。

步骤 2：对流形映射取以 $p,f(p)$ 为中心、原点为坐标值的图 $\varphi,\psi$，缩小源图以使其像在目标图域内。令 $F=\psi\circ f\circ\varphi^{-1}$。链式法则给
$$dF_0=d\psi_{f(p)}\circ df_p\circ(d\varphi_p)^{-1},$$
三个因子均同构，故 $DF_0$ 可逆。

步骤 3：由 (i) 取 $F:O\to P$ 为局部微分同胚。于是 $f:\varphi^{-1}(O)\to\psi^{-1}(P)$ 的逆为 $\varphi^{-1}\circ(F|_O)^{-1}\circ\psi$，光滑，得到 (iii)。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.1; W4DiffTop2026.pdf

## 关联

[dt-week-04](ref:dt-week-04) · [dt-rank-embedding](ref:dt-rank-embedding) · [dt-inverse-constant-rank](ref:dt-inverse-constant-rank) · [dt-level-sphere](ref:dt-level-sphere)
