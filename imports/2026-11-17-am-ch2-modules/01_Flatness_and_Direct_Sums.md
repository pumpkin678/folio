---
title: "Flat modules 与任意 direct sums"
subject: "Commutative Algebra"
chapter: "Atiyah–Macdonald Chapter 2"
topic: "Flatness, direct sums, naturality"
tags: [commutative-algebra, flat-module, tensor-product, direct-sum, natural-isomorphism, proof]
source: "本对话习题；题号未独立核对"
---

# Flat modules 与任意 direct sums

## 题目

设 $A$ 为交换含幺环，$(M_i)_{i\in I}$ 是任意一族 $A$-modules，令 $M=\bigoplus_{i\in I}M_i$。证明

$$
\boxed{M\text{ is flat}\iff \forall i\in I,\ M_i\text{ is flat}.}
$$

特别要求写清楚 tensor product 与 direct sum 的自然同构如何作用于映射。

## 预备：flatness 的单射判别法

$P$ flat 当且仅当对任意 $A$-linear injection $f:N'\hookrightarrow N$，

$$f\otimes1_P:N'\otimes_A P\longrightarrow N\otimes_A P$$

仍是 injection。

## Step 1：自然同构及其 naturality

对任意 $A$-module $N$，定义

$$
\Phi_N:N\otimes_A\left(\bigoplus_iM_i\right)
\xrightarrow{\sim}\bigoplus_i(N\otimes_AM_i),
$$

$$
\boxed{\Phi_N\big(n\otimes(m_i)_i\big)=(n\otimes m_i)_i.}
$$

由于 $(m_i)_i$ 只有有限个非零分量，右边属于 direct sum。该公式是 $A$-balanced 的，故由 tensor product 的 universal property 诱导 $A$-linear map。

设 $\iota_i:M_i\to M$ 是 canonical inclusion；定义逆映射

$$
\Psi_N((z_i)_i)=\sum_i(1_N\otimes\iota_i)(z_i).
$$

此和有限，且 $\Phi_N\Psi_N=1$、$\Psi_N\Phi_N=1$（在 pure tensors 及各分量上检验），所以 $\Phi_N$ 为同构。

**关键：natural in $N$。** 若 $f:N'\to N$ 是 $A$-linear，则

$$
\boxed{\Phi_N\circ(f\otimes1_M)
=\left(\bigoplus_i(f\otimes1_{M_i})\right)\circ\Phi_{N'}.}
\tag{*}
$$

验证：对 $n'\otimes(m_i)_i$，两条路径都得到 $(f(n')\otimes m_i)_i$。因为 pure tensors 生成张量积，上式成立。其含义是交换图

$$
\begin{array}{ccc}
N'\otimes_A M&\xrightarrow{f\otimes1_M}&N\otimes_A M\\
\downarrow\scriptstyle\Phi_{N'}&&\downarrow\scriptstyle\Phi_N\\
\displaystyle\bigoplus_i(N'\otimes_AM_i)&
\xrightarrow{\bigoplus_i(f\otimes1_{M_i})}&
\displaystyle\bigoplus_i(N\otimes_AM_i)
\end{array}
$$

可交换。

## Step 2：若每个 $M_i$ flat，则 $M$ flat

任取 injection $f:N'\hookrightarrow N$。由每个 $M_i$ flat，

$$f\otimes1_{M_i}:N'\otimes_A M_i\hookrightarrow N\otimes_A M_i$$

为单射。它们的 direct sum 仍为单射：若 $(z_i)_i$ 的像为零，则各个 $(f\otimes1_{M_i})(z_i)=0$，故 $z_i=0$ 对所有 $i$ 成立。

由 (*)，

$$f\otimes1_M=\Phi_N^{-1}\circ\left(\bigoplus_i(f\otimes1_{M_i})\right)\circ\Phi_{N'},$$

右侧为同构、单射、同构的复合，所以 $f\otimes1_M$ 是单射。任意 $f$ 都成立，故 $M$ flat。

## Step 3：若 $M$ flat，则每个 $M_i$ flat

固定 $j\in I$。取 canonical inclusion $\iota_j:M_j\to M$ 与 projection $\pi_j:M\to M_j$，满足

$$\pi_j\circ\iota_j=1_{M_j}.$$

任取 injection $f:N'\hookrightarrow N$。由 $M$ flat，$f\otimes1_M$ 单射。Functoriality 给出交换等式

$$
(1_N\otimes\iota_j)\circ(f\otimes1_{M_j})
=(f\otimes1_M)\circ(1_{N'}\otimes\iota_j).
$$

此外

$$
(1_{N'}\otimes\pi_j)\circ(1_{N'}\otimes\iota_j)=1_{N'\otimes_AM_j},
$$

所以 $1_{N'}\otimes\iota_j$ 有左逆，因而单射。

若 $(f\otimes1_{M_j})(z)=0$，则交换等式给出

$$
(f\otimes1_M)\big((1_{N'}\otimes\iota_j)(z)\big)=0.
$$

由 $f\otimes1_M$ 单射知 $(1_{N'}\otimes\iota_j)(z)=0$；再由后者单射知 $z=0$。故 $f\otimes1_{M_j}$ 单射，$M_j$ flat。$j$ 任意，结论成立。$\square$

## 结构总结与易错点

- **Naturality 是映射层面的对应**：$f\otimes1_{\oplus M_i}$ 在 $\Phi$ 下对应 $\bigoplus_i(f\otimes1_{M_i})$，并非把两个定义域不同的映射直接写成相等。
- **Tensor 并不总保持 injection**；但它保持 *split injection*：若 $r\circ\iota=1$，则 $(1\otimes r)\circ(1\otimes\iota)=1$。
- 如果 $I=\varnothing$，$M=0$；$0$ flat，命题同样成立。
- 与第 02 题联系：$A[x]=\bigoplus_{j\ge0}Ax^j$，其 tensor product 与 direct sum 交换，是 $A[x]\otimes_A M\cong M[x]$ 的结构原因。
