# 关系生成的等价关系

ID: `dt-w3-1` · Week 3 · exercise

题目勘误：链中的点应属于 $X$ 而非 $R\subset X\times X$；$R''$ 应为所有**包含 $R$**的等价关系之交；链须允许长度零，并检查最后一条边。以下证明这个标准修正版。

定义 $xR'y$ 当且仅当存在 $m\ge0$ 和 $z_0=x,\ldots,z_m=y$，相邻点满足 $(z_i,z_{i+1})\in R$ 或其逆属于 $R$。

步骤 1：长度零给自反性；反转链给对称性；拼接两条链给传递性。因此 $R'$ 是等价关系，长度一说明 $R\subset R'$。

步骤 2：若 $E$ 是任何包含 $R$ 的等价关系，其对称性使每条链边属于 $E$，传递性使两个端点属于 $E$，所以 $R'\subset E$。因此 $R'\subset R''$。

步骤 3：因为 $R'$ 本身是交中的一个成员，$R''\subset R'$，从而相等。原文若不要求包含 $R$，交会成为对角关系，一般不等于 $R'$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.1; W3DiffTop2026.pdf

## 关联

[dt-week-03](dt-week-03.md) · [dt-quotient](dt-quotient.md) · [dt-germs-cotangent](dt-germs-cotangent.md) · [dt-bump-locality](dt-bump-locality.md) · [dt-hadamard](dt-hadamard.md) · [dt-flat](dt-flat.md)
