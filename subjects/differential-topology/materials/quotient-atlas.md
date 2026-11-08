---
id: dt.quotient-atlas
type: def
title: "商拓扑与射影图册"
english: "Quotient topology and projective atlases"
summary: "复习商拓扑与射影图册的核心结论与使用方法。"
requires: ["dt.smooth-manifold"]
tags: ["微分拓扑","课程复习"]
minutes: 8
order: 12
---
:::statement
满射 $q:X\to Y$ 给出的商拓扑满足 $U\subseteq Y$ 开当且仅当 $q^{-1}(U)$ 开。群作用若由同胚给出，轨道投影是开映射，因为开集的饱和是所有平移的并。图册相容要求每对重叠坐标间的转换为微分同胚。
:::

:::example
在 $\mathbb{RP}^n$ 中，令 $U_i=\{[x]:x_i\ne0\}$，坐标为 $(x_j/x_i)_{j\ne i}$。逆映射在第 $i$ 位补 $1$ 再取射影类。重叠处由非零坐标作分母，所以过渡函数光滑。
:::

**出处**　Differential_Topology_Week3.md，第 3.0–3.8 题；Week 5。[Differential_Topology_Week3.md](https://chatgpt.com/library?file_id=libfile_d7ce3fb845e88191844ba219bd439f62&account_id=personal) · [W5DiffTop2026.pdf](https://chatgpt.com/library?file_id=libfile_543abdb837cc81919834ea8909cc7c61&account_id=personal)
