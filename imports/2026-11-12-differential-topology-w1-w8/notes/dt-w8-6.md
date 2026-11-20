# Cartan formula 的逐类消去证明

ID: `dt-w8-6` · Week 8 · exercise

题目：定义 contraction 并证明 $L_X=di_X+i_Xd$。

定义：对 $p\ge1$，$(i_X\omega)(Y_1,\ldots,Y_{p-1})=\omega(X,Y_1,\ldots,Y_{p-1})$；$p=0$ 时 $i_X=0$。它显然 $A$-多线性且交替，故值在 $\Omega^{p-1}$。原题右侧参数数目应为 $p-1$。

步骤 1：对 $p\ge1$，把 $d(i_X\omega)$ 应用于 $Y_1,\ldots,Y_p$：
$$\sum_j(-1)^{j-1}Y_j\omega(X,Y_1,\widehat Y_j,\ldots,Y_p)+\sum_{j<k}(-1)^{j+k}\omega(X,[Y_j,Y_k],Y_1,\widehat Y_j,\widehat Y_k,\ldots,Y_p).$$

步骤 2：$i_Xd\omega(Y_1,\ldots,Y_p)=d\omega(X,Y_1,\ldots,Y_p)$ 的展开分四类：
$$X\omega(Y_1,\ldots,Y_p),$$
$$\sum_j(-1)^jY_j\omega(X,Y_1,\widehat Y_j,\ldots,Y_p),$$
$$\sum_j(-1)^j\omega([X,Y_j],Y_1,\widehat Y_j,\ldots,Y_p),$$
$$\sum_{j<k}(-1)^{j+k}\omega([Y_j,Y_k],X,Y_1,\widehat Y_j,\widehat Y_k,\ldots,Y_p).$$

步骤 3：第二类与步骤 1 的第一和抵消。第四类把 $X$ 与前面的括号交换一次，出现负号，与步骤 1 的第二和抵消。第三类把 $[X,Y_j]$ 从首槽移到第 $j$ 槽，产生 $(-1)^{j-1}$，乘上原符号 $(-1)^j$ 得 $-1$。因此剩下
$$X\omega(Y_1,\ldots,Y_p)-\sum_j\omega(Y_1,\ldots,[X,Y_j],\ldots,Y_p)=L_X\omega.$$

步骤 4：$p=0$ 时右侧 $di_Xf+i_Xdf=0+df(X)=Xf=L_Xf$。负次数空间按零处理。所以各次数均成立。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.6; W8DiffTop2026.pdf

## 关联

[dt-week-08](dt-week-08.md) · [dt-exterior-derivative](dt-exterior-derivative.md) · [dt-contraction-lie](dt-contraction-lie.md) · [dt-cartan-complex](dt-cartan-complex.md) · [dt-cartan-example](dt-cartan-example.md)
