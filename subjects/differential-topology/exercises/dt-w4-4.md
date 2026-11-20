---
id: "dt-w4-4"
track: "微分拓扑 · Week 1–8"
chapter: "Week 4"
week: 4
tags: ["Week 4", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w4-4.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.4; W4DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-04", "dt-rank-embedding", "dt-inverse-constant-rank", "dt-level-sphere", "dt-week-04.practice"]
title: "4.4 · Antipodal quotient 与 RP2"
english: "Week 4 · Problem 4.4"
summary: "Week 4 · W4DiffTop2026.pdf · 4.4；按原包保留题面、解答及勘误。"
targets: ["dt-rank-embedding", "dt-inverse-constant-rank", "dt-level-sphere"]
source_number: "4.4"
source_kind: "course-exercise"
difficulty: "基础"
order: 405
minutes: 8
---

:::problem
题目：证明 $S^2/\{\pm1\}\to\mathbb{RP}^2$ 为同胚。
:::

:::solution
步骤 1：包含映射与射影商映射复合 $S^2\to\mathbb{RP}^2$ 连续，且对反足识别恒定，故下降为连续 $F:S^2/\{\pm1\}\to\mathbb{RP}^2$。

步骤 2：归一化 $N(x)=x/\|x\|$ 连续。对任意 $\lambda\ne0$，$N(\lambda x)=\operatorname{sgn}(\lambda)N(x)$，所以其到反足商的复合在每条射影轨道上恒定。商泛性质给连续 $G:\mathbb{RP}^2\to S^2/\{\pm1\}$。

步骤 3：单位向量归一化不变；非零向量和其归一化张成相同直线。因此 $GF=\mathrm{id}$、$FG=\mathrm{id}$，故同胚。不需要提前使用 $\mathbb{RP}^2$ Hausdorff。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.4; W4DiffTop2026.pdf

## 关联

[dt-week-04](ref:dt-week-04) · [dt-rank-embedding](ref:dt-rank-embedding) · [dt-inverse-constant-rank](ref:dt-inverse-constant-rank) · [dt-level-sphere](ref:dt-level-sphere)
