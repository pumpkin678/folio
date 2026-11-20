---
title: "Atiyah–Macdonald Ch. 2 — Modules 与 Tensor Product 四题整理"
subject: "Commutative Algebra"
chapter: "Atiyah–Macdonald Chapter 2"
tags: [commutative-algebra, atiyah-macdonald, exercises, module, tensor-product, folio]
source: "本次对话的四道习题；书中题号沿用用户提供的信息，未独立核对"
---

# A–M Chapter 2：四道习题归档

> [!info] 内容范围
> 本笔记包涵盖本次对话的 **4 道题**：arbitrary direct sums 与 flatness、polynomial module、Nakayama's Lemma、base change 的 splitting。每份 Markdown 包含题目、严格证明、关键映射、易错点与结论。

## 习题导航

| 文件 | 核心命题 | 必记技巧 |
|---|---|---|
| [[01_Flatness_and_Direct_Sums]] | $\bigoplus_iM_i$ flat $\iff$ 每个 $M_i$ flat | 自然同构与映射可交换；split injections |
| [[02_Polynomial_Modules]] | $A[x]\otimes_A M\cong M[x]$ | balanced map、逐系数逆映射、有限支撑 |
| [[03_Nakayama_and_Cokernel]] | $\bar u:M/IM\twoheadrightarrow N/IN\implies u\twoheadrightarrow N$ | cokernel、right exactness、finite generation、Jacobson radical |
| [[04_Base_Change_and_Splitting]] | $g:N\hookrightarrow B\otimes_A N$ 且像为 direct summand（作为 $A$-module） | 构造 retraction、$p\circ g=1$、分裂正合列 |

## 四个构造，一张速查表

| 场景 | 构造 | 要验证什么 |
|---|---|---|
| direct sum tensor | $n\otimes(m_i)_i\mapsto(n\otimes m_i)_i$ | finite support；与 $f\otimes1$ 的 naturality |
| polynomial module | $\sum_jm_jx^j\mapsto\sum_jx^j\otimes m_j$ | 逆映射 well-defined、$A[x]$-linear |
| Nakayama | $C=N/u(M)$ 与 $\bar q:N/IN\to C/IC$ | quotient 后 right exact；$C$ finitely generated |
| base change | $p(b\otimes y)=by$，$g(y)=1\otimes y$ | $A$-balanced；$p\circ g=1$ |

## 统一的逻辑主线

1. **Tensor product 的 universal property**：在 pure tensors 上写公式之后，必须检查 $A$-balanced 才能诱导线性映射（题 02、04）。
2. **Naturality / functoriality**：不只证明对象同构，还要说明 maps 在同构下如何对应（题 01、02）。
3. **Right exactness**：若 $M\to N\to C\to0$ exact，则 tensor 后 $M\otimes T\to N\otimes T\to C\otimes T\to0$ 仍 exact；题 03 取 $T=A/I$。
4. **Split map 与 direct summand**：若 $r\circ u=1$，则 $u$ injective 且 $E=u(X)\oplus\ker r$（题 01、04）。

## 常见混淆清单

- $\otimes_A$ 的 balancing **只能移动来自 $A$ 的 scalars**，不能随便移动任意 $b\in B$。
- $p\circ g=1_N$ 不意味着 $g\circ p=1_{B\otimes_A N}$。
- Tensor product 一般是 **right exact**，不保证对所有单射保持单射；flatness 正是额外条件。
- Nakayama 用的是 **cokernel 的 finite generation**：从 $N$ finitely generated 推出，不需要 $M$ finitely generated。
- Base change 题中 $g$ 一般仅 $A$-linear，因此 decomposition 是按 $A$-modules 理解。

## 建议复习顺序

**01 → 02 → 04 → 03**：先掌握 tensor 和 direct sum，再构造 polynomial module 的逆映射；接着练习 splitting，最后用 right exactness 和 Nakayama 处理 quotient 后的满射提升。

## 关于来源

题目来源沿用对话中标注的信息：Nakayama 为用户注明的 A–M Chapter 2 Exercise 10 (p. 32)；base change 为 Exercise 13 (p. 32)。这些具体题号、页码**未另行核实**；其余两题按命题标题归档。
