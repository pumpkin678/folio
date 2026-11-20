---
id: "dt-w5-1"
track: "微分拓扑 · Week 1–8"
chapter: "Week 5"
week: 5
tags: ["Week 5", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w5-1.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.1; W5DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-05", "dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example", "dt-week-05.practice"]
title: "5.1 · RPn 的度量与 Hausdorff 性"
english: "Week 5 · Problem 5.1"
summary: "Week 5 · W5DiffTop2026.pdf · 5.1；按原包保留题面、解答及勘误。"
targets: ["dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example"]
source_number: "5.1"
source_kind: "course-exercise"
difficulty: "基础"
order: 501
minutes: 11
---

:::problem
题目：证明 $\mathbb{RP}^n$ 的商拓扑 Hausdorff 且可度量。
:::

:::solution
步骤 1：用 4.4 的归一化证明（任意 $n$ 同样成立）识别为 $S^n/\{\pm1\}$。对单位代表定义
$$d([u],[v])=\min\{\|u-v\|,\|u+v\|\}.$$
改变代表符号不改变两项最小值，故良定义；对称性显然，$d=0$ 当且仅当 $u=\pm v$。

步骤 2：选符号 $\epsilon,\delta$ 分别实现 $d([u],[v])=\|u-\epsilon v\|$ 和 $d([v],[w])=\|v-\delta w\|$，则
$$d([u],[w])\le\|u-\epsilon\delta w\|\le\|u-\epsilon v\|+\|v-\delta w\|.$$
故为距离。

步骤 3：若 $B_d([u],r)$ 是度量球，其商前像为 $S^n\cap(B_r(u)\cup B_r(-u))$，开，故度量开集商开。若 $O$ 商开且 $[u]\in O$，则 $q^{-1}(O)$ 是包含 $u,-u$ 的开集，取 $r>0$ 使两个半径 $r$ 的球面邻域均在其中，则 $B_d([u],r)\subset O$。故两个拓扑一致，因而 Hausdorff。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.1; W5DiffTop2026.pdf

## 关联

[dt-week-05](ref:dt-week-05) · [dt-vector-fields](ref:dt-vector-fields) · [dt-fields-derivations](ref:dt-fields-derivations) · [dt-lie-related](ref:dt-lie-related) · [dt-bracket-example](ref:dt-bracket-example)
