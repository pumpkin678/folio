# Pullback、contraction 与 Lie derivative

ID: `dt-contraction-lie` · Week 8 · definition

光滑 $F:M\to N$ 对 $k$-形式的拉回为 $(F^*\omega)_p(v_1,\ldots,v_k)=\omega_{F(p)}(dF_pv_1,\ldots,dF_pv_k)$，其中 $p\in M$、$v_j\in T_pM$。

Contraction $i_X:\Omega^p\to\Omega^{p-1}$ 定义为首槽插入 $X$；对函数为零。Lie derivative 定义为 $L_X\omega=\left.\frac d{dt}\right|_0F_t^*\omega$，其中 $F_t$ 为 $X$ 的局部 flow。等价代数公式是 $X(\omega(Y_1,\ldots,Y_p))-\sum_j\omega(\ldots,[X,Y_j],\ldots)$，见 8.5。

## 来源

- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-08](dt-week-08.md) · [dt-w8-2](dt-w8-2.md) · [dt-w8-3](dt-w8-3.md) · [dt-w8-4](dt-w8-4.md) · [dt-w8-5](dt-w8-5.md) · [dt-w8-6](dt-w8-6.md)
