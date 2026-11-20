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
summary: "从 Cartan 公式与外微分平方为零走向 de Rham 复形。"
order: 803
minutes: 6
related_questions: ["dt-w8-2", "dt-w8-3", "dt-w8-4", "dt-w8-5", "dt-w8-6"]
---

:::statement
Cartan identity：$L_X=di_X+i_Xd$，逐项证明见 8.6。

Exterior derivative 满足 $d^2=0$。对流形，在坐标展开中 $d^2\omega=\sum_{i,j,I}\partial_i\partial_ja_I\,dx^i\wedge dx^j\wedge dx^I$；$i=j$ 项为零，$i,j$ 互换的项因混合偏导相等与楔反对称相消，故为零。对一般交换代数的导子形式，同样结论来自括号定义与 Jacobi；1、2 次的完整代数计算见 8.2–8.3。

于是 $0\to\Omega^0(M)\xrightarrow d\Omega^1(M)\xrightarrow d\cdots$ 为 cochain complex。Closed 指 $d\omega=0$，exact 指 $\omega=d\eta$；$H^p_{dR}(M)=\ker(d:\Omega^p\to\Omega^{p+1})/\operatorname{im}(d:\Omega^{p-1}\to\Omega^p)$。这是后续延伸定义，并非 Week 8 原作业要求计算的内容。
:::

## 来源
- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-08](ref:dt-week-08) · [dt-w8-2](ref:dt-w8-2) · [dt-w8-3](ref:dt-w8-3) · [dt-w8-4](ref:dt-w8-4) · [dt-w8-5](ref:dt-w8-5) · [dt-w8-6](ref:dt-w8-6)
