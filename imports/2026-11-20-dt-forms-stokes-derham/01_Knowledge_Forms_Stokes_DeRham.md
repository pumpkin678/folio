---
id: DT-K-010
subject: 微分拓扑
type: knowledge
topic: Definitions and Theorems for Differential Forms, Stokes and de Rham
status: reference
roadmap: DT-RM-010
tags:
  - definitions
  - theorems
  - differential-forms
  - stokes-theorem
related:
  - DT-RM-010
  - DT-P-010
---

# DT-K-010 · 主线定义与定理速查

[返回 Roadmap](./00_Roadmap_Forms_Stokes_DeRham.md) · [证明与例子任务](./02_Practice_Forms_Stokes_DeRham.md)

## I. 从光滑函数到切/余切空间

### DT-D001 · Smooth functions and germs

设 $M$ 为 Hausdorff、second-countable 的 $n$ 维光滑流形，$A=C^\infty(M,\mathbb R)$。固定 $p\in M$。在 $p$ 的邻域上定义的光滑函数按“在某个更小邻域上相等”取等价类，得到函数芽环 $A_p=C^\infty_{M,p}$。

### DT-D002 · Local ring and maximal ideal

令 $\mathfrak m_p=\{[f]_p\in A_p:f(p)=0\}$，则它是 $A_p$ 的唯一极大理想；$A_p/\mathfrak m_p\cong\mathbb R$。理想平方 $\mathfrak m_p^2$ 是所有有限和 $\sum_j f_jg_j$（$f_j,g_j\in\mathfrak m_p$）组成的理想。

### DT-D003 · Cotangent space from local algebra

$$
T_p^*M:=\mathfrak m_p/\mathfrak m_p^2,\qquad
d_pf=[f-f(p)]\in T_p^*M.
$$

这里 $d_p(fg)=f(p)d_pg+g(p)d_pf$。坐标 $x^1,\ldots,x^n$ 给出基 $(dx^1)_p,\ldots,(dx^n)_p$，且 $d_pf=\sum_i\partial_i f(p)(dx^i)_p$。

### DT-D004 · Point derivation and tangent space

$$
T_pM:=(T_p^*M)^*,
\quad \operatorname{Der}_p(A_p,\mathbb R)=\{D:A_p\to\mathbb R\text{ real-linear}:D(fg)=f(p)Dg+g(p)Df\}.
$$

**定理**：自然同构 $T_pM\cong\operatorname{Der}_p(A_p,\mathbb R)$。在坐标中有 $\partial_i|_p$ 与 $(dx^i)_p$ 互为对偶基。

## II. 丛、截面和微分形式

### DT-D005 · Smooth vector bundle and section

一个 rank-$r$ smooth vector bundle 是光滑满射 $\pi:E\to M$，每个纤维 $E_p$ 为 $r$ 维向量空间，并且每点附近存在光滑纤维线性局部平凡化 $\pi^{-1}(U)\cong U\times\mathbb R^r$。光滑截面 $s:M\to E$ 满足 $\pi\circ s=\operatorname{id}_M$；截面空间记为 $\Gamma(E)$。

### DT-D006 · Tangent bundle and cotangent bundle

$$
TM=\coprod_{p\in M}T_pM,\qquad T^*M=\coprod_{p\in M}T_p^*M.
$$

借助局部基 $\partial_i|_p$、$(dx^i)_p$ 给它们光滑向量丛结构。向量场是 $\Gamma(TM)$ 的元素，1-forms 是 $\Gamma(T^*M)$ 的元素。

### DT-D007 · Exterior powers and differential forms

$\Lambda^kV$ 为向量空间 $V$ 的第 $k$ 个外幂；$\Lambda^0V=\mathbb R$。定义

$$
\Omega^k(M)=\Gamma(\Lambda^kT^*M)
\cong\operatorname{Alt}^k_{C^\infty(M)}(\Gamma(TM),C^\infty(M)).
$$

其中 $\Omega^0(M)=C^\infty(M)$，$\Omega^k(M)=0$（$k>n$）。

### DT-D008 · Wedge product and pullback

对 $\alpha\in\Omega^k$、$\beta\in\Omega^\ell$，其外积 $\alpha\wedge\beta\in\Omega^{k+\ell}$ 满足 $\alpha\wedge\beta=(-1)^{k\ell}\beta\wedge\alpha$。光滑映射 $F:N\to M$ 的形式拉回由

$$
(F^*\omega)_p(v_1,\dots,v_k)=\omega_{F(p)}(dF_pv_1,\dots,dF_pv_k)
$$

定义。

### DT-D009 · Exterior derivative and CDGA

存在唯一 $\mathbb R$-线性 degree $+1$ 算子 $d:\Omega^k(M)\to\Omega^{k+1}(M)$，对 $f\in\Omega^0$ 有 $df(X)=X(f)$，并满足

$$
d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^k\alpha\wedge d\beta,
\qquad d^2=0.
$$

局部地 $d(\sum_I a_I dx^I)=\sum_I da_I\wedge dx^I$，并且 $F^*d=dF^*$。三元组 $(\Omega^\bullet(M),\wedge,d)$ 为 commutative differential graded algebra（CDGA）。

## III. Orientation and integration

### DT-D010 · Orientation by a nowhere-vanishing top form

$M$ 可定向当且仅当存在 $\mu\in\Omega^n(M)$，满足对所有 $p$ 有 $\mu_p\ne0$。给定这样的 $\mu$，有序基 $(v_1,\ldots,v_n)$ 是正定向的当且仅当 $\mu_p(v_1,\ldots,v_n)>0$。

两个处处非零的最高次形式 $\mu,\nu$ 给出相同定向当且仅当 $\nu=f\mu$，其中 $f:M\to(0,\infty)$ 光滑。$\Lambda^nT^*M$ 称为 determinant line bundle；$M$ 可定向当且仅当它平凡。

**注意**：这里必须是最高次 $n$-form；2-form 只有在二维或具备额外非退化条件时才直接相关。

### DT-D011 · Manifold with boundary and its orientation

$n$ 维带边流形局部同胚并光滑相容于半空间 $\mathbb H^n=\{x_n\ge0\}$；边界 $\partial M$ 由映到 $x_n=0$ 的点组成。若 $M$ 有定向 $\mu$，在 $\partial M$ 的向外向量场 $N$ 确定其诱导定向：使 $(N,v_1,\ldots,v_{n-1})$ 在 $M$ 中为正定向的边界基为正定向（outward normal first）。形式上可由 $\iota_N\mu|_{\partial M}$ 表示。

### DT-D012 · Integration and compact support

微分形式 $\omega$ 的 support 是 $\overline{\{p:\omega_p\ne0\}}$。若 support 紧致，称 compactly supported。对定向 $n$-流形上的紧支撑 $n$-form，先在正定向坐标图中定义积分，再用 partition of unity 拼接；积分不依赖局部坐标和单位分解的选择。

### DT-T001 · Generalized Stokes theorem

设 $M$ 是紧致定向 $n$ 维光滑带边流形，$\eta\in\Omega^{n-1}(M)$，则

$$
\int_M d\eta=\int_{\partial M}\eta.
$$

非紧情形，在 $\eta$ 具有紧支撑时同样成立。证明主线：局部边界半空间中的 FTC，加上单位分解和边界定向符号。光滑奇异单形的相应版本通过对标准单形（带角空间）的 Stokes 公式得到。

## IV. de Rham cohomology and theorem

### DT-D013 · Cochain complex / cocycles / coboundaries

Cochain complex $(C^\bullet,d)$ 是一列 $C^k\xrightarrow{d^k}C^{k+1}$，其中 $d^{k+1}d^k=0$。定义 $Z^k=\ker d^k$，$B^k=\operatorname{im}d^{k-1}$，$H^k(C)=Z^k/B^k$。

### DT-D014 · de Rham complex and cohomology

$$
0\to\Omega^0(M)\xrightarrow d\cdots\xrightarrow d\Omega^n(M)\to0,
\qquad H_{\mathrm{dR}}^k(M)=\ker d_k/\operatorname{im}d_{k-1}.
$$

若 $d\omega=0$，称 $\omega$ closed；若 $\omega=d\eta$，称 exact。由 $d^2=0$，exact 必然 closed。

### DT-D015 · Smooth singular chains and cochains

光滑奇异 $k$-单形是光滑映射 $\sigma:\Delta^k\to M$（在角点附近要求适当的光滑延拓）；以其为基生成实链群 $C_k^\infty(M;\mathbb R)$，边界 $\partial\sigma=\sum_{i=0}^k(-1)^i\sigma\circ\iota_i$，满足 $\partial^2=0$。对偶复形为 $C^k_\infty(M)=\operatorname{Hom}(C_k^\infty(M;\mathbb R),\mathbb R)$，$\delta\varphi=\varphi\circ\partial$。

### DT-T002 · Integration is a cochain map

以 $I(\omega)(\sigma)=\int_{\Delta^k}\sigma^*\omega$ 定义 $I:\Omega^k(M)\to C^k_\infty(M)$。Stokes 给出

$$
I(d\omega)=\delta I(\omega).
$$

故 $I$ 诱导上同调映射。注意这是 Stokes 的直接推论，不等于已经证明该映射是同构。

### DT-T003 · Poincaré lemma

若 $U\subseteq\mathbb R^n$ 是星形开集，则 $H_{\mathrm{dR}}^k(U)=0$（$k>0$），而 $H_{\mathrm{dR}}^0(U)\cong\mathbb R$。可借助径向收缩的 chain homotopy 证明。

### DT-T004 · de Rham theorem

对光滑流形 $M$，积分映射诱导自然同构

$$
H_{\mathrm{dR}}^k(M)\overset{\cong}{\longrightarrow}H_{\mathrm{sing}}^k(M;\mathbb R).
$$

一种证明路线是 Poincaré lemma + Mayer–Vietoris + 局部到整体的比较（或 sheaf 论证）。

## 易错点速查

1. $\mathfrak m_p/\mathfrak m_p^2$ 里的 $\mathfrak m_p$ 是在函数芽环中定义的；而 $C^\infty(M)_{\mathfrak m_p}$ 与芽环在通常光滑流形假设下可自然同构，但证明需要 bump functions。
2. $T^*M$ 是不交并加上光滑丛结构，并非只有集合层面的并。
3. 定向是非零 top-form 的正比例等价类，而非唯一的一张指定 $n$-form。
4. 一般 nowhere-zero 2-form 不会自动确定高维流形定向。
5. 定义 $H_{\mathrm{dR}}$ 不需要先证明 Stokes；但比较奇异上同调的积分映射需要 Stokes。
6. $I\circ d=\delta\circ I$ 不自动意味着 $I$ 是 quasi-isomorphism；还需 de Rham theorem 的证明。
