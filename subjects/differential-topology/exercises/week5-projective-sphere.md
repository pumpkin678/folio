---
id: dt.week5-projective-sphere
title: "用两张坐标卡比较球面和复射影直线"
english: "Comparing two atlases on the sphere and projective line"
summary: "Week 5，第 5.2 题。"
targets: ["dt.quotient-atlas","dt.smooth-map"]
tags: ["微分拓扑","课程作业"]
difficulty: 进阶
minutes: 15
order: 6
---
:::problem
构造 $S^2$ 与 $\mathbb{CP}^1$ 的两张坐标卡，并证明两套过渡函数匹配。
:::

:::solution
令 $(X,Y,Z)\in S^2$。在去北极的区域用 $z=(X+iY)/(1-Z)$，在去南极的区域用 $w=(X-iY)/(1+Z)$。在重叠处 $zw=1$。射影坐标 $z=z_1/z_0$ 与 $w=z_0/z_1$ 也满足 $zw=1$，所以按两张卡的相同坐标值定义的对应在重叠处一致，且在每张卡里是恒等映射。
:::

**出处**　Week 5，第 5.2 题。[W5DiffTop2026.pdf](https://chatgpt.com/library?file_id=libfile_543abdb837cc81919834ea8909cc7c61&account_id=personal)
