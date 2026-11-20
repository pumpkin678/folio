# 辛几何 · Symplectic Linear Algebra

> Folio Unit 01 · 2026-11-11 · 来源：Ana Cannas da Silva, *Lectures on Symplectic Geometry*, Homework 1, p. 8。

## 学习索引

共 13 个定义、7 个定理、6 个例子、3 道已完成作业；没有个人错题。

## 定义

### SPG-DEF-001 · 反对称双线性型

### Definition
设 $V$ 为有限维实向量空间。双线性映射 $\Omega:V\times V\to\mathbb R$ 称为 **skew-symmetric**，若
$$
\Omega(u,v)=-\Omega(v,u)\qquad (u,v\in V).
$$
因此 $\Omega(v,v)=0$。在特征不为 $2$ 的域上，skew-symmetric 与 alternating 等价。

### Intuition
$\Omega(u,v)$ 测量的是带方向的二元配对，而不是向量的长度或夹角。

### SPG-DEF-002 · 非退化性

### Definition
双线性型 $\Omega$ 非退化指
$$
\bigl(\forall w\in V,\ \Omega(v,w)=0\bigr)\ \Longrightarrow\ v=0.
$$
等价于线性映射
$$
\Omega^\flat:V\to V^*,\qquad v\mapsto\Omega(v,\cdot)
$$
是同构（有限维情形）。

### Check
若 $\Omega$ 在某一基下的矩阵为 $J$，则非退化当且仅当 $\det J\ne0$。

### SPG-DEF-003 · 辛向量空间

### Definition
**Symplectic vector space** 是一对 $(V,\Omega)$，其中 $V$ 是有限维实向量空间，$\Omega:V\times V\to\mathbb R$ 是非退化的 skew-symmetric bilinear form。

### Properties
由 symplectic basis normal form，$\dim V=2n$ 必为偶数。向量空间上的这一概念不要求 $d\Omega=0$；闭性只在流形上的微分形式语境才有意义。

### SPG-DEF-004 · 辛基

### Definition
$(V^{2n},\Omega)$ 的基 $e_1,\ldots,e_n,f_1,\ldots,f_n$ 是 **symplectic basis**，若
$$
\Omega(e_i,e_j)=0,\quad \Omega(f_i,f_j)=0,\quad \Omega(e_i,f_j)=\delta_{ij}.
$$
在这组基中
$$
[\Omega]=J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}.
$$

### SPG-DEF-005 · 辛正交补

### Definition
对线性子空间 $Y\subseteq V$，定义
$$
Y^\Omega=\{v\in V:\Omega(v,y)=0\ \forall y\in Y\}.
$$
这是线性子空间。它与欧氏内积正交补不同：辛正交补**可能与 $Y$ 有非零交集**。

### Algebraic representation
若 $\Omega(u,v)=u^T Jv$ 且 $Y=\operatorname{Im}B$，则
$$
Y^\Omega=\ker(B^T J).
$$
这里 $B$ 的列是 $Y$ 的一组生成向量。

### SPG-DEF-006 · 辛子空间

### Definition
$Y\subseteq V$ 是 **symplectic subspace** 若限制 $\Omega|_{Y\times Y}$ 非退化。

### Equivalent criteria
$$
Y\cap Y^\Omega=\{0\}\iff V=Y\oplus Y^\Omega.
$$
请注意：symplectic subspace 不等同于 isotropic subspace。

### SPG-DEF-007 · 各向同性子空间

### Definition
$Y\subseteq(V,\Omega)$ 称为 **isotropic**，若
$$
\Omega|_{Y\times Y}=0\quad\iff\quad Y\subseteq Y^\Omega.
$$
即 $Y$ 中任意两向量的辛配对为零。

### Dimension and matrix test
$$
\dim Y\le\tfrac12\dim V.
$$
若 $Y=\operatorname{Im}B$，则 $Y$ isotropic 当且仅当 $B^TJB=0$。

### Examples
$\operatorname{span}\{e_1,\ldots,e_k\}$（$0\le k\le n$）是 isotropic；任意一维子空间也是 isotropic。

### SPG-DEF-008 · 余各向同性子空间

### Definition
$Y\subseteq(V,\Omega)$ 称为 **coisotropic**，若
$$
Y^\Omega\subseteq Y.
$$
等价地，$Y^\Omega$ 是 isotropic subspace，因为 $(Y^\Omega)^\Omega=Y$。

### Dimension and representation
必有 $\dim Y\ge\tfrac12\dim V$。在标准坐标下
$$
Y=\{(q,p):p_1=\cdots=p_k=0\}\quad(0\le k\le n)
$$
是 coisotropic，其正交补为 $\operatorname{span}\{e_1,\ldots,e_k\}$。

若 $Y=\ker A$，其中 $A$ 为满行秩矩阵，且 $\Omega(u,v)=u^T Jv$，则
$$
Y\text{ coisotropic}\iff AJ^{-1}A^T=0.
$$

### SPG-DEF-009 · 拉格朗日子空间

### Definition (依照原书 Homework 1 Problem 7)
在 $(V^{2n},\Omega)$ 中，**Lagrangian subspace** 指一个 isotropic 子空间 $Y$，且
$$
\dim Y=n=\tfrac12\dim V.
$$

### Equivalent characterizations
$$
\boxed{Y\text{ Lagrangian}\iff (Y\text{ isotropic and coisotropic})\iff Y=Y^\Omega.}
$$

### Interpretation
Lagrangian = **maximal possible dimension of isotropic subspace**（不要误读为仅仅“任意极大”而不考虑维数证明）。

### SPG-DEF-010 · 辛同胚（线性）

### Definition
$\Phi:(V,\Omega)\to(V',\Omega')$ 是 **linear symplectomorphism**，若 $\Phi$ 是线性同构且
$$
\Omega'(\Phi u,\Phi v)=\Omega(u,v)\quad\forall u,v\in V.
$$
在同一标准基下，矩阵条件为 $S^TJS=J$。

### Remark
满足这一条件的可逆矩阵组成 symplectic group $\operatorname{Sp}(2n,\mathbb R)$。

### SPG-DEF-011 · 辛流形与辛形式

### Definition
**Symplectic manifold** $(M^{2n},\omega)$ 是光滑流形及一个 2-form $\omega\in\Omega^2(M)$，使得
1. $d\omega=0$ (**closed**);
2. 对每个 $x\in M$，双线性型 $\omega_x$ 在 $T_xM$ 上 **nondegenerate**。

### Difference from linear algebra
线性辛向量空间只要求非退化的 skew-symmetric form；流形还需要 $d\omega=0$。

### Local model
$(\mathbb R^{2n},\omega_0)$，$\omega_0=\sum_{i=1}^n dq_i\wedge dp_i$。

### SPG-DEF-012 · 辛微分同胚

### Definition
辛流形间的光滑映射 $\varphi:(M,\omega)\to(M',\omega')$ 为 **symplectomorphism** 若它是 diffeomorphism 且
$$
\varphi^*\omega'=\omega.
$$
即 $\omega'_{\varphi(x)}(d\varphi_xu,d\varphi_xv)=\omega_x(u,v)$。

### SPG-DEF-013 · 拉格朗日子流形

### Definition
设 $(M^{2n},\omega)$ 为辛流形，$i:L\hookrightarrow M$ 为嵌入子流形。称 $L$ 为 **Lagrangian submanifold**，若
$$
T_xL=(T_xL)^{\omega_x}\quad\forall x\in L.
$$
等价于
$$
\dim L=n,\qquad i^*\omega=0.
$$

### Example and connection
在余切丛 $T^*X$ 的典范辛形式下，zero section 是 Lagrangian；这也是后续 Fukaya category 的基本几何对象之一。

## 定理

### SPG-THM-001 · 辛基标准形与偶维性

### Statement
任意有限维 symplectic vector space $(V,\Omega)$ 都存在 symplectic basis $e_1,\ldots,e_n,f_1,\ldots,f_n$。特别地 $\dim V=2n$，且矩阵为
$$J=\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}.$$

### Proof sketch
取 $e_1\ne0$。由非退化性存在 $f_1$ 使 $\Omega(e_1,f_1)=1$。令 $U_1=\operatorname{span}\{e_1,f_1\}$，则 $\Omega|_{U_1}$ 非退化，且 $V=U_1\oplus U_1^\Omega$。在 $U_1^\Omega$ 上归纳，直到维数为零。

### SPG-THM-002 · 辛正交补维数公式与双重正交

### Statement
设 $(V,\Omega)$ 为有限维 symplectic vector space，$Y\subseteq V$ 为任意线性子空间，则
$$
\boxed{\dim Y+\dim Y^\Omega=\dim V},\qquad\boxed{(Y^\Omega)^\Omega=Y}.
$$

### Proof
映射 $\Phi:V\to Y^*$，$\Phi(v)(y)=\Omega(v,y)$。由于 $\Omega^\flat:V\to V^*$ 是同构，而 restriction $V^*\twoheadrightarrow Y^*$ 是满射，$\Phi$ 满射。且 $\ker\Phi=Y^\Omega$。由 rank-nullity，
$$\dim V=\dim Y^\Omega+\dim Y^*=\dim Y^\Omega+\dim Y.$$
对 $y\in Y$、$v\in Y^\Omega$，有 $\Omega(y,v)=-\Omega(v,y)=0$，所以 $Y\subseteq(Y^\Omega)^\Omega$。对 $Y^\Omega$ 再使用维数公式，得 $\dim (Y^\Omega)^\Omega=\dim Y$。两者相等。

### SPG-THM-003 · 各向同性维数上界

### Statement
若 $\dim V=2n$，且 $Y\subseteq V$ isotropic，则 $\dim Y\le n$。

### Proof
$Y$ isotropic 等价于 $Y\subseteq Y^\Omega$，于是
$$\dim Y\le\dim Y^\Omega=2n-\dim Y.$$
因此 $2\dim Y\le2n$，即 $\dim Y\le n$。

### SPG-THM-004 · Lagrangian 的三个等价刻画

### Statement
设 $\dim V=2n$，$Y\subseteq V$，下列三条件等价：
1. $Y$ 为 Lagrangian：$Y$ isotropic 且 $\dim Y=n$；
2. $Y$ 同时 isotropic 和 coisotropic；
3. $Y=Y^\Omega$。

### Proof
**(1) $\Rightarrow$ (3).** 由 isotropic 得 $Y\subseteq Y^\Omega$，而维数公式给 $\dim Y^\Omega=2n-n=n=\dim Y$，故相等。

**(3) $\Rightarrow$ (2).** 等式同时蕴含 $Y\subseteq Y^\Omega$ 及 $Y^\Omega\subseteq Y$。

**(2) $\Rightarrow$ (1).** 两个包含关系给出 $Y=Y^\Omega$，故 $\dim Y=2n-\dim Y$，于是 $\dim Y=n$；再结合 isotropic 性质即知是 Lagrangian。

### SPG-THM-005 · 辛子空间的三个等价刻画

### Statement
对 $Y\subseteq V$：
$$
\Omega|_Y\text{ nondegenerate}\iff Y\cap Y^\Omega=\{0\}\iff V=Y\oplus Y^\Omega.
$$

### Proof
$\Omega|_Y$ 的 radical 正是 $Y\cap Y^\Omega$，故前两个条件等价。结合 $\dim Y+\dim Y^\Omega=\dim V$，交集为零当且仅当直和为整个 $V$。

### SPG-THM-006 · 各向同性与余各向同性的对偶

### Statement
$$
Y\text{ isotropic}\iff Y^\Omega\text{ coisotropic}.
$$
且 $\dim Y^\Omega\ge n$ 当 $Y$ isotropic。

### Proof
$Y$ isotropic 意味着 $Y\subseteq Y^\Omega$。由 $(Y^\Omega)^\Omega=Y$，这等价于 $(Y^\Omega)^\Omega\subseteq Y^\Omega$，即 $Y^\Omega$ coisotropic。

### SPG-THM-007 · Darboux 定理（预习）

### Statement (preview only)
对于任意 $2n$ 维 symplectic manifold $(M,\omega)$ 与 $p\in M$，存在 $p$ 邻域的坐标 $(q_1,\ldots,q_n,p_1,\ldots,p_n)$，使得
$$
\omega=\sum_{i=1}^n dq_i\wedge dp_i.
$$
这说明辛几何**没有局部的曲率型不变量**，其本质信息更多地体现在全局。

### Status
仅作后续学习连接，今天不要求证明。

## 例子

### SPG-EX-001 · 标准辛空间与矩阵表示

在 $\mathbb R^{2n}$ 中用 $(q_1,\ldots,q_n,p_1,\ldots,p_n)$ 作坐标，定义
$$\omega_0=\sum_{i=1}^n dq_i\wedge dp_i.$$
把向量写为 $u=(q,p)$、$v=(Q,P)$，则
$$\omega_0(u,v)=q\cdot P-p\cdot Q=u^T\begin{pmatrix}0&I_n\\-I_n&0\end{pmatrix}v.$$
基 $e_i=\partial_{q_i}$、$f_i=\partial_{p_i}$ 构成 symplectic basis。

### SPG-EX-002 · R⁴ 中四类子空间

在 $V=\mathbb R^4$，$\omega=dq_1\wedge dp_1+dq_2\wedge dp_2$，取 $e_i=\partial_{q_i}$、$f_i=\partial_{p_i}$：

| $Y$ | $Y^\omega$ | 类型 |
|---|---|---|
| $\langle e_1\rangle$ | $\langle e_1,e_2,f_2\rangle$ | isotropic，非 Lagrangian |
| $\langle e_1,e_2\rangle$ | $\langle e_1,e_2\rangle$ | Lagrangian |
| $\langle e_1,e_2,f_2\rangle$ | $\langle e_1\rangle$ | coisotropic，非 Lagrangian |
| $\langle e_1,f_1\rangle$ | $\langle e_2,f_2\rangle$ | symplectic，既非 isotropic 也非 coisotropic |

最后一行表明：不是所有子空间都属于前三类。

### SPG-EX-003 · 标准 coisotropic 约束子空间

对于 $0\le k\le n$，设
$$Y=\{(q,p)\in\mathbb R^{2n}:p_1=\cdots=p_k=0\}.$$
那么
$$Y=\operatorname{span}\{e_1,\ldots,e_n,f_{k+1},\ldots,f_n\},$$
$$Y^\omega=\operatorname{span}\{e_1,\ldots,e_k\}\subseteq Y.$$
故 $Y$ coisotropic，$\dim Y=2n-k$；当 $k=n$ 时它也是 Lagrangian。任意超平面（$k=1$，经辛基变换）都是 coisotropic。

### SPG-EX-004 · 对称线性映射的图像是 Lagrangian

设 $A:\mathbb R^n\to\mathbb R^n$ 为线性映射，取
$$L_A=\{(q,Aq):q\in\mathbb R^n\}\subseteq\mathbb R^{2n}.$$
因为 $\dim L_A=n$，只需验证 isotropic：对 $q,Q\in\mathbb R^n$，
$$\omega_0((q,Aq),(Q,AQ))=q^TAQ-(Aq)^TQ=q^T(A-A^T)Q.$$
所以
$$L_A\text{ Lagrangian}\iff A=A^T.$$
这为后续 generating functions 与 Lagrangian graphs 做准备。

### SPG-EX-005 · R² 中的全部直线都是 Lagrangian

在 $(\mathbb R^2,dq\wedge dp)$ 中，每个一维子空间 $L=\operatorname{span}\{v\}$ 都 isotropic，因为 $\omega(v,v)=0$。又 $\dim L=1=\frac12\dim\mathbb R^2$，因此每条过原点的直线都是 Lagrangian；相反，整个 $\mathbb R^2$ 是 symplectic subspace，但非 isotropic。

### SPG-EX-006 · 余切丛零截面是 Lagrangian

设 $X$ 是 $n$ 维流形，局部坐标 $q_i$，在 $T^*X$ 上用纤维坐标 $p_i$，典范辛形式为
$$\omega_{\mathrm{can}}=\sum_i dq_i\wedge dp_i.$$
zero section $X_0=\{p_1=\cdots=p_n=0\}$ 维数为 $n$。沿零截面的切向量没有 $p$ 方向分量，故 $\omega_{\mathrm{can}}|_{TX_0}=0$。所以 $X_0$ 为 Lagrangian submanifold。

*这是后续章节的提前示例，不是 Homework 1 的额外题目。*

## 习题与解答

### SPG-HW-001 · Homework 1 · Problem 1：辛正交补维数

### Problem (paraphrase)
给定 $(V,\Omega)$ 的子空间 $Y$，证明
$$\dim Y+\dim Y^\Omega=\dim V.$$

### Key hint
考虑 $\Phi:V\to Y^*$，$\Phi(v)(y)=\Omega(v,y)$；计算核与像。

### Solution
由 $\Omega$ 非退化，$\Omega^\flat:V\xrightarrow{\sim}V^*$ 是同构；限制映射 $\rho:V^*\to Y^*$ 满射，因为 $Y$ 上的任意线性泛函都可延拓到 $V$。于是 $\Phi=\rho\circ\Omega^\flat$ 满射，且
$$\ker\Phi=\{v:\Omega(v,y)=0\ \forall y\in Y\}=Y^\Omega.$$
利用 rank-nullity，
$$\dim V=\dim\ker\Phi+\dim\operatorname{Im}\Phi=\dim Y^\Omega+\dim Y^*=\dim Y^\Omega+\dim Y.$$
证毕。

### Personal review
- **状态**：已完成（按学习记录）。
- **个人错题**：无。
- **复习定位**：这是非退化性 $V\simeq V^*$ 与 rank-nullity 的直接应用。

### SPG-HW-005 · Homework 1 · Problem 5：isotropic 维数上界

### Problem (paraphrase)
设 $Y\subseteq(V,\Omega)$ 为 isotropic，证明
$$\dim Y\le\tfrac12\dim V.$$

### Solution
由 isotropic 定义，$Y\subseteq Y^\Omega$。于是
$$\dim Y\le\dim Y^\Omega=\dim V-\dim Y,$$
其中等号使用 Problem 1。移项得 $2\dim Y\le\dim V$，证毕。

### Personal review
- **状态**：已完成（按学习记录）。
- **个人错题**：无。
- **复习定位**：关键只有包含关系与维数公式。

### SPG-HW-007 · Homework 1 · Problem 7：Lagrangian 等价刻画

### Problem (paraphrase)
依原书定义，$Y$ Lagrangian 当且仅当 $Y$ isotropic 且 $\dim Y=\frac12\dim V$。证明以下三个条件等价：
1. $Y$ Lagrangian；
2. $Y$ 同时 isotropic 和 coisotropic；
3. $Y=Y^\Omega$。

### Solution
设 $\dim V=2n$。

**1 $\Rightarrow$ 3.** 因为 $Y$ isotropic，$Y\subseteq Y^\Omega$。又 $\dim Y=n$，由 Problem 1，$\dim Y^\Omega=2n-n=n$，因此 $Y=Y^\Omega$。

**3 $\Rightarrow$ 2.** $Y=Y^\Omega$ 同时给出 $Y\subseteq Y^\Omega$ 与 $Y^\Omega\subseteq Y$，分别是 isotropic、coisotropic 的定义。

**2 $\Rightarrow$ 1.** 两个包含关系给出 $Y=Y^\Omega$，于是由 Problem 1 得 $2\dim Y=2n$，即 $\dim Y=n$。结合 $Y$ isotropic，正是 Lagrangian 定义。

### Personal review
- **状态**：已完成（按学习记录）。
- **个人错题**：无。
- **复习定位**：牢记原书以“isotropic + 半维”作定义，$Y=Y^\Omega$ 是等价刻画，不要混淆逻辑顺序。

## 来源与说明

- 原书：https://www.math.ist.utl.pt/~acannas/Books/lsg.pdf
- Problem 1、5、7 为原书真实编号；题干中文概述，完整解答为独立撰写。
- 用户无个人错题，本包没有虚构错题；一般易混点独立放在学习日志中。
