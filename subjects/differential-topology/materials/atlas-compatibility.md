---
id: dt.atlas-compatibility
type: def
title: 图册相容与微分同胚
english: Atlas compatibility and diffeomorphism
summary: 区分固定底空间上恒等映射的光滑性与任意微分同胚的存在。
requires: [dt.smooth-manifold, dt.smooth-map]
tags: [图册, 光滑结构]
order: 20
minutes: 7
---
:::statement
在同一拓扑空间上，两套光滑图册相容，若它们的并仍为光滑图册。等价地，恒等映射在两种光滑结构之间是微分同胚。只要求存在某个微分同胚是另一种比较。
:::

:::example
在 $\R$ 上取全局坐标 $x$ 和 $x^3$。过渡映射的一向为立方根，在原点不光滑，所以两套图册不相容。但从前者到后者的底集映射 $x\mapsto\sqrt[3]{x}$ 在两套坐标中的表达为恒等映射，因此是微分同胚。
:::

**出处**　[Week 2，第 2.8、2.10、2.11 题](https://chatgpt.com/library?file_id=libfile_c56033540e1c81919cea4c5d8a68cd87&account_id=personal)。
