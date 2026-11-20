---
id: "dt-atlas"
track: "微分拓扑 · Week 1–8"
chapter: "Week 2"
week: 2
tags: ["Week 2", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-atlas.md"
source_note: "为 Week 2 roadmap 编写的配套知识卡；原课程文件 W2DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-02", "dt-w2-0", "dt-w2-2", "dt-w2-3", "dt-w2-4", "dt-w2-5", "dt-w2-6", "dt-w2-8", "dt-w2-10", "dt-w2-11"]
title: "Chart、atlas 与 smooth map"
type: "def"
english: "Week 2 · Definition"
summary: "核对坐标卡、光滑图册、光滑映射与微分同胚的完整定义。"
order: 201
minutes: 5
related_questions: ["dt-w2-0", "dt-w2-2", "dt-w2-3", "dt-w2-4", "dt-w2-5", "dt-w2-6", "dt-w2-8", "dt-w2-10", "dt-w2-11"]
---

:::statement
在已给拓扑的 $X$ 上，$n$ 维 chart 为 $(U,\varphi)$，其中 $U$ 开、$\varphi:U\to V\subset\mathbb R^n$ 为同胚，$V$ 开。Atlas 是覆盖 $X$ 的图族，各过渡 $\psi\circ\varphi^{-1}$ 在其开交叠域上光滑（把两图交换也要求，故逆光滑）。

Smooth manifold 是 Hausdorff、第二可数的空间加这样的 atlas（或其 maximal atlas）。映射 $f:M\to N$ 光滑指在每点附近的源图和目标图中，坐标表达 $\psi\circ f\circ\varphi^{-1}$ 光滑。Diffeomorphism 是光滑双射且逆光滑。

若只有集合没有拓扑，可先给满足开交叠、光滑可逆过渡的双射图，再按 2.2 生成拓扑；此步骤**不自动保证 Hausdorff 或第二可数**，必须另查。
:::

## 来源
- 为 Week 2 roadmap 编写的配套知识卡；原课程文件 W2DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-02](ref:dt-week-02) · [dt-w2-0](ref:dt-w2-0) · [dt-w2-2](ref:dt-w2-2) · [dt-w2-3](ref:dt-w2-3) · [dt-w2-4](ref:dt-w2-4) · [dt-w2-5](ref:dt-w2-5) · [dt-w2-6](ref:dt-w2-6) · [dt-w2-8](ref:dt-w2-8) · [dt-w2-10](ref:dt-w2-10) · [dt-w2-11](ref:dt-w2-11)
