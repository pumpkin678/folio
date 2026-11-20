# 指数平坦函数在零点的导数

ID: `dt-w3-9` · Week 3 · exercise

题目：$\chi(t)=\omega(t)e^{-1/t}$（$t>0$），$t\le0$ 时为零，其中 $\omega$ 为 $t^{-1}$ 的多项式；证明零点导数及两侧导数极限相等。

步骤 1：对任意整数 $m\ge0$，令 $s=1/t$，由 $e^s\ge s^{m+1}/(m+1)!$ 得 $s^me^{-s}\le(m+1)!/s\to0$。故 $t^{-m}e^{-1/t}\to0$。

步骤 2：正侧差商 $\chi(t)/t$ 是有限个 $t^{-m}e^{-1/t}$ 的线性组合，极限为零；负侧差商恒为零。因此 $\chi'(0)=0$。

步骤 3：对 $t>0$，$\chi'(t)=(\omega'(t)+t^{-2}\omega(t))e^{-1/t}$，系数仍为 $t^{-1}$ 的多项式，极限为零。负侧导数为零，所以三者相等。同一论证归纳给出所有阶导数存在、连续并在零点为零。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.9; W3DiffTop2026.pdf

## 关联

[dt-week-03](dt-week-03.md) · [dt-quotient](dt-quotient.md) · [dt-germs-cotangent](dt-germs-cotangent.md) · [dt-bump-locality](dt-bump-locality.md) · [dt-hadamard](dt-hadamard.md) · [dt-flat](dt-flat.md)
