---
id: "dt-w3-3"
track: "微分拓扑 · Week 1–8"
chapter: "Week 3"
week: 3
tags: ["Week 3", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w3-3.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.3; W3DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-03", "dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat", "dt-week-03.practice"]
title: "3.3 · Quotient map 未必 open"
english: "Week 3 · Problem 3.3"
summary: "Week 3 · W3DiffTop2026.pdf · 3.3；按原包保留题面、解答及勘误。"
targets: ["dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat"]
source_number: "3.3"
source_kind: "course-exercise"
difficulty: "基础"
order: 304
minutes: 8
---

:::problem
题目：一般商映射是否是开映射？
:::

:::solution
反例：$q:[0,1]\to S^1$，$q(t)=e^{2\pi it}$。它连续满射，且是闭映射：闭子集在紧空间中紧，其连续像紧，在 Hausdorff 空间中闭。因此它是商映射（若 $q^{-1}(A)$ 闭，则 $A=q(q^{-1}(A))$ 闭）。$[0,1/4)$ 在 $[0,1]$ 中开，但像包含 $1\in S^1$ 而不包含从负角度逼近 1 的点，故像不是开集。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.3; W3DiffTop2026.pdf

## 关联

[dt-week-03](ref:dt-week-03) · [dt-quotient](ref:dt-quotient) · [dt-germs-cotangent](ref:dt-germs-cotangent) · [dt-bump-locality](ref:dt-bump-locality) · [dt-hadamard](ref:dt-hadamard) · [dt-flat](ref:dt-flat)
