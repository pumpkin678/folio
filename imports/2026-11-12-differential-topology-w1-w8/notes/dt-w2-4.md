# 圆周商 R/Z 的 atlas

ID: `dt-w2-4` · Week 2 · exercise

题目：在集合 $\mathbb R/\mathbb Z$ 上构造一维 atlas。

解答：设 $q:\mathbb R\to\mathbb R/\mathbb Z$。对每个 $a\in\mathbb R$ 取 $I_a=(a-1/3,a+1/3)$，其长度小于 1，故 $q|_{I_a}$ 单射。令 $U_a=q(I_a)$，$\varphi_a=(q|_{I_a})^{-1}:U_a\to I_a$。图域覆盖。交叠在 $a$ 坐标中为 $\bigcup_{k\in\mathbb Z}(I_a\cap(I_b+k))$，是开集；在每个这样的区间，过渡是 $t\mapsto t-k$，其中 $k$ 唯一。故过渡局部为平移，光滑且逆光滑。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.4; W2DiffTop2026.pdf

## 关联

[dt-week-02](dt-week-02.md) · [dt-atlas](dt-atlas.md) · [dt-compatibility](dt-compatibility.md) · [dt-atlas-topology](dt-atlas-topology.md) · [dt-exotic-coordinate](dt-exotic-coordinate.md) · [dt-projective](dt-projective.md)
