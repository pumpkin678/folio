---
id: dt.grassmannian-charts
type: eg
title: "Grassmann 流形的图坐标"
english: "Graph charts on the Grassmannian"
summary: "复习Grassmann 流形的图坐标的核心结论与使用方法。"
requires: ["dt.quotient-atlas","dt.exterior-powers"]
tags: ["微分拓扑","课程复习"]
minutes: 8
order: 19
---
:::example
取 $\R^n=E\oplus F$，$\dim E=k$。投影到 $E$ 为同构的 $k$ 平面，唯一写成某个线性映射 $A:E\to F$ 的图像，所以这部分用 $\operatorname{Hom}(E,F)$ 作坐标。换分解时，若基变换按块写成 $(a,b;c,d)$，则新图坐标为 $(c+dA)(a+bA)^{-1}$，定义在 $a+bA$ 可逆处。
:::

:::remark
Plücker 映射把平面的一组基 $v_1,\ldots,v_k$ 送到 $[v_1\wedge\cdots\wedge v_k]$。换基只乘以一个非零行列式。图坐标是选定非零主坐标后，通过只替换一个指标的 Plücker 坐标比读出的。
:::

**出处**　Week 5 · Stiefel/Grassmann 构造与 Plücker 映射。[W5DiffTop2026.pdf](https://chatgpt.com/library?file_id=libfile_543abdb837cc81919834ea8909cc7c61&account_id=personal)
