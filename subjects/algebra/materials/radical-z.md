---
id: alg.radical-z
type: eg
title: 在整数环中求理想的根
english: Computing radicals in the integers
summary: 通过素因数分解计算根，并看出根理想可以不是素理想。
requires: [alg.radical-ideal]
tags: [交换代数, 具体计算]
order: 5
minutes: 5
---
:::example
在 $\Z$ 中，$\sqrt{(12)}=(6)$。若 $12\mid a^n$，则 $2$ 和 $3$ 都整除 $a$，因此 $6\mid a$。反过来，若 $6\mid a$，则 $36\mid a^2$，从而 $12\mid a^2$。
:::

:::remark
$(6)$ 是根理想，却不是素理想。$2\cdot3\in(6)$，但两个因子都不属于 $(6)$。这个例子也可以写成 $(6)=(2)\cap(3)$。
:::
