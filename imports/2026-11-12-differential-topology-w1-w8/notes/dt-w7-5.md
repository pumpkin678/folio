# Exterior cotangent bundle 的流形结构

ID: `dt-w7-5` · Week 7 · exercise

题目：为 $E=\coprod_{p\in M}\Lambda^kT_p^*M$ 构造光滑流形结构。

步骤 1：设 $\dim M=n$、$r=\binom nk$（$k>n$ 时 $r=0$）。在图 $(U,x)$ 上，每个纤维元唯一写为 $\omega_p=\sum_I a_I dx^{i_1}|_p\wedge\cdots\wedge dx^{i_k}|_p$。定义 $\Phi_x(\omega_p)=(x(p),(a_I))\in x(U)\times\mathbb R^r$，双射。

步骤 2：在另一图 $y$ 中，$dx^i=\sum_j(\partial x^i/\partial y^j)dy^j$，楔展开给
$$b_J=\sum_I a_I\det\left(\frac{\partial x^{i_a}}{\partial y^{j_b}}\right)_{a,b=1}^k.$$
故过渡 $(x,a)\mapsto(y(x),C(x)a)$，$C(x)$ 的元素为光滑 Jacobian minors。反向坐标同理，矩阵互逆，过渡是微分同胚。

步骤 3：由 atlas 生成拓扑的构造得到局部欧氏空间。投影 $\pi:E\to M$ 在图中是 $(x,a)\mapsto x$，连续。两点底点不同可用基空间的不交邻域原像分离；底点相同则同在一个平凡化域，在欧氏图中用不交开集分离，所以 Hausdorff。

步骤 4：第二可数流形有可数图覆盖（第二可数推出 Lindelöf）；每个平凡化域有可数欧氏基，其可数并是 $E$ 的可数基。因此 $E$ 是维数 $n+r$ 的流形。$k=0$ 时是 $M\times\mathbb R$；$k>n$ 时为零丛，总空间同胚且微分同胚于 $M$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.5; W7DiffTop2026.pdf

## 关联

[dt-week-07](dt-week-07.md) · [dt-exterior](dt-exterior.md) · [dt-exterior-basis](dt-exterior-basis.md) · [dt-forms](dt-forms.md) · [dt-wedge-example](dt-wedge-example.md)
