---
id: DT-T004
type: thm
title: de Rham 定理
english: de Rham theorem
summary: 积分诱导 de Rham 上同调与实系数奇异上同调之间的自然同构。
requires: [DT-T002, DT-T003]
related: [dt-cartan-complex, DT-D015, DT-RM-010, DT-K-010]
tags: [de Rham 定理, 奇异上同调, 局部到整体]
aliases: [de Rham isomorphism, quasi-isomorphism, de Rham 上同调比较]
track: 微分形式、Stokes 与 de Rham
order: 908
minutes: 7
source_pack: 2026-11-20-dt-forms-stokes-derham
source_document: 01_Knowledge_Forms_Stokes_DeRham.md#DT-T004
source_note: 用户提供的 DT-T004；保留证明路线，未将提纲标作完整证明。
source_verified: false
---

:::statement
对 Hausdorff、第二可数的光滑流形 $M$，积分上链映射经光滑奇异链与通常奇异链的比较，诱导每一次数的自然同构
$$
I_*:H^k_{\mathrm{dR}}(M)\overset{\cong}{\longrightarrow}H^k_{\mathrm{sing}}(M;\mathbb R).
$$
此处是普通 de Rham 上同调与实系数奇异上同调的比较，不要求 $M$ 紧致或可定向；不应与紧支撑上同调混淆。对光滑映射，积分的换元/拉回关系给出该同构的自然性。
:::

:::remark
**证明路线（提纲）。** [Stokes](ref:DT-T001) 先给出 [上链映射](ref:DT-T002)。[Poincaré 引理](ref:DT-T003) 说明小坐标邻域中正次数 de Rham 上同调消失；再用 Mayer–Vietoris、局部到整体的比较，或常值层的分解证明全局同构。还需将光滑奇异上同调与通常奇异上同调比较，不能直接忽略这个步骤。一般流形不一定有有限好覆盖，有限覆盖归纳不是未经补充的完整一般性证明。

仅从 $I\circ d=\delta\circ I$ 不能推出 $I_*$ 为同构；这正是该定理较“积分是上链映射”更强的部分。
:::
