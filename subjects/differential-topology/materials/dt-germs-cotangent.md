---
id: "dt-germs-cotangent"
track: "微分拓扑 · Week 1–8"
chapter: "Week 3"
week: 3
tags: ["Week 3", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-germs-cotangent.md"
source_note: "为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-03", "dt-w3-0", "dt-w3-1", "dt-w3-2", "dt-w3-3", "dt-w3-4", "dt-w3-5", "dt-w3-6", "dt-w3-7", "dt-w3-8", "dt-w3-9", "dt-w3-10", "dt-w3-11", "dt-w3-12", "dt-w3-optional", "dt-w3-13"]
title: "Function germs、maximal ideal、cotangent、derivation"
type: "def"
english: "Week 3 · Definition"
summary: "从函数芽、极大理想及其平方定义余切空间和点导子。"
order: 302
minutes: 5
related_questions: ["dt-w3-0", "dt-w3-1", "dt-w3-2", "dt-w3-3", "dt-w3-4", "dt-w3-5", "dt-w3-6", "dt-w3-7", "dt-w3-8", "dt-w3-9", "dt-w3-10", "dt-w3-11", "dt-w3-12", "dt-w3-optional", "dt-w3-13"]
---

:::statement
$C^\infty_{M,p}$ 是 $p$ 附近光滑函数的芽环：两个函数若在更小邻域一致则同芽。局部极大理想为在 $p$ 消失的芽。课程也使用全局环 $C^\infty(M)$ 的理想 $\mathfrak m_p=\{f:f(p)=0\}$；其平方是有限和 $\sum u_iv_i$，$u_i,v_i\in\mathfrak m_p$。

定义 $T_p^*M=\mathfrak m_p/\mathfrak m_p^2$，$T_pM=(T_p^*M)^*$。点导子是实线性 $D:C^\infty(M)\to\mathbb R$ 满足 $D(fg)=f(p)Dg+g(p)Df$。3.13 给两定义的自然同构。Bump 与局部性使全局理想和芽理想的这一商同构（6.3）。

$df_p=[f-f(p)]$；光滑 $F:M\to N$ 的 differential 由 $dF_p(v)(h)=v(h\circ F)$ 定义，是余切拉回的对偶。局部坐标矩阵为 Jacobian。
:::

## 来源
- 为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-03](ref:dt-week-03) · [dt-w3-0](ref:dt-w3-0) · [dt-w3-1](ref:dt-w3-1) · [dt-w3-2](ref:dt-w3-2) · [dt-w3-3](ref:dt-w3-3) · [dt-w3-4](ref:dt-w3-4) · [dt-w3-5](ref:dt-w3-5) · [dt-w3-6](ref:dt-w3-6) · [dt-w3-7](ref:dt-w3-7) · [dt-w3-8](ref:dt-w3-8) · [dt-w3-9](ref:dt-w3-9) · [dt-w3-10](ref:dt-w3-10) · [dt-w3-11](ref:dt-w3-11) · [dt-w3-12](ref:dt-w3-12) · [dt-w3-optional](ref:dt-w3-optional) · [dt-w3-13](ref:dt-w3-13)
