---
id: dt.week4-submersion-fiber
title: 从 Jacobian 满秩得到切片
english: A slice from a full-rank Jacobian
summary: 把逆函数定理直接用于浸没的纤维。
targets: [dt.local-normal-forms, dt.regular-value-theorem]
tags: [局部标准形, 逆函数定理]
difficulty: 进阶
order: 14
minutes: 15
---
:::problem
设 $f:\R^{n+k}\to\R^n$ 处处满秩。证明每个非空纤维局部可写成 $k$ 维坐标切片。
:::

:::solution
在 $p\in f^{-1}(y)$ 处重排源坐标 $(u,v)\in\R^k\times\R^n$，使关于 $v$ 的 $n$ 阶子矩阵可逆。令 $G(u,v)=(u,f(u,v)-y)$。其 Jacobian 是对角块可逆的块三角矩阵，故在 $p$ 附近是微分同胚。纤维恰被送到 $G$ 的像域与 $\R^k\times\{0\}$ 的交。
:::

**出处**　[Week 4，第 4.2 题](https://chatgpt.com/library?file_id=libfile_56e27947ae9c81918310d78a845ad8a3&account_id=personal)。按题给定的源、目标维数，纤维维数应为 $k$。
