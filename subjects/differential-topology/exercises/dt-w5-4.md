---
id: "dt-w5-4"
track: "微分拓扑 · Week 1–8"
chapter: "Week 5"
week: 5
tags: ["Week 5", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w5-4.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.4; W5DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-05", "dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example", "dt-week-05.practice"]
title: "5.4 · Product manifold 的构造与唯一性"
english: "Week 5 · Problem 5.4"
summary: "Week 5 · W5DiffTop2026.pdf · 5.4；按原包保留题面、解答及勘误。"
targets: ["dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example"]
source_number: "5.4"
source_kind: "course-exercise"
difficulty: "基础"
order: 505
minutes: 9
---

:::problem
题目：构造乘积流形并证明光滑映射的乘积泛性质。
:::

:::solution
步骤 1：给 $M,N$ 的图 $\varphi:U\to O\subset\mathbb R^m$、$\psi:V\to P\subset\mathbb R^n$，定义 $\varphi\times\psi:U\times V\to O\times P$。乘积空间 Hausdorff；两个可数基的全部成对乘积仍可数，故第二可数。上述图是同胚且覆盖。

步骤 2：过渡为 $(u,v)\mapsto(F(u),G(v))$，两个分量光滑，因此是光滑 atlas。投影的坐标表达为标准线性投影，故光滑。

步骤 3：若 $h:Z\to M\times N$ 光滑，投影复合光滑。反之若两个分量光滑，则它们连续，所以 $h$ 连续；在任意积图中，$h$ 的坐标表达是两个光滑分量拼成的向量值函数，因此光滑。

步骤 4：若另一光滑结构也满足相同性质，则到底层乘积的 identity 两个投影均光滑，泛性质使 identity 光滑；交换结构再用一次，逆也光滑。因此两个结构相容。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.4; W5DiffTop2026.pdf

## 关联

[dt-week-05](ref:dt-week-05) · [dt-vector-fields](ref:dt-vector-fields) · [dt-fields-derivations](ref:dt-fields-derivations) · [dt-lie-related](ref:dt-lie-related) · [dt-bracket-example](ref:dt-bracket-example)
