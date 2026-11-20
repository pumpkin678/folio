# Lie derivative 的 A-multilinearity

ID: `dt-w8-4` · Week 8 · exercise

题目：证明
$$L_X\omega(Y_1,\ldots,Y_p)=X\omega(Y_1,\ldots,Y_p)-\sum_j\omega(Y_1,\ldots,[X,Y_j],\ldots,Y_p)$$
对每个参数 $A$-线性。

步骤 1：先由导子 Leibniz 规则直接计算 $[X,aY]=X(a)Y+a[X,Y]$。

步骤 2：把第 $j$ 槽换成 $aY_j$。首项变为 $X(a)\omega(Y_1,\ldots,Y_p)+aX(\omega(Y_1,\ldots,Y_p))$。和式中第 $j$ 项是 $-X(a)\omega(Y_1,\ldots,Y_p)-a\omega(\ldots,[X,Y_j],\ldots)$；其他各项因 $\omega$ 的 $A$-多线性均可提出 $a$。

步骤 3：两项 $X(a)\omega$ 抵消，剩下恰为 $aL_X\omega(Y_1,\ldots,Y_p)$。加法性由各运算的实线性和括号加法性直接得到，因此每个槽均 $A$-线性。$p=0$ 时没有槽，$L_Xf=Xf$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.4; W8DiffTop2026.pdf

## 关联

[dt-week-08](dt-week-08.md) · [dt-exterior-derivative](dt-exterior-derivative.md) · [dt-contraction-lie](dt-contraction-lie.md) · [dt-cartan-complex](dt-cartan-complex.md) · [dt-cartan-example](dt-cartan-example.md)
