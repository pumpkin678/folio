---
id: "dt-w7-4"
track: "微分拓扑 · Week 1–8"
chapter: "Week 7"
week: 7
tags: ["Week 7", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w7-4.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.4; W7DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-07", "dt-exterior", "dt-exterior-basis", "dt-forms", "dt-wedge-example", "dt-week-07.practice"]
title: "7.4 · 用 top wedge 定义 determinant"
english: "Week 7 · Problem 7.4"
summary: "Week 7 · W7DiffTop2026.pdf · 7.4；按原包保留题面、解答及勘误。"
targets: ["dt-exterior", "dt-exterior-basis", "dt-forms", "dt-wedge-example"]
source_number: "7.4"
source_kind: "course-exercise"
difficulty: "进阶"
order: 704
minutes: 8
---

:::problem
**假设：** $V$ 是有限维实向量空间，$\dim V=n$，$f,g:V\to V$ 是线性自映射。

题目：定义 $\det f$ 并证明乘法性。
:::

:::solution
补上有限维假设 $\dim V=n<\infty$；一般无限维线性算子不存在这里的普通行列式。

步骤 1：$\Lambda^nV$ 一维，故其自同态 $\Lambda^nf$ 必为唯一标量乘法，定义该标量为 $\det f$。这一定义不依赖生成元：替换 $\omega$ 为 $c\omega$（$c\ne0$）不会改变标量。

步骤 2：由 7.3，$\Lambda^n(gf)=\Lambda^ng\circ\Lambda^nf$。作用于非零 $\omega$，左侧为 $\det(gf)\omega$，右侧为 $(\det g)(\det f)\omega$，故乘法性成立。$n=0$ 时定义给 $\det f=1$。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.4; W7DiffTop2026.pdf

## 关联

[dt-week-07](ref:dt-week-07) · [dt-exterior](ref:dt-exterior) · [dt-exterior-basis](ref:dt-exterior-basis) · [dt-forms](ref:dt-forms) · [dt-wedge-example](ref:dt-wedge-example)
