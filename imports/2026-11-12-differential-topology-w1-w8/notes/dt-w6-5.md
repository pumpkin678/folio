# 坐标向量场的变换律

ID: `dt-w6-5` · Week 6 · exercise

题目：证明两张平面坐标图下 $\partial/\partial x_a$ 的 Jacobian 变换公式。

解答：对任意光滑函数 $h$，令 $H=h\circ\varphi_b^{-1}$、$(F^1,F^2)=\varphi_b\circ\varphi_a^{-1}$。链式法则给
$$\partial_{x_a}(h\circ\varphi_a^{-1})(\varphi_a(p))=\sum_{j=1}^2(\partial_jH)(\varphi_b(p))\,\partial_{x_a}F^j(\varphi_a(p)).$$
因此作为作用于任意 $h$ 的导子，
$$\left.\partial_{x_a}\right|_p=\partial_{x_a}F^1(\varphi_a(p))\left.\partial_{x_b}\right|_p+\partial_{x_a}F^2(\varphi_a(p))\left.\partial_{y_b}\right|_p.$$
系数随 $p$ 光滑，故是向量场恒等式。原式的系数必须在 $\varphi_a(p)$ 处求值，不能把坐标域函数直接当作 $M$ 上函数而省去拉回含义。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.5; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](dt-week-06.md) · [dt-curves-flow](dt-curves-flow.md) · [dt-ode](dt-ode.md) · [dt-incomplete](dt-incomplete.md)
