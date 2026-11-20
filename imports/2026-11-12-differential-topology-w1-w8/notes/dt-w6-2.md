# Smooth functional calculus

ID: `dt-w6-2` · Week 6 · exercise

题目：$f_i\in C^\infty(M)$、$\Phi:\mathbb R^n\to\mathbb R$ 光滑，证明 $\Phi(f_1,\ldots,f_n)$ 光滑。

解答：由 6.1，$F=(f_1,\ldots,f_n):M\to\mathbb R^n$ 光滑。$\Phi\circ F$ 为光滑映射复合，因此光滑。直接坐标验证为 $\Phi\circ(f_1\circ\varphi^{-1},\ldots,f_n\circ\varphi^{-1})$，由多变量链式法则光滑。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.2; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](dt-week-06.md) · [dt-curves-flow](dt-curves-flow.md) · [dt-ode](dt-ode.md) · [dt-incomplete](dt-incomplete.md)
