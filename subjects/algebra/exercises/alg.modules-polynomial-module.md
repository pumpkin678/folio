---
track: "模与张量积"
study_date: "2026-11-17"
source_pack: "folio-am-ch2-modules-2026-11-17"
source_verified: false
source_note: "用户提供的 Folio_AM_Ch2_Modules_Exercises.zip；A–M Chapter 2 的题号、页码沿用原包，未独立核实。"
id: "alg.modules-polynomial-module"
title: "多项式模与标量扩张"
english: "Polynomial modules and extension of scalars"
summary: "按系数定义多项式模的作用，构造 A[x] ⊗ M 与 M[x] 的自然同构和逐项逆映射。"
source_document: "02_Polynomial_Modules.md"
tags: ["模", "张量积", "polynomial-module", "extension-of-scalars"]
order: 33
targets: ["alg.modules-polynomial-module-theorem"]
related: ["alg.modules-tensor-path", "alg.daily-2026-11-17"]
difficulty: "进阶"
minutes: 20
minutes_origin: "站内估计"
initial_status: "new"
---

:::problem
## 题目

设 $A$ 为交换含幺环，$M$ 为 $A$-module。令

$$
M[x]=\left\{\sum_{j=0}^{r}m_jx^j:m_j\in M,\ r\ge 0\right\},
$$

其中多项式按系数相等；尾部可以添加任意多个零系数。

1. 定义 $A[x]$ 在 $M[x]$ 上的自然作用，证明 $M[x]$ 为 $A[x]$-module。
2. 构造自然的 $A[x]$-module 同构
   $$A[x]\otimes_A M\cong M[x],$$
   明确其在 pure tensors 上的作用，检查 well-definedness，并构造逆映射。
:::

:::hint
核心构造
正向：$f(x)\otimes m\mapsto f(x)m$。

**逆向：** $\displaystyle \sum_jm_jx^j\mapsto\sum_jx^j\otimes m_j$。

逆映射的定义域是整个 $M[x]$，所以必须对每一个系数分别处理，而不是只写 $m\mapsto1\otimes m$。
:::

:::solution
## (a) 构造 $A[x]$-module structure

对 $f(x)=\sum_{i=0}^{s}a_ix^i\in A[x]$ 与 $p(x)=\sum_{j=0}^{r}m_jx^j\in M[x]$，定义

$$
\boxed{\quad
f(x)\cdot p(x)=\sum_{k=0}^{r+s}\left(\sum_{i+j=k}a_im_j\right)x^k.
\quad}
$$

这是有限和，因此有定义。加法及标量乘法对加法的分配律由 $M$ 的 module axioms 按系数逐项得到。

为核对结合律，取 $g(x)=\sum_jb_jx^j$ 与 $p(x)=\sum_km_kx^k$，计算

$$
\begin{aligned}
(fg)p
&=\sum_n\left(\sum_{i+j+k=n}(a_ib_j)m_k\right)x^n\\
&=\sum_n\left(\sum_{i+j+k=n}a_i(b_jm_k)\right)x^n\\
&=f(gp).
\end{aligned}
$$

此外，$1_{A[x]}p=p$。因此 $M[x]$ 是 $A[x]$-module。

## (b) 构造同构与逆映射

### Step 1. 正向映射：先检查 balanced

定义

$$
\beta:A[x]\times M\longrightarrow M[x],\qquad(f(x),m)\longmapsto f(x)m.
$$

对 $f,g\in A[x]$、$m,n\in M$、$a\in A$，有

$$
\begin{aligned}
\beta(f+g,m)&=\beta(f,m)+\beta(g,m),\\
\beta(f,m+n)&=\beta(f,m)+\beta(f,n),\\
\beta(af,m)&=\beta(f,am).
\end{aligned}
$$

第三个等式使用 $A$ 的交换性（视 $a$ 为常数多项式），所以 $\beta$ 为 **$A$-balanced bilinear map**。由 tensor product 的 universal property，唯一诱导出 $A$-linear map

$$
\Phi:A[x]\otimes_A M\longrightarrow M[x],\qquad
\boxed{\Phi(f(x)\otimes m)=f(x)m.}
$$

这里的 well-definedness 是通过 universal property 保证的，而不是任意给 pure tensor 指定值就自动成立。

该映射还对 $A[x]$ 线性：若 $h,f\in A[x]$，则

$$
\Phi\bigl(h\cdot(f\otimes m)\bigr)
=\Phi(hf\otimes m)
=(hf)m=h\cdot\Phi(f\otimes m).
$$

由于 pure tensors 生成张量积，故 $\Phi$ 为 $A[x]$-linear map。

### Step 2. 逆映射：逐项拆出系数

对 $p(x)=\sum_{j=0}^{r}m_jx^j\in M[x]$，定义

$$
\boxed{
\Psi:M[x]\longrightarrow A[x]\otimes_A M,
\qquad\Psi(p(x))=\sum_{j=0}^{r}x^j\otimes m_j.
}
$$

**Well-definedness.** 每个 $p(x)\in M[x]$ 的系数唯一；其非零系数个数有限，故右端为张量积中的有限和。若在表示中添上尾部的零系数，所得额外项均为 $x^j\otimes0=0$，因此定义与表示所选的上界 $r$ 无关。

**加法性.** 若 $p=\sum m_jx^j$、$q=\sum n_jx^j$（不足位补零），则

$$
\Psi(p+q)=\sum_jx^j\otimes(m_j+n_j)
=\Psi(p)+\Psi(q).
$$

**$A[x]$-线性.** 设 $f=\sum_i a_ix^i$，$p=\sum_jm_jx^j$，则

$$
\begin{aligned}
\Psi(fp)
&=\sum_{i,j}x^{i+j}\otimes(a_im_j)\\
&=\sum_{i,j}(a_ix^{i+j})\otimes m_j\\
&=\left(\sum_ia_ix^i\right)\cdot\left(\sum_jx^j\otimes m_j\right)\\
&=f\cdot\Psi(p).
\end{aligned}
$$

第二个等号正是张量积的 **balancing relation**：

$$u\otimes(am)=(au)\otimes m\qquad(a\in A).$$

### Step 3. 检查两个复合为恒等

任取 $p(x)=\sum_jm_jx^j\in M[x]$：

$$
\begin{aligned}
(\Phi\circ\Psi)(p(x))
&=\Phi\left(\sum_jx^j\otimes m_j\right)
=\sum_jm_jx^j=p(x).
\end{aligned}
$$

故 $\Phi\circ\Psi=1_{M[x]}$。

反过来，在 pure tensor $f(x)\otimes m$ 上，写 $f(x)=\sum_ja_jx^j$：

$$
\begin{aligned}
(\Psi\circ\Phi)(f(x)\otimes m)
&=\Psi\left(\sum_j(a_jm)x^j\right)\\
&=\sum_jx^j\otimes(a_jm)\\
&=\sum_j(a_jx^j)\otimes m\\
&=f(x)\otimes m.
\end{aligned}
$$

由于 pure tensors 生成 $A[x]\otimes_A M$，得 $\Psi\circ\Phi=1_{A[x]\otimes_A M}$。所以

$$
\boxed{A[x]\otimes_A M\xrightarrow[\sim]{\ \Phi\ }M[x]}
$$

是 $A[x]$-module 同构，逆映射为 $\Psi$。$\square$

## 为什么这个同构是 natural 的？

若 $u:M\to N$ 是 $A$-linear map，定义逐系数映射

$$u[x]:M[x]\to N[x],\qquad\sum_jm_jx^j\mapsto\sum_ju(m_j)x^j.$$

则对所有 $f\otimes m$，

$$
\begin{aligned}
(u[x]\circ\Phi_M)(f\otimes m)
&=u[x](fm)=f\,u(m)\\
&=(\Phi_N\circ(1_{A[x]}\otimes u))(f\otimes m).
\end{aligned}
$$

因此交换图

$$
\begin{array}{ccc}
A[x]\otimes_A M & \xrightarrow{\Phi_M} & M[x]\\
\downarrow\scriptstyle{1\otimes u} && \downarrow\scriptstyle{u[x]}\\
A[x]\otimes_A N & \xrightarrow{\Phi_N} & N[x]
\end{array}
$$

可交换（这里 $\Phi_M,\Phi_N$ 是为不同模构造的上述同构）。

## 核心结构：为什么逆映射如此自然？

作为 $A$-module，$A[x]$ 有自由基 $\{1,x,x^2,\dots\}$，因此

$$
A[x]=\bigoplus_{j\ge0}Ax^j.
$$

利用 tensor product 与 arbitrary direct sum 的自然同构：

$$
\begin{aligned}
A[x]\otimes_A M
&\cong\left(\bigoplus_{j\ge0}Ax^j\right)\otimes_A M\\
&\cong\bigoplus_{j\ge0}(Ax^j\otimes_A M)\\
&\cong\bigoplus_{j\ge0}M\\
&=M[x]
\qquad\text{(作为 $A$-modules)}.
\end{aligned}
$$

具体地，$x^j\otimes m$ 对应系数只在 $j$ 次项非零的多项式 $mx^j$；反向就必然是

$$\sum_jm_jx^j\longmapsto\sum_jx^j\otimes m_j.$$

> **常见错误**
> 1. 不能只写 $f\otimes m\mapsto fm$ 就跳过 balanced check。
> 2. 不能把 $\Psi$ 写成 $m\mapsto1\otimes m$，因为 $\Psi$ 的输入是多项式。
> 3. 从 $x^j\otimes(a_jm)$ 到 $(a_jx^j)\otimes m$ 是**张量积的关系**，并非形式上随意挪动系数。
> 4. 检查 $\Psi\circ\Phi=1$ 时只需验算 pure tensors，再用其生成性推广。

## 自检题

给定 $p(x)=m_0+m_1x+m_2x^2$ 和 $f(x)=a+bx$，分别计算 $\Psi(f(x)p(x))$ 和 $f(x)\cdot\Psi(p(x))$，逐项使用 balancing relation 验证相等。
:::
