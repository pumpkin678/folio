---
id: "dt-w5-6"
track: "微分拓扑 · Week 1–8"
chapter: "Week 5"
week: 5
tags: ["Week 5", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w5-6.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.6; W5DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-05", "dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example", "dt-week-05.practice"]
title: "5.6 · f-related 向量场的括号"
english: "Week 5 · Problem 5.6"
summary: "Week 5 · W5DiffTop2026.pdf · 5.6；按原包保留题面、解答及勘误。"
targets: ["dt-vector-fields", "dt-fields-derivations", "dt-lie-related", "dt-bracket-example"]
source_number: "5.6"
source_kind: "course-exercise"
difficulty: "基础"
order: 507
minutes: 8
---

:::problem
题目：$X_i$ 与 $Y_i$ 分别 $f$-related，证明其 Lie brackets 也相关。
:::

:::solution
步骤 1：相关性等价于对任意 $h\in C^\infty(N)$，$X_i(h\circ f)=(Y_i h)\circ f$。这是 $df_p(X_i(p))=Y_i(f(p))$ 在函数上的作用。

步骤 2：两次应用得到
$$[X_0,X_1](h\circ f)=X_0((Y_1h)\circ f)-X_1((Y_0h)\circ f)=([Y_0,Y_1]h)\circ f.$$
函数上的相等确定切向量，故结论成立。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.6; W5DiffTop2026.pdf

## 关联

[dt-week-05](ref:dt-week-05) · [dt-vector-fields](ref:dt-vector-fields) · [dt-fields-derivations](ref:dt-fields-derivations) · [dt-lie-related](ref:dt-lie-related) · [dt-bracket-example](ref:dt-bracket-example)
