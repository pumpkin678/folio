---
id: "dt-w8-2"
track: "微分拓扑 · Week 1–8"
chapter: "Week 8"
week: 8
tags: ["Week 8", "微分拓扑"]
source_pack: "2026-11-12-differential-topology-w1-w8"
source_document: "notes/dt-w8-2.md"
source_note: "Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.2; W8DiffTop2026.pdf"
source_verified: true
source_verification_origin: "supplied-pack"
source_review_status: "reviewed"
related: ["dt-week-08", "dt-exterior-derivative", "dt-contraction-lie", "dt-cartan-complex", "dt-cartan-example", "dt-week-08.practice"]
title: "8.2 · 一形式的 d² 逐项计算"
english: "Week 8 · Problem 8.2"
summary: "Week 8 · W8DiffTop2026.pdf · 8.2；按原包保留题面、解答及勘误。"
targets: ["dt-exterior-derivative", "dt-contraction-lie", "dt-cartan-complex", "dt-cartan-example"]
source_number: "8.2"
source_kind: "course-exercise"
difficulty: "进阶"
order: 801
minutes: 19
---

:::problem
**代数约定：** $A$ 为交换含幺实代数，形式是导子模 $\operatorname{Der}(A)$ 上的交替 $A$-多线性映射，外幂取 $A$-模外幂。流与拉回相关题在光滑流形上讨论。

题目：对 $\omega\in\operatorname{Hom}_A(\operatorname{Der}(A),A)$ 计算 $d^2\omega$。
:::

:::solution
统一勘误与约定：$A$ 是交换含幺实代数，$L=\operatorname{Der}_{\mathbb R}(A,A)$，$\Omega^p=\operatorname{Hom}_A(\Lambda_A^pL,A)$，$\Omega^0=A$，负次数为零。外微分使用
$$d\omega(X_1,\ldots,X_{p+1})=\sum_i(-1)^{i-1}X_i\omega(X_1,\widehat X_i,\ldots,X_{p+1})+\sum_{i<j}(-1)^{i+j}\omega([X_i,X_j],X_1,\widehat X_i,\widehat X_j,\ldots,X_{p+1}).$$
原文第二个求和缺少 $(-1)^{i+j}$，末尾参数和定义域也有笔误。以下均按此标准公式计算。

步骤 1：$d\omega(X,Y)=X\omega(Y)-Y\omega(X)-\omega([X,Y])$。

步骤 2：代入二形式的外微分得到完整展开
$$\begin{aligned}
d^2\omega(X,Y,Z)={}&XY\omega(Z)-XZ\omega(Y)-X\omega([Y,Z])\\
&-YX\omega(Z)+YZ\omega(X)+Y\omega([X,Z])\\
&+ZX\omega(Y)-ZY\omega(X)-Z\omega([X,Y])\\
&-[X,Y]\omega(Z)+Z\omega([X,Y])+\omega([[X,Y],Z])\\
&+[X,Z]\omega(Y)-Y\omega([X,Z])-\omega([[X,Z],Y])\\
&-[Y,Z]\omega(X)+X\omega([Y,Z])+\omega([[Y,Z],X]).
\end{aligned}$$

步骤 3：形如 $X\omega([Y,Z])$ 的六项成对抵消；作用于 $\omega(Z)$ 的项合成 $(XY-YX-[X,Y])\omega(Z)=0$，其他两个同理。

步骤 4：剩下 $\omega([[X,Y],Z]-[[X,Z],Y]+[[Y,Z],X])=0$，因为括号内为 Jacobi 恒等式。因此 $d^2\omega=0$。
:::

## 来源
- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.2; W8DiffTop2026.pdf

## 关联

[dt-week-08](ref:dt-week-08) · [dt-exterior-derivative](ref:dt-exterior-derivative) · [dt-contraction-lie](ref:dt-contraction-lie) · [dt-cartan-complex](ref:dt-cartan-complex) · [dt-cartan-example](ref:dt-cartan-example)
