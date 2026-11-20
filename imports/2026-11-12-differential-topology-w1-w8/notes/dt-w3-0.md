# 两个拓扑的逐点细化

ID: `dt-w3-0` · Week 3 · exercise

题目：证明 $\mathbb R^2$ 的范数拓扑与乘积拓扑相同。

解答：先取欧氏范数。对球 $B_r(p)$ 中的 $q$，取 $\delta=(r-\|q-p\|)/\sqrt2$。矩形 $(q_1-\delta,q_1+\delta)\times(q_2-\delta,q_2+\delta)$ 包含 $q$ 且包含于球中，故球乘积开。对矩形 $(a,b)\times(c,d)$ 中的 $q$，取 $\varepsilon=\min(q_1-a,b-q_1,q_2-c,d-q_2)$，则 $B_\varepsilon(q)$ 包含于矩形。因此两类基元素均在另一拓扑中开，任意开集作为基元素之并也开。其他范数由有限维范数等价归结到欧氏范数，证明见 1.u1。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.0; W3DiffTop2026.pdf

## 关联

[dt-week-03](dt-week-03.md) · [dt-quotient](dt-quotient.md) · [dt-germs-cotangent](dt-germs-cotangent.md) · [dt-bump-locality](dt-bump-locality.md) · [dt-hadamard](dt-hadamard.md) · [dt-flat](dt-flat.md)
