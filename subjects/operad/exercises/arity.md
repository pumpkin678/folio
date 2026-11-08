---
id: op.arity-exercise
title: 数一数复合后的输入
english: Counting inputs after composition
summary: 区分运算的元数与运算的次数，写出具体代入公式。
targets: [op.non-symmetric, op.endomorphism]
tags: [计算, 概念辨析]
difficulty: 基础
minutes: 8
order: 1
---
:::problem
设 $f\in\operatorname{End}_V(3)$，$g\in\operatorname{End}_V(2)$。把 $g$ 代入 $f$ 的第二个输入，结果有几个输入？写出它作用在向量上的公式。
:::

:::hint
原来的第二个输入被两个新输入替换，其他两个输入保持不变。
:::

:::solution
复合后的元数是 $3+2-1=4$，公式为 $(f\circ_2 g)(v_1,v_2,v_3,v_4)=f(v_1,g(v_2,v_3),v_4)$。
:::
