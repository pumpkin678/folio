---
id: dt.pset2-tangent-bundle
title: "切丛坐标与圆的切丛"
english: "Tangent bundle charts and the tangent bundle of the circle"
summary: "PSet 2 Part 2，第 3(a)、3(c)、3(d) 题。"
targets: ["dt.tangent-bundle","dt.local-normal-forms"]
tags: ["微分拓扑","课程作业"]
difficulty: 进阶
minutes: 15
order: 11
---
:::problem
写出切丛的坐标转换，证明投影 $TM\to M$ 是浸没，并给出 $TS^1$ 的全局平凡化。
:::

:::solution
链式法则给出 $(x,v)\mapsto(g(x),Dg_xv)$。在这些坐标中，投影是 $(x,v)\mapsto x$，故其微分满射。对 $p=(x,y)\in S^1$，向量 $(-y,x)$ 是光滑单位切向量，映射 $(p,a)\mapsto(p,a(-y,x))$ 给出平凡化，逆映射用该切向量取内积。
:::

**出处**　PSet 2 Part 2，第 3(a)、3(c)、3(d) 题。[PSet2-2.pdf](https://chatgpt.com/library?file_id=libfile_8397bf8d5840819184daa96e519bb2a5&account_id=personal)
