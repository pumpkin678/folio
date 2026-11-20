---
id: "dt-contraction-lie"
track: "微分拓扑 · Week 1–8"
chapter: "Week 8"
week: 8
tags: ["Week 8", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-contraction-lie.md"
source_note: "为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-08", "dt-w8-2", "dt-w8-3", "dt-w8-4", "dt-w8-5", "dt-w8-6"]
title: "Pullback、contraction 与 Lie derivative"
type: "def"
english: "Week 8 · Definition"
summary: "对照拉回、内积和 Lie 导数的定义与参数个数。"
order: 802
minutes: 4
related_questions: ["dt-w8-2", "dt-w8-3", "dt-w8-4", "dt-w8-5", "dt-w8-6"]
---

:::statement
光滑 $F:M\to N$ 对 $k$-形式的拉回为 $(F^*\omega)_p(v_1,\ldots,v_k)=\omega_{F(p)}(dF_pv_1,\ldots,dF_pv_k)$，其中 $p\in M$、$v_j\in T_pM$。

Contraction $i_X:\Omega^p\to\Omega^{p-1}$ 定义为首槽插入 $X$；对函数为零。Lie derivative 定义为 $L_X\omega=\left.\frac d{dt}\right|_0F_t^*\omega$，其中 $F_t$ 为 $X$ 的局部 flow。等价代数公式是 $X(\omega(Y_1,\ldots,Y_p))-\sum_j\omega(\ldots,[X,Y_j],\ldots)$，见 8.5。
:::

## 来源
- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-08](ref:dt-week-08) · [dt-w8-2](ref:dt-w8-2) · [dt-w8-3](ref:dt-w8-3) · [dt-w8-4](ref:dt-w8-4) · [dt-w8-5](ref:dt-w8-5) · [dt-w8-6](ref:dt-w8-6)
