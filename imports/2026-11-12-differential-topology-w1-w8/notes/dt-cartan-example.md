# 用一个可计算例子检查符号

ID: `dt-cartan-example` · Week 8 · example

在 $\mathbb R^2$ 取 $\omega=x\,dy$、$X=\partial_x$。$d\omega=dx\wedge dy$，$i_X\omega=0$，$i_Xd\omega=dy$，故 Cartan 给 $L_X\omega=dy$。

直接验证：flow 为 $F_t(x,y)=(x+t,y)$，所以 $F_t^*\omega=(x+t)dy$，在零时求导也是 $dy$。另外 $d(d\omega)=d(dx\wedge dy)=0$。这个例子可同时核对 pullback、contraction 的首槽位置以及 Lie derivative 的正负号。

## 来源

- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-08](dt-week-08.md) · [dt-w8-2](dt-w8-2.md) · [dt-w8-3](dt-w8-3.md) · [dt-w8-4](dt-w8-4.md) · [dt-w8-5](dt-w8-5.md) · [dt-w8-6](dt-w8-6.md)
