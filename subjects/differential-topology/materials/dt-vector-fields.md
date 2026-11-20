---
id: "dt-vector-fields"
track: "微分拓扑 · Week 1–8"
chapter: "Week 5"
week: 5
tags: ["Week 5", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-vector-fields.md"
source_note: "为 Week 5 roadmap 编写的配套知识卡；原课程文件 W5DiffTop2026.pdf；补充内容在正文标识"
source_verified: false
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-05", "dt-w5-1", "dt-w5-2", "dt-w5-3", "dt-w5-s1", "dt-w5-4", "dt-w5-5", "dt-w5-6", "dt-w5-s2"]
title: "Tangent bundle、section 与 vector field"
type: "def"
english: "Week 5 · Definition"
summary: "从光滑向量丛、切丛和余切丛的局部平凡化理解截面、向量场与一形式。"
aliases: ["DT-D005", "DT-D006", "smooth vector bundle", "cotangent bundle", "余切丛", "光滑截面"]
requires: ["dt-germs-cotangent"]
order: 501
minutes: 4
related_questions: ["dt-w5-1", "dt-w5-2", "dt-w5-3", "dt-w5-s1", "dt-w5-4", "dt-w5-5", "dt-w5-6", "dt-w5-s2"]
---

:::statement
一个秩为 $r$ 的光滑向量丛是带 $r$ 维实向量空间纤维的光滑满射 $\pi:E\to M$，并有覆盖 $M$ 的光滑局部平凡化 $\pi^{-1}(U)\cong U\times\mathbb R^r$，平凡化在每个纤维上线性。重叠处的过渡函数光滑且取值于 $\operatorname{GL}_r(\mathbb R)$。光滑截面为满足 $\pi\circ s=\operatorname{id}_M$ 的光滑映射 $s:M\to E$，截面空间记为 $\Gamma(E)$。

$TM=\coprod_pT_pM$，坐标平凡化把 $v=\sum v^i\partial_i|_p$ 送到 $(x(p),v^1,\ldots,v^n)$；过渡为 $(x,v)\mapsto(y(x),D y_xv)$。Smooth vector field 为光滑截面 $X:M\to TM$，$\pi X=\mathrm{id}$，局部 $X=\sum X^i\partial_i$，各 $X^i$ 光滑。

余切丛 $T^*M=\coprod_pT_p^*M$ 由局部基 $(dx^i)_p$ 平凡化；$\alpha_p=\sum_i a_i(dx^i)_p$ 对应 $(x(p),a_1,\ldots,a_n)$。若 $y=y(x)$ 且 $\alpha=\sum_i a_i dx^i=\sum_j b_jdy^j$，则 $a=(D y_x)^{\mathsf T}b$，即系数按逆转置变换。由于 Jacobian 和其逆光滑，这给出光滑丛结构，不能只取集合层面的不交并。

一形式是 $\Gamma(T^*M)$ 的元素，局部写为 $\alpha=\sum_i a_i dx^i$，与向量场配对得光滑函数 $\alpha(X)=\sum_i a_iX^i$。

它作用于函数为 $(Xf)(p)=X_p(f)$。导子模 $\operatorname{Der}(C^\infty(M),C^\infty(M))$ 以 $(aD)(f)=aD(f)$ 定义 $C^\infty(M)$-模结构。
:::

## 来源
- 为 Week 5 roadmap 编写的配套知识卡；原课程文件 W5DiffTop2026.pdf；补充内容在正文标识
- 复用补充：`Folio_DT_Forms_Stokes_DeRham.zip`，知识条目 DT-D005–DT-D006。

## 关联

[dt-week-05](ref:dt-week-05) · [dt-w5-1](ref:dt-w5-1) · [dt-w5-2](ref:dt-w5-2) · [dt-w5-3](ref:dt-w5-3) · [dt-w5-s1](ref:dt-w5-s1) · [dt-w5-4](ref:dt-w5-4) · [dt-w5-5](ref:dt-w5-5) · [dt-w5-6](ref:dt-w5-6) · [dt-w5-s2](ref:dt-w5-s2)
