# 每个切向量由全局曲线实现

ID: `dt-w6-3` · Week 6 · exercise

题目：按 $T_pM=(\mathfrak m_p/\mathfrak m_p^2)^*$ 定义，构造 $\gamma:\mathbb R\to M$ 光滑，$\gamma'(0)=v$。

步骤 1：选以 $p$ 为原点的坐标图。Hadamard lemma：在原点的星形小邻域，
$$f(x)-f(0)=\sum_i x_i g_i(x),\qquad g_i(x)=\int_0^1\partial_i f(tx)\,dt.$$
所以模平方理想 $[f-f(p)]=\sum_i\partial_i f(p)[x_i]$。全局函数与局部函数的芽可用 bump 延拓比较：若函数在 $p$ 附近零，取 $\chi=1$ 于更小邻域且支撑在该邻域，则 $f=(1-\chi)f\in\mathfrak m_p^2$。因此此局部计算也适用于题目的全局理想。

步骤 2：$[x_i]$ 线性独立，因为坐标偏导消灭平方理想，对这些类取值为 $\delta_{ij}$；所以它们为余切基。置 $a_i=v([x_i])$，则 $v(f)=\sum_i a_i\partial_i f(p)$。

步骤 3：取 $r>0$ 使 $B_r(0)$ 在图像中。选 $\delta>0$ 使 $\delta\|a\|<r$，取光滑 $\chi:\mathbb R\to[0,1]$，零附近为 1、在 $|t|\ge\delta$ 为零。定义
$$\gamma(t)=\varphi^{-1}(t\chi(t)a).$$
其参数始终在图像内，因此在全实轴光滑；零附近是直线，故对任意 $f$，$(f\circ\gamma)'(0)=\sum a_i\partial_i(f\circ\varphi^{-1})(0)=v(f)$。这证明所需等式，不能只构造小区间曲线而不延拓。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.3; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](dt-week-06.md) · [dt-curves-flow](dt-curves-flow.md) · [dt-ode](dt-ode.md) · [dt-incomplete](dt-incomplete.md)
