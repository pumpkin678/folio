---
id: alg.radical-prime-intersection
type: thm
title: 根理想的素理想交表示
english: The radical as an intersection of prime ideals
summary: 用避开给定元素幂的素理想刻画根。
requires: [alg.radical-ideal]
tags: [交换代数, 素理想, Zorn 引理]
order: 6
minutes: 10
---
:::statement
设 $A$ 是带单位元的交换环，$I$ 是理想。则
$$\sqrt I=\bigcap_{\substack{\mathfrak p\in\operatorname{Spec}A\\I\subseteq\mathfrak p}}\mathfrak p.$$
其中 $\operatorname{Spec}A$ 由 $A$ 的所有素理想组成，空交约定为 $A$。
:::

:::proof
若 $a^n\in I\subseteq\mathfrak p$，素性推出 $a\in\mathfrak p$，得到一个包含方向。

反过来，设 $a\notin\sqrt I$。令 $S=\{1,a,a^2,\ldots\}$。由 Zorn 引理，存在包含 $I$ 且与 $S$ 不交的极大理想（这里的极大性针对这族理想）。确实，任一非空链的并仍是包含 $I$ 且与 $S$ 不交的理想。记所取理想为 $\mathfrak p$。若 $u,v\notin\mathfrak p$，则 $\mathfrak p+(u)$ 和 $\mathfrak p+(v)$ 都与 $S$ 相交。分别取 $a^m\in\mathfrak p+(u)$ 和 $a^n\in\mathfrak p+(v)$。若 $uv\in\mathfrak p$，将两式相乘会得到 $a^{m+n}\in\mathfrak p$，矛盾。因此 $\mathfrak p$ 是素理想，且 $a\notin\mathfrak p$，得到另一包含方向。
:::
