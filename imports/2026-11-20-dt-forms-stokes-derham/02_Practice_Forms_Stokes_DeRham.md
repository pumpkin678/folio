---
id: DT-P-010
subject: 微分拓扑
type: practice-roadmap
topic: Proof and computation checkpoints — Differential Forms to de Rham
status: open
roadmap: DT-RM-010
tags:
  - exercises
  - proofs
  - constructions
related:
  - DT-RM-010
  - DT-K-010
---

# DT-P-010 · Proof Check 与构造练习

[返回 Roadmap](./00_Roadmap_Forms_Stokes_DeRham.md) · [定义与定理](./01_Knowledge_Forms_Stokes_DeRham.md)

> 以下均为**按学习主线设计的练习**，不是声称出自 Bott–Tu 或任何教材的原题。每题记录提示与验收标准，适合后续单独扩展成“题面—Hint—严格解答”的 Folio 习题卡。

## Part A · Local Algebra & Cotangent Spaces

### DT-P01 · 局部环与理想平方

- [ ] **题面**：证明函数芽环 $A_p$ 是局部环；给出 $A_p/\mathfrak m_p\cong\mathbb R$；证明 $\mathfrak m_p^2$ 中的函数一阶偏导在 $p$ 处全为零。
- **Hint**：非零值函数芽的倒数在 $p$ 附近光滑；使用 Leibniz rule。
- **验收**：说明唯一极大理想，而不仅是一个极大理想。
- **关联**：DT-D001, DT-D002, DT-D003。

### DT-P02 · Hadamard lemma 与余切空间

- [ ] **题面**：局部取 $x(p)=0$，证明 $f(x)-f(0)=\sum_i x^ig_i(x)$、$g_i(0)=\partial_i f(0)$；进而证明 $\mathfrak m_p/\mathfrak m_p^2\cong\mathbb R^n$。
- **Hint**：沿线段 $t\mapsto tx$ 积分：$g_i(x)=\int_0^1\partial_i f(tx)\,dt$。
- **验收**：证明“生成”和“线性无关”两个方向。
- **关联**：DT-D003。

### DT-P03 · Derivations are dual to cotangent vectors

- [ ] **题面**：构造互逆映射 $\operatorname{Der}_p(A_p,\mathbb R)\rightleftarrows(\mathfrak m_p/\mathfrak m_p^2)^*$。
- **Hint**：导子消去常数以及 $\mathfrak m_p^2$；反向定义 $D(f)=\lambda([f-f(p)])$。
- **验收**：逐项验证 well-defined、线性和 Leibniz rule。
- **关联**：DT-D003, DT-D004。

## Part B · Bundles and Forms

### DT-P04 · Cotangent bundle local coordinates

- [ ] **题面**：构造 $\pi^{-1}(U)\to x(U)\times\mathbb R^n$，并在坐标变换 $y=y(x)$ 下推导余切向量系数的变换律。
- **Hint**：$dy^a=\sum_i(\partial y^a/\partial x^i)dx^i$。
- **验收**：写清 Jacobian 与系数变换之间的关系。
- **关联**：DT-D005, DT-D006。

### DT-P05 · Pullback and exterior differential

- [ ] **题面**：令 $F(u,v)=(u^2-v^2,2uv)$，计算 $F^*(x\,dy-y\,dx)$ 和 $dF^*(x\,dy-y\,dx)$，核对 $F^*d=dF^*$。
- **Hint**：先算 $dx,dy$ 的拉回，再代入 wedge product。
- **验收**：得到两种路径一致的 2-form。
- **关联**：DT-D007, DT-D008, DT-D009。

### DT-P06 · $d^2=0$ 的严格验证

- [ ] **题面**：从局部公式证明 $d^2\omega=0$；再从 graded Leibniz rule 解释为何 $d$ 与 wedge 构成 CDGA。
- **Hint**：二阶偏导指标对称，但 $dx^i\wedge dx^j$ 反对称。
- **验收**：不要只验证 $f\in\Omega^0$，应说明一般 $k$-form 的情况。
- **关联**：DT-D009。

## Part C · Orientation and Stokes

### DT-P07 · Top form 定义定向

- [ ] **题面**：证明两个 nowhere-zero $n$-forms 确定相同定向当且仅当相差光滑正函数；由坐标 Jacobian 解释与 oriented atlas 的等价。
- **Hint**：$\Lambda^nT_p^*M$ 为一维；每个点存在唯一非零比例因子，局部由形式系数表达其光滑性。
- **验收**：说明定向是等价类，不是唯一形式。
- **关联**：DT-D010。

### DT-P08 · Boundary orientation 的符号

- [ ] **题面**：以标准定向的 $[a,b]$ 与 $\{(x,y):x^2+y^2\le1\}$ 为例，确定边界诱导定向；证明前者的边界是 $\{b\}-\{a\}$，后者为逆时针方向。
- **Hint**：使用 outward normal first convention。
- **验收**：明确法向量与切向基次序，不能只凭图感。
- **关联**：DT-D011。

### DT-P09 · 从 FTC 到 Stokes

- [ ] **题面**：在半空间 $\mathbb H^n=\{t\ge0\}$，对紧支撑 $\eta\in\Omega^{n-1}$ 证明 $\int_{\mathbb H^n}d\eta=\int_{\partial\mathbb H^n}\eta$，再说明单位分解如何完成全局化。
- **Hint**：将 $\eta$ 分解成不含 $dt$ 的项与含 $dt$ 的项；前者用 FTC，后者对切向变量积分分部。
- **验收**：说明所有项的符号及消失原因。
- **关联**：DT-D012, DT-T001。

## Part D · de Rham Cohomology

### DT-P10 · 圆周上的非恰当闭形式

- [ ] **题面**：令 $\omega=(-y\,dx+x\,dy)|_{S^1}$，证明 $d\omega=0$、$\int_{S^1}\omega=2\pi$，进而证明 $\omega$ 非 exact。
- **Hint**：使用 $\gamma(t)=(\cos t,\sin t)$ 拉回并考虑闭曲线上的 $df$ 积分。
- **验收**：明确“闭”与“不恰当”是两个不同的论证。
- **关联**：DT-D008, DT-D014, DT-T001。

### DT-P11 · Integration is a cochain map

- [ ] **题面**：对光滑奇异 $k$-单形 $\sigma$，证明 $I(d\eta)(\sigma)=\delta I(\eta)(\sigma)$；并解释 Stokes 为何不单独保证 $I_*$ 是同构。
- **Hint**：$\partial\sigma=\sum_i(-1)^i\sigma\circ\iota_i$，用单形上的 Stokes。
- **验收**：注意 $\Delta^k$ 是带角空间及其面定向。
- **关联**：DT-D015, DT-T002, DT-T004。

### DT-P12 · Basic de Rham groups

- [ ] **题面**：计算 $H_{\mathrm{dR}}^0(\mathbb R)$、$H_{\mathrm{dR}}^1(\mathbb R)$；利用圆周参数化与周期性函数描述 $H_{\mathrm{dR}}^0(S^1)$、$H_{\mathrm{dR}}^1(S^1)$。
- **Hint**：$\mathbb R$ 上利用原函数；$S^1$ 上区分周期函数的导数与平均值。
- **验收**：不仅找出非零上同调类，还要证明 $H^1(S^1)$ 只有一维。
- **关联**：DT-D014, DT-T003。

## 完成记录

| 模块 | 对应题号 | 状态 |
|---|---|---|
| Local Algebra | P01–P03 | 未完成 |
| Bundle / Forms | P04–P06 | 未完成 |
| Orientation / Stokes | P07–P09 | 未完成 |
| de Rham | P10–P12 | 未完成 |

> 状态仅为初始占位；后续由实际完成情况修改。
