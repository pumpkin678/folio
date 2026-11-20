# Exterior derivative 的符号约定

ID: `dt-exterior-derivative` · Week 8 · definition

对 $p$-形式采用
$$d\omega(X_1,\ldots,X_{p+1})=\sum_i(-1)^{i-1}X_i\omega(X_1,\widehat X_i,\ldots,X_{p+1})+\sum_{i<j}(-1)^{i+j}\omega([X_i,X_j],X_1,\widehat X_i,\widehat X_j,\ldots,X_{p+1}).$$
后面未删参数保持原顺序。特别地 $df(X)=Xf$，$d\alpha(X,Y)=X\alpha(Y)-Y\alpha(X)-\alpha([X,Y])$。

在流形坐标中，若 $\omega=\sum_Ia_I dx^I$，则 $d\omega=\sum_{j,I}\partial_ja_I dx^j\wedge dx^I$。与上式相等可在坐标向量场上检验：它们括号为零，二者都是张量，坐标基取值决定形式。上式的 $A$-多线性来自 $[X,aY]=X(a)Y+a[X,Y]$ 中的额外项与第一和的 Leibniz 项抵消。

## 来源

- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-08](dt-week-08.md) · [dt-w8-2](dt-w8-2.md) · [dt-w8-3](dt-w8-3.md) · [dt-w8-4](dt-w8-4.md) · [dt-w8-5](dt-w8-5.md) · [dt-w8-6](dt-w8-6.md)
