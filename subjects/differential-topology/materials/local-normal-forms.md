---
id: dt.local-normal-forms
type: thm
title: "浸入、浸没与局部标准形"
english: "Immersions, submersions and normal forms"
summary: "复习浸入、浸没与局部标准形的核心结论与使用方法。"
requires: ["dt.tangent-space"]
tags: ["微分拓扑","课程复习"]
minutes: 8
order: 16
---
:::statement
$F:M^m\to N^n$ 在 $p$ 处若微分单射，局部可写成 $x\mapsto(x,0)$；若微分满射，局部可写成 $(x,y)\mapsto x$。若邻域内秩恒为 $r$，则局部形式为 $(x,y)\mapsto(x,0)$，其中 $x\in\R^r$。
:::

:::intuition
在题目中先写坐标表达式 $\psi\circ F\circ\varphi^{-1}$ 的 Jacobian，再检查秩。标准形把局部右逆变成 $x\mapsto(x,0)$，把局部左逆变成坐标投影。浸没是开映射也来自投影的开性。
:::

**出处**　PSet 2 Part 2，第 4、6、7 题。[PSet2-2.pdf](https://chatgpt.com/library?file_id=libfile_8397bf8d5840819184daa96e519bb2a5&account_id=personal)
