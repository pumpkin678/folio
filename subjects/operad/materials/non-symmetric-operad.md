---
id: op.non-symmetric
type: def
title: 非对称 Operad
english: Non-symmetric operad
summary: 记录多输入运算，以及把若干运算代入另一个运算的方式。
tags: [Operad, 复合, 单位]
aliases: [nonsymmetric operad, nonsymmetric, 非对称操作子]
order: 1
minutes: 8
---
:::statement
这里讨论集合中的、只有正元数的非对称 operad。它由集合 $P(n)$（$n\ge1$）、单位 $1\in P(1)$ 和复合映射组成：

$$P(n)\times P(k_1)\times\cdots\times P(k_n)\longrightarrow P(k_1+\cdots+k_n).$$

复合满足结合律：树形代入的结果不依赖先复合哪一层；单位在任一输入位置代入都不改变运算，并且把任意运算代入单位也不改变它。
:::

:::intuition
$P(n)$ 中的元素是一个有 $n$ 个输入端口的操作。把别的操作接入这些端口，得到一个输入端口更多的新操作。
:::

:::remark
“非对称”表示这里没有额外指定对称群作用。带对称群作用的版本还需要相应的相容公理。零元运算也可纳入更一般的约定，但本入门材料不包含它们。
:::
