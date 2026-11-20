# Week 5 · 乘积、Grassmannian 与 Lie bracket

掌握乘积泛性质；解释 Plücker；证明括号封闭与相关性。

# Tangent bundle、section 与 vector field

ID: `dt-vector-fields` · Week 5 · definition

$TM=\coprod_pT_pM$，坐标平凡化把 $v=\sum v^i\partial_i|_p$ 送到 $(x(p),v^1,\ldots,v^n)$；过渡为 $(x,v)\mapsto(y(x),D y_xv)$。Smooth vector field 为光滑截面 $X:M\to TM$，$\pi X=\mathrm{id}$，局部 $X=\sum X^i\partial_i$，各 $X^i$ 光滑。

它作用于函数为 $(Xf)(p)=X_p(f)$。导子模 $\operatorname{Der}(C^\infty(M),C^\infty(M))$ 以 $(aD)(f)=aD(f)$ 定义 $C^\infty(M)$-模结构。

## 来源

- 为 Week 5 roadmap 编写的配套知识卡；原课程文件 W5DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-w5-1](../notes/dt-w5-1.md) · [dt-w5-2](../notes/dt-w5-2.md) · [dt-w5-3](../notes/dt-w5-3.md) · [dt-w5-s1](../notes/dt-w5-s1.md) · [dt-w5-4](../notes/dt-w5-4.md) · [dt-w5-5](../notes/dt-w5-5.md) · [dt-w5-6](../notes/dt-w5-6.md) · [dt-w5-s2](../notes/dt-w5-s2.md)


---

# Lie bracket、f-related 与 distribution

ID: `dt-lie-related` · Week 5 · definition

向量场括号 $[X,Y]f=X(Yf)-Y(Xf)$；坐标为 $[X,Y]^i=\sum_j(X^j\partial_jY^i-Y^j\partial_jX^i)$。它仍是向量场并满足 Jacobi（5.5 与向量场–导子同构）。

$X$ 与 $Y$ 为 $f$-related 指 $df_pX_p=Y_{f(p)}$。光滑 rank-$r$ distribution 是 $TM$ 的秩 $r$ 光滑子丛。Involutive 指其局部光滑截面对 Lie bracket 封闭。Integral submanifold 指切空间恰等于该分布的子流形；每点存在此类局部积分子流形称可积。Frobenius theorem 断言光滑常秩分布可积当且仅当 involutive；本周只证明必要方向。

## 来源

- 为 Week 5 roadmap 编写的配套知识卡；原课程文件 W5DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-w5-1](../notes/dt-w5-1.md) · [dt-w5-2](../notes/dt-w5-2.md) · [dt-w5-3](../notes/dt-w5-3.md) · [dt-w5-s1](../notes/dt-w5-s1.md) · [dt-w5-4](../notes/dt-w5-4.md) · [dt-w5-5](../notes/dt-w5-5.md) · [dt-w5-6](../notes/dt-w5-6.md) · [dt-w5-s2](../notes/dt-w5-s2.md)


---

# 光滑向量场与函数环导子同构

ID: `dt-fields-derivations` · Week 5 · theorem

映射 $X\mapsto(f\mapsto Xf)$ 是 $C^\infty(M)$-模同构到导子模。

证明：向量场的坐标表达说明 $Xf$ 光滑并满足 Leibniz。反之，对环导子 $D$，$D_p(f)=(Df)(p)$ 是点导子，故确定唯一 $X_p\in T_pM$。在坐标图中任取较小邻域，用 bump 把局部 $x^i$ 延拓为全局 $\widetilde x^i$，在该小邻域 $X^i=D\widetilde x^i$ 光滑。故 $p\mapsto X_p$ 光滑。两构造在所有函数上的作用互逆，且保持函数乘法，所以为模同构。

## 来源

- 为 Week 5 roadmap 编写的配套知识卡；原课程文件 W5DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-w5-1](../notes/dt-w5-1.md) · [dt-w5-2](../notes/dt-w5-2.md) · [dt-w5-3](../notes/dt-w5-3.md) · [dt-w5-s1](../notes/dt-w5-s1.md) · [dt-w5-4](../notes/dt-w5-4.md) · [dt-w5-5](../notes/dt-w5-5.md) · [dt-w5-6](../notes/dt-w5-6.md) · [dt-w5-s2](../notes/dt-w5-s2.md)


---

# 一个非零 Lie bracket

ID: `dt-bracket-example` · Week 5 · example

在 $\mathbb R^2$ 取 $X=\partial_x$、$Y=x\partial_y$。对任意 $f$，
$$[X,Y]f=\partial_x(x\partial_yf)-x\partial_y\partial_xf=\partial_yf.$$
故 $[X,Y]=\partial_y$。括号来自系数的变化，不只是两个偏导的交换。与 6.7 的坐标场可交换对照。

## 来源

- 为 Week 5 roadmap 编写的配套知识卡；原课程文件 W5DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-w5-1](../notes/dt-w5-1.md) · [dt-w5-2](../notes/dt-w5-2.md) · [dt-w5-3](../notes/dt-w5-3.md) · [dt-w5-s1](../notes/dt-w5-s1.md) · [dt-w5-4](../notes/dt-w5-4.md) · [dt-w5-5](../notes/dt-w5-5.md) · [dt-w5-6](../notes/dt-w5-6.md) · [dt-w5-s2](../notes/dt-w5-s2.md)


---

# RPn 的度量与 Hausdorff 性

ID: `dt-w5-1` · Week 5 · exercise

题目：证明 $\mathbb{RP}^n$ 的商拓扑 Hausdorff 且可度量。

步骤 1：用 4.4 的归一化证明（任意 $n$ 同样成立）识别为 $S^n/\{\pm1\}$。对单位代表定义
$$d([u],[v])=\min\{\|u-v\|,\|u+v\|\}.$$
改变代表符号不改变两项最小值，故良定义；对称性显然，$d=0$ 当且仅当 $u=\pm v$。

步骤 2：选符号 $\epsilon,\delta$ 分别实现 $d([u],[v])=\|u-\epsilon v\|$ 和 $d([v],[w])=\|v-\delta w\|$，则
$$d([u],[w])\le\|u-\epsilon\delta w\|\le\|u-\epsilon v\|+\|v-\delta w\|.$$
故为距离。

步骤 3：若 $B_d([u],r)$ 是度量球，其商前像为 $S^n\cap(B_r(u)\cup B_r(-u))$，开，故度量开集商开。若 $O$ 商开且 $[u]\in O$，则 $q^{-1}(O)$ 是包含 $u,-u$ 的开集，取 $r>0$ 使两个半径 $r$ 的球面邻域均在其中，则 $B_d([u],r)\subset O$。故两个拓扑一致，因而 Hausdorff。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.1; W5DiffTop2026.pdf

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-vector-fields](../notes/dt-vector-fields.md) · [dt-fields-derivations](../notes/dt-fields-derivations.md) · [dt-lie-related](../notes/dt-lie-related.md) · [dt-bracket-example](../notes/dt-bracket-example.md)


---

# S2 与 CP1 的显式微分同胚

ID: `dt-w5-2` · Week 5 · exercise

题目：构造两张对应图与双射 $S^2\cong\mathbb{CP}^1$，证明坐标表达光滑。

步骤 1：$\mathbb{CP}^1$ 的图 $V_0=\{[z_0:z_1]:z_0\ne0\}$，$w=z_1/z_0$；$V_1=\{z_1\ne0\}$，$\zeta=z_0/z_1$。过渡 $\zeta=1/w$。

步骤 2：球面上取 $U_0=S^2\setminus\{N\}$，坐标 $w=(x+iy)/(1-z)$；$U_1=S^2\setminus\{S\}$，坐标 $\zeta=(x-iy)/(1+z)$。在交叠上利用 $x^2+y^2=1-z^2$ 得 $w\zeta=1$。每张图是球极投影或其与复共轭的复合，均为 $\mathbb R^2$ 坐标图。

步骤 3：在 $U_0$ 定义 $F(p)=[1:w(p)]$，在 $U_1$ 定义 $F(p)=[\zeta(p):1]$，交叠因 $\zeta=1/w$ 一致。逆映射对 $[1:w]$ 为
$$\left(\frac{2\Re w}{1+|w|^2},\frac{2\Im w}{1+|w|^2},\frac{|w|^2-1}{1+|w|^2}\right),$$
并把 $[0:1]$ 送到 $N$；由上述图也知北极附近逆光滑。

步骤 4：对应图下 $F$ 及其逆均为恒等表达，因此双射是 diffeomorphism。若两张球极图都用 $x+iy$，过渡会是 $1/\bar w$；这里显式调整第二张图避免混淆。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.2; W5DiffTop2026.pdf

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-vector-fields](../notes/dt-vector-fields.md) · [dt-fields-derivations](../notes/dt-fields-derivations.md) · [dt-lie-related](../notes/dt-lie-related.md) · [dt-bracket-example](../notes/dt-bracket-example.md)


---

# 连续单射到 Hausdorff 空间

ID: `dt-w5-3` · Week 5 · exercise

题目：$X$ 紧、$q:X\to Y$ 连续商满射、$i:Y\to Z$ 连续单射且 $Z$ Hausdorff，证明 $Y$ Hausdorff。

解答：给 $y_1\ne y_2$，单射给 $i(y_1)\ne i(y_2)$。在 $Z$ 中取不交开邻域 $O_1,O_2$，连续性使 $i^{-1}(O_1),i^{-1}(O_2)$ 成为不交开邻域，故 $Y$ Hausdorff。此结论事实上不需要紧性或商条件。

较强结论：$q(X)=Y$ 紧，故连续单射 $i$ 是到其像的同胚。因为对闭集 $C\subset Y$，$C$ 紧，其像在 Hausdorff 的 $i(Y)$ 中闭，所以逆映射连续。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.3; W5DiffTop2026.pdf

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-vector-fields](../notes/dt-vector-fields.md) · [dt-fields-derivations](../notes/dt-fields-derivations.md) · [dt-lie-related](../notes/dt-lie-related.md) · [dt-bracket-example](../notes/dt-bracket-example.md)


---

# Grassmannian 与 Plücker 映射（原题 Example 展开）

ID: `dt-w5-s1` · Week 5 · exercise

补充任务：补全原讲义 Grassmannian 例子的关键证明。

步骤 1：Stiefel 空间应为有序正交标架 $V_k(\mathbb R^n)=\{Q\in\mathbb R^{n\times k}:Q^TQ=I_k\}$。它是多项式方程的闭集，且 $\|Q\|_F^2=k$，故紧。右作用群是 $O(k)$，不是原文误写的整个 $GL_k$（后者不保持正交标架）。

步骤 2：同一 $k$ 维子空间的两个正交标架满足 $Q'=QA$ 且 $A\in O(k)$，所以商正好参数化 $k$ 维子空间。

步骤 3：若换标架 $v'_j=\sum_i v_iA_{ij}$，多重线性和交替性给 $v'_1\wedge\cdots\wedge v'_k=(\det A)v_1\wedge\cdots\wedge v_k$，射影类不变。对 $k\ge1$，非零可分解 $\omega=v_1\wedge\cdots\wedge v_k$ 满足
$$\operatorname{span}(v_1,\ldots,v_k)=\{v:v\wedge\omega=0\}.$$
包含正向由重复因子；逆向把 $v_i$ 扩充为基，$v$ 的其余分量对应线性独立的 $(k+1)$ 重楔，必须为零。因此射影楔确定子空间，Plücker 映射单射。$k=n$ 时两边全空间；$k=0$ 时 Grassmannian 只有一点，单射直接成立。

步骤 4：楔的坐标是标架矩阵的 minors，连续；投影到射影空间连续，因此商泛性质使 Plücker 映射连续。目标射影空间 Hausdorff，由 5.3 源空间 Hausdorff；又因源紧，此映射是 topological embedding。

步骤 5（补充局部坐标）：固定分解 $\mathbb R^n=E\oplus F$，$\dim E=k$。投影到 $E$ 可逆的子空间唯一为 $\operatorname{graph}(A)$，$A:E\to F$，给 $k(n-k)$ 个坐标。换分解后的坐标为 $(c+dA)(a+bA)^{-1}$，定义域 $\det(a+bA)\ne0$ 开，且公式光滑。图映射连续可由 $(I,A)$ 的 Gram–Schmidt 正交化后取商得到；逆坐标在标架分块 $(Q_E,Q_F)$ 上为 $Q_FQ_E^{-1}$，连续并下降到商。故这些图与商拓扑相容，给出 Grassmannian 光滑结构。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Example / Suggestion（补充展开）; W5DiffTop2026.pdf

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-vector-fields](../notes/dt-vector-fields.md) · [dt-fields-derivations](../notes/dt-fields-derivations.md) · [dt-lie-related](../notes/dt-lie-related.md) · [dt-bracket-example](../notes/dt-bracket-example.md)


---

# Product manifold 的构造与唯一性

ID: `dt-w5-4` · Week 5 · exercise

题目：构造乘积流形并证明光滑映射的乘积泛性质。

步骤 1：给 $M,N$ 的图 $\varphi:U\to O\subset\mathbb R^m$、$\psi:V\to P\subset\mathbb R^n$，定义 $\varphi\times\psi:U\times V\to O\times P$。乘积空间 Hausdorff；两个可数基的全部成对乘积仍可数，故第二可数。上述图是同胚且覆盖。

步骤 2：过渡为 $(u,v)\mapsto(F(u),G(v))$，两个分量光滑，因此是光滑 atlas。投影的坐标表达为标准线性投影，故光滑。

步骤 3：若 $h:Z\to M\times N$ 光滑，投影复合光滑。反之若两个分量光滑，则它们连续，所以 $h$ 连续；在任意积图中，$h$ 的坐标表达是两个光滑分量拼成的向量值函数，因此光滑。

步骤 4：若另一光滑结构也满足相同性质，则到底层乘积的 identity 两个投影均光滑，泛性质使 identity 光滑；交换结构再用一次，逆也光滑。因此两个结构相容。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.4; W5DiffTop2026.pdf

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-vector-fields](../notes/dt-vector-fields.md) · [dt-fields-derivations](../notes/dt-fields-derivations.md) · [dt-lie-related](../notes/dt-lie-related.md) · [dt-bracket-example](../notes/dt-bracket-example.md)


---

# Derivations 的 Lie algebra

ID: `dt-w5-5` · Week 5 · exercise

题目：证明导子构成向量空间，交换子仍为导子，并验证 Jacobi。

约定：本包使用交换含幺实代数 $A$，与后续 $A$-模外幂一致。

步骤 1：若 $X,Y$ 为导子，$a,b\in\mathbb R$，则 $(aX+bY)(uv)=u(aX+bY)(v)+v(aX+bY)(u)$，零映射也满足，故是实向量子空间。

步骤 2：展开
$$XY(uv)=X(u)Y(v)+uXY(v)+X(v)Y(u)+vXY(u).$$
减去交换 $X,Y$ 的式子，交叉项因 $A$ 交换抵消，剩下 $[X,Y](uv)=u[X,Y](v)+v[X,Y](u)$。双线性由复合分配律得出，$[X,X]=0$。

步骤 3：逐项展开
$$[[X,Y],Z]=XYZ-YXZ-ZXY+ZYX,$$
$$[[Y,Z],X]=YZX-ZYX-XYZ+XZY,$$
$$[[Z,X],Y]=ZXY-XZY-YZX+YXZ.$$
每个三重复合恰出现一次正号一次负号，总和零，即 Jacobi。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.5; W5DiffTop2026.pdf

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-vector-fields](../notes/dt-vector-fields.md) · [dt-fields-derivations](../notes/dt-fields-derivations.md) · [dt-lie-related](../notes/dt-lie-related.md) · [dt-bracket-example](../notes/dt-bracket-example.md)


---

# f-related 向量场的括号

ID: `dt-w5-6` · Week 5 · exercise

题目：$X_i$ 与 $Y_i$ 分别 $f$-related，证明其 Lie brackets 也相关。

步骤 1：相关性等价于对任意 $h\in C^\infty(N)$，$X_i(h\circ f)=(Y_i h)\circ f$。这是 $df_p(X_i(p))=Y_i(f(p))$ 在函数上的作用。

步骤 2：两次应用得到
$$[X_0,X_1](h\circ f)=X_0((Y_1h)\circ f)-X_1((Y_0h)\circ f)=([Y_0,Y_1]h)\circ f.$$
函数上的相等确定切向量，故结论成立。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.6; W5DiffTop2026.pdf

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-vector-fields](../notes/dt-vector-fields.md) · [dt-fields-derivations](../notes/dt-fields-derivations.md) · [dt-lie-related](../notes/dt-lie-related.md) · [dt-bracket-example](../notes/dt-bracket-example.md)


---

# Frobenius 的必要方向（原题 Suggestion）

ID: `dt-w5-s2` · Week 5 · exercise

补充题目：可积光滑分布必 involutive。

设每个 $p$ 在积分子流形 $i:L\hookrightarrow M$ 上，且 $di(T_qL)=D_{i(q)}$。任取 $X,Y\in\Gamma(D)$，沿 $L$ 的限制可唯一拉回为光滑向量场 $\widetilde X,\widetilde Y$（局部子流形图中这只是保留切向分量），它们与 $X,Y$ 分别 $i$-related。5.6 给
$$[X,Y]_{i(q)}=di_q([\widetilde X,\widetilde Y]_q)\in D_{i(q)}.$$
每点都在某积分子流形上，所以 $[X,Y]\in\Gamma(D)$，即 involutive。这里仅证明必要性，充分性是 Frobenius theorem。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Example / Suggestion（补充展开）; W5DiffTop2026.pdf

## 关联

[dt-week-05](../notes/dt-week-05.md) · [dt-vector-fields](../notes/dt-vector-fields.md) · [dt-fields-derivations](../notes/dt-fields-derivations.md) · [dt-lie-related](../notes/dt-lie-related.md) · [dt-bracket-example](../notes/dt-bracket-example.md)
