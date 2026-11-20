# Week 7 · 外幂、determinant 与形式丛

会用交替泛性质；证明外幂基；用 minors 写形式丛过渡。

# Exterior power 的严格泛性质

ID: `dt-exterior` · Week 7 · definition

对实向量空间 $V$，$\Lambda^pV$ 配备交替多线性映射 $V^p\to\Lambda^pV$，使每个交替多线性映射 $b:V^p\to W$ 唯一因子化为线性 $\bar b:\Lambda^pV\to W$。交替指重复参数时为零；在实数域上等价于交换两个参数变号。

可构造为 tensor power 对交替关系取商，或作为 $T(V)/\langle v\otimes v:v\in V\rangle$ 的 $p$ 次齐次部分。约定 $\Lambda^0V=\mathbb R$。只有 multilinear 而无 alternating 的泛性质对应 $V^{\otimes p}$，不是 $\Lambda^pV$。

## 来源

- 为 Week 7 roadmap 编写的配套知识卡；原课程文件 W7DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-07](../notes/dt-week-07.md) · [dt-w7-1](../notes/dt-w7-1.md) · [dt-w7-2](../notes/dt-w7-2.md) · [dt-w7-3](../notes/dt-w7-3.md) · [dt-w7-4](../notes/dt-w7-4.md) · [dt-w7-5](../notes/dt-w7-5.md)


---

# Differential form 与 wedge

ID: `dt-forms` · Week 7 · definition

$p$-形式是 $\Lambda^pT^*M$ 的光滑截面，记 $\Omega^p(M)$。等价地，它是向量场上的交替 $C^\infty(M)$-多线性函数，值在 $C^\infty(M)$。局部唯一写成 $\sum_{i_1<\cdots<i_p}a_I dx^{i_1}\wedge\cdots\wedge dx^{i_p}$。

等价性的局部理由：截面可逐点评价；反向由 $C^\infty$-多线性和 bump 得到局部性，用坐标向量场的取值确定光滑系数 $a_I$。点值只依赖各参数在该点的值，因为局部坐标分量在该点消失时，每项都乘上一个在该点为零的函数。

Wedge 用 shuffle convention：$(\alpha\wedge\beta)(v_1,\ldots,v_{p+q})=\sum_{\sigma\in\mathrm{Sh}(p,q)}\operatorname{sgn}(\sigma)\alpha(v_{\sigma1},\ldots,v_{\sigma p})\beta(v_{\sigma(p+1)},\ldots,v_{\sigma(p+q)})$。因此 $\alpha\wedge\beta=(-1)^{pq}\beta\wedge\alpha$。

## 来源

- 为 Week 7 roadmap 编写的配套知识卡；原课程文件 W7DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-07](../notes/dt-week-07.md) · [dt-w7-1](../notes/dt-w7-1.md) · [dt-w7-2](../notes/dt-w7-2.md) · [dt-w7-3](../notes/dt-w7-3.md) · [dt-w7-4](../notes/dt-w7-4.md) · [dt-w7-5](../notes/dt-w7-5.md)


---

# 外幂基、维数、determinant

ID: `dt-exterior-basis` · Week 7 · theorem

若 $e_1,\ldots,e_n$ 是基，递增指标的楔 $e_{i_1}\wedge\cdots\wedge e_{i_p}$ 是 $\Lambda^pV$ 的基，维数 $\binom np$。证明用多线性张成和 minor 泛函检测独立，见 7.1–7.2。

线性映射诱导 $\Lambda^pf$，保持复合与 identity。有限维 $V$ 上，$\Lambda^nf$ 在一维空间中作用的标量为 $\det f$，故 $\det(gf)=\det g\det f$，见 7.3–7.4。

## 来源

- 为 Week 7 roadmap 编写的配套知识卡；原课程文件 W7DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-07](../notes/dt-week-07.md) · [dt-w7-1](../notes/dt-w7-1.md) · [dt-w7-2](../notes/dt-w7-2.md) · [dt-w7-3](../notes/dt-w7-3.md) · [dt-w7-4](../notes/dt-w7-4.md) · [dt-w7-5](../notes/dt-w7-5.md)


---

# 外积不是普通乘积

ID: `dt-wedge-example` · Week 7 · example

在 $\mathbb R^3$，$\Lambda^2V$ 的基为 $e_1\wedge e_2,e_1\wedge e_3,e_2\wedge e_3$。计算
$$(e_1+2e_2)\wedge(e_2+e_3)=e_1\wedge e_2+e_1\wedge e_3+2e_2\wedge e_3.$$
因为 $e_2\wedge e_2=0$。对 $\mathbb R^2$ 的余切形式，$(dx\wedge dy)(a\partial_x+b\partial_y,c\partial_x+d\partial_y)=ad-bc$，即有向面积；这也说明顶外幂与 determinant 的联系。

## 来源

- 为 Week 7 roadmap 编写的配套知识卡；原课程文件 W7DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-07](../notes/dt-week-07.md) · [dt-w7-1](../notes/dt-w7-1.md) · [dt-w7-2](../notes/dt-w7-2.md) · [dt-w7-3](../notes/dt-w7-3.md) · [dt-w7-4](../notes/dt-w7-4.md) · [dt-w7-5](../notes/dt-w7-5.md)


---

# Top exterior power 一维

ID: `dt-w7-1` · Week 7 · exercise

题目：$\dim V=n$，证明 $\dim\Lambda^nV=1$。

步骤 1：选基 $e_1,\ldots,e_n$。展开任意 $n$ 重楔，每项有重复基向量即为零，无重复者为 $e_1\wedge\cdots\wedge e_n$ 的带符号排列。因此该元素生成 $\Lambda^nV$。

步骤 2：相对所选基的坐标行列式 $D(v_1,\ldots,v_n)$ 是交替多线性映射，泛性质给线性 $\bar D:\Lambda^nV\to\mathbb R$，满足 $\bar D(e_1\wedge\cdots\wedge e_n)=1$。故生成元不为零，维数为 1。$n=0$ 时约定 $\Lambda^0(0)=\mathbb R$，结论仍成立。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.1; W7DiffTop2026.pdf

## 关联

[dt-week-07](../notes/dt-week-07.md) · [dt-exterior](../notes/dt-exterior.md) · [dt-exterior-basis](../notes/dt-exterior-basis.md) · [dt-forms](../notes/dt-forms.md) · [dt-wedge-example](../notes/dt-wedge-example.md)


---

# Exterior power 的基

ID: `dt-w7-2` · Week 7 · exercise

题目：求 $\Lambda^pV$ 的一组基。

步骤 1：给 $V$ 的基 $e_1,\ldots,e_n$，取所有 $e_I=e_{i_1}\wedge\cdots\wedge e_{i_p}$，其中 $i_1<\cdots<i_p$。由多线性展开、重复因子为零、交换因子变号，所有纯楔都在其张成中；纯楔生成外幂，故它们张成。

步骤 2：对每个递增指标 $I$，令 $D_I(v_1,\ldots,v_p)=\det(e^{i_a}(v_b))_{a,b=1}^p$，其中 $e^i$ 为对偶基。它是交替多线性，下降为线性 $\bar D_I$，且 $\bar D_I(e_J)=\delta_{IJ}$。对线性关系逐一应用 $\bar D_I$，得到全部系数零，所以独立。

结论：维数 $\binom np$；$p>n$ 时无递增指标，空间为零；$p=0$ 时基为 $\{1\}$。原讲义泛性质须限定为 **alternating multilinear**，不能只说任意 multilinear；后者刻画 tensor power。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.2; W7DiffTop2026.pdf

## 关联

[dt-week-07](../notes/dt-week-07.md) · [dt-exterior](../notes/dt-exterior.md) · [dt-exterior-basis](../notes/dt-exterior-basis.md) · [dt-forms](../notes/dt-forms.md) · [dt-wedge-example](../notes/dt-wedge-example.md)


---

# Exterior power 的函子性

ID: `dt-w7-3` · Week 7 · exercise

题目：线性 $f:V\to W$ 诱导 $\Lambda^pf$，满足对纯楔逐因子作用。

解答：$(v_1,\ldots,v_p)\mapsto f(v_1)\wedge\cdots\wedge f(v_p)$ 是交替多线性，泛性质给唯一线性映射 $\Lambda^pf$，满足所求公式。若 $g:W\to Z$，则 $\Lambda^pg\circ\Lambda^pf$ 与 $\Lambda^p(gf)$ 在每个纯楔上相等，纯楔张成，故两映射相等。同理 $\Lambda^p\mathrm{id}=\mathrm{id}$。$p=0$ 时诱导映射是 $\mathbb R$ 的恒等映射。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.3; W7DiffTop2026.pdf

## 关联

[dt-week-07](../notes/dt-week-07.md) · [dt-exterior](../notes/dt-exterior.md) · [dt-exterior-basis](../notes/dt-exterior-basis.md) · [dt-forms](../notes/dt-forms.md) · [dt-wedge-example](../notes/dt-wedge-example.md)


---

# 用 top wedge 定义 determinant

ID: `dt-w7-4` · Week 7 · exercise

题目：定义 $\det f$ 并证明乘法性。

补上有限维假设 $\dim V=n<\infty$；一般无限维线性算子不存在这里的普通行列式。

步骤 1：$\Lambda^nV$ 一维，故其自同态 $\Lambda^nf$ 必为唯一标量乘法，定义该标量为 $\det f$。这一定义不依赖生成元：替换 $\omega$ 为 $c\omega$（$c\ne0$）不会改变标量。

步骤 2：由 7.3，$\Lambda^n(gf)=\Lambda^ng\circ\Lambda^nf$。作用于非零 $\omega$，左侧为 $\det(gf)\omega$，右侧为 $(\det g)(\det f)\omega$，故乘法性成立。$n=0$ 时定义给 $\det f=1$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.4; W7DiffTop2026.pdf

## 关联

[dt-week-07](../notes/dt-week-07.md) · [dt-exterior](../notes/dt-exterior.md) · [dt-exterior-basis](../notes/dt-exterior-basis.md) · [dt-forms](../notes/dt-forms.md) · [dt-wedge-example](../notes/dt-wedge-example.md)


---

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

[dt-week-07](../notes/dt-week-07.md) · [dt-exterior](../notes/dt-exterior.md) · [dt-exterior-basis](../notes/dt-exterior-basis.md) · [dt-forms](../notes/dt-forms.md) · [dt-wedge-example](../notes/dt-wedge-example.md)
