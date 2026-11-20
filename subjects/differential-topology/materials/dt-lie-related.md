---
id: "dt-lie-related"
track: "微分拓扑 · Week 1–8"
chapter: "Week 5"
week: 5
tags: ["Week 5", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-lie-related.md"
source_note: "为 Week 5 roadmap 编写的配套知识卡；原课程文件 W5DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-05", "dt-w5-1", "dt-w5-2", "dt-w5-3", "dt-w5-s1", "dt-w5-4", "dt-w5-5", "dt-w5-6", "dt-w5-s2"]
title: "Lie bracket、f-related 与 distribution"
type: "def"
english: "Week 5 · Definition"
summary: "定义向量场括号、映射相关性与分布，并检查其相容关系。"
order: 503
minutes: 4
related_questions: ["dt-w5-1", "dt-w5-2", "dt-w5-3", "dt-w5-s1", "dt-w5-4", "dt-w5-5", "dt-w5-6", "dt-w5-s2"]
---

:::statement
向量场括号 $[X,Y]f=X(Yf)-Y(Xf)$；坐标为 $[X,Y]^i=\sum_j(X^j\partial_jY^i-Y^j\partial_jX^i)$。它仍是向量场并满足 Jacobi（5.5 与向量场–导子同构）。

$X$ 与 $Y$ 为 $f$-related 指 $df_pX_p=Y_{f(p)}$。光滑 rank-$r$ distribution 是 $TM$ 的秩 $r$ 光滑子丛。Involutive 指其局部光滑截面对 Lie bracket 封闭。Integral submanifold 指切空间恰等于该分布的子流形；每点存在此类局部积分子流形称可积。Frobenius theorem 断言光滑常秩分布可积当且仅当 involutive；本周只证明必要方向。
:::

## 来源
- 为 Week 5 roadmap 编写的配套知识卡；原课程文件 W5DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-05](ref:dt-week-05) · [dt-w5-1](ref:dt-w5-1) · [dt-w5-2](ref:dt-w5-2) · [dt-w5-3](ref:dt-w5-3) · [dt-w5-s1](ref:dt-w5-s1) · [dt-w5-4](ref:dt-w5-4) · [dt-w5-5](ref:dt-w5-5) · [dt-w5-6](ref:dt-w5-6) · [dt-w5-s2](ref:dt-w5-s2)
