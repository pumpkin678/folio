# Week 6 · 切向量、坐标方向与 flow

能从代数切向量造曲线；从局部 ODE 推出紧流形完备；正确变换坐标场。

# Integral curve、maximal flow、complete

ID: `dt-curves-flow` · Week 6 · definition

$X$ 的积分曲线是光滑 $\gamma:I\to M$（$I$ 为开区间），满足 $\gamma'(t)=X_{\gamma(t)}$。$\gamma'(t)(f)=\frac d{dt}(f\circ\gamma)(t)$。同初值的最大积分曲线是不能再延拓到更大区间的解。

最大 flow 的域 $\mathcal D\subset\mathbb R\times M$ 开，每个纤维 $\mathcal D_p=I_p$ 是含零的最大存在区间，$F(t,p)=\gamma_p(t)$。$X$ complete 指所有 $I_p=\mathbb R$。全局 flow 是光滑 $\mathbb R$-作用，$F_{s+t}=F_s\circ F_t$，$F_0=\mathrm{id}$，各 $F_t$ 的逆为 $F_{-t}$。

局部 flow 的群律仅在相应复合有定义时陈述；不能把“maximal”误认为“complete”。

## 来源

- 为 Week 6 roadmap 编写的配套知识卡；原课程文件 W6DiffTop2026(1).pdf；补充内容在正文标识

## 关联

[dt-week-06](../notes/dt-week-06.md) · [dt-w6-1](../notes/dt-w6-1.md) · [dt-w6-2](../notes/dt-w6-2.md) · [dt-w6-3](../notes/dt-w6-3.md) · [dt-w6-4](../notes/dt-w6-4.md) · [dt-w6-5](../notes/dt-w6-5.md) · [dt-w6-6](../notes/dt-w6-6.md) · [dt-w6-7](../notes/dt-w6-7.md)


---

# 流形上的局部 ODE 定理

ID: `dt-ode` · Week 6 · theorem

对光滑 $X$ 和 $p\in M$，存在 $U\ni p$、$\varepsilon>0$、光滑 $F:(-\varepsilon,\varepsilon)\times U\to M$，满足 $F(0,q)=q$、$\partial_tF(t,q)=X(F(t,q))$，且积分曲线局部唯一。这是对一整个初值邻域的统一时间与光滑依赖，不只是一个初值的存在性。

推导：图中写 $X=\sum a^i(x)\partial_i$，求解欧氏方程 $x'=a(x)$，其右端光滑故局部 Lipschitz，应用欧氏局部存在唯一和光滑依赖定理，再用逆坐标图搬回。重叠图上解由唯一性一致。所有局部解粘成最大积分曲线；紧流形上通过有限子覆盖得到统一短时间，进而 complete，完整证明见 6.4。

## 来源

- 为 Week 6 roadmap 编写的配套知识卡；原课程文件 W6DiffTop2026(1).pdf；补充内容在正文标识

## 关联

[dt-week-06](../notes/dt-week-06.md) · [dt-w6-1](../notes/dt-w6-1.md) · [dt-w6-2](../notes/dt-w6-2.md) · [dt-w6-3](../notes/dt-w6-3.md) · [dt-w6-4](../notes/dt-w6-4.md) · [dt-w6-5](../notes/dt-w6-5.md) · [dt-w6-6](../notes/dt-w6-6.md) · [dt-w6-7](../notes/dt-w6-7.md)


---

# 非完备向量场的显式例子

ID: `dt-incomplete` · Week 6 · example

在 $\mathbb R$ 上取 $X=x^2\partial_x$。初值 $a$ 的解为 $x(t)=a/(1-at)$，代入可验 $x'=x^2$、$x(0)=a$。若 $a>0$，最大区间为 $(-\infty,1/a)$；若 $a<0$，为 $(1/a,\infty)$；若 $a=0$，解恒为零且全局。有限端点处函数发散，不能作为实值连续曲线延拓。所以这是 maximal 但非 complete 的例子。

## 来源

- 为 Week 6 roadmap 编写的配套知识卡；原课程文件 W6DiffTop2026(1).pdf；补充内容在正文标识

## 关联

[dt-week-06](../notes/dt-week-06.md) · [dt-w6-1](../notes/dt-w6-1.md) · [dt-w6-2](../notes/dt-w6-2.md) · [dt-w6-3](../notes/dt-w6-3.md) · [dt-w6-4](../notes/dt-w6-4.md) · [dt-w6-5](../notes/dt-w6-5.md) · [dt-w6-6](../notes/dt-w6-6.md) · [dt-w6-7](../notes/dt-w6-7.md)


---

# 有限乘积的泛性质

ID: `dt-w6-1` · Week 6 · exercise

题目：陈述 $M_1\times\cdots\times M_n$ 的流形泛性质。

解答：存在流形 $P$ 及光滑投影 $\pi_i:P\to M_i$，使对任意流形 $Z$ 和光滑 $f_i:Z\to M_i$，存在唯一光滑 $f:Z\to P$ 满足 $\pi_i f=f_i$。在集合乘积上必为 $f(z)=(f_1(z),\ldots,f_n(z))$，唯一性逐分量成立。等价地 $C^\infty(Z,P)\cong\prod_i C^\infty(Z,M_i)$，自然于 $Z$。存在性由积图（5.4）有限次迭代得到。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.1; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](../notes/dt-week-06.md) · [dt-curves-flow](../notes/dt-curves-flow.md) · [dt-ode](../notes/dt-ode.md) · [dt-incomplete](../notes/dt-incomplete.md)


---

# Smooth functional calculus

ID: `dt-w6-2` · Week 6 · exercise

题目：$f_i\in C^\infty(M)$、$\Phi:\mathbb R^n\to\mathbb R$ 光滑，证明 $\Phi(f_1,\ldots,f_n)$ 光滑。

解答：由 6.1，$F=(f_1,\ldots,f_n):M\to\mathbb R^n$ 光滑。$\Phi\circ F$ 为光滑映射复合，因此光滑。直接坐标验证为 $\Phi\circ(f_1\circ\varphi^{-1},\ldots,f_n\circ\varphi^{-1})$，由多变量链式法则光滑。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.2; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](../notes/dt-week-06.md) · [dt-curves-flow](../notes/dt-curves-flow.md) · [dt-ode](../notes/dt-ode.md) · [dt-incomplete](../notes/dt-incomplete.md)


---

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

[dt-week-06](../notes/dt-week-06.md) · [dt-curves-flow](../notes/dt-curves-flow.md) · [dt-ode](../notes/dt-ode.md) · [dt-incomplete](../notes/dt-incomplete.md)


---

# Compact manifold 上向量场 complete

ID: `dt-w6-4` · Week 6 · exercise

题目：构造由 $X$ 生成的全局光滑 flow，证明初值和群律。

局部定理：对每个 $p$，存在邻域 $U_p$、$\varepsilon_p>0$ 和光滑 $F_p:(-\varepsilon_p,\varepsilon_p)\times U_p\to M$，满足 $F_p(0,q)=q$、$\partial_tF_p=X(F_p)$，且同初值解唯一。它由坐标 ODE 的局部存在、唯一和参数光滑依赖推出。

步骤 1：紧性取有限子覆盖 $U_{p_j}$，令 $\varepsilon=\min_j\varepsilon_{p_j}>0$。因此从任意点出发均有至少 $(-\varepsilon,\varepsilon)$ 的解。

步骤 2：设某最大积分曲线 $\gamma:(a,b)\to M$ 有有限右端点 $b$。取 $t_0\in(a,b)$ 使 $b-t_0<\varepsilon/2$。从 $\gamma(t_0)$ 出发存在长度 $\varepsilon$ 的局部解，平移时间后与 $\gamma$ 在交区间因唯一性一致，因此延拓到 $t_0+\varepsilon>b$，矛盾。左端同理，故所有最大区间为 $\mathbb R$。

步骤 3：令 $F(t,p)=\gamma_p(t)$。初值给 $F(0,p)=p$。对固定 $t,p$，曲线 $s\mapsto F(s,F(t,p))$ 与 $s\mapsto F(s+t,p)$ 都解同一 ODE 且在 $s=0$ 取相同值，唯一性给群律。

步骤 4：局部解在重叠处唯一，粘成 $(-\varepsilon,\varepsilon)\times M$ 上的光滑映射。对任意 $(T,p)$，取固定正整数 $N$ 使 $|T|/N<\varepsilon$，在 $T$ 的小邻域仍如此。由群律，$F(t,q)$ 等于把局部时间 $t/N$ 的光滑映射复合 $N$ 次，故在该邻域光滑。得到全局光滑 flow。

原题只列初值和群律，字面上 identity flow 对任何 $X$ 都满足；这里补上 $\partial_tF=X\circ F$，证明其真正意图。默认流形无边界；有边界时须加切于边界等条件。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.4; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](../notes/dt-week-06.md) · [dt-curves-flow](../notes/dt-curves-flow.md) · [dt-ode](../notes/dt-ode.md) · [dt-incomplete](../notes/dt-incomplete.md)


---

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

[dt-week-06](../notes/dt-week-06.md) · [dt-curves-flow](../notes/dt-curves-flow.md) · [dt-ode](../notes/dt-ode.md) · [dt-incomplete](../notes/dt-incomplete.md)


---

# 同一个坐标函数，不同坐标方向

ID: `dt-w6-6` · Week 6 · exercise

题目：给两张全局坐标图使 $x_a=x_b$，但 $\partial_{x_a}\ne\partial_{x_b}$。

解答：取 $\varphi_a(x,y)=(x,y)$、$\varphi_b(x,y)=(x,y+x)$。第二张逆为 $(u,v)\mapsto(u,v-u)$，是全局微分同胚。两图的第一坐标均为 $x$。保持 $y_a$ 不变而变化 $x_a$ 得 $\partial_{x_a}=\partial_x$；保持 $y_b=y+x$ 不变则 $dy/dx=-1$，得 $\partial_{x_b}=\partial_x-\partial_y$。例如它们作用于原函数 $y$ 的结果分别为 0 和 $-1$，确实不同。另一方面 $dx_a=dx_b=dx$，因为 differential 只由函数本身决定。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.6; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](../notes/dt-week-06.md) · [dt-curves-flow](../notes/dt-curves-flow.md) · [dt-ode](../notes/dt-ode.md) · [dt-incomplete](../notes/dt-incomplete.md)


---

# Coordinate vector fields commute

ID: `dt-w6-7` · Week 6 · exercise

题目：证明 $[\partial_{x^a},\partial_{x^b}]=0$。

解答：对任意局部光滑 $f$，
$$[\partial_{x^a},\partial_{x^b}]f=\partial_a\partial_b(f\circ\varphi^{-1})-\partial_b\partial_a(f\circ\varphi^{-1})=0,$$
最后由光滑函数二阶混合偏导可交换。导子由其对所有函数的作用确定，因此括号为零。结论在图域 $U$ 上成立，不声称单张图的坐标向量场都能按该公式全局定义。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.7; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](../notes/dt-week-06.md) · [dt-curves-flow](../notes/dt-curves-flow.md) · [dt-ode](../notes/dt-ode.md) · [dt-incomplete](../notes/dt-incomplete.md)
