---
track: "模与张量积"
study_date: "2026-11-17"
source_pack: "folio-am-ch2-modules-2026-11-17"
source_verified: false
source_note: "用户提供的 Folio_AM_Ch2_Modules_Exercises.zip；A–M Chapter 2 的题号、页码沿用原包，未独立核实。"
id: "alg.modules-base-change-splitting"
title: "标量扩张中的收缩与直和分解"
english: "Base change, retractions and direct summands"
summary: "已有 B-模的 canonical map 有乘法给出的左逆，因而是 A-模意义下的分裂单射。"
source_document: "04_Base_Change_and_Splitting.md"
tags: ["模", "张量积", "base-change", "splitting", "direct-summand"]
order: 35
source_label: "原包标注：A–M Chapter 2, Exercise 13, p. 32（未独立核实）"
targets: ["alg.modules-base-change-splitting-theorem"]
related: ["alg.modules-tensor-path", "alg.daily-2026-11-17"]
difficulty: "进阶"
minutes: 20
minutes_origin: "站内估计"
initial_status: "new"
hint_origin: "站内补充：根据原文证明构造整理。"
---

:::problem
## 题目

设 $f:A\to B$ 为交换含幺环之间的含幺 ring homomorphism，$N$ 为 $B$-module。通过 restriction of scalars，$N$ 是 $A$-module（$a\cdot y=f(a)y$）。设

$$N_B=B\otimes_A N.$$

构造 canonical $A$-linear map

$$g:N\longrightarrow N_B,\qquad y\longmapsto1_B\otimes y,$$

证明 $g$ injective，且 $g(N)$ 是 $N_B$ 的 **$A$-module direct summand**。
:::

:::hint
构造 $p(b\otimes y)=by$，先验证 $A$-balanced，再计算 $p\circ g$。用 $z=g(p(z))+(z-g(p(z)))$ 写出直和分解，并检查线性性对应的环。
:::

:::solution
## Step 1：构造 splitting map $p$，检查 well-definedness

尝试令

$$\boxed{p:B\otimes_AN\to N,\qquad p(b\otimes y)=by.}$$

**不能只在 pure tensors 上给出公式就宣称 well-defined**。先定义

$$\beta:B\times N\to N,\quad(b,y)\mapsto by.$$

由 $B$-module 公理，$\beta$ 对两个变量可加。对 $a\in A$、$b\in B$、$y\in N$，由于 $B$ 为交换环，

$$
\beta(f(a)b,y)=(f(a)b)y=b(f(a)y)=\beta(b,ay).
$$

因此 $\beta$ 是 **$A$-balanced bilinear map**。根据 tensor product 的 universal property，它唯一地诱导 $A$-linear map $p$ 满足上述 pure tensor 公式。事实上 $p$ 还是 $B$-linear（$B$ 作用于张量积的第一个因子）。

## Step 2：$g$ 是 $A$-linear；计算复合

$g$ 由给定公式在每个 $y\in N$ 上定义，因此其 well-definedness 显然；加法性由 tensor product 的加法性得到。对 $a\in A$，

$$
\begin{aligned}
g(ay)&=1_B\otimes f(a)y\\
&=f(a)\otimes y\\
&=a\cdot(1_B\otimes y)=a\cdot g(y).
\end{aligned}
$$

第二个等式使用 $A$-balancing relation；故 $g$ 是 $A$-linear。

对每个 $y\in N$，

$$
\boxed{(p\circ g)(y)=p(1_B\otimes y)=1_B y=y.}
$$

因此

$$\boxed{p\circ g=1_N.}$$

此等式并不深奥：只依赖 $p$ 已经 well-defined，以及 $B$-module 的 unit axiom $1_By=y$。

**切勿颠倒复合顺序！** 通常 $g\circ p\ne1_{B\otimes_A N}$，因为

$$
(g\circ p)(b\otimes y)=1_B\otimes by
$$

未必等于 $b\otimes y$：**$\otimes_A$ 的 balancing 只能移动 $A$-scalars，不能任意移动 $b\in B$。**

具体反例：若 $A=k$、$B=k[t]$、$N=k[t]$，则在 $k[t]\otimes_k k[t]\cong k[s,t]$ 下，$t\otimes1\ne1\otimes t$，所以 $g p(t\otimes1)=1\otimes t\ne t\otimes1$。

## Step 3：由 left inverse 推出 injectivity

若 $g(y)=0$，应用 $p$ 得

$$y=(p\circ g)(y)=p(0)=0.$$

所以 $g$ injective。

这里 $g$ 称为 **split monomorphism**；$p$ 是它的 **retraction / left inverse**，而 $g$ 也是 $p$ 的 **section / right inverse**。

## Step 4：明确构造 direct sum decomposition

对任意 $z\in B\otimes_A N$，写

$$
\boxed{z=g(p(z))+(z-g(p(z))).}
$$

第一项属于 $g(N)$。第二项属于 $\ker p$，因为

$$p(z-g(p(z)))=p(z)-(p\circ g)(p(z))=0.$$

故 $B\otimes_A N=g(N)+\ker p$。

若 $z\in g(N)\cap\ker p$，写 $z=g(y)$。由 $p(z)=0$ 得

$$0=p(g(y))=y,$$

所以 $z=g(0)=0$。因此交为零，得到

$$
\boxed{B\otimes_A N=g(N)\oplus\ker p\qquad\text{(as $A$-modules)}.}
$$

对于 pure tensor，这个分解就是

$$
\boxed{b\otimes y=1_B\otimes by+(b\otimes y-1_B\otimes by).}
$$

第一项在 $g(N)$，第二项在 $\ker p$。

## 一般性引理：split monomorphism 与 direct summand

设 $R$ 为环，$u:X\to E$、$r:E\to X$ 为 $R$-linear maps，且 $r\circ u=1_X$。则 $u$ injective，且

$$\boxed{E=u(X)\oplus\ker r.}$$

**证明**：$u(x)=0\Rightarrow x=r(u(x))=0$；任意 $e\in E$ 可写为

$$e=u(r(e))+(e-u(r(e))),$$

后项落在 $\ker r$。若 $u(x)\in\ker r$，则 $x=r(u(x))=0$，交为零。$\square$

等价地，短正合列

$$
0\to\ker r\to E\xrightarrow{r}X\to0
$$

具有 section $u$，所以 **split exact**。

## 一个重要的线性性限制

- $p$ 还是 $B$-linear。
- **$g$ 一般不是 $B$-linear**，因此 $g(N)$ 未必是 $B$-submodule。故本题 direct summand 结论严格表述为 $A$-module direct summand。
- 例如 $A=k,B=k[t],N=k[t]$：$g(t)=1\otimes t$，但 $t\cdot g(1)=t\otimes1$，两者在 $k[t]\otimes_k k[t]$ 中不同。

## 一句话证明模板（可提交版）

The $A$-balanced map $(b,y)\mapsto by$ induces an $A$-linear map $p:B\otimes_A N\to N$, $b\otimes y\mapsto by$. The canonical map $g:N\to B\otimes_A N$, $y\mapsto1\otimes y$, is $A$-linear since $1\otimes f(a)y=f(a)\otimes y$. For all $y\in N$, $(p\circ g)(y)=p(1\otimes y)=y$, so $g$ is injective. Moreover, every $z\in B\otimes_A N$ decomposes as $g(p(z))+(z-g(p(z)))$, with the second term in $\ker p$, and $g(N)\cap\ker p=0$. Thus $B\otimes_A N=g(N)\oplus\ker p$ as $A$-modules. $\square$
:::
