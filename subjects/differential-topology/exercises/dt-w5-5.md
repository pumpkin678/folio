---
id: "dt-w5-5"
track: "微分拓扑 · Week 1–8"
chapter: "Week 5"
week: 5
tags: ["Week 5", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w5-5.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.5; W5DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-05", "dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example", "dt-week-05.practice"]
title: "5.5 · Derivations 的 Lie algebra"
english: "Week 5 · Problem 5.5"
summary: "Week 5 · W5DiffTop2026.pdf · 5.5；按原包保留题面、解答及勘误。"
targets: ["dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example"]
source_number: "5.5"
source_kind: "course-exercise"
difficulty: "基础"
order: 506
minutes: 9
---

:::problem
题目：证明导子构成向量空间，交换子仍为导子，并验证 Jacobi。
:::

:::solution
约定：本包使用交换含幺实代数 $A$，与后续 $A$-模外幂一致。

步骤 1：若 $X,Y$ 为导子，$a,b\in\mathbb R$，则 $(aX+bY)(uv)=u(aX+bY)(v)+v(aX+bY)(u)$，零映射也满足，故是实向量子空间。

步骤 2：展开
$$XY(uv)=X(u)Y(v)+uXY(v)+X(v)Y(u)+vXY(u).$$
减去交换 $X,Y$ 的式子，交叉项因 $A$ 交换抵消，剩下 $[X,Y](uv)=u[X,Y](v)+v[X,Y](u)$。双线性由复合分配律得出，$[X,X]=0$。

步骤 3：逐项展开
$$[[X,Y],Z]=XYZ-YXZ-ZXY+ZYX,$$
$$[[Y,Z],X]=YZX-ZYX-XYZ+XZY,$$
$$[[Z,X],Y]=ZXY-XZY-YZX+YXZ.$$
每个三重复合恰出现一次正号一次负号，总和零，即 Jacobi。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.5; W5DiffTop2026.pdf

## 关联

[dt-week-05](ref:dt-week-05) · [dt-vector-fields](ref:dt-vector-fields) · [dt-fields-derivations](ref:dt-fields-derivations) · [dt-lie-related](ref:dt-lie-related) · [dt-bracket-example](ref:dt-bracket-example)
