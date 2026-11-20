---
id: "dt-w5-3"
track: "微分拓扑 · Week 1–8"
chapter: "Week 5"
week: 5
tags: ["Week 5", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w5-3.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.3; W5DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-05", "dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example", "dt-week-05.practice"]
title: "5.3 · 连续单射到 Hausdorff 空间"
english: "Week 5 · Problem 5.3"
summary: "Week 5 · W5DiffTop2026.pdf · 5.3；按原包保留题面、解答及勘误。"
targets: ["dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example"]
source_number: "5.3"
source_kind: "course-exercise"
difficulty: "基础"
order: 503
minutes: 8
---

:::problem
题目：$X$ 紧、$q:X\to Y$ 连续商满射、$i:Y\to Z$ 连续单射且 $Z$ Hausdorff，证明 $Y$ Hausdorff。
:::

:::solution
解答：给 $y_1\ne y_2$，单射给 $i(y_1)\ne i(y_2)$。在 $Z$ 中取不交开邻域 $O_1,O_2$，连续性使 $i^{-1}(O_1),i^{-1}(O_2)$ 成为不交开邻域，故 $Y$ Hausdorff。此结论事实上不需要紧性或商条件。

较强结论：$q(X)=Y$ 紧，故连续单射 $i$ 是到其像的同胚。因为对闭集 $C\subset Y$，$C$ 紧，其像在 Hausdorff 的 $i(Y)$ 中闭，所以逆映射连续。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.3; W5DiffTop2026.pdf

## 关联

[dt-week-05](ref:dt-week-05) · [dt-vector-fields](ref:dt-vector-fields) · [dt-fields-derivations](ref:dt-fields-derivations) · [dt-lie-related](ref:dt-lie-related) · [dt-bracket-example](ref:dt-bracket-example)
