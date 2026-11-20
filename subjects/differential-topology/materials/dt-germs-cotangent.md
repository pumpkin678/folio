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
summary: "区分芽环与全局函数环，用极大理想的一阶商统一余切空间、点导子与微分。"
aliases: ["DT-D001", "DT-D002", "DT-D003", "DT-D004", "局部环", "cotangent space"]
requires: ["dt-atlas"]
order: 302
minutes: 5
related_questions: ["dt-w3-0", "dt-w3-1", "dt-w3-2", "dt-w3-3", "dt-w3-4", "dt-w3-5", "dt-w3-6", "dt-w3-7", "dt-w3-8", "dt-w3-9", "dt-w3-10", "dt-w3-11", "dt-w3-12", "dt-w3-optional", "dt-w3-13"]
---

:::statement
$A_p=C^\infty_{M,p}$ 是 $p$ 附近实值光滑函数的芽环：两个函数若在更小邻域一致则同芽。令 $\mathfrak m_p=\{[f]_p:f(p)=0\}$；非零值函数芽在 $p$ 附近可逆，因此这是 $A_p$ 的唯一极大理想，且 $A_p/\mathfrak m_p\cong\mathbb R$。理想平方由有限和 $\sum_j u_jv_j$ 组成，其中 $u_j,v_j\in\mathfrak m_p$。

定义 $T_p^*M=\mathfrak m_p/\mathfrak m_p^2$，$T_pM=(T_p^*M)^*$。点导子是实线性 $D:A_p\to\mathbb R$ 满足 $D(fg)=f(p)Dg+g(p)Df$。导子消去常数与 $\mathfrak m_p^2$，而 $\lambda\in(T_p^*M)^*$ 通过 $D_\lambda(f)=\lambda([f-f(p)])$ 给出点导子；两构造互逆。

课程也使用全局环 $C^\infty(M)$ 的消失理想，以下另记为 $I_p=\{f:f(p)=0\}$，避免与芽理想混淆。在通常的 Hausdorff、第二可数光滑流形假设下，bump 与导子局部性给出 $I_p/I_p^2\cong\mathfrak m_p/\mathfrak m_p^2$，故全局函数环版本的点导子给出同一切空间。完整互逆构造见 [3.13](ref:dt-w3-13)，全局与局部的比较见 [6.3](ref:dt-w6-3)。

$df_p=[f-f(p)]$；光滑 $F:M\to N$ 的 differential 由 $dF_p(v)(h)=v(h\circ F)$ 定义，是余切拉回的对偶。局部坐标矩阵为 Jacobian。
:::

:::remark
[Hadamard lemma](ref:dt-hadamard) 给出坐标基和 $d_pf=\sum_i\partial_i f(p)(dx^i)_p$，把一阶商与通常的局部微分联系起来。

可选的环论比较为 $C^\infty(M)_{I_p}\cong A_p$：任意芽先用 bump 延拓为全局函数；若某全局函数在 $p$ 附近为零，取支撑在该邻域、在 $p$ 取值为 1 的 bump 乘它，乘积为零，所以其局部化为零。这也解释了为何不能直接把全局环和芽环视为同一个环。
:::

## 来源
- 为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识
- 复用补充：`Folio_DT_Forms_Stokes_DeRham.zip`，知识条目 DT-D001–DT-D004。

## 关联

[dt-week-03](ref:dt-week-03) · [dt-w3-0](ref:dt-w3-0) · [dt-w3-1](ref:dt-w3-1) · [dt-w3-2](ref:dt-w3-2) · [dt-w3-3](ref:dt-w3-3) · [dt-w3-4](ref:dt-w3-4) · [dt-w3-5](ref:dt-w3-5) · [dt-w3-6](ref:dt-w3-6) · [dt-w3-7](ref:dt-w3-7) · [dt-w3-8](ref:dt-w3-8) · [dt-w3-9](ref:dt-w3-9) · [dt-w3-10](ref:dt-w3-10) · [dt-w3-11](ref:dt-w3-11) · [dt-w3-12](ref:dt-w3-12) · [dt-w3-optional](ref:dt-w3-optional) · [dt-w3-13](ref:dt-w3-13)
