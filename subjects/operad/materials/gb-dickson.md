---
id: op.gb-dickson
type: thm
title: Dickson 引理与单项式理想的上升链条件
english: Dickson lemma and the ascending chain condition
summary: 非负整数指数的整除关系保证单项式理想有限生成，从而排除无限严格上升链。
requires: [op.gb-initial-ideal]
tags: [Gröbner 基, Dickson 引理, 终止性]
track: Gröbner 基
order: 20
minutes: 10
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
对有限个变量，有以下结论：

1. $\mathbb{N}^n$ 中的任意无限序列均含 $i<j$，使 $\alpha^{(i)}\le\alpha^{(j)}$ 逐坐标成立；这里 $\mathbb{N}$ 包括 $0$。
2. 每个单项式理想都可由有限个单项式生成。
3. 单项式理想的每条上升链都最终稳定，因而不存在无限严格上升链。

这提供了 [Buchberger 算法](ref:op.gb-buchberger-algorithm)中“只能添加有限个新多项式”的终止依据。
:::

:::proof
**1. 单个坐标存在无限非降子序列。** 对任意自然数序列，若某个值出现无限次，则取这些位置得到常值子序列。若每个值只出现有限次，则每个有限区间 $\{0,\ldots,B\}$ 总共只出现有限次。选定一项后，在更靠后的位置可选到比它更大的值；递归得到无限严格递增子序列。

**2. 依次处理有限个坐标。** 对 $\mathbb{N}^n$ 的无限序列，先取第一坐标非降的无限子序列，再从中取第二坐标非降的无限子序列，如此继续。取子序列保留已获得的非降性质。有限 $n$ 步后，各坐标同时非降，取其中前两项即得所需 $i<j$。

**3. 推出有限单项式生成。** 设 $J$ 是单项式理想。若它不能由有限个单项式生成，则先选 $m_1\in J$，再递归选

$$m_{r+1}\in J\setminus\langle m_1,\ldots,m_r\rangle$$

为单项式。这样的选择存在：若 $J$ 中的每个单项式都已在右侧理想中，$J$ 自己的单项式生成元也都在其中，就已有限生成。

写 $m_i=x^{\alpha^{(i)}}$。第 2 步给出 $i<j$ 且 $\alpha^{(i)}\le\alpha^{(j)}$，即 $m_i\mid m_j$。于是 $m_j\in\langle m_1,\ldots,m_{j-1}\rangle$，与选择矛盾。零理想由空集合生成，无需选择 $m_1$。

**4. 推出上升链稳定。** 对上升链 $J_0\subseteq J_1\subseteq\cdots$，其并 $J=\bigcup_rJ_r$ 是单项式理想。若 $J=(0)$，则所有 $J_r$ 已为零，链立即稳定。否则，由第 3 步选有限且非空的单项式生成元 $m_1,\ldots,m_t$，每个生成元都属于某个 $J_r$。取这些有限指标的最大值 $N$，则所有生成元都在 $J_N$，故 $J\subseteq J_N\subseteq J$。因而对 $r\ge N$ 都有 $J_r=J_N$。

核验：本证明讨论的是指数的逐坐标偏序及理想的上升链，和固定单项式全序下的严格下降链是两种不同对象。
:::
