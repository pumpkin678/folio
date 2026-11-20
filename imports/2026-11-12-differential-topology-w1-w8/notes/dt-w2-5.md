# 实射影空间的 atlas

ID: `dt-w2-5` · Week 2 · exercise

题目：为 $\mathbb R^{n+1}$ 中过原点的直线集合构造 $n$ 维 atlas。

解答：令 $U_i$ 为第 $i$ 坐标非零的直线。对非零代表 $x$ 定义 $\varphi_i([x])=(x_j/x_i)_{j\ne i}$。缩放不改变比值，所以良定义；逆映射把 $u\in\mathbb R^n$ 送到第 $i$ 坐标为 1、其余为 $u$ 的向量所张成的直线，因此是双射。图域覆盖。在 $i$ 图里写 $u_i=1$，与 $j$ 图的交集是 $u_j\ne0$，过渡的第 $\ell\ne j$ 个分量为 $u_\ell/u_j$。它们及其反向公式均为分母不为零的有理函数，所以光滑。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.5; W2DiffTop2026.pdf

## 关联

[dt-week-02](dt-week-02.md) · [dt-atlas](dt-atlas.md) · [dt-compatibility](dt-compatibility.md) · [dt-atlas-topology](dt-atlas-topology.md) · [dt-exotic-coordinate](dt-exotic-coordinate.md) · [dt-projective](dt-projective.md)
