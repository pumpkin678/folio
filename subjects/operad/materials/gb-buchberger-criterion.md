---
id: op.gb-buchberger-criterion
type: thm
title: Buchberger 判据
english: Buchberger criterion
summary: 有限生成集成为 Gröbner 基，当且仅当每一对生成元的 S 多项式都可用当前集合约减到零。
requires: [op.gb-s-polynomial, op.gb-membership, op.gb-division-theorem]
tags: [Gröbner 基, Buchberger 判据, 首项抵消]
track: Gröbner 基
order: 19
minutes: 15
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
设 $k$ 为域，$R=k[x_1,\ldots,x_n]$ 固定一个全局单项式序，$G=(g_1,\ldots,g_s)$ 是非零多项式的有限集合，并且 $I=\langle G\rangle$。则

$$G\text{ 是 }I\text{ 的 Gröbner 基}\quad\Longleftrightarrow\quad S(g_i,g_j)\xrightarrow{G}0\quad\text{对所有 }i<j.$$

右侧指标准首项除法得到零余式，或存在一个逐项消去首项直到零的约减序列。检验时可以固定除数顺序；在尚未证明 $G$ 是 Gröbner 基前，不预先假设余式唯一。

充分方向还可以使用下列条件：对每对 $i<j$，存在表示

$$S(g_i,g_j)=\sum_\ell a_{ij\ell}g_\ell,$$

使每个非零乘积 $a_{ij\ell}g_\ell$ 的首单项式都严格小于 $\operatorname{lcm}(\operatorname{LM}(g_i),\operatorname{LM}(g_j))$。这样的有界表示已经足以推出 $G$ 是 Gröbner 基。
:::

:::proof
**1. 必要性。** 若 $G$ 是 Gröbner 基，则 $S(g_i,g_j)$ 是 $g_i,g_j$ 的多项式倍数之差，故属于 $I$。由[成员判定定理](ref:op.gb-membership)，它对 $G$ 的除法余式为零。

**2. 首一化与零约减的首项上界。** 现在假设所有 S 多项式都能约减到零。把各 $g_i$ 除以自己的非零首系数，不改变生成理想、首单项式和 S 多项式，也不改变可执行的约减。以下设 $g_i$ 首一。

记 $L_{ij}=\operatorname{lcm}(\operatorname{LM}(g_i),\operatorname{LM}(g_j))$。若 $S(g_i,g_j)\ne0$，其共同最高项已抵消，故

$$\operatorname{LM}(S(g_i,g_j))\prec L_{ij}.$$

由[标准除法的首项上界](ref:op.gb-division-theorem)，零余式给出表示

$$S(g_i,g_j)=\sum_\ell q_{ij\ell}g_\ell,$$

且每个非零乘积的首单项式都严格小于 $L_{ij}$。S 多项式为零时使用空表示即可。

下面第 3–5 步只使用这个有界表示，不要求它必须来自零余式除法，因此也证明了陈述中的更一般充分条件。

**3. 为给定理想元素选最小表示。** 任取 $0\ne f\in I$。把它的某个生成元表示完全展开为有限个单项式倍数：

$$f=\sum_\nu c_\nu m_\nu g_{i_\nu},\qquad c_\nu\in k\setminus\{0\},$$

其中 $m_\nu$ 为单项式。对每个这样的表示，令

$$M=\max_\nu\{m_\nu\operatorname{LM}(g_{i_\nu})\}.$$

所有可能的 $M$ 构成非空单项式集合，故由良序可选其中最小的一个。总有 $\operatorname{LM}(f)\preceq M$。若二者相等，则某个 $\operatorname{LM}(g_i)$ 已整除 $\operatorname{LM}(f)$，所求成立。

**4. 把最高项抵消写成 S 多项式的组合。** 假设 $\operatorname{LM}(f)\prec M$。在所选表示中，把乘积首单项式为 $M$ 的项按生成元编号合并，得到

$$H=\sum_{i\in T}a_i\frac{M}{\operatorname{LM}(g_i)}g_i.$$

零系数组可以删去；若所有组均为零，则直接删除这些项就已使最大单项式变小，矛盾。否则，因为 $g_i$ 首一且 $f$ 中的 $M$ 项被抵消，必有 $\sum_{i\in T}a_i=0$，所以 $T$ 至少有两个元素。选 $i_0\in T$，逐项展开可核对

$$H=\sum_{i\in T\setminus\{i_0\}}a_i\frac{M}{L_{i i_0}}S(g_i,g_{i_0}).$$

这里 $L_{i i_0}\mid M$，故商确为单项式。右侧 $g_i$ 的系数正是 $a_iM/\operatorname{LM}(g_i)$；$g_{i_0}$ 的系数由 $-\sum_{i\ne i_0}a_i=a_{i_0}$ 得到。若配对次序相反，使用 $S(g_j,g_i)=-S(g_i,g_j)$。

**5. 得到更小表示，排除抵消。** 用第 2 步的零约减表示替换上式中的每个 S 多项式。其每个乘积首单项式原本小于 $L_{i i_0}$，再乘以 $M/L_{i i_0}$ 后，乘法相容性保证它严格小于 $M$。原表达中未进入 $H$ 的项也都小于 $M$。

因此得到 $f$ 的一个新表示，所有乘积首单项式都小于 $M$，与第 3 步的最小性矛盾。故只能有 $\operatorname{LM}(f)=M$，从而每个非零 $f\in I$ 的首单项式都可被某个 $\operatorname{LM}(g_i)$ 整除。由[定义的等价表述](ref:op.gb-grobner-basis)，$G$ 是 Gröbner 基。

核验：充分方向只使用首项上界、良序与显式抵消恒等式，没有预先使用待证明的 Gröbner 性或正规形唯一性。
:::

:::remark
$S(g_i,g_j)\in I$ 对任何生成集都自动成立，不能代替“能被当前 $G$ 约减到零”。后者才是检测遗漏首项关系的条件。

判据核对参考：[ETH · Effective Methods in Polynomial Rings](https://metaphor.ethz.ch/x/2025/hs/401-3132-00L/ex/Groebnernotes.pdf)。
:::
