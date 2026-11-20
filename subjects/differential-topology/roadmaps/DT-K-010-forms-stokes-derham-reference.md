---
id: DT-K-010
title: 微分形式、Stokes 与 de Rham · 定义定理速查
english: "Shared definitions and theorems: forms, Stokes and de Rham"
summary: 按概念查阅同一组 17 份知识卡；已有定义和定理通过原 ID 引用，不再复制成新的材料。
purpose: review
level: 定义定理索引
track: 微分形式、Stokes 与 de Rham
order: 9
minutes: 45
tags: [微分形式, 定义速查, Stokes, de Rham]
related: [DT-RM-010, DT-P-010]
source_pack: 2026-11-20-dt-forms-stokes-derham
source_document: 01_Knowledge_Forms_Stokes_DeRham.md
source_note: 将原包知识汇编转换为引用索引；材料正文与主线共享，阅读状态也共享。
source_verified: false
---

:::goal
按主题回顾适用条件、构造和结论。需要串联时进入[学习主线](ref:DT-RM-010)，需要验证掌握时进入[证明与构造检查点](ref:DT-P-010)。
:::

## I · 光滑函数、局部代数与余切空间

原包 DT-D001–DT-D004 合并引用已有函数芽与点导子卡，坐标基证明复用已有 Hadamard 卡。

::material{id="dt-germs-cotangent"}

::material{id="dt-hadamard"}

## II · 向量丛与截面

DT-D005–DT-D006 的一般向量丛、余切丛补充进已有切丛材料；向量场与环导子的同构仍用原来的定理。

::material{id="dt-vector-fields"}

::material{id="dt-fields-derivations"}

## III · 外幂、形式、外积与拉回

DT-D007–DT-D008 分别引用已有外幂、形式与拉回材料。

::material{id="dt-exterior"}

::material{id="dt-forms"}

::material{id="dt-contraction-lie"}

## IV · 外微分、复形与上同调

DT-D009、DT-D013–DT-D014 复用原来的外微分与 Cartan/de Rham 卡；闭、恰当、CDGA 和核除以像只有这一处规范定义。

::material{id="dt-exterior-derivative"}

::material{id="dt-cartan-complex"}

## V · 定向与积分

::material{id="DT-D010"}

::material{id="DT-D011"}

::material{id="DT-D012"}

::material{id="DT-T001"}

## VI · 奇异上链与上同调比较

::material{id="DT-D015"}

::material{id="DT-T002"}

::material{id="DT-T003"}

::material{id="DT-T004"}

## 易混点

- 区分函数芽环中的极大理想与全局函数环中的消失理想；两者的比较需要局部性和 bump。
- 丛的不交并还需光滑局部平凡化；形式的点值与全局截面也要区分。
- 定向是最高次非零形式的正比例等价类；体积形式本身不唯一。
- 普通 de Rham 上同调的定义不依赖 Stokes，也不要求流形可定向。
- Stokes 给出积分上链映射，Poincaré 与局部到整体比较才完成 de Rham 定理。
