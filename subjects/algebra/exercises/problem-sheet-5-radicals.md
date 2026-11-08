---
id: alg.ps5-radicals
title: 根理想的运算与素理想交
english: Radical identities and prime intersections
summary: 用幂和素理想的性质证明根理想的运算公式。
targets: [alg.radical-ideal, alg.radical-prime-intersection]
tags: [课程作业, 证明, 交换代数]
difficulty: 进阶
minutes: 25
order: 2
---
:::problem
设 $I,J,I_\lambda$ 是带单位元的交换环 $A$ 中的理想。

1. 证明 $\sqrt{I+J}=\sqrt{\sqrt I+\sqrt J}$，以及 $\sqrt{\sqrt I}=\sqrt I$。
2. 证明 $\sqrt{\bigcap_\lambda I_\lambda}\subseteq\bigcap_\lambda\sqrt{I_\lambda}$，并说明有限族时为什么取等号。
3. 若每个 $\mathfrak p_\lambda$ 都是素理想，证明 $\bigcap_\lambda\mathfrak p_\lambda$ 是根理想。
4. 证明 $\sqrt I$ 是所有包含 $I$ 的素理想之交。
:::

:::hint
比较有限交与无限交时，想想能否对所有理想选取同一个指数。第 4 问从一个 $a\notin\sqrt I$ 出发，构造避开 $a$ 的素理想。
:::

:::solution
1. 若 $a^n\in\sqrt I$，再取一次幂可得 $a^{nm}\in I$，所以根运算幂等。由 $I+J\subseteq\sqrt I+\sqrt J$ 得到一个方向。另一方面，$\sqrt I$ 与 $\sqrt J$ 都包含在 $\sqrt{I+J}$ 中。对 $\sqrt I+\sqrt J\subseteq\sqrt{I+J}$ 两边取根，再用幂等性即可。
2. 左侧成员的某个幂同时属于每个 $I_\lambda$，所以属于右侧。有限族时可取各指数的最大值作为共同指数。无限族可能严格包含，例如 $\Z$ 中的 $(2^n)$（$n\ge1$）。原理想的交为 $(0)$，各根理想的交为 $(2)$。
3. 素理想都是根理想。若元素的某个幂属于交，则该幂属于每个素理想，由素性知元素本身也属于交。
4. 见[根理想的素理想交表示](ref:alg.radical-prime-intersection)的两个包含方向。
:::

改编自 Advanced Algebra, Fall 2026，Problem Sheet 5，第 1 题。第 2 问补充了有限族和严格包含的讨论。
