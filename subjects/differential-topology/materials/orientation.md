---
id: dt.orientation
type: def
title: "定向与图册的 Jacobian 符号"
english: "Orientation and transition Jacobians"
summary: "复习定向与图册的 Jacobian 符号的核心结论与使用方法。"
requires: ["dt.quotient-atlas","dt.exterior-powers"]
tags: ["微分拓扑","课程复习"]
minutes: 8
order: 18
---
:::statement
正维流形可定向，当且仅当存在一个图册，其所有非空重叠上的过渡 Jacobian 行列式为正。等价地，可以连续选择各切空间的定向。
:::

:::example
球面 $S^n$ 取 $\R^{n+1}$ 中的外法向定向。复流形的复线性坐标转换导数作为实映射的行列式为 $|\det_{\C} Dg|^2>0$，因此复图册诱导实定向。
:::

**出处**　PSet 2 Part 1，第 3 题。[PSet2-1.pdf](https://chatgpt.com/library?file_id=libfile_a0a3a7ab57a8819183736acc4e00253e&account_id=personal)
