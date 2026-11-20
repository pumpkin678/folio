---
id: "dt-w6-4"
track: "微分拓扑 · Week 1–8"
chapter: "Week 6"
week: 6
tags: ["Week 6", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w6-4.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.4; W6DiffTop2026(1).pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-06", "dt-curves-flow", "dt-ode", "dt-incomplete", "dt-week-06.practice"]
title: "6.4 · Compact manifold 上向量场 complete"
english: "Week 6 · Problem 6.4"
summary: "Week 6 · W6DiffTop2026(1).pdf · 6.4；按原包保留题面、解答及勘误。"
targets: ["dt-curves-flow", "dt-ode", "dt-incomplete"]
source_number: "6.4"
source_kind: "course-exercise"
difficulty: "进阶"
order: 604
minutes: 19
---

:::problem
**假设：** $M$ 是紧的无边界光滑流形，$X\in\Gamma(TM)$ 是给定光滑向量场。

题目：构造由 $X$ 生成的全局光滑 flow，证明初值和群律。
:::

:::solution
局部定理：对每个 $p$，存在邻域 $U_p$、$\varepsilon_p>0$ 和光滑 $F_p:(-\varepsilon_p,\varepsilon_p)\times U_p\to M$，满足 $F_p(0,q)=q$、$\partial_tF_p=X(F_p)$，且同初值解唯一。它由坐标 ODE 的局部存在、唯一和参数光滑依赖推出。

步骤 1：紧性取有限子覆盖 $U_{p_j}$，令 $\varepsilon=\min_j\varepsilon_{p_j}>0$。因此从任意点出发均有至少 $(-\varepsilon,\varepsilon)$ 的解。

步骤 2：设某最大积分曲线 $\gamma:(a,b)\to M$ 有有限右端点 $b$。取 $t_0\in(a,b)$ 使 $b-t_0<\varepsilon/2$。从 $\gamma(t_0)$ 出发存在长度 $\varepsilon$ 的局部解，平移时间后与 $\gamma$ 在交区间因唯一性一致，因此延拓到 $t_0+\varepsilon>b$，矛盾。左端同理，故所有最大区间为 $\mathbb R$。

步骤 3：令 $F(t,p)=\gamma_p(t)$。初值给 $F(0,p)=p$。对固定 $t,p$，曲线 $s\mapsto F(s,F(t,p))$ 与 $s\mapsto F(s+t,p)$ 都解同一 ODE 且在 $s=0$ 取相同值，唯一性给群律。

步骤 4：局部解在重叠处唯一，粘成 $(-\varepsilon,\varepsilon)\times M$ 上的光滑映射。对任意 $(T,p)$，取固定正整数 $N$ 使 $|T|/N<\varepsilon$，在 $T$ 的小邻域仍如此。由群律，$F(t,q)$ 等于把局部时间 $t/N$ 的光滑映射复合 $N$ 次，故在该邻域光滑。得到全局光滑 flow。

原题只列初值和群律，字面上 identity flow 对任何 $X$ 都满足；这里补上 $\partial_tF=X\circ F$，证明其真正意图。默认流形无边界；有边界时须加切于边界等条件。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.4; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](ref:dt-week-06) · [dt-curves-flow](ref:dt-curves-flow) · [dt-ode](ref:dt-ode) · [dt-incomplete](ref:dt-incomplete)
