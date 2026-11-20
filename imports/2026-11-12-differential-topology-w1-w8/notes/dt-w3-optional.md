# 非 Hausdorff 空间上的延拓障碍

ID: `dt-w3-optional` · Week 3 · exercise

题目：对原题粘合直线空间 $X$，证明实线上的紧支撑、在某点附近为 1 的连续函数不能延拓。

粘合约定：将主直线的 $t<a$ 对应到 $\mathbb R_{ab}$ 的坐标 $t-a<0$，将 $t>b$ 对应到坐标 $t-b>0$。这是原文“identify”采用的自然平移识别。

步骤 1：若 $\xi:X\to\mathbb R$ 连续，$\eta=\xi|_{\mathbb R}$，在 $\mathbb R_{ab}$ 上连续性给出
$$\eta(a)=\lim_{t\uparrow a}\eta(t)=\xi(0_{ab})=\lim_{t\downarrow b}\eta(t)=\eta(b).$$
所以任意有理数 $a<b$ 的函数值相等。

步骤 2：所有有理点的值相同，由有理数稠密及 $\eta$ 连续，$\eta$ 在整条实线上常值。

步骤 3：紧支撑常值函数只能恒为零，与某邻域恒为 1 矛盾。因此无连续延拓。这个例子说明局部 bump 的全局零延拓需要支撑在整个空间中闭等条件，Hausdorff 假设保证上述紧支撑构造可用。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Optional Problem; W3DiffTop2026.pdf

## 关联

[dt-week-03](dt-week-03.md) · [dt-quotient](dt-quotient.md) · [dt-germs-cotangent](dt-germs-cotangent.md) · [dt-bump-locality](dt-bump-locality.md) · [dt-hadamard](dt-hadamard.md) · [dt-flat](dt-flat.md)
