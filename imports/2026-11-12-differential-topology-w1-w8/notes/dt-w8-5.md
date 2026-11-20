# Flow pullback 的导数等于 Lie derivative

ID: `dt-w8-5` · Week 8 · exercise

题目：对 $p$-形式证明 $\left.\frac d{dt}\right|_0F_t^*\omega=L_X\omega$。

步骤 1：固定 $m$，取坐标包含 $m$ 及小时间轨迹。对任意向量场 $Y$，由 flow 方程有
$$F_t^i(m)=m^i+tX^i(m)+O(t^2),\qquad (dF_t)_mY_m=Y^i(m)\partial_i|_{F_t(m)}+t\,\partial_jX^i(m)Y^j(m)\partial_i|_{F_t(m)}+O(t^2).$$
另一方面 $Y^i(F_t(m))=Y^i(m)+tX^j\partial_jY^i(m)+O(t^2)$。所以在该坐标平凡化中
$$\left.\frac d{dt}\right|_0\big((dF_t)_mY_m-Y_{F_t(m)}\big)=-[X,Y]_m.$$

步骤 2：定义标量函数 $g=\omega(Y_1,\ldots,Y_p)$。由拉回定义，
$$ (F_t^*\omega)_m(Y_1(m),\ldots,Y_p(m))=\omega_{F_t(m)}((dF_t)_mY_1(m),\ldots,(dF_t)_mY_p(m)).$$
把每个参数写成 $Y_j(F_t(m))$ 加上一阶差，利用多线性求导得
$$Xg(m)-\sum_j\omega_m(Y_1(m),\ldots,[X,Y_j]_m,\ldots,Y_p(m)),$$
即 $L_X\omega$ 的定义。两个或更多差因子的乘积是 $O(t^2)$，求一阶导数不贡献。

步骤 3：$m$ 任意，所以形式相等。局部 flow 只需在每个 $m$ 附近的小时间定义；不能假定不完备向量场的 $F_t$ 对所有时间全局存在。$p=0$ 时公式就是 $(f\circ F_t)'|_0=Xf$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.5; W8DiffTop2026.pdf

## 关联

[dt-week-08](dt-week-08.md) · [dt-exterior-derivative](dt-exterior-derivative.md) · [dt-contraction-lie](dt-contraction-lie.md) · [dt-cartan-complex](dt-cartan-complex.md) · [dt-cartan-example](dt-cartan-example.md)
