---
id: DT-RM-010
subject: 微分拓扑
type: roadmap
topic: From Smooth Functions to Stokes and de Rham Cohomology
status: planned
track: differential-forms-stokes-derham
prerequisites:
  - 光滑流形与坐标图
  - 切映射与链式法则
  - 多重线性代数、外代数基础
tags:
  - differential-topology
  - cotangent-bundle
  - differential-forms
  - orientation
  - stokes-theorem
  - de-rham-cohomology
related:
  - DT-K-010
  - DT-P-010
---

# DT-RM-010 · 从光滑函数环到 Stokes 定理与 de Rham 上同调

> **定位**：微分拓扑 subject 中的专题主线（可挂在已有 Week 1–8 Roadmap 之后），不是替换原来的 Week 1–8 主线。  
> **学习方式**：Definition → Construction → Theorem → Example → Proof Check。  
> **知识卡**：[DT-K-010 · 定义与定理](./01_Knowledge_Forms_Stokes_DeRham.md)  
> **证明与例子任务**：[DT-P-010 · 练习清单](./02_Practice_Forms_Stokes_DeRham.md)

## A. 一页总览

```text
Smooth manifold M
  ↓ smooth functions
A = C∞(M)
  ↓ germs at p, maximal ideal
A_p, m_p = {f germ : f(p)=0}
  ↓ first-order quotient
T*_p M ≅ m_p / m_p²
  ↓ duality + gluing
T_p M, TM, T*M; sections Γ(TM), Γ(T*M)
  ↓ exterior powers / sections
Ω^k(M) = Γ(Λ^k T*M)
  ↓ exterior derivative
(Ω•(M), d), d²=0; a commutative DGA
  ├──────────────────────┐
  ↓                      ↓
nonzero n-form      integration of forms
  ↓                      ↑
orientation → oriented submanifolds, boundaries
  └─────────┬────────────┘
            ↓
Stokes: ∫_M dη = ∫_{∂M} η
            ↓  integration as a cochain map
H^k_dR(M)  →  H^k_sing(M; ℝ)
            ↓  Poincaré lemma + Mayer–Vietoris
           ≅  (de Rham theorem)
```

**两条核心线索**：

- **代数线**：$C^\infty(M)\to T_p^*M\to\Omega^\bullet(M)\xrightarrow{d}\Omega^{\bullet+1}(M)$；$d^2=0$ 允许取上同调。
- **几何线**：最高次非零形式决定 orientation；在定向的流形/链上积分；Stokes 表达 $d$ 与边界 $\partial$ 的相容性。

## B. 前置依赖

- [ ] 我能使用 charts / smooth atlases 与切映射 $dF_p$，并写出局部坐标表达。
- [ ] 我知道向量空间对偶、交替多线性映射、外幂 $\Lambda^kV$。
- [ ] 我知道环的极大理想、理想平方及商向量空间。
- [ ] 我知道 cochain complex、cocycle、coboundary 与 cohomology 的定义。

## C. 八个学习节点

### DT-RM-010.1 · Smooth Functions and Local Algebra

**目标**：仅从函数的局部代数识别一个点处的一阶信息。

**定义**：$A=C^\infty(M)$；函数芽 $A_p=C^\infty_{M,p}$；$\mathfrak m_p=\{[f]_p:f(p)=0\}$；理想平方 $\mathfrak m_p^2$。

**关键构造**：

$$
T_p^*M:=\mathfrak m_p/\mathfrak m_p^2,\qquad d_pf=[f-f(p)]\pmod{\mathfrak m_p^2}.
$$

**必须会证**：
1. $A_p$ 为局部环，剩余域 $A_p/\mathfrak m_p\cong\mathbb R$。
2. Hadamard lemma 给出 $d_pf=\sum_i\partial_i f(p)(dx^i)_p$，因而 $\dim T_p^*M=n$。
3. 可选：通过 bump functions 证明 $C^\infty(M)_{\mathfrak m_p}\cong C^\infty_{M,p}$（在通常光滑流形假设下）。

**验收**：能够解释为什么“模去 $\mathfrak m_p^2$”恰好保留一阶微分。

### DT-RM-010.2 · Tangent Spaces, Bundles and Sections

**目标**：从每个点的线性代数构造全局的光滑向量丛。

**定义**：$T_pM=(T_p^*M)^*$；点处 derivation；smooth vector bundle；local trivialization；smooth section。

**关键同构与构造**：

$$
T_pM\cong\operatorname{Der}_{\mathbb R}(A_p,\mathbb R),\qquad
TM=\coprod_{p\in M}T_pM,\quad T^*M=\coprod_{p\in M}T_p^*M.
$$

$$
\Gamma(TM)\cong\operatorname{Der}_{\mathbb R}(C^\infty(M),C^\infty(M)).
$$

**必须会证**：
1. 点处导子恰好消去常数和 $\mathfrak m_p^2$。
2. 局部坐标 $\alpha_p=\sum_ia_i(dx^i)_p$ 给出 $T^*M$ 的局部平凡化，并在坐标变换下光滑。
3. 验证 section 的 $\pi\circ s=\operatorname{id}_M$ 条件。

**验收**：会写 $X=\sum_iX^i\partial_i$、$\alpha=\sum_ia_i dx^i$ 并说明 $\alpha(X)$ 是函数。

### DT-RM-010.3 · Exterior Algebra and Differential Forms

**目标**：从余切丛得到分次交换代数。

**定义**：$\Lambda^kV$；$\Lambda^kT^*M$；differential $k$-form；wedge product；pullback $F^*$。

**关键公式**：

$$
\Omega^k(M):=\Gamma(\Lambda^kT^*M),\quad
\Omega^0(M)=C^\infty(M),\quad
\alpha\wedge\beta=(-1)^{k\ell}\beta\wedge\alpha.
$$

$$
(F^*\omega)_p(v_1,\dots,v_k)
=\omega_{F(p)}(dF_pv_1,\dots,dF_pv_k).
$$

**必须会证**：局部坐标展开 $\omega=\sum_Ia_I dx^I$；$F^*(\alpha\wedge\beta)=F^*\alpha\wedge F^*\beta$。

**验收**：能够计算 $F^*(x\,dy-y\,dx)$ 和一个 $2$-form 的 wedge product。

### DT-RM-010.4 · Exterior Derivative and de Rham Complex

**目标**：解释为什么 $\Omega^\bullet(M)$ 是一个 cochain complex，并且是 CDGA。

**定义/构造**：唯一的 degree $+1$ 算子 $d$，在函数上为通常微分，满足 graded Leibniz rule 与 $d^2=0$。

**关键公式**：

$$
d\left(\sum_Ia_I dx^I\right)=\sum_I da_I\wedge dx^I,
\qquad d(\alpha\wedge\beta)=d\alpha\wedge\beta+(-1)^{|\alpha|}\alpha\wedge d\beta.
$$

$$
0\to\Omega^0(M)\xrightarrow d\Omega^1(M)\xrightarrow d\cdots\xrightarrow d\Omega^n(M)\to0.
$$

**必须会证**：$d^2=0$（偏导对称 × wedge 反对称）；$F^*d=dF^*$；对 1-form 推导含 Lie bracket 的无坐标公式。

**验收**：能分别在 $\mathbb R^2$ 和 $\mathbb R^3$ 计算 $d\omega$。

### DT-RM-010.5 · Orientation via Nowhere-Vanishing Top Forms

**目标**：用现成的外代数定义定向，而非另起一套不相干的符号。

**定义**：orientable；orientation；positive oriented frame；volume form；boundary orientation。

**关键定理**：对 $n$ 维流形，存在 nowhere-vanishing $n$-form 当且仅当其可定向，亦当且仅当 $\Lambda^nT^*M$ 是平凡实线丛。

**核心判断**：$\mu_p(v_1,\dots,v_n)>0$ 为正定向；两个非零最高次形式定义同一定向当且仅当 $\nu=f\mu$ 且 $f>0$。

**必须会证**：用 Jacobian 解释与正定向坐标图的等价；若 $N$ 向外，则 $\iota_N\mu|_{\partial M}$ 诱导边界定向。

**易错点**：一般 $n$ 维流形需要 $n$-form，不是 2-form；仅当 $2m$ 维辛流形的 $\omega$ 非退化时，$\omega^m/m!$ 才自动给出最高次非零形式。

**验收**：会确定 $[a,b]$、单位圆盘、球面的正定向边界。

### DT-RM-010.6 · Integration and Generalized Stokes Theorem

**目标**：让微分形式的代数微分与有向区域的几何边界相遇。

**定义**：compact support；partition of unity；integration of top forms；manifold with boundary；smooth singular simplex/chain；$\partial$。

**关键定理**：对紧致定向 $n$ 维带边流形和 $\eta\in\Omega^{n-1}(M)$，

$$
\boxed{\int_M d\eta=\int_{\partial M}\eta.}
$$

非紧情形采用合适的紧支撑条件。

**证明主线**：正定向边界坐标 → 一维微积分基本定理 → 切向项积分为零 → partition of unity 全局拼接。

**必须会算**：$n=1$ 是 FTC，$n=2$ 是 Green theorem，$n=3$ 对曲面给出经典 Stokes theorem。

**验收**：清楚解释为什么边界定向（outward normal first）决定符号。

### DT-RM-010.7 · Cohomology and the Integration Map

**目标**：从 $d^2=0$ 的代数结构走向流形的拓扑不变量。

**定义**：closed/exact forms；$Z^k$、$B^k$；de Rham cohomology；singular cochains；cochain map。

$$
H_{\mathrm{dR}}^k(M)=\frac{\ker(d:\Omega^k\to\Omega^{k+1})}{\operatorname{im}(d:\Omega^{k-1}\to\Omega^k)}.
$$

对光滑奇异链 $c$ 定义积分映射

$$
I(\omega)(c)=\int_c\omega.
$$

**Stokes 的代数形式**：

$$
I(d\omega)(c)=\int_c d\omega=\int_{\partial c}\omega=(\delta I(\omega))(c),
\qquad\text{即 } I\circ d=\delta\circ I.
$$

**主定理**：Poincaré lemma（局部上同调消失）；de Rham theorem：$H_{\mathrm{dR}}^k(M)\cong H_{\mathrm{sing}}^k(M;\mathbb R)$。

**必须会说明**：Stokes 仅证明 $I$ 是 cochain map；要证明上同调同构还需 Poincaré lemma、Mayer–Vietoris 等。

**验收**：能够严格说明 $\omega=-y\,dx+x\,dy$ 在 $S^1$ 上闭而非恰当，并求 $H^0,H^1$。

## D. 里程碑与学习完成标准

| 阶段 | 可交付的知识成果 | 通过条件 |
|---|---|---|
| M1：Local algebra | $T_p^*M\cong\mathfrak m_p/\mathfrak m_p^2$ | 独立完成 Hadamard lemma 应用 |
| M2：Bundles | $TM,T^*M,\Gamma(T^*M)$ | 写出局部平凡化与坐标变换 |
| M3：Forms | $\Omega^\bullet(M)$ 与 wedge | 熟练计算 pullback、wedge |
| M4：Differential | $(\Omega^\bullet,d)$ | 证明 $d^2=0$ 和自然性 |
| M5：Orientation | 不消失最高次形式与边界定向 | 正确判断边界符号 |
| M6：Stokes | 局部证明 → 全局化 | 推出 FTC、Green 作为特例 |
| M7：Cohomology | 积分 cochain map 与 de Rham theorem | 算出 $S^1$ 的 $H_{\mathrm{dR}}^\bullet$ |

**进度追踪**（只记录掌握状态，不虚构日期）：

- [ ] M1 Local Algebra
- [ ] M2 Vector Bundles
- [ ] M3 Differential Forms
- [ ] M4 Exterior Derivative
- [ ] M5 Orientation
- [ ] M6 Stokes
- [ ] M7 de Rham Cohomology

## E. 推荐教材对应关系

- **Cornell Math 6520 · Differentiable Manifolds I（讲义）**：函数芽、导子、$\mathfrak m_p/\mathfrak m_p^2$；用于 M1–M2。
- **Loring W. Tu, *An Introduction to Manifolds***：切丛、余切丛、微分形式、定向、积分与 Stokes；用于 M2–M6。
- **Bott–Tu, *Differential Forms in Algebraic Topology***：Chapter I 从微分形式进入 de Rham cohomology、Poincaré lemma、Mayer–Vietoris；用于 M4–M7。

## F. 可选拓展（不属于主线验收）

1. **辛几何**：若 $\dim M=2m$ 且 $\omega$ 是 symplectic form，则 $\omega^m/m!$ 给出定向。
2. **Characteristic classes**：orientability $\iff w_1(TM)=0$。
3. **代数视角**：比较 smooth $C^\infty$-differentials 与 ordinary Kähler differentials（不能直接不加条件地等同）。
4. **同调代数视角**：de Rham 复形作为 CDGA，比较 quasi-isomorphism、cochain map 和 cohomology。

---

**下一步**：先完成 [DT-P-010 的 P01–P03](./02_Practice_Forms_Stokes_DeRham.md)，然后按 M2 → M7 推进。
