---
id: alg.nullstellensatz
type: thm
title: "Hilbert 零点定理"
english: "Hilbert's Nullstellensatz"
summary: "复习Hilbert 零点定理的核心结论与使用方法。"
requires: ["alg.affine-algebraic-set","alg.radical-prime-intersection"]
tags: ["高等代数","课程复习"]
minutes: 8
order: 13
---
:::statement
设 $k$ 为代数闭域，$A=k[x_1,\ldots,x_n]$。弱形式断言 $A$ 的每个真理想都有公共零点。强形式断言 $I(V(J))=\sqrt J$。
:::

:::proof
弱形式由 Zariski 引理推出：真理想包含于某个极大理想，极大理想的剩余域是有限生成 $k$-代数且为域，故是 $k$ 的有限代数扩张，只能等于 $k$。强形式使用 Rabinowitsch trick。若 $g$ 在 $V(J)$ 上恒为零，则 $(J,1-yg)$ 在多一个变量的环中无零点，故包含 $1$。对 $g\ne0$，代入 $y=g^{-1}$ 并清除分母，得到某个 $g^N\in J$。反向包含由在点上取值可见。
:::

**出处**　Advanced Algebra Sheets 4–5
