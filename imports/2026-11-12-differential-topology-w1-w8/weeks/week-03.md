# Week 3 · 商空间、bump 与代数化切空间

会用商泛性质；能造 bump；从 m/m² 严格构造点导子。

# Quotient topology 与 quotient map

ID: `dt-quotient` · Week 3 · definition

满射 $q:X\to Y$ 是 quotient map 指 $V\subset Y$ 开当且仅当 $q^{-1}(V)$ 开。连续满射仅保证一个方向，不必是商映射。给等价关系时，商集使用这个拓扑。

泛性质：$h:Y\to Z$ 连续当且仅当 $h\circ q$ 连续。证明由 $(h\circ q)^{-1}(O)=q^{-1}(h^{-1}(O))$ 和定义得到。若 $q$ 连续满射且开或闭，则是商映射。群轨道投影是开映射；一般商映射不必开（3.3）。

“连续满射未必商”的简单例子：identity 从离散拓扑的 $\mathbb R$ 到通常拓扑的 $\mathbb R$ 连续满射，但若是商映射，目标应也离散。

## 来源

- 为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-w3-0](../notes/dt-w3-0.md) · [dt-w3-1](../notes/dt-w3-1.md) · [dt-w3-2](../notes/dt-w3-2.md) · [dt-w3-3](../notes/dt-w3-3.md) · [dt-w3-4](../notes/dt-w3-4.md) · [dt-w3-5](../notes/dt-w3-5.md) · [dt-w3-6](../notes/dt-w3-6.md) · [dt-w3-7](../notes/dt-w3-7.md) · [dt-w3-8](../notes/dt-w3-8.md) · [dt-w3-9](../notes/dt-w3-9.md) · [dt-w3-10](../notes/dt-w3-10.md) · [dt-w3-11](../notes/dt-w3-11.md) · [dt-w3-12](../notes/dt-w3-12.md) · [dt-w3-optional](../notes/dt-w3-optional.md) · [dt-w3-13](../notes/dt-w3-13.md)


---

# Function germs、maximal ideal、cotangent、derivation

ID: `dt-germs-cotangent` · Week 3 · definition

$C^\infty_{M,p}$ 是 $p$ 附近光滑函数的芽环：两个函数若在更小邻域一致则同芽。局部极大理想为在 $p$ 消失的芽。课程也使用全局环 $C^\infty(M)$ 的理想 $\mathfrak m_p=\{f:f(p)=0\}$；其平方是有限和 $\sum u_iv_i$，$u_i,v_i\in\mathfrak m_p$。

定义 $T_p^*M=\mathfrak m_p/\mathfrak m_p^2$，$T_pM=(T_p^*M)^*$。点导子是实线性 $D:C^\infty(M)\to\mathbb R$ 满足 $D(fg)=f(p)Dg+g(p)Df$。3.13 给两定义的自然同构。Bump 与局部性使全局理想和芽理想的这一商同构（6.3）。

$df_p=[f-f(p)]$；光滑 $F:M\to N$ 的 differential 由 $dF_p(v)(h)=v(h\circ F)$ 定义，是余切拉回的对偶。局部坐标矩阵为 Jacobian。

## 来源

- 为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-w3-0](../notes/dt-w3-0.md) · [dt-w3-1](../notes/dt-w3-1.md) · [dt-w3-2](../notes/dt-w3-2.md) · [dt-w3-3](../notes/dt-w3-3.md) · [dt-w3-4](../notes/dt-w3-4.md) · [dt-w3-5](../notes/dt-w3-5.md) · [dt-w3-6](../notes/dt-w3-6.md) · [dt-w3-7](../notes/dt-w3-7.md) · [dt-w3-8](../notes/dt-w3-8.md) · [dt-w3-9](../notes/dt-w3-9.md) · [dt-w3-10](../notes/dt-w3-10.md) · [dt-w3-11](../notes/dt-w3-11.md) · [dt-w3-12](../notes/dt-w3-12.md) · [dt-w3-optional](../notes/dt-w3-optional.md) · [dt-w3-13](../notes/dt-w3-13.md)


---

# Bump theorem 与导子局部性

ID: `dt-bump-locality` · Week 3 · theorem

对无边界光滑流形 $M$、$p\in U$ 开，存在 $\eta\in C^\infty(M,[0,1])$，在 $p$ 的某邻域为 1，且支撑紧包含于 $U$。支撑定义为非零集的闭包。完整构造见 3.12。

若 $f$ 在 $p$ 附近为零，取支撑于该邻域且在更小邻域为 1 的 $\eta$，则 $f=(1-\eta)f$，两个因子在 $p$ 都为零，所以 $f\in\mathfrak m_p^2$，点导子消灭 $f$。这证明点导子仅取决于函数芽。

## 来源

- 为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-w3-0](../notes/dt-w3-0.md) · [dt-w3-1](../notes/dt-w3-1.md) · [dt-w3-2](../notes/dt-w3-2.md) · [dt-w3-3](../notes/dt-w3-3.md) · [dt-w3-4](../notes/dt-w3-4.md) · [dt-w3-5](../notes/dt-w3-5.md) · [dt-w3-6](../notes/dt-w3-6.md) · [dt-w3-7](../notes/dt-w3-7.md) · [dt-w3-8](../notes/dt-w3-8.md) · [dt-w3-9](../notes/dt-w3-9.md) · [dt-w3-10](../notes/dt-w3-10.md) · [dt-w3-11](../notes/dt-w3-11.md) · [dt-w3-12](../notes/dt-w3-12.md) · [dt-w3-optional](../notes/dt-w3-optional.md) · [dt-w3-13](../notes/dt-w3-13.md)


---

# Hadamard lemma 与坐标切基

ID: `dt-hadamard` · Week 3 · theorem

在原点的星形开邻域上，光滑 $f$ 满足 $f(x)-f(0)=\sum_i x_i g_i(x)$，$g_i(x)=\int_0^1\partial_i f(tx)dt$ 光滑，且 $g_i(0)=\partial_i f(0)$。因而模平方理想只保留线性部分。

所以 $[x^i-x^i(p)]$ 为 $T_p^*M$ 的基，对偶基 $\partial_i|_p$ 为 $T_pM$ 的基；$v(f)=\sum_i v(x^i)\partial_i f(p)$（局部坐标函数通过芽解释）。完整连接全局定义的论证见 6.3。

## 来源

- 为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-w3-0](../notes/dt-w3-0.md) · [dt-w3-1](../notes/dt-w3-1.md) · [dt-w3-2](../notes/dt-w3-2.md) · [dt-w3-3](../notes/dt-w3-3.md) · [dt-w3-4](../notes/dt-w3-4.md) · [dt-w3-5](../notes/dt-w3-5.md) · [dt-w3-6](../notes/dt-w3-6.md) · [dt-w3-7](../notes/dt-w3-7.md) · [dt-w3-8](../notes/dt-w3-8.md) · [dt-w3-9](../notes/dt-w3-9.md) · [dt-w3-10](../notes/dt-w3-10.md) · [dt-w3-11](../notes/dt-w3-11.md) · [dt-w3-12](../notes/dt-w3-12.md) · [dt-w3-optional](../notes/dt-w3-optional.md) · [dt-w3-13](../notes/dt-w3-13.md)


---

# Flat function 与零因子

ID: `dt-flat` · Week 3 · example

$E(t)=e^{-1/t}$（$t>0$），否则为零。对每个 $m$，$t^{-m}E(t)\to0$，且每阶导数是 $t^{-1}$ 的多项式乘 $E(t)$，故 $E$ 光滑并在零点所有阶导数为零，但不是零函数。

$E$ 属于所有 $(t^m)$；$E(t)E(-t)=0$ 而两个因子都非零。这同时展示光滑函数不能由一点的 Taylor series 唯一确定、光滑函数环有零因子。严格证明见 3.9–3.11。

## 来源

- 为 Week 3 roadmap 编写的配套知识卡；原课程文件 W3DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-w3-0](../notes/dt-w3-0.md) · [dt-w3-1](../notes/dt-w3-1.md) · [dt-w3-2](../notes/dt-w3-2.md) · [dt-w3-3](../notes/dt-w3-3.md) · [dt-w3-4](../notes/dt-w3-4.md) · [dt-w3-5](../notes/dt-w3-5.md) · [dt-w3-6](../notes/dt-w3-6.md) · [dt-w3-7](../notes/dt-w3-7.md) · [dt-w3-8](../notes/dt-w3-8.md) · [dt-w3-9](../notes/dt-w3-9.md) · [dt-w3-10](../notes/dt-w3-10.md) · [dt-w3-11](../notes/dt-w3-11.md) · [dt-w3-12](../notes/dt-w3-12.md) · [dt-w3-optional](../notes/dt-w3-optional.md) · [dt-w3-13](../notes/dt-w3-13.md)


---

# 两个拓扑的逐点细化

ID: `dt-w3-0` · Week 3 · exercise

题目：证明 $\mathbb R^2$ 的范数拓扑与乘积拓扑相同。

解答：先取欧氏范数。对球 $B_r(p)$ 中的 $q$，取 $\delta=(r-\|q-p\|)/\sqrt2$。矩形 $(q_1-\delta,q_1+\delta)\times(q_2-\delta,q_2+\delta)$ 包含 $q$ 且包含于球中，故球乘积开。对矩形 $(a,b)\times(c,d)$ 中的 $q$，取 $\varepsilon=\min(q_1-a,b-q_1,q_2-c,d-q_2)$，则 $B_\varepsilon(q)$ 包含于矩形。因此两类基元素均在另一拓扑中开，任意开集作为基元素之并也开。其他范数由有限维范数等价归结到欧氏范数，证明见 1.u1。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.0; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# 关系生成的等价关系

ID: `dt-w3-1` · Week 3 · exercise

题目勘误：链中的点应属于 $X$ 而非 $R\subset X\times X$；$R''$ 应为所有**包含 $R$**的等价关系之交；链须允许长度零，并检查最后一条边。以下证明这个标准修正版。

定义 $xR'y$ 当且仅当存在 $m\ge0$ 和 $z_0=x,\ldots,z_m=y$，相邻点满足 $(z_i,z_{i+1})\in R$ 或其逆属于 $R$。

步骤 1：长度零给自反性；反转链给对称性；拼接两条链给传递性。因此 $R'$ 是等价关系，长度一说明 $R\subset R'$。

步骤 2：若 $E$ 是任何包含 $R$ 的等价关系，其对称性使每条链边属于 $E$，传递性使两个端点属于 $E$，所以 $R'\subset E$。因此 $R'\subset R''$。

步骤 3：因为 $R'$ 本身是交中的一个成员，$R''\subset R'$，从而相等。原文若不要求包含 $R$，交会成为对角关系，一般不等于 $R'$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.1; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# 群作用的商映射是开映射

ID: `dt-w3-2` · Week 3 · exercise

题目：群以同胚作用在 $X$ 上，证明轨道投影 $q:X\to X/G$ 开。

解答：对开集 $U\subset X$，$q^{-1}(q(U))=\bigcup_{g\in G}gU$。每个 $g$ 为同胚，所以右边开。按商拓扑的定义，$q(U)$ 开。此论证不需要群本身的拓扑。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.2; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# Quotient map 未必 open

ID: `dt-w3-3` · Week 3 · exercise

题目：一般商映射是否是开映射？

反例：$q:[0,1]\to S^1$，$q(t)=e^{2\pi it}$。它连续满射，且是闭映射：闭子集在紧空间中紧，其连续像紧，在 Hausdorff 空间中闭。因此它是商映射（若 $q^{-1}(A)$ 闭，则 $A=q(q^{-1}(A))$ 闭）。$[0,1/4)$ 在 $[0,1]$ 中开，但像包含 $1\in S^1$ 而不包含从负角度逼近 1 的点，故像不是开集。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.3; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# 射影坐标与商拓扑相容

ID: `dt-w3-4` · Week 3 · exercise

题目：证明 $U_a\subset\mathbb{RP}^n$ 开，坐标及逆连续，过渡光滑。

步骤 1：$q^{-1}(U_a)=\{x:x_a\ne0\}$ 开，故 $U_a$ 开。

步骤 2：$q$ 是开商映射（3.2），限制到 $q^{-1}(U_a)$ 仍是商映射。$\varphi_a\circ q(x)=(x_j/x_a)_{j\ne a}$ 连续，由商映射的泛性质，$\varphi_a$ 连续。

步骤 3：令 $s_a:\mathbb R^n\to\mathbb R^{n+1}\setminus0$ 在第 $a$ 位插入 1。它连续，$\varphi_a^{-1}=q\circ s_a$，故逆连续。

步骤 4：置 $u_a=1$，交叠域为 $u_b\ne0$，过渡分量是 $u_j/u_b$（$j\ne b$），均光滑。反向交换 $a,b$ 同理。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.4; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# 所有扩张的并与极大性

ID: `dt-w3-5` · Week 3 · exercise

题目：$S\subset2^T$，$a\in S$，令 $\bar a=\bigcup_{a\subset b\in S}b$。若 $\bar a\in S$，证明其极大。

解答：因 $a$ 自身在并中，$a\subset\bar a$。若 $\bar a\subset c\in S$，则 $a\subset c$，所以 $c$ 是定义 $\bar a$ 的一个并项，故 $c\subset\bar a$。两包含给出 $c=\bar a$，这正是极大性。一般 $\bar a$ 未必属于 $S$，故该假设不可省。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.5; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# Maximal atlas 的构造

ID: `dt-w3-6` · Week 3 · exercise

题目：证明所有包含 atlas $A$ 的 atlas 之并 $\bar A$ 仍是 atlas。

步骤 1：它包含 $A$，故覆盖 $X$，每个成员本来就是图。

步骤 2：取 $\varphi\in B\supset A$ 与 $\psi\in C\supset A$，以及图域交点 $p$。在 $A$ 中取包含 $p$ 的图 $\theta$。在三图共同域，
$$\psi\circ\varphi^{-1}=(\psi\circ\theta^{-1})\circ(\theta\circ\varphi^{-1}).$$
两个因子分别由 $C,B$ 的相容性光滑。这样的局部域覆盖整个交叠域，光滑性是局部性质，故整个过渡光滑；逆方向同理。

步骤 3：所以 $\bar A$ 是 atlas，由 3.5 极大。它恰包含全部与 $A$ 相容的图。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.6; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# 光滑函数之和

ID: `dt-w3-7` · Week 3 · exercise

题目：证明 $f,g\in C^\infty(X)$ 蕴含 $f+g\in C^\infty(X)$。

解答：任取图 $(U,\varphi)$，$(f+g)\circ\varphi^{-1}=f\circ\varphi^{-1}+g\circ\varphi^{-1}$ 为欧氏开集上的光滑函数之和，故光滑。图覆盖 $X$，所以 $f+g$ 光滑。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.7; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# Open submanifold

ID: `dt-w3-8` · Week 3 · exercise

题目：把流形图册限制到开集 $U$，证明所得为 atlas，且包含映射光滑。

步骤 1：$U\cap V_a$ 在 $U$ 中开，坐标像是原图下开集的像，因此在 $\mathbb R^n$ 中开；限制仍为同胚，图域覆盖 $U$。

步骤 2：新过渡是原过渡在开子集上的限制，故光滑。$U$ 继承 Hausdorff 和第二可数性，所以是流形。

步骤 3：在限制图与对应原图中，包含映射的坐标表达是欧氏开集之间的包含，即恒等公式，故光滑。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.8; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# 指数平坦函数在零点的导数

ID: `dt-w3-9` · Week 3 · exercise

题目：$\chi(t)=\omega(t)e^{-1/t}$（$t>0$），$t\le0$ 时为零，其中 $\omega$ 为 $t^{-1}$ 的多项式；证明零点导数及两侧导数极限相等。

步骤 1：对任意整数 $m\ge0$，令 $s=1/t$，由 $e^s\ge s^{m+1}/(m+1)!$ 得 $s^me^{-s}\le(m+1)!/s\to0$。故 $t^{-m}e^{-1/t}\to0$。

步骤 2：正侧差商 $\chi(t)/t$ 是有限个 $t^{-m}e^{-1/t}$ 的线性组合，极限为零；负侧差商恒为零。因此 $\chi'(0)=0$。

步骤 3：对 $t>0$，$\chi'(t)=(\omega'(t)+t^{-2}\omega(t))e^{-1/t}$，系数仍为 $t^{-1}$ 的多项式，极限为零。负侧导数为零，所以三者相等。同一论证归纳给出所有阶导数存在、连续并在零点为零。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.9; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# 光滑函数环中的非零无限阶消失元

ID: `dt-w3-10` · Week 3 · exercise

题目：证明 $\bigcap_{k\ge0}(t^{k+1})\ne0$。

解答：令 $h(t)=e^{-1/t}$ 当 $t>0$，否则为零。它非零且光滑。对每个 $m\ge1$，定义 $g_m(t)=t^{-m}e^{-1/t}$ 当 $t>0$，否则零。3.9 的归纳证明说明 $g_m$ 光滑，且处处 $h=t^mg_m$。故 $0\ne h\in\bigcap_m(t^m)$。

补充严格证明非 Noetherian：$\operatorname{Ann}(h)$ 是在 $(0,\infty)$ 恒零的光滑函数组成的非零理想 $J$。每个 $f\in J$ 在零点平坦，$f/t$ 零点延拓为光滑函数且仍在 $J$，所以 $J=tJ$。若 $J$ 有限生成，determinant trick 给出某个 $a\in C^\infty(\mathbb R)$ 满足 $(1-ta)J=0$。因 $1-ta$ 在零附近非零，所有 $J$ 元素应在某个固定零邻域为零。但 $h(-t)\in J$ 在每个负的零邻域非零，矛盾。因此该环非 Noetherian。不能不核对 Krull intersection 的假设就把交非零直接作为普遍判据。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.10; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# 非零零因子

ID: `dt-w3-11` · Week 3 · exercise

题目：构造非零光滑函数 $a,b$ 且 $ab=0$。

解答：取 3.10 的 $h$，令 $a(t)=h(t),b(t)=h(-t)$。两者光滑，分别在 $t>0$ 和 $t<0$ 非零；每个 $t$ 至少一个因子为零，所以乘积恒零。这证明 $C^\infty(\mathbb R)$ 不是 integral domain。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.11; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# 分离函数与 bump function

ID: `dt-w3-12` · Week 3 · exercise

题目：$f,g\ge0$ 的零点集分别为不交的 $A,B$，构造零点集 $A$、取值 1 的集合为 $B$ 的 $h:X\to[0,1]$。

步骤 1：$f+g$ 处处正，否则有点同时属于 $A,B$。令 $h=f/(f+g)$，则 $0\le h\le1$，$h=0\iff f=0$，$h=1\iff g=0$，满足要求。若 $f,g$ 光滑，$h$ 光滑。

步骤 2：取 $E(t)=e^{-1/t}$（正半轴），非正时零。令 $\alpha(t)=E(1-t)/(E(t)+E(1-t))$，则 $\alpha=1$ 于 $t\le0$，$\alpha=0$ 于 $t\ge1$。

步骤 3：令 $\beta(t)=\alpha(t-1)\alpha(-t-1)$，则 $\beta=1$ 于 $[-1,1]$、在 $|t|\ge2$ 为零。原文第二因子写作 $\alpha(1-t)$ 不满足所述性质（例如 $t=0$），此处已修正。令 $\eta(x)=\prod_i\beta(x_i)$ 得欧氏 bump。

步骤 4：对流形中 $p\in U$，选图域 $A\subset U$ 并取坐标以 $p$ 为原点，包含闭盒 $[-3,3]^n$。缩小图域为该开盒的原像。取 $V=\varphi^{-1}((-1,1)^n)$，$W=\varphi^{-1}((-5/2,5/2)^n)$。坐标 bump 支撑在 $[-2,2]^n$ 的原像，紧包含于图域，故零延拓到 $M$ 光滑；$\bar W$ 紧且包含于 $U$，所需性质成立。图像必须是开集，不能把闭盒当成图像。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.12; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# 非 Hausdorff 空间上的延拓障碍

ID: `dt-w3-optional` · Week 3 · exercise

题目：对原题粘合直线空间 $X$，证明实线上的紧支撑、在某点附近为 1 的连续函数不能延拓。

粘合约定：将主直线的 $t<a$ 对应到 $\mathbb R_{ab}$ 的坐标 $t-a<0$，将 $t>b$ 对应到坐标 $t-b>0$。这是原文“identify”采用的自然平移识别。

步骤 1：若 $\xi:X\to\mathbb R$ 连续，$\eta=\xi|_{\mathbb R}$，在 $\mathbb R_{ab}$ 上连续性给出
$$\eta(a)=\lim_{t\uparrow a}\eta(t)=\xi(0_{ab})=\lim_{t\downarrow b}\eta(t)=\eta(b).$$
所以任意有理数 $a<b$ 的函数值相等。

步骤 2：所有有理点的值相同，由有理数稠密及 $\eta$ 连续，$\eta$ 在整条实线上常值。

步骤 3：紧支撑常值函数只能恒为零，与某邻域恒为 1 矛盾。因此无连续延拓。这个例子说明局部 bump 的全局零延拓需要支撑在整个空间中闭等条件，Hausdorff 假设保证上述紧支撑构造可用。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Optional Problem; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)


---

# Cotangent dual 与点导子

ID: `dt-w3-13` · Week 3 · exercise

题目：证明 $(\mathfrak m_p/\mathfrak m_p^2)^*\cong\operatorname{Der}_p(C^\infty(M),\mathbb R)$。

步骤 1：导子 $D$ 满足 $D(1)=D(1\cdot1)=2D(1)$，所以 $D(1)=0$，由实线性消灭所有常数。若 $u,v\in\mathfrak m_p$，$D(uv)=u(p)D(v)+v(p)D(u)=0$，故 $D$ 消灭有限乘积和构成的 $\mathfrak m_p^2$。于是 $\lambda_D([u])=D(u)$ 是良定义线性泛函。

步骤 2：给定 $\lambda$，令 $D_\lambda(f)=\lambda([f-f(p)])$。模 $\mathfrak m_p^2$ 有
$$[fg-f(p)g(p)]=f(p)[g-g(p)]+g(p)[f-f(p)],$$
因为差是 $(f-f(p))(g-g(p))$。应用 $\lambda$ 得 Leibniz 公式，所以 $D_\lambda$ 是导子。

步骤 3：$D_{\lambda_D}(f)=D(f-f(p))=D(f)$，$\lambda_{D_\lambda}([u])=\lambda([u])$，故构造互逆且线性。

自然性：光滑 $F:M\to N$ 的拉回把 $\mathfrak m_{F(p)}$ 及其平方分别送到 $\mathfrak m_p$ 及其平方。商空间映射的对偶在上述同构下为 $D\mapsto(h\mapsto D(h\circ F))$，正是 $dF_p$，故原题交换图成立。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.13; W3DiffTop2026.pdf

## 关联

[dt-week-03](../notes/dt-week-03.md) · [dt-quotient](../notes/dt-quotient.md) · [dt-germs-cotangent](../notes/dt-germs-cotangent.md) · [dt-bump-locality](../notes/dt-bump-locality.md) · [dt-hadamard](../notes/dt-hadamard.md) · [dt-flat](../notes/dt-flat.md)
