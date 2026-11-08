---
id: alg.spec-localization
type: def
title: "素谱、泛点与局部化"
english: "Prime spectrum, generic points and localization"
summary: "复习素谱、泛点与局部化的核心结论与使用方法。"
requires: ["alg.radical-prime-intersection"]
tags: ["高等代数","课程复习"]
minutes: 8
order: 14
---
:::statement
$\operatorname{Spec}A$ 的点是素理想，闭集为 $V(J)=\{\mathfrak p:J\subseteq\mathfrak p\}$。点 $\mathfrak p$ 的闭包是 $V(\mathfrak p)$，所以 $\mathfrak p$ 是该不可约闭集的泛点。$A_{\mathfrak p}$ 允许用 $A\setminus\mathfrak p$ 中的元素作分母，唯一极大理想是 $\mathfrak p A_{\mathfrak p}$。
:::

:::example
对代数闭域 $k$，$\operatorname{Spec}k[t]$ 包含对应于 $a\in k$ 的闭点 $(t-a)$，也包含闭包等于整个素谱的点 $(0)$。对任意 $f\in k[t]$，基本开集 $D(f)$ 对应于 $\operatorname{Spec}k[t,f^{-1}]$。
:::

**出处**　项目讨论 · 泛点、Spec、局部化
