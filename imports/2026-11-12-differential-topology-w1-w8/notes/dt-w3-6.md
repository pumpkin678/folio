# Maximal atlas 的构造

ID: `dt-w3-6` · Week 3 · exercise

题目：证明所有包含 atlas $A$ 的 atlas 之并 $\bar A$ 仍是 atlas。

步骤 1：它包含 $A$，故覆盖 $X$，每个成员本来就是图。

步骤 2：取 $\varphi\in B\supset A$ 与 $\psi\in C\supset A$，以及图域交点 $p$。在 $A$ 中取包含 $p$ 的图 $\theta$。在三图共同域，
$$\psi\circ\varphi^{-1}=(\psi\circ\theta^{-1})\circ(\theta\circ\varphi^{-1}).$$
两个因子分别由 $C,B$ 的相容性光滑。这样的局部域覆盖整个交叠域，光滑性是局部性质，故整个过渡光滑；逆方向同理。

步骤 3：所以 $\bar A$ 是 atlas，由 3.5 极大。它恰包含全部与 $A$ 相容的图。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.6; W3DiffTop2026.pdf

## 关联

[dt-week-03](dt-week-03.md) · [dt-quotient](dt-quotient.md) · [dt-germs-cotangent](dt-germs-cotangent.md) · [dt-bump-locality](dt-bump-locality.md) · [dt-hadamard](dt-hadamard.md) · [dt-flat](dt-flat.md)
