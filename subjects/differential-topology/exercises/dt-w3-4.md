---
id: "dt-w3-4"
track: "微分拓扑 · Week 1–8"
chapter: "Week 3"
week: 3
tags: ["Week 3", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w3-4.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.4; W3DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-03", "dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat", "dt-week-03.practice"]
title: "3.4 · 射影坐标与商拓扑相容"
english: "Week 3 · Problem 3.4"
summary: "Week 3 · W3DiffTop2026.pdf · 3.4；按原包保留题面、解答及勘误。"
targets: ["dt-quotient", "dt-germs-cotangent", "dt-bump-locality", "dt-hadamard", "dt-flat"]
source_number: "3.4"
source_kind: "course-exercise"
difficulty: "基础"
order: 305
minutes: 8
---

:::problem
题目：证明 $U_a\subset\mathbb{RP}^n$ 开，坐标及逆连续，过渡光滑。
:::

:::solution
步骤 1：$q^{-1}(U_a)=\{x:x_a\ne0\}$ 开，故 $U_a$ 开。

步骤 2：$q$ 是开商映射（3.2），限制到 $q^{-1}(U_a)$ 仍是商映射。$\varphi_a\circ q(x)=(x_j/x_a)_{j\ne a}$ 连续，由商映射的泛性质，$\varphi_a$ 连续。

步骤 3：令 $s_a:\mathbb R^n\to\mathbb R^{n+1}\setminus0$ 在第 $a$ 位插入 1。它连续，$\varphi_a^{-1}=q\circ s_a$，故逆连续。

步骤 4：置 $u_a=1$，交叠域为 $u_b\ne0$，过渡分量是 $u_j/u_b$（$j\ne b$），均光滑。反向交换 $a,b$ 同理。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.4; W3DiffTop2026.pdf

## 关联

[dt-week-03](ref:dt-week-03) · [dt-quotient](ref:dt-quotient) · [dt-germs-cotangent](ref:dt-germs-cotangent) · [dt-bump-locality](ref:dt-bump-locality) · [dt-hadamard](ref:dt-hadamard) · [dt-flat](ref:dt-flat)
