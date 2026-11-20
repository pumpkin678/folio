# Week 4 · 逆函数定理、水平集与球面

能把 Jacobian 假设搬到流形；写出 regular level 的 slice；计算球面换图。

# Immersion、submersion、embedding、regular value

ID: `dt-rank-embedding` · Week 4 · definition

光滑 $f:M^m\to N^n$：每点 $df_p$ 单射称 immersion；每点满射称 submersion；若 immersion 且 $f$ 是到像（子空间拓扑）的 homeomorphism，则称 smooth embedding。

$y\in N$ 为 regular value 指对每个 $p\in f^{-1}(y)$，$df_p$ 满射；空纤维也满足。Embedded submanifold $S^k\subset M^m$ 局部可在图中表示为 $\mathbb R^k\times0$ 与图像之交。仅“单射 immersion”并不足以保证 embedding，必须控制像的拓扑。

## 来源

- 为 Week 4 roadmap 编写的配套知识卡；原课程文件 W4DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-04](../notes/dt-week-04.md) · [dt-w4-0](../notes/dt-w4-0.md) · [dt-w4-1](../notes/dt-w4-1.md) · [dt-w4-2](../notes/dt-w4-2.md) · [dt-w4-3](../notes/dt-w4-3.md) · [dt-w4-4](../notes/dt-w4-4.md)


---

# Inverse function 与 constant rank theorem

ID: `dt-inverse-constant-rank` · Week 4 · theorem

Inverse function theorem：$df_p$ 同构，则 $f$ 在 $p$ 附近为到目标开邻域的 diffeomorphism。由欧氏版本推导见 4.1。

Constant rank theorem：若 $f:M^m\to N^n$ 在 $p$ 附近秩恒为 $r$，存在源目标坐标使 $f(u_1,\ldots,u_m)=(u_1,\ldots,u_r,0,\ldots,0)$。定理要求邻域内恒秩，不只是单点秩为 $r$。

Regular level set theorem：$y$ 为 regular value，则非空 $f^{-1}(y)$ 为 $m-n$ 维嵌入子流形，且 $T_p(f^{-1}(y))=\ker df_p$。切空间公式从 slice 坐标下的投影直接可见；4.2 给 Euclidean 源目标情况下的完整证明。

## 来源

- 为 Week 4 roadmap 编写的配套知识卡；原课程文件 W4DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-04](../notes/dt-week-04.md) · [dt-w4-0](../notes/dt-w4-0.md) · [dt-w4-1](../notes/dt-w4-1.md) · [dt-w4-2](../notes/dt-w4-2.md) · [dt-w4-3](../notes/dt-w4-3.md) · [dt-w4-4](../notes/dt-w4-4.md)


---

# 球面作为 regular level set

ID: `dt-level-sphere` · Week 4 · example

取 $f:\mathbb R^{n+1}\to\mathbb R$，$f(x)=\sum x_i^2$。$df_x(v)=2\langle x,v\rangle$，在 $f^{-1}(1)$ 上因 $x\ne0$ 满射，故 $S^n$ 是 $n$ 维嵌入子流形，$T_xS^n=x^\perp$。

球面点的单位长度约束不意味着坐标变换导数是单位矩阵。标准两张球极图过渡为 $T(u)=u/\|u\|^2$，定义于 $\mathbb R^n\setminus0$；
$$DT_u=\|u\|^{-2}I-2\|u\|^{-4}uu^T.$$
这是坐标域中变量 $u$ 的导数，$u$ 并非单位球面上的点。

## 来源

- 为 Week 4 roadmap 编写的配套知识卡；原课程文件 W4DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-04](../notes/dt-week-04.md) · [dt-w4-0](../notes/dt-w4-0.md) · [dt-w4-1](../notes/dt-w4-1.md) · [dt-w4-2](../notes/dt-w4-2.md) · [dt-w4-3](../notes/dt-w4-3.md) · [dt-w4-4](../notes/dt-w4-4.md)


---

# 光滑过渡推出维数恒定

ID: `dt-w4-0` · Week 4 · exercise

题目：连通空间有欧氏图，过渡为 diffeomorphism，直接证明各图维数相同。

勘误：须忽略空图域，否则可以加入任意维数的空图，原结论不成立。

步骤 1：非空交叠处，设过渡为 $F:\mathbb R^m\supset O\to P\subset\mathbb R^n$，逆为 $G$。链式法则给 $DG\,DF=I_m$ 和 $DF\,DG=I_n$。前式推出 $m\le n$，后式推出 $n\le m$，故 $m=n$。

步骤 2：固定一张非空图，取所有可经有限个非空图域交叠连接到它的图域之并 $C$。它开。任何未在其中的图域不与 $C$ 相交，否则也可连接，所以补集也是图域之并，开。

步骤 3：$C$ 非空，由连通性为全空间，每张非空图都与其中某图相交，故全部图维数相同。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.0; W4DiffTop2026.pdf

## 关联

[dt-week-04](../notes/dt-week-04.md) · [dt-rank-embedding](../notes/dt-rank-embedding.md) · [dt-inverse-constant-rank](../notes/dt-inverse-constant-rank.md) · [dt-level-sphere](../notes/dt-level-sphere.md)


---

# 从 Euclidean IFT 到 manifold IFT

ID: `dt-w4-1` · Week 4 · exercise

题目：从 Jacobian 版反函数定理推出切空间版及流形版。

步骤 1：在欧氏坐标基下 $d f_0(\partial_i)=\sum_j(\partial_i f^j)(0)\partial_j$，所以 $df_0$ 的矩阵正是 $Jf(0)$。线性同构等价于矩阵可逆，故 (i) 推出 (ii)。

步骤 2：对流形映射取以 $p,f(p)$ 为中心、原点为坐标值的图 $\varphi,\psi$，缩小源图以使其像在目标图域内。令 $F=\psi\circ f\circ\varphi^{-1}$。链式法则给
$$dF_0=d\psi_{f(p)}\circ df_p\circ(d\varphi_p)^{-1},$$
三个因子均同构，故 $DF_0$ 可逆。

步骤 3：由 (i) 取 $F:O\to P$ 为局部微分同胚。于是 $f:\varphi^{-1}(O)\to\psi^{-1}(P)$ 的逆为 $\varphi^{-1}\circ(F|_O)^{-1}\circ\psi$，光滑，得到 (iii)。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.1; W4DiffTop2026.pdf

## 关联

[dt-week-04](../notes/dt-week-04.md) · [dt-rank-embedding](../notes/dt-rank-embedding.md) · [dt-inverse-constant-rank](../notes/dt-inverse-constant-rank.md) · [dt-level-sphere](../notes/dt-level-sphere.md)


---

# Regular level set 的 slice

ID: `dt-w4-2` · Week 4 · exercise

题目修正：$f:\mathbb R^{n+k}\to\mathbb R^n$ 处处满秩，则非空纤维是 **$k$ 维**，局部 slice 为 $\mathbb R^k\times\{0\}\subset\mathbb R^{k+n}$。原文写 $n$ 维是笔误。

步骤 1：给 $p\in f^{-1}(y)$。满秩保证可重排源坐标为 $(u,v)\in\mathbb R^k\times\mathbb R^n$，使 $\partial f/\partial v(p)$ 可逆。

步骤 2：令 $H(u,v)=(u,f(u,v)-y)$。其导数为块矩阵
$$DH_p=\begin{pmatrix}I_k&0\\ *&\partial f/\partial v(p)\end{pmatrix},$$
可逆。反函数定理给邻域 $U,V$ 使 $H:U\to V$ 微分同胚。

步骤 3：对 $q\in U$，$f(q)=y$ 当且仅当 $H(q)$ 最后 $n$ 坐标为零，故 $H(U\cap f^{-1}(y))=V\cap(\mathbb R^k\times\{0\})$。这正是 embedded submanifold 的 slice 条件，维数 $k$。纤维空时按空子流形约定处理。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.2; W4DiffTop2026.pdf

## 关联

[dt-week-04](../notes/dt-week-04.md) · [dt-rank-embedding](../notes/dt-rank-embedding.md) · [dt-inverse-constant-rank](../notes/dt-inverse-constant-rank.md) · [dt-level-sphere](../notes/dt-level-sphere.md)


---

# 球面 graph atlas 与 stereographic atlas 相容

ID: `dt-w4-3` · Week 4 · exercise

题目：从四种球面结构中选两种，直接证明微分同胚。

选择：图像坐标与球极投影坐标。图像图在 $U_{i,\epsilon}=\{x\in S^2:\epsilon x_i>0\}$ 上删去第 $i$ 坐标，像为单位开圆盘；逆在第 $i$ 位补入 $\epsilon\sqrt{1-\|u\|^2}$，在圆盘中光滑。

北极投影 $s_N(x,y,z)=(x/(1-z),y/(1-z))$，其逆为
$$s_N^{-1}(u,v)=\frac{(2u,2v,u^2+v^2-1)}{1+u^2+v^2}.$$
南极投影 $s_S(x,y,z)=(x/(1+z),y/(1+z))$，逆为 $(2u,2v,1-u^2-v^2)/(1+u^2+v^2)$。

步骤 1：graph 坐标到 stereographic 坐标，是上述平方根逆图代入分式；在实际交叠上分母不为零，因此光滑。

步骤 2：stereographic 到 graph 坐标，是上述有理逆图后删去坐标，也光滑。

步骤 3：这些交叠覆盖球面，所以底层恒等映射在两个方向均光滑，给出所求 diffeomorphism。这里没有使用结构唯一性定理。全局极坐标因极点及经度接缝不能单独作为一张图。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.3; W4DiffTop2026.pdf

## 关联

[dt-week-04](../notes/dt-week-04.md) · [dt-rank-embedding](../notes/dt-rank-embedding.md) · [dt-inverse-constant-rank](../notes/dt-inverse-constant-rank.md) · [dt-level-sphere](../notes/dt-level-sphere.md)


---

# Antipodal quotient 与 RP2

ID: `dt-w4-4` · Week 4 · exercise

题目：证明 $S^2/\{\pm1\}\to\mathbb{RP}^2$ 为同胚。

步骤 1：包含映射与射影商映射复合 $S^2\to\mathbb{RP}^2$ 连续，且对反足识别恒定，故下降为连续 $F:S^2/\{\pm1\}\to\mathbb{RP}^2$。

步骤 2：归一化 $N(x)=x/\|x\|$ 连续。对任意 $\lambda\ne0$，$N(\lambda x)=\operatorname{sgn}(\lambda)N(x)$，所以其到反足商的复合在每条射影轨道上恒定。商泛性质给连续 $G:\mathbb{RP}^2\to S^2/\{\pm1\}$。

步骤 3：单位向量归一化不变；非零向量和其归一化张成相同直线。因此 $GF=\mathrm{id}$、$FG=\mathrm{id}$，故同胚。不需要提前使用 $\mathbb{RP}^2$ Hausdorff。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.4; W4DiffTop2026.pdf

## 关联

[dt-week-04](../notes/dt-week-04.md) · [dt-rank-embedding](../notes/dt-rank-embedding.md) · [dt-inverse-constant-rank](../notes/dt-inverse-constant-rank.md) · [dt-level-sphere](../notes/dt-level-sphere.md)
