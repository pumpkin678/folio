---
id: alg.valuation-ring
type: def
title: "赋值环与复合赋值"
english: "Valuation rings and composite valuations"
summary: "复习赋值环与复合赋值的核心结论与使用方法。"
requires: []
tags: ["高等代数","课程复习"]
minutes: 8
order: 10
---
:::statement
子环 $V\subseteq K$ 为域 $K$ 的赋值环，若每个 $z\in K^\times$ 至少有 $z,z^{-1}$ 中的一个属于 $V$。对加法赋值 $v$，相应赋值环为 $\{0\}\cup\{z:v(z)\ge0\}$。一般值群可为任意全序阿贝尔群。
:::

:::example
在 $k(u)((t))$ 中，先取 $t$ 的最低指数，再取其首项系数在 $u=0$ 的阶，得到按字典序排列的 $\Z^2$ 值群。对应赋值环严格包含于只检测 $t$ 阶数的赋值环。
:::

**出处**　Advanced Algebra Sheet 3
