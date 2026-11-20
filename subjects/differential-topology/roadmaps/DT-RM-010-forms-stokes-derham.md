---
id: DT-RM-010
title: 从光滑函数环到 Stokes 定理与 de Rham 上同调
english: From smooth functions to Stokes and de Rham cohomology
summary: 接续 Week 1–8，以 7 个阶段串联 17 份共享知识卡；从局部代数走到定向、积分和上同调比较。
purpose: learn
level: 专题进阶
track: 微分形式、Stokes 与 de Rham
order: 9
minutes: 100
tags: [微分形式, 定向, Stokes, de Rham]
related: [dt-w1-w8-path, dt-week-08, DT-K-010, DT-P-010]
source_pack: 2026-11-20-dt-forms-stokes-derham
source_document: 00_Roadmap_Forms_Stokes_DeRham.md
source_note: 用户提供的专题路线；按原包的 M1–M7 整理阶段，已存在的知识卡保持原 ID 与引用。
source_verified: false
---

:::goal
沿“定义、构造、定理、例子、证明检查”的顺序，把函数的一阶局部信息、微分形式与有向积分连成一条主线。完成 [Week 1–8](ref:dt-w1-w8-path) 后可沿本专题继续；熟悉的知识卡可直接复用已读记录。
:::

[定义与定理速查](ref:DT-K-010) · [12 个证明与构造检查点](ref:DT-P-010)。

## 学习总览

```text
光滑函数与函数芽
  → 一阶商、切空间与余切空间
  → 光滑向量丛、截面与微分形式
  → 外微分、分次 Leibniz 法则与 de Rham 复形
  → 最高次形式、定向、边界与积分
  → Stokes：外微分与几何边界相容
  → 积分上链映射
  → Poincaré 引理与 de Rham 定理
```

**代数线索**是从 $C^\infty(M)$ 的局部一阶信息到 $\Omega^\bullet(M)$，由 $d^2=0$ 取上同调；**几何线索**是由最高次形式确定定向，在有向区域和单形上积分，再用 Stokes 比较 $d$ 与边界 $\partial$。

## 前置与数学约定

- 能使用[光滑坐标图和切映射](ref:dt-atlas)，并写出 Jacobian。
- 理解[对偶与外幂](ref:dt-exterior)、极大理想、理想平方和商向量空间。
- 上链复形、闭与恰当、核除以像的定义统一见 [de Rham 复形](ref:dt-cartan-complex)。

流形默认有限维、Hausdorff、第二可数，光滑指 $C^\infty$。M5 起会明确引入带边流形；无边与带边的约定不混用。普通 de Rham 上同调不要求流形可定向，区域积分与全局 Stokes 的假设则要逐项核对。

## M1 · 光滑函数与局部代数

目标：说明为什么模去平方理想恰好保留一阶信息，并区分全局函数环的消失理想与函数芽环的极大理想。

::material{id="dt-germs-cotangent"}

::material{id="dt-hadamard"}

证明检查：[P01：局部环与理想平方](ref:DT-P01)、[P02：Hadamard 与余切基](ref:DT-P02)、[P03：余切对偶与点导子](ref:dt-w3-13)。可选地结合 [bump 与导子局部性](ref:dt-bump-locality)，比较全局函数环的局部化与芽环。

## M2 · 切丛、余切丛与截面

目标：从逐点的线性空间得到光滑丛结构，写清余切系数的逆转置变换律，并验证 $\pi\circ s=\operatorname{id}_M$。

::material{id="dt-vector-fields"}

::material{id="dt-fields-derivations"}

证明检查：[P04：余切丛的坐标和平凡化](ref:DT-P04)。应能写出向量场和一形式的局部表达，并解释其配对为何是光滑函数。

## M3 · 外代数、微分形式与拉回

目标：由外幂丛的截面得到分次交换代数，分别理解外积与拉回，避免把外积当作普通乘法。

::material{id="dt-exterior"}

::material{id="dt-forms"}

::material{id="dt-contraction-lie"}

计算检查：[P05：平方映射下的形式拉回](ref:DT-P05)。需要时回看[外幂基与行列式](ref:dt-exterior-basis)、[外积的计算例子](ref:dt-wedge-example)。

## M4 · 外微分、CDGA 与 de Rham 复形

目标：从局部坐标公式解释外微分的自然性，核对任意次数的 $d^2=0$，并区分上链复形与带乘法的 CDGA。

::material{id="dt-exterior-derivative"}

::material{id="dt-cartan-complex"}

证明检查：[P06：任意次数的平方为零](ref:DT-P06)。一形式的无坐标公式需要 Lie bracket 项，不能只套用偏导公式。

## M5 · 最高次形式与边界定向

目标：把定向理解成处处非零最高次形式的正比例等价类，再用向外优先约定确定边界符号。

::material{id="DT-D010"}

::material{id="DT-D011"}

证明与例子：[P07：相同定向的判别](ref:DT-P07)、[P08：区间与圆盘的边界符号](ref:DT-P08)。应能同时说明区间端点符号、圆盘逆时针边界和球面的外向定向。

## M6 · 积分与广义 Stokes 定理

目标：通过正定向坐标和单位分解定义积分，再把半空间上的微积分基本定理拼接成全局公式。

::material{id="DT-D012"}

::material{id="DT-T001"}

证明检查：[P09：从半空间 FTC 到 Stokes](ref:DT-P09)。要解释每一项的符号和消失原因，并把 FTC、Green 和经典曲面 Stokes 作为特例辨认出来。非紧情形明确检查紧支撑。

## M7 · 积分上链映射与 de Rham 定理

目标：沿用 M4 已有的闭形式、恰当形式和上同调定义，比较形式复形与奇异上链复形；区分“得到一个上链映射”和“证明它诱导同构”。

::material{id="DT-D015"}

::material{id="DT-T002"}

::material{id="DT-T003"}

::material{id="DT-T004"}

计算与证明：[P10：圆周上的闭而非恰当形式](ref:DT-P10)、[P11：积分与上链微分相容](ref:DT-P11)、[P12：实线和圆周的基本上同调](ref:DT-P12)。计算 $H^1(S^1)$ 时，既要找出非零类，也要证明其只有一维。

## 里程碑与验收

| 阶段 | 需要交付的理解 | 验收标准 |
|---|---|---|
| M1 · 局部代数 | 余切空间是一阶商 | 独立解释 Hadamard、张成与线性无关 |
| M2 · 向量丛 | 切丛、余切丛、光滑截面 | 写出局部平凡化与过渡函数 |
| M3 · 形式 | 外幂、外积和拉回 | 完成拉回与外积计算 |
| M4 · 外微分 | 上链复形与 CDGA | 证明一般形式的平方为零及自然性 |
| M5 · 定向 | 最高次形式与边界符号 | 正确判断区间、圆盘和球面 |
| M6 · Stokes | 局部证明到全局公式 | 核对紧支撑、单位分解与外向优先 |
| M7 · 上同调 | 积分映射与比较定理 | 算出圆周两组上同调并说明比较所需步骤 |

路线的阅读进度沿用知识卡的已读标记；练习掌握情况在[配套题组](ref:DT-P-010)中自评。

## 教材与延伸

- Cornell Math 6520：函数芽、导子、丛与微分形式，可参考 [2016 年课堂笔记](https://pi.math.cornell.edu/~dmehrle/notes/cornell/16fa/6520notes.pdf)。
- Loring W. Tu，*An Introduction to Manifolds*：丛、形式、定向、积分与 Stokes。
- Bott–Tu，*Differential Forms in Algebraic Topology*，Chapter I：de Rham、Poincaré 引理与 Mayer–Vietoris。
- 可补充阅读 Lorenzo Sadun 的 [Notes on Differential Forms](https://arxiv.org/abs/1604.07862)，其中的定向、积分和局部到整体思路可用于核对本专题。

可选方向：通过已有[辛流形定义](ref:SPG-DEF-011)理解 $\omega^m/m!$ 给出的定向；进一步研究 $w_1(TM)$ 与可定向性；比较光滑 $C^\infty$-微分与普通 Kähler 微分时补全各自条件；从 CDGA 进入 quasi-isomorphism。上述延伸不计入主线验收。

建议先做[局部代数的三个检查点](ref:DT-P-010)，再沿 M2–M7 推进。
