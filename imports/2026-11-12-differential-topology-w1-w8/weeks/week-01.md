# Week 1 · 拓扑基础与局部欧氏维数

能够用基比较拓扑；区分紧性与可数性；解释维数局部恒定。

# Topology、basis 与邻域

ID: `dt-topology` · Week 1 · definition

Topology 是集合 $X$ 的子集族 $\tau$，包含 $\varnothing,X$，对任意并和有限交封闭。Basis $\mathcal B$ 满足覆盖性及交点细化性：若 $x\in B_1\cap B_2$，存在 $B_3\in\mathcal B$ 使 $x\in B_3\subset B_1\cap B_2$。生成的开集恰为基元素的并。

判定 $U$ 开只需对每个 $x\in U$ 找到一个 $x\in B\subset U$，因为此时 $U=\bigcup_{x\in U}B_x$。这里证明的是某集合为开集，不是证明某个“集合族属于另一个集合族”。比较两拓扑通常对基元素做这种逐点细化。

## 来源

- 为 Week 1 roadmap 编写的配套知识卡；原课程文件 DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-w1-1](../notes/dt-w1-1.md) · [dt-w1-2](../notes/dt-w1-2.md) · [dt-w1-3](../notes/dt-w1-3.md) · [dt-w1-4](../notes/dt-w1-4.md) · [dt-w1-u1](../notes/dt-w1-u1.md) · [dt-w1-u2](../notes/dt-w1-u2.md) · [dt-w1-u3](../notes/dt-w1-u3.md) · [dt-w1-u4](../notes/dt-w1-u4.md)


---

# Norm、metric 与 continuity

ID: `dt-metric` · Week 1 · definition

Norm $N$ 满足正定性、绝对齐次性、三角不等式。Metric $d:X^2\to[0,\infty)$ 满足正定性、对称性、三角不等式；其开球 $B_r(x)=\{y:d(x,y)<r\}$ 生成 metric topology。范数给距离 $d(x,y)=N(x-y)$。

映射 $f:X\to Y$ 连续当且仅当每个开集 $V\subset Y$ 的原像开；homeomorphism 是连续双射且逆连续。连续双射本身一般不够。

## 来源

- 为 Week 1 roadmap 编写的配套知识卡；原课程文件 DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-w1-1](../notes/dt-w1-1.md) · [dt-w1-2](../notes/dt-w1-2.md) · [dt-w1-3](../notes/dt-w1-3.md) · [dt-w1-4](../notes/dt-w1-4.md) · [dt-w1-u1](../notes/dt-w1-u1.md) · [dt-w1-u2](../notes/dt-w1-u2.md) · [dt-w1-u3](../notes/dt-w1-u3.md) · [dt-w1-u4](../notes/dt-w1-u4.md)


---

# Hausdorff、second countable、compact、connected

ID: `dt-separation` · Week 1 · definition

Hausdorff：任意不同两点有不交开邻域。Second countable：存在可数拓扑基。Compact：任意开覆盖有有限子覆盖。Connected：不存在把空间写成两个非空不交开集的并。

Locally Euclidean of dimension $n$：每点有开邻域同胚于 $\mathbb R^n$ 的开子集。Topological manifold 通常还要求 Hausdorff、第二可数。非空连通局部欧氏空间的维数恒定；一般不连通空间可以逐分支具有不同局部维数，课程的固定维数定义则排除此情况。

## 来源

- 为 Week 1 roadmap 编写的配套知识卡；原课程文件 DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-w1-1](../notes/dt-w1-1.md) · [dt-w1-2](../notes/dt-w1-2.md) · [dt-w1-3](../notes/dt-w1-3.md) · [dt-w1-4](../notes/dt-w1-4.md) · [dt-w1-u1](../notes/dt-w1-u1.md) · [dt-w1-u2](../notes/dt-w1-u2.md) · [dt-w1-u3](../notes/dt-w1-u3.md) · [dt-w1-u4](../notes/dt-w1-u4.md)


---

# Subspace、initial 与 product topology

ID: `dt-induced-product` · Week 1 · definition

子空间 $S\subset X$ 的开集为 $S\cap U$（$U$ 在 $X$ 开）。给映射 $f:X\to Y$，initial topology 是所有 $f^{-1}(V)$（$V$ 开）构成的拓扑；它是令 $f$ 连续的最粗拓扑。对多个映射要取这些原像生成的拓扑。

有限乘积以开矩形 $\prod U_i$ 为基，是使投影均连续的最粗拓扑。$f:Z\to\prod X_i$ 连续当且仅当每个分量连续：逆像的矩形为有限个分量逆像的交。

## 来源

- 为 Week 1 roadmap 编写的配套知识卡；原课程文件 DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-w1-1](../notes/dt-w1-1.md) · [dt-w1-2](../notes/dt-w1-2.md) · [dt-w1-3](../notes/dt-w1-3.md) · [dt-w1-4](../notes/dt-w1-4.md) · [dt-w1-u1](../notes/dt-w1-u1.md) · [dt-w1-u2](../notes/dt-w1-u2.md) · [dt-w1-u3](../notes/dt-w1-u3.md) · [dt-w1-u4](../notes/dt-w1-u4.md)


---

# Norm equivalence 与 invariance of dimension

ID: `dt-dimension-norm` · Week 1 · theorem

有限维范数等价：对 $\mathbb R^n$ 的任意两范数 $N_1,N_2$，存在 $c,C>0$ 使 $cN_1(v)\le N_2(v)\le CN_1(v)$，故诱导同一拓扑。证明见 1.u1。

维数不变性：若非空空间同时局部欧氏维数 $m,n$，则 $m=n$。这是 Week 1 允许使用的定理。局部同调解释：$H_k(U,U\setminus\{p\};\mathbb Q)$ 仅在 $k=n$ 为 $\mathbb Q$，其余为零。由切除缩到欧氏小球，再用 pair 的长正合列及穿孔球形变收缩到 $S^{n-1}$ 得出。与仅比较 $\mathbb R^m$ 和 $\mathbb R^n$ 整体同胚不同，局部结论需要该局部不变量。

## 来源

- 为 Week 1 roadmap 编写的配套知识卡；原课程文件 DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-w1-1](../notes/dt-w1-1.md) · [dt-w1-2](../notes/dt-w1-2.md) · [dt-w1-3](../notes/dt-w1-3.md) · [dt-w1-4](../notes/dt-w1-4.md) · [dt-w1-u1](../notes/dt-w1-u1.md) · [dt-w1-u2](../notes/dt-w1-u2.md) · [dt-w1-u3](../notes/dt-w1-u3.md) · [dt-w1-u4](../notes/dt-w1-u4.md)


---

# Compact 不必 second countable

ID: `dt-compact-counterexample` · Week 1 · example

不可数离散集 $D$ 的一点紧化 $D\cup\{\infty\}$：有限补集为 $\infty$ 的邻域，$D$ 内所有子集开。它紧且 Hausdorff，却不是第二可数，因为基中必须含所有不可数个开单点。完整证明见 1.u2。因此不能把“compact”当作“可数坐标图”的替代假设。

## 来源

- 为 Week 1 roadmap 编写的配套知识卡；原课程文件 DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-w1-1](../notes/dt-w1-1.md) · [dt-w1-2](../notes/dt-w1-2.md) · [dt-w1-3](../notes/dt-w1-3.md) · [dt-w1-4](../notes/dt-w1-4.md) · [dt-w1-u1](../notes/dt-w1-u1.md) · [dt-w1-u2](../notes/dt-w1-u2.md) · [dt-w1-u3](../notes/dt-w1-u3.md) · [dt-w1-u4](../notes/dt-w1-u4.md)


---

# Norm 的定义

ID: `dt-w1-1` · Week 1 · exercise

题目：陈述 $\mathbb R^n$ 上范数的定义。

解答：函数 $N:\mathbb R^n\to[0,\infty)$ 是 norm，当且仅当：(1) $N(v)=0\iff v=0$；(2) 对 $a\in\mathbb R$ 有 $N(av)=|a|N(v)$；(3) $N(u+v)\le N(u)+N(v)$。三个条件对所有向量成立。例如 $N(v)=(\sum v_i^2)^{1/2}$；三角不等式由 Cauchy–Schwarz 给出。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.1; DiffTop2026.pdf

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-topology](../notes/dt-topology.md) · [dt-metric](../notes/dt-metric.md) · [dt-separation](../notes/dt-separation.md) · [dt-induced-product](../notes/dt-induced-product.md) · [dt-dimension-norm](../notes/dt-dimension-norm.md) · [dt-compact-counterexample](../notes/dt-compact-counterexample.md)


---

# Norm 诱导 metric

ID: `dt-w1-2` · Week 1 · exercise

题目：由范数定义距离并核对公理。

解答：令 $d(x,y)=N(x-y)$。非负性以及 $d(x,y)=0\iff x=y$ 来自正定性；$d(y,x)=N(-(x-y))=d(x,y)$ 来自齐次性；$d(x,z)=N((x-y)+(y-z))\le d(x,y)+d(y,z)$。故这是 metric。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.2; DiffTop2026.pdf

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-topology](../notes/dt-topology.md) · [dt-metric](../notes/dt-metric.md) · [dt-separation](../notes/dt-separation.md) · [dt-induced-product](../notes/dt-induced-product.md) · [dt-dimension-norm](../notes/dt-dimension-norm.md) · [dt-compact-counterexample](../notes/dt-compact-counterexample.md)


---

# 开球唯一生成拓扑

ID: `dt-w1-3` · Week 1 · exercise

题目：证明 metric space 的开球构成唯一一个拓扑的 basis。

步骤 1：每个 $x$ 属于 $B_1(x)$，所以开球覆盖 $X$。

步骤 2：若 $x\in B_r(a)\cap B_s(b)$，令 $\varepsilon=\min(r-d(x,a),s-d(x,b))>0$。三角不等式给出 $B_\varepsilon(x)\subset B_r(a)\cap B_s(b)$。

步骤 3：令 $\tau$ 为任意开球的并（允许空并）。它包含 $\varnothing,X$，对任意并封闭。若 $U,V\in\tau$，对每个 $x\in U\cap V$ 取步骤 2 的小球，得到 $U\cap V$ 是开球的并。因此 $\tau$ 为拓扑，开球为基。

步骤 4：任何以这些球为基的拓扑，其每个开集恰是球的并，故必为 $\tau$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.3; DiffTop2026.pdf

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-topology](../notes/dt-topology.md) · [dt-metric](../notes/dt-metric.md) · [dt-separation](../notes/dt-separation.md) · [dt-induced-product](../notes/dt-induced-product.md) · [dt-dimension-norm](../notes/dt-dimension-norm.md) · [dt-compact-counterexample](../notes/dt-compact-counterexample.md)


---

# Product topology

ID: `dt-w1-4` · Week 1 · exercise

题目：定义 $X\times Y$ 的乘积拓扑。

解答：以全部 $U\times V$（$U\subset X,V\subset Y$ 开）为基生成拓扑。它们覆盖乘积，且 $(U_1\times V_1)\cap(U_2\times V_2)=(U_1\cap U_2)\times(V_1\cap V_2)$，满足基公理。这也是令两个投影连续的最粗拓扑：投影原像生成这些矩形；反过来两个投影在该拓扑中连续。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.4; DiffTop2026.pdf

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-topology](../notes/dt-topology.md) · [dt-metric](../notes/dt-metric.md) · [dt-separation](../notes/dt-separation.md) · [dt-induced-product](../notes/dt-induced-product.md) · [dt-dimension-norm](../notes/dt-dimension-norm.md) · [dt-compact-counterexample](../notes/dt-compact-counterexample.md)


---

# Norm topology 等于 product topology

ID: `dt-w1-u1` · Week 1 · exercise

题目：证明 $\mathbb R^n$ 的范数拓扑与乘积拓扑一致（原题未编号）。

步骤 1：先比较 Euclidean norm。给定 $q\in B_r(p)$，令 $\delta=(r-\|q-p\|_2)/\sqrt n>0$。以 $q$ 为中心、各边半长 $\delta$ 的开盒包含于 $B_r(p)$，因为 $\|z-q\|_2<\sqrt n\delta$。故每个欧氏球在乘积拓扑中开。

步骤 2：给定开盒 $\prod(a_i,b_i)$ 中的点 $p$，取 $r=\min_i(p_i-a_i,b_i-p_i)>0$；由 $|z_i-p_i|\le\|z-p\|_2$ 得 $B_r(p)$ 包含于该开盒。故两个拓扑相等。

步骤 3：任意范数 $N$ 满足 $N(v)\le\sum |v_i|N(e_i)\le C\|v\|_2$，其中 $C=(\sum N(e_i)^2)^{1/2}$。于是 $|N(v)-N(w)|\le C\|v-w\|_2$，故 $N$ 对欧氏拓扑连续。单位球面紧，$N$ 在其上取得正最小值 $c>0$，齐次性给出 $c\|v\|_2\le N(v)$。这两个不等式说明两类范数球在每个点互相细化，拓扑相等。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, 未编号问题 1.u1; DiffTop2026.pdf

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-topology](../notes/dt-topology.md) · [dt-metric](../notes/dt-metric.md) · [dt-separation](../notes/dt-separation.md) · [dt-induced-product](../notes/dt-induced-product.md) · [dt-dimension-norm](../notes/dt-dimension-norm.md) · [dt-compact-counterexample](../notes/dt-compact-counterexample.md)


---

# Compact 不蕴含 second countable

ID: `dt-w1-u2` · Week 1 · exercise

题目：紧空间是否一定第二可数（原题 Question）？

反例及证明：令 $D$ 为不可数离散集合，$X=D\cup\{\infty\}$；$D$ 的任意子集开，含 $\infty$ 的集合开当且仅当补集为有限集。包含 $\infty$ 的一个覆盖成员已覆盖除有限点外的全部空间，因此每个开覆盖有有限子覆盖。不同的 $D$ 中点用单点集分离，$d$ 与 $\infty$ 用 $\{d\}$ 与 $X\setminus\{d\}$ 分离，所以它甚至 Hausdorff。若有可数基 $\mathcal B$，对每个 $d$，开集 $\{d\}$ 必含一个包含 $d$ 的基元素，只能是 $\{d\}$。不可数多个单点都必须在基中，矛盾。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, 未编号问题 1.u2; DiffTop2026.pdf

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-topology](../notes/dt-topology.md) · [dt-metric](../notes/dt-metric.md) · [dt-separation](../notes/dt-separation.md) · [dt-induced-product](../notes/dt-induced-product.md) · [dt-dimension-norm](../notes/dt-dimension-norm.md) · [dt-compact-counterexample](../notes/dt-compact-counterexample.md)


---

# 非单射映射诱导的拓扑

ID: `dt-w1-u3` · Week 1 · exercise

题目：举非单射 $f:X\to Y$ 的 initial topology 的例子。

解答：取 $X=\mathbb R^2,Y=\mathbb R,f(x,y)=x$。最粗拓扑恰为 $\{U\times\mathbb R:U\subset\mathbb R\text{ 开}\}$，因为这是所有 $f^{-1}(U)$，而原像保持任意并、有限交。任何使 $f$ 连续的拓扑都必须包含它。点 $(0,0),(0,1)$ 的开邻域完全相同，所以该拓扑不是 Hausdorff，也不是通常的平面拓扑。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, 未编号问题 1.u3; DiffTop2026.pdf

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-topology](../notes/dt-topology.md) · [dt-metric](../notes/dt-metric.md) · [dt-separation](../notes/dt-separation.md) · [dt-induced-product](../notes/dt-induced-product.md) · [dt-dimension-norm](../notes/dt-dimension-norm.md) · [dt-compact-counterexample](../notes/dt-compact-counterexample.md)


---

# 连通局部欧氏空间的维数恒定

ID: `dt-w1-u4` · Week 1 · exercise

题目：在非空连通空间上，各点具有可能不同维数的欧氏邻域；用 Theorem 1.5 证明维数恒定。

步骤 1：若两个这样的邻域相交，在交点附近的非空开交集中，两张坐标图分别给出维数 $m,n$ 的局部欧氏结构。维数不变性给出 $m=n$，故每点的局部维数定义良好。

步骤 2：令 $X_n$ 为局部维数为 $n$ 的点集。一张 $n$ 维图内每点维数均为 $n$，故 $X_n$ 开。其补集为其他 $X_m$ 的并，也开。

步骤 3：非空连通性使某个非空 $X_n$ 必为全空间，因此维数恒为 $n$。若 $X=\varnothing$，则按约定任意维数皆可，不存在唯一维数；原题的非空情形才有此唯一性。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, 未编号问题 1.u4; DiffTop2026.pdf

## 关联

[dt-week-01](../notes/dt-week-01.md) · [dt-topology](../notes/dt-topology.md) · [dt-metric](../notes/dt-metric.md) · [dt-separation](../notes/dt-separation.md) · [dt-induced-product](../notes/dt-induced-product.md) · [dt-dimension-norm](../notes/dt-dimension-norm.md) · [dt-compact-counterexample](../notes/dt-compact-counterexample.md)
