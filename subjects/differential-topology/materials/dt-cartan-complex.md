---
id: "dt-cartan-complex"
track: "微分拓扑 · Week 1–8"
chapter: "Week 8"
week: 8
tags: ["Week 8", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-cartan-complex.md"
source_note: "为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-08", "dt-w8-2", "dt-w8-3", "dt-w8-4", "dt-w8-5", "dt-w8-6"]
title: "Cartan formula 与 de Rham complex"
type: "thm"
english: "Week 8 · Theorem"
summary: "从 Cartan 公式、d²=0 与分次 Leibniz 法则，统一理解 CDGA 和 de Rham 上同调。"
aliases: ["DT-D013", "DT-D014", "de Rham cohomology", "CDGA", "闭形式", "恰当形式", "上链复形"]
requires: ["dt-exterior-derivative", "dt-contraction-lie"]
order: 803
minutes: 6
related_questions: ["dt-w8-2", "dt-w8-3", "dt-w8-4", "dt-w8-5", "dt-w8-6"]
---

:::statement
Cartan identity：$L_X=di_X+i_Xd$，逐项证明见 8.6。

Exterior derivative 满足 $d^2=0$。对流形，在坐标展开中 $d^2\omega=\sum_{i,j,I}\partial_i\partial_ja_I\,dx^i\wedge dx^j\wedge dx^I$；$i=j$ 项为零，$i,j$ 互换的项因混合偏导相等与楔反对称相消，故为零。对一般交换代数的导子形式，同样结论来自括号定义与 Jacobi；1、2 次的完整代数计算见 8.2–8.3。

于是 $0\to\Omega^0(M)\xrightarrow d\Omega^1(M)\xrightarrow d\cdots\xrightarrow d\Omega^n(M)\to0$ 为 de Rham 上链复形，约定 $\Omega^{-1}(M)=0$。Closed 指 $d\omega=0$，exact 指 $\omega=d\eta$；由 $d^2=0$，恰当形式必闭。

定义 $Z^p=\ker(d:\Omega^p\to\Omega^{p+1})$、$B^p=\operatorname{im}(d:\Omega^{p-1}\to\Omega^p)$，则 $H^p_{\mathrm{dR}}(M)=Z^p/B^p$。一般上链复形 $C^p\xrightarrow{d^p}C^{p+1}$ 的上同调定义相同，条件是 $d^{p+1}d^p=0$。这里的上同调是后续延伸，并非 Week 8 原作业要求计算的内容。

外积的分次交换性、外微分的分次 Leibniz 法则和 $d^2=0$，共同说明 $(\Omega^\bullet(M),\wedge,d)$ 是交换微分分次代数（CDGA）；这里“交换”指按次数带符号的交换。
:::

## 来源
- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识
- 复用补充：`Folio_DT_Forms_Stokes_DeRham.zip`，知识条目 DT-D009、DT-D013–DT-D014；后续比较定理见 [de Rham 定理](ref:DT-T004)。

## 关联

[dt-week-08](ref:dt-week-08) · [dt-w8-2](ref:dt-w8-2) · [dt-w8-3](ref:dt-w8-3) · [dt-w8-4](ref:dt-w8-4) · [dt-w8-5](ref:dt-w8-5) · [dt-w8-6](ref:dt-w8-6)
