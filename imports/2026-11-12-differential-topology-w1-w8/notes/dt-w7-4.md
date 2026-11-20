# 用 top wedge 定义 determinant

ID: `dt-w7-4` · Week 7 · exercise

题目：定义 $\det f$ 并证明乘法性。

补上有限维假设 $\dim V=n<\infty$；一般无限维线性算子不存在这里的普通行列式。

步骤 1：$\Lambda^nV$ 一维，故其自同态 $\Lambda^nf$ 必为唯一标量乘法，定义该标量为 $\det f$。这一定义不依赖生成元：替换 $\omega$ 为 $c\omega$（$c\ne0$）不会改变标量。

步骤 2：由 7.3，$\Lambda^n(gf)=\Lambda^ng\circ\Lambda^nf$。作用于非零 $\omega$，左侧为 $\det(gf)\omega$，右侧为 $(\det g)(\det f)\omega$，故乘法性成立。$n=0$ 时定义给 $\det f=1$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.4; W7DiffTop2026.pdf

## 关联

[dt-week-07](dt-week-07.md) · [dt-exterior](dt-exterior.md) · [dt-exterior-basis](dt-exterior-basis.md) · [dt-forms](dt-forms.md) · [dt-wedge-example](dt-wedge-example.md)
