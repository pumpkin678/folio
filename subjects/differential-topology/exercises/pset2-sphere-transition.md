---
id: dt.pset2-sphere-transition
title: "球极投影的过渡映射与 Jacobian"
english: "Jacobian of stereographic transition"
summary: "PSet 2 Part 2 讨论 · 球极投影与微分计算。"
targets: ["dt.quotient-atlas","dt.tangent-space"]
tags: ["微分拓扑","课程作业"]
difficulty: 进阶
minutes: 15
order: 13
---
:::problem
在球极投影的重叠坐标中，过渡映射为 $T(x)=x/\|x\|^2$。求 $DT_x$，解释为何球面上的点具有单位长度仍不会让该 Jacobian 等于恒等矩阵。
:::

:::solution
用乘积与链式法则，$DT_x=\|x\|^{-2}I-2\|x\|^{-4}xx^{\mathsf T}$。这里 $x$ 是欧氏坐标中的向量，可以有任意非零长度。即使 $\|x\|=1$，导数在径向仍有特征值 $-1$，切向为 $1$。
:::

**出处**　PSet 2 Part 2 讨论 · 球极投影与微分计算。[PSet2-2.pdf](https://chatgpt.com/library?file_id=libfile_8397bf8d5840819184daa96e519bb2a5&account_id=personal)
