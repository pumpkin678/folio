---
id: "dt-w1-u2"
track: "微分拓扑 · Week 1–8"
chapter: "Week 1"
week: 1
tags: ["Week 1", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w1-u2.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, 未编号问题 1.u2; DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-01", "dt-topology", "dt-metric", "dt-separation", "dt-induced-product", "dt-dimension-norm", "dt-compact-counterexample", "dt-week-01.practice"]
title: "1.u2 · Compact 不蕴含 second countable"
english: "Week 1 · 原题未编号"
summary: "Week 1 · DiffTop2026.pdf · 1.u2；原稿未编号问题，保留包内定位编号。"
targets: ["dt-topology", "dt-metric", "dt-separation", "dt-induced-product", "dt-dimension-norm", "dt-compact-counterexample"]
source_number: "1.u2"
source_kind: "unnumbered"
difficulty: "基础"
order: 106
minutes: 8
---

:::problem
题目：紧空间是否一定第二可数（原题 Question）？
:::

:::solution
反例及证明：令 $D$ 为不可数离散集合，$X=D\cup\{\infty\}$；$D$ 的任意子集开，含 $\infty$ 的集合开当且仅当补集为有限集。包含 $\infty$ 的一个覆盖成员已覆盖除有限点外的全部空间，因此每个开覆盖有有限子覆盖。不同的 $D$ 中点用单点集分离，$d$ 与 $\infty$ 用 $\{d\}$ 与 $X\setminus\{d\}$ 分离，所以它甚至 Hausdorff。若有可数基 $\mathcal B$，对每个 $d$，开集 $\{d\}$ 必含一个包含 $d$ 的基元素，只能是 $\{d\}$。不可数多个单点都必须在基中，矛盾。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, 未编号问题 1.u2; DiffTop2026.pdf

## 关联

[dt-week-01](ref:dt-week-01) · [dt-topology](ref:dt-topology) · [dt-metric](ref:dt-metric) · [dt-separation](ref:dt-separation) · [dt-induced-product](ref:dt-induced-product) · [dt-dimension-norm](ref:dt-dimension-norm) · [dt-compact-counterexample](ref:dt-compact-counterexample)
