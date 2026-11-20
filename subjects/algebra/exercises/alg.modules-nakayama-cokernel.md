---
track: "模与张量积"
study_date: "2026-11-17"
source_pack: "folio-am-ch2-modules-2026-11-17"
source_verified: false
source_note: "用户提供的 Folio_AM_Ch2_Modules_Exercises.zip；A–M Chapter 2 的题号、页码沿用原包，未独立核实。"
id: "alg.modules-nakayama-cokernel"
title: "Nakayama：模理想满射的提升"
english: "Nakayama and surjectivity via the cokernel"
summary: "对有限生成余核使用 Nakayama，把模 I 的满射提升为原映射满射；不要求定义域有限生成。"
source_document: "03_Nakayama_and_Cokernel.md"
tags: ["模", "Nakayama", "Jacobson-radical", "cokernel", "right-exactness"]
order: 34
source_label: "原包标注：A–M Chapter 2, Exercise 10, p. 32（未独立核实）"
targets: ["alg.modules-nakayama-cokernel-theorem"]
related: ["alg.modules-tensor-path", "alg.daily-2026-11-17"]
difficulty: "进阶"
minutes: 20
minutes_origin: "站内估计"
initial_status: "new"
---

:::problem
## 题目

设 $I\subseteq\operatorname{Jac}(A)$，$M$ 为任意 $A$-module，$N$ 为 **finitely generated** $A$-module，$u:M\to N$ 为 $A$-linear。若

$$\bar u:M/IM\to N/IN$$

是 surjective，证明 $u$ surjective。**不允许假设 $M$ finitely generated。**
:::

:::hint
核心证明链
$\bar u$ 满射 $\implies C/IC=0\implies C=IC\overset{\text{Nakayama}}{\implies}C=0$，其中 $C=\operatorname{coker}(u)$。
:::

:::solution
## Step 1：cokernel 正合列

令 $C=N/u(M)$，取 canonical quotient $q:N\twoheadrightarrow C$。则

$$
M\xrightarrow{u}N\xrightarrow{q}C\to0
$$

exact：$\ker q=u(M)$，且 $q$ surjective。**不能随意在左端加 $0$**，因为不知 $u$ injective。

## Step 2：严格构造 quotient 后的 right exact sequence

$u(IM)\subseteq IN$，故 $\bar u(m+IM)=u(m)+IN$ well-defined。

同样定义

$$
\bar q:N/IN\longrightarrow C/IC,\qquad n+IN\longmapsto q(n)+IC.
$$

这是 well-defined，因为 $q(IN)\subseteq IC$；它还是 surjective，因为 $q$ surjective。

证明 $\ker\bar q=\operatorname{im}\bar u$：

- 若 $n+IN\in\ker\bar q$，则 $q(n)\in IC$。因 $q$ surjective 且 $A$-linear，$q(IN)=IC$，故存在 $z\in IN$ 使得 $q(n)=q(z)$。于是 $n-z\in\ker q=u(M)$，存在 $m\in M$ 满足 $n-z=u(m)$。因此 $n+IN=\bar u(m+IM)$。
- 反过来 $q\circ u=0$，故 $\bar q\circ\bar u=0$，于是 $\operatorname{im}\bar u\subseteq\ker\bar q$。

故有 exact sequence

$$
\boxed{M/IM\xrightarrow{\bar u}N/IN\xrightarrow{\bar q}C/IC\to0.}
$$

**更短的写法**：对 $M\xrightarrow{u}N\to C\to0$ 应用 right exact functor $-\otimes_A A/I$，再用自然同构 $X\otimes_A A/I\cong X/IX$，直接得到这条序列。上面的元素证明解释了为何它 right exact。

## Step 3：由 $\bar u$ 满射推出 $C=IC$

已知 $\bar u$ surjective，所以 $\ker\bar q=\operatorname{im}\bar u=N/IN$。因此 $\bar q=0$。但 $\bar q$ 同时 surjective，故 $C/IC=0$，即

$$\boxed{C=IC.}$$

也可直接写：$\bar u$ 满射意味着 $N=u(M)+IN$，所以

$$C/IC\cong N/(u(M)+IN)=0.$$

## Step 4：Nakayama 结束证明；检查 finite generation

$N=(n_1,\ldots,n_r)$，故

$$C=(q(n_1),\ldots,q(n_r))$$

也是 finitely generated。**全题只在这里使用 $N$ finitely generated；根本不需要 $M$ finitely generated。**

已知 $I\subseteq\operatorname{Jac}(A)$ 且 $C=IC$。由 Nakayama's Lemma 得 $C=0$。因此 $N/u(M)=0$，即 $u(M)=N$，$u$ surjective。$\square$

## 为什么条件 $I\subseteq\operatorname{Jac}(A)$ 至关重要？

$$\operatorname{Jac}(A)=\bigcap_{\mathfrak m\in\operatorname{MaxSpec}(A)}\mathfrak m.$$

若 $a\in\operatorname{Jac}(A)$，则 $1-a$ 为 unit。否则 $1-a$ 属于某个 maximal ideal $\mathfrak m$；又 $a\in\mathfrak m$，会推出 $1\in\mathfrak m$，矛盾。

**Nakayama 的生成元消去证明**：设 $C=IC$、$C$ finitely generated、$I\subseteq\operatorname{Jac}(A)$。若 $C\ne0$，取长度最小的有限生成元组 $(c_1,\ldots,c_r)$，$r\ge1$。由 $c_r\in IC$，有

$$c_r=\sum_{i=1}^ra_ic_i\qquad(a_i\in I).$$

故 $(1-a_r)c_r=\sum_{i<r}a_ic_i$。因 $1-a_r$ 可逆，$c_r\in(c_1,\ldots,c_{r-1})$，与最小性矛盾。故 $C=0$。

- **Jacobson radical 条件**：保证 $1-a_r$ 可逆。
- **Finite generation 条件**：允许选择有限长度最小生成元组。
- **$C=IC$ 条件**：给出可消去生成元的关系。

## 反例：条件不可随便删除

**删去 Jacobson radical 条件**：取 $A=\mathbb Z$、$I=(2)$、$M=0$、$N=\mathbb Z/3\mathbb Z$、$u=0$。由于 $IN=N$，$N/IN=0$，所以 $\bar u:0\to0$ 满射；但 $u:0\to N$ 非满射。这里 $\operatorname{Jac}(\mathbb Z)=0$，$(2)$ 不包含于其中。

**删去 finite generation 条件**：取 $A=\mathbb Z_{(p)}$（在素数 $p$ 处局部化），$I=pA=\operatorname{Jac}(A)$，$N=\mathbb Q$ 视为 $A$-module，$M=0$。由于 $p\mathbb Q=\mathbb Q$，$N/IN=0$，所以 $\bar u$ 满射，但 $u$ 不满射。$\mathbb Q$ 并非 finitely generated $A$-module。

## 一句话证明模板（可提交版）

令 $C=\operatorname{coker}(u)$。因 $N$ finitely generated，其 quotient $C$ 亦 finitely generated。对 right exact sequence $M\xrightarrow{u}N\to C\to0$ 施加 $-\otimes_AA/I$，得 exact sequence $M/IM\xrightarrow{\bar u}N/IN\to C/IC\to0$。由 $\bar u$ 满射知 $C/IC=0$，即 $C=IC$。因 $I\subseteq\operatorname{Jac}(A)$，Nakayama's Lemma 推出 $C=0$，所以 $u$ 满射。$\square$
:::
