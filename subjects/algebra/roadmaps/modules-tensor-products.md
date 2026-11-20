---
track: "模与张量积"
study_date: "2026-11-17"
source_pack: "folio-am-ch2-modules-2026-11-17"
source_verified: false
source_note: "用户提供的 Folio_AM_Ch2_Modules_Exercises.zip；A–M Chapter 2 的题号、页码沿用原包，未独立核实。"
id: "alg.modules-tensor-path"
title: "模与张量积：自然同构、分裂与 Nakayama"
english: "Tensor products, splitting and Nakayama"
summary: "沿直和、多项式模、标量扩张与余核，串联四个构造及其验证要点。"
purpose: "learn"
order: 4
minutes: 30
level: "专题学习"
tags: ["模", "张量积", "知识主线", "Nakayama"]
source_document: "00_Index.md"
related: ["alg.daily-2026-11-17", "alg.modules-exact-sequences"]
---

:::goal
先读四张知识卡，再按 01 → 02 → 04 → 03 的顺序独立练习。[11 月 17 日配套题组](ref:alg.daily-2026-11-17)。
:::

## 01 · 平坦模与任意直和

::material{id="alg.modules-flat-direct-sums-theorem"}

## 02 · 多项式模与标量扩张

::material{id="alg.modules-polynomial-module-theorem"}

## 03 · 标量扩张中的收缩与直和分解

::material{id="alg.modules-base-change-splitting-theorem"}

## 04 · Nakayama：模理想满射的提升

::material{id="alg.modules-nakayama-cokernel-theorem"}

## 原包总览与复习要点

> **内容范围**
> 本笔记包涵盖本次对话的 **4 道题**：arbitrary direct sums 与 flatness、polynomial module、Nakayama's Lemma、base change 的 splitting。每份 Markdown 包含题目、严格证明、关键映射、易错点与结论。

## 习题导航

| 文件 | 核心命题 | 必记技巧 |
|---|---|---|
| [01 · Flatness and Direct Sums](ref:alg.modules-flat-direct-sums) | $\bigoplus_iM_i$ flat $\iff$ 每个 $M_i$ flat | 自然同构与映射可交换；split injections |
| [02 · Polynomial Modules](ref:alg.modules-polynomial-module) | $A[x]\otimes_A M\cong M[x]$ | balanced map、逐系数逆映射、有限支撑 |
| [03 · Nakayama and Cokernel](ref:alg.modules-nakayama-cokernel) | $\bar u:M/IM\twoheadrightarrow N/IN\implies u\twoheadrightarrow N$ | cokernel、right exactness、finite generation、Jacobson radical |
| [04 · Base Change and Splitting](ref:alg.modules-base-change-splitting) | $g:N\hookrightarrow B\otimes_A N$ 且像为 direct summand（作为 $A$-module） | 构造 retraction、$p\circ g=1$、分裂正合列 |

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

[回顾有限生成、提升与分裂](ref:alg.modules-exact-sequences)。
