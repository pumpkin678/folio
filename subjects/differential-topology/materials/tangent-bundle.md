---
id: dt.tangent-bundle
type: def
title: "坐标标架、切丛与换基"
english: "Coordinate frames and the tangent bundle"
summary: "复习坐标标架、切丛与换基的核心结论与使用方法。"
requires: ["dt.tangent-space"]
tags: ["微分拓扑","课程复习"]
minutes: 8
order: 15
---
:::statement
切丛 $TM=\coprod_{p\in M}T_pM$。在坐标 $\varphi$ 中，用 $(\varphi(p),d\varphi_p(v))$ 表示 $(p,v)$。若坐标转换是 $g=\psi\circ\varphi^{-1}$，则切丛坐标转换为 $(x,v)\mapsto(g(x),Dg_xv)$。
:::

:::intuition
坐标函数 $x^i$ 决定 $dx^i$，而坐标向量 $\partial_{x^i}$ 由整套坐标的对偶关系决定。换掉其他坐标，即使保留 $x^i$，也可能改变 $\partial_{x^i}$。同一图册中的坐标向量场对易，因为它们对光滑函数作用为交换的偏导。
:::

**出处**　Week 6，第 6.5–6.7 题；PSet 2 Part 2，第 3 题。[W6DiffTop2026\(1\).pdf](https://chatgpt.com/library?file_id=libfile_23c7d824cae081918dbc9ad3c9755bd0&account_id=personal) · [PSet2-2.pdf](https://chatgpt.com/library?file_id=libfile_8397bf8d5840819184daa96e519bb2a5&account_id=personal)
