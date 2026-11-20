# Part 4 — Lifting a Basis, Splitting, and Finite Generation of the Kernel

> 主题：free quotient 导致短正合列 split  
> 关键词：free module, lift, section, projective module, direct summand, kernel

## 题目

设 $A$ 为交换环，$M$ 为 finitely generated $A$-module，且有满射

$$
\varphi:M\twoheadrightarrow A^n
$$

（$n<\infty$）。证明 $\ker\varphi$ 是 finitely generated $A$-module。

## 关键辨析：lift 的基不是 kernel 的生成元

取 $A^n$ 的标准基 $e_1,\dots,e_n$。满射性保证可选择 $u_i\in M$ 使

$$
\varphi(u_i)=e_i.
$$

但 $u_i\notin\ker\varphi$（对于 $e_i\ne0$）。因此不能说“lift 出来的基生成 kernel”。正确做法是：用 lifts 构造 section，或者把 $M$ 的生成元投影到 kernel。

## 证明 A：构造 section，得到 splitting

由 $A^n$ 的自由性，定义 $A$-linear map

$$
s:A^n\longrightarrow M,\qquad
s\!\left(\sum_{i=1}^{n}a_ie_i\right)
=\sum_{i=1}^{n}a_iu_i.
$$

于是

$$
\varphi\circ s=\operatorname{id}_{A^n}.
$$

故短正合列

$$
0\to\ker\varphi\to M\xrightarrow{\varphi}A^n\to0
$$

**split**，有同构

$$
M\cong\ker\varphi\oplus A^n.
$$

作为有限生成模 $M$ 的 direct summand，$\ker\varphi$ 也有限生成。$\square$

最后一步不依赖 Noetherian 假设，因为 direct summand 是某个投影的像：有限生成模在线性映射下的像仍有限生成。

## 证明 B：显式给出 kernel 的有限生成集

设

$$
M=\langle m_1,\dots,m_r\rangle_A.
$$

利用上面的 section，定义

$$
p=\operatorname{id}_M-s\circ\varphi:M\to M.
$$

先验证：

$$
\varphi(p(m))
=\varphi(m)-(\varphi\circ s)(\varphi(m))=0,
$$

所以 $p(M)\subseteq\ker\varphi$。反过来，若 $k\in\ker\varphi$，则

$$
p(k)=k-s(0)=k.
$$

因此 $p(M)=\ker\varphi$，从而

$$
\boxed{\ker\varphi=
\langle m_1-s(\varphi(m_1)),\dots,
 m_r-s(\varphi(m_r))\rangle_A.}
$$

这正是“**lift 后修正生成元**”的严格版本。

## 对应的结构性结论

自由模是 projective module：若 $P$ 为 projective，则任何满射 $M\twoheadrightarrow P$ 都存在 section。故

$$
0\to K\to M\to P\to0
$$

split，$M\cong K\oplus P$。

所以更一般地：只要 $M$ 有限生成，且商模 $P$ **projective**（不必有限生成），那么 $K$ 仍是有限生成的，因为它是 $M$ 的 direct summand。

## 与 Part 2 的对照

| | Part 2 | Part 4 |
|---|---|---|
| 已知 | 两端有限生成 | 中间有限生成，quotient 为 $A^n$ |
| 核心技巧 | lift 商模生成元，再用 kernel 修正 | lift **自由基**，构造 section |
| 需要 split 吗？ | 不需要，也未必 split | 会 split |
| 结论 | 中间有限生成 | kernel 有限生成 |

**核心记忆：** lift 商模的一组生成元一般只是集合层面的选择；lift 自由模的基可以唯一线性延拓为 $A$-linear section。这里的自由性（projectivity）是分水岭。

## 复习检查

1. 为什么把 $e_i\mapsto u_i$ 可以延拓成 $A$-linear map $A^n\to M$？对于一般商模是否仍成立？
2. 验证 $p^2=p$、$\operatorname{im}p=\ker\varphi$。
3. 若 $M\twoheadrightarrow N$，其中 $N$ 仅仅 finitely generated（而不 projective），其 kernel 是否必然有限生成？尝试联系 Part 2 的反例。

## 关联

- [Part 2：Finite Generation and Extensions](./01-Part2-finitely-generated-extensions.md)
