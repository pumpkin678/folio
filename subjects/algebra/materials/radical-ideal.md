---
id: alg.radical-ideal
type: def
title: 理想的根
english: Radical of an ideal
summary: 用元素的幂判断它何时属于理想的根。
tags: [交换代数, 理想, 幂零元]
order: 4
minutes: 6
---
:::statement
设 $A$ 是带单位元的交换环，$I\subseteq A$ 是理想。$I$ 的根定义为
$$\sqrt I=\{a\in A:\exists n\ge 1,\ a^n\in I\}.$$
若 $\sqrt I=I$，称 $I$ 为根理想（radical ideal）。
:::

:::proof
若 $a^m,b^n\in I$，则 $(a+b)^{m+n-1}$ 的每项都含有因子 $a^m$ 或 $b^n$，所以 $a+b\in\sqrt I$。对 $r\in A$，$(ra)^m=r^ma^m\in I$，从而 $\sqrt I$ 是理想。
:::

:::intuition
$a\in\sqrt I$ 等价于 $a+I$ 在商环 $A/I$ 中是幂零元。因此 $I$ 是根理想，当且仅当 $A/I$ 中唯一的幂零元是零。
:::
