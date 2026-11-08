---
id: dt.week7-exterior-bundle
title: "把余切空间的外幂拼成流形"
english: "Gluing the exterior powers of the cotangent spaces"
summary: "Week 7，第 7.5 题。"
targets: ["dt.exterior-powers"]
tags: ["微分拓扑","课程作业"]
difficulty: 进阶
minutes: 15
order: 10
---
:::problem
证明 $\coprod_{p\in M}\bigwedge^kT_p^*M$ 有自然的光滑向量丛结构。
:::

:::solution
在坐标域中，按递增下标的 $dx^{i_1}\wedge\cdots\wedge dx^{i_k}$ 给出每个纤维的基。用这些系数和底坐标构造局部平凡化。重叠处，系数通过换基矩阵的 $k$ 阶子式线性变化。这些子式光滑，且外幂保持复合，因此满足过渡函数的粘合条件。$k>n$ 时为零向量丛。
:::

**出处**　Week 7，第 7.5 题。[W7DiffTop2026.pdf](https://chatgpt.com/library?file_id=libfile_90d38310d02481919a3c01bbc4ab2245&account_id=personal)
