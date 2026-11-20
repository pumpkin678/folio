---
id: "dt-w5-s2"
track: "微分拓扑 · Week 1–8"
chapter: "Week 5"
week: 5
tags: ["Week 5", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w5-s2.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Example / Suggestion（补充展开）; W5DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-05", "dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example", "dt-week-05.practice"]
title: "5.s2 · Frobenius 的必要方向（原题 Suggestion）"
english: "Week 5 · 补充展开"
summary: "Week 5 · W5DiffTop2026.pdf · 5.s2；原 Example / Suggestion 的补充展开。"
targets: ["dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example"]
source_number: "5.s2"
source_kind: "supplement"
difficulty: "基础"
order: 508
minutes: 8
---

:::problem
补充题目：可积光滑分布必 involutive。
:::

:::solution
设每个 $p$ 在积分子流形 $i:L\hookrightarrow M$ 上，且 $di(T_qL)=D_{i(q)}$。任取 $X,Y\in\Gamma(D)$，沿 $L$ 的限制可唯一拉回为光滑向量场 $\widetilde X,\widetilde Y$（局部子流形图中这只是保留切向分量），它们与 $X,Y$ 分别 $i$-related。5.6 给
$$[X,Y]_{i(q)}=di_q([\widetilde X,\widetilde Y]_q)\in D_{i(q)}.$$
每点都在某积分子流形上，所以 $[X,Y]\in\Gamma(D)$，即 involutive。这里仅证明必要性，充分性是 Frobenius theorem。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Example / Suggestion（补充展开）; W5DiffTop2026.pdf

## 关联

[dt-week-05](ref:dt-week-05) · [dt-vector-fields](ref:dt-vector-fields) · [dt-fields-derivations](ref:dt-fields-derivations) · [dt-lie-related](ref:dt-lie-related) · [dt-bracket-example](ref:dt-bracket-example)
