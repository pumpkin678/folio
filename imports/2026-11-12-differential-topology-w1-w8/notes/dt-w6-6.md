# 同一个坐标函数，不同坐标方向

ID: `dt-w6-6` · Week 6 · exercise

题目：给两张全局坐标图使 $x_a=x_b$，但 $\partial_{x_a}\ne\partial_{x_b}$。

解答：取 $\varphi_a(x,y)=(x,y)$、$\varphi_b(x,y)=(x,y+x)$。第二张逆为 $(u,v)\mapsto(u,v-u)$，是全局微分同胚。两图的第一坐标均为 $x$。保持 $y_a$ 不变而变化 $x_a$ 得 $\partial_{x_a}=\partial_x$；保持 $y_b=y+x$ 不变则 $dy/dx=-1$，得 $\partial_{x_b}=\partial_x-\partial_y$。例如它们作用于原函数 $y$ 的结果分别为 0 和 $-1$，确实不同。另一方面 $dx_a=dx_b=dx$，因为 differential 只由函数本身决定。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.6; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](dt-week-06.md) · [dt-curves-flow](dt-curves-flow.md) · [dt-ode](dt-ode.md) · [dt-incomplete](dt-incomplete.md)
