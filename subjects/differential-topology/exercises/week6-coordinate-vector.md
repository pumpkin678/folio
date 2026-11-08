---
id: dt.week6-coordinate-vector
title: "同一个坐标函数能对应不同向量场吗"
english: "One coordinate function, two coordinate vector fields"
summary: "Week 6，第 6.6 题。"
targets: ["dt.tangent-bundle"]
tags: ["微分拓扑","课程作业"]
difficulty: 进阶
minutes: 15
order: 8
---
:::problem
在 $\R^2$ 上找两套全局坐标 $(x_a,y_a),(x_b,y_b)$，使 $x_a=x_b$，但 $\partial_{x_a}\ne\partial_{x_b}$。
:::

:::solution
取 $(x_a,y_a)=(x,y)$、$(x_b,y_b)=(x,y+x)$。在第二套坐标中保持 $y_b$ 固定，改变 $x_b$ 时，原坐标中 $y=y_b-x_b$ 随之变化。因此 $\partial_{x_b}=\partial_x-\partial_y$，第一套中的 $\partial_{x_a}=\partial_x$。
:::

**出处**　Week 6，第 6.6 题。[W6DiffTop2026\(1\).pdf](https://chatgpt.com/library?file_id=libfile_23c7d824cae081918dbc9ad3c9755bd0&account_id=personal)
