---
id: alg.affine-algebraic-set
type: def
title: "代数集、坐标环与不可约性"
english: "Algebraic sets, coordinate rings and irreducibility"
summary: "复习代数集、坐标环与不可约性的核心结论与使用方法。"
requires: ["alg.radical-ideal"]
tags: ["高等代数","课程复习"]
minutes: 8
order: 12
---
:::statement
在代数闭域 $k$ 上，$V(S)$ 是多项式族 $S$ 的公共零点集。$I(X)$ 由在 $X$ 上恒为零的多项式组成。仿射代数集 $X$ 的坐标环为 $k[X]=k[x_1,\ldots,x_n]/I(X)$，元素是限制到 $X$ 的多项式函数。非空 $X$ 不可约当且仅当 $I(X)$ 是素理想。
:::

:::proof
若 $fg$ 在 $X$ 上消失，则 $X=(X\cap V(f))\cup(X\cap V(g))$。由不可约性，至少一个因子在整个 $X$ 消失。反过来，若 $X$ 是两个真闭子集之并，可分别选取一个只在对应子集上恒为零的多项式，二者乘积在整个 $X$ 上消失，违背素性。
:::

:::example
双曲线 $xy=1$ 的坐标环是 $k[x,x^{-1}]$。点 $(a,a^{-1})$ 的极大理想由 $x-a$ 生成，而在环境环中相应点理想为 $(x-a,y-a^{-1})$。
:::

**出处**　Advanced Algebra Sheets 4–5；项目讨论 · Zariski 拓扑与坐标环
