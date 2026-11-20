---
id: algebra-grobner-basis-intro
slug: grobner-basis-intro
title: "Gröbner Basis：动机、定义与 Buchberger 算法"
subject: "Commutative Algebra"
topic: "Gröbner Basis"
type: "concept-note"
status: "reviewed"
created: 2026-11-12
language: zh-CN
prerequisites:
  - "Polynomial rings and ideals"
  - "Monomial orders"
tags:
  - commutative-algebra
  - polynomial-ideal
  - grobner-basis
  - normal-form
  - s-polynomial
  - buchberger-algorithm
keywords:
  - monomial order
  - leading monomial
  - initial ideal
  - ideal membership
  - Buchberger criterion
---

# Gröbner Basis：动机、定义与 Buchberger 算法

> **核心主线**：选择一个 **monomial order**，用 **leading monomial** 衡量多项式的首项；**Gröbner basis** 保证理想中任何非零多项式的首单项式都可以被某个基元素的首单项式整除。因此，多项式除法的余式成为判定 **ideal membership** 的工具。**S-polynomial** 则帮助检测和补齐普通生成元遗漏的首项关系。

## 0. 背景与符号

设 $k$ 为一个**域**，$R=k[x_1,\ldots,x_n]$，$I\subseteq R$ 是理想，$G=\{g_1,\ldots,g_s\}\subseteq I$ 是有限集合（通常假设 $I=\langle G\rangle$）。除特别说明外，所有 leading terms 都相对于**同一个固定的 monomial order**。

- **Monomial（单项式）**：$x^\alpha=x_1^{\alpha_1}\cdots x_n^{\alpha_n}$，其中 $\alpha_i\ge 0$。
- **Monomial order** $\succ$：单项式上的全序，满足 $1\preceq x^\alpha$，若 $a\succ b$ 则 $ac\succ bc$，并且是良序（well-order）。典型例子：lex、grlex、grevlex。
- **Leading monomial** $\operatorname{LM}(f)$：$f$ 中最大的单项式，不包含系数。
- **Leading coefficient** $\operatorname{LC}(f)$：该单项式的系数。
- **Leading term** $\operatorname{LT}(f)=\operatorname{LC}(f)\operatorname{LM}(f)$：包含系数的首项。

例如采用 lex order $x\succ y$，对 $f=x-y^2$，有

$$
\operatorname{LM}(f)=x,\qquad \operatorname{LT}(f)=x.
$$

注意：字典序 $x\succ y$ 下，$x\succ y^m$ 对所有正整数 $m$ 成立；它不是按总次数比较的。

## 1. Motivation：为什么需要 Gröbner basis？

### 核心问题：Ideal Membership Problem

给定理想 $I=\langle f_1,\ldots,f_s\rangle$ 和一个多项式 $f$，我们想判断

$$
\boxed{f\in I\;?}
$$

对单变量多项式，我们熟悉通过除法判断整除性。多变量情形也有除法算法，但**用任意一组理想生成元做除法，得到非零余式，不能推出 $f\notin I$**。

### 反例：生成元不等于 Gröbner basis

取 $R=k[x,y]$，选择 lex order $x\succ y$，令

$$
I=\langle xy-1,\;x-y^2\rangle,
\qquad F=\{xy-1,\;x-y^2\}.
$$

其首单项式为

$$
\operatorname{LM}(xy-1)=xy,\qquad
\operatorname{LM}(x-y^2)=x.
$$

考虑 $f=y^3-1$。它实际上属于 $I$，因为

$$
\boxed{y^3-1=(xy-1)-y(x-y^2).}
$$

然而 $y^3$ 不被 $xy$ 或 $x$ 整除，因此用 $F$ 作多项式除法会得到非零余式 $y^3-1$。

**问题不在于理想没有被生成，而在于生成元没有捕捉到理想中的全部 leading-monomial 关系。**

改用

$$
G=\{x-y^2,\;y^3-1\},
$$

则 $\langle G\rangle=I$，且 $G$ 是 Gröbner basis。此时 $f=y^3-1$ 可以约减为 $0$。

## 2. Initial Ideal 与 Gröbner Basis 的定义

### Definition 1：Initial Ideal

对非零理想 $I\subseteq R$，定义

$$
\boxed{
\operatorname{in}_{\succ}(I)
=\langle \operatorname{LM}(f): f\in I,\ f\ne0\rangle.
}
$$

这称为 **initial ideal（初始理想）**，是一个 **monomial ideal（单项式理想）**。它由 $I$ 中**所有**非零元素的首单项式生成，并非仅由随意选取的一组生成元的首单项式生成。

### Definition 2：Gröbner Basis

有限集合 $G=\{g_1,\ldots,g_s\}\subseteq I$ 称为理想 $I$ 关于 $\succ$ 的 **Gröbner basis**，若

$$
\boxed{
\operatorname{in}_{\succ}(I)
=\langle\operatorname{LM}(g_1),\ldots,\operatorname{LM}(g_s)\rangle.
}
$$

**等价表述**：任取 $0\ne f\in I$，都存在 $g_i\in G$ 满足

$$
\boxed{\operatorname{LM}(g_i)\mid\operatorname{LM}(f).}
$$

> 直觉：普通生成元控制的是“哪些多项式线性组合可以生成 $I$”；Gröbner basis 还控制“$I$ 内每个非零多项式的最大单项式能否被消去”。

**重要推论**：Gröbner basis 本身必然生成理想 $I$。不过这并不是任意生成集自动具有的性质——必须满足上面的 initial ideal 条件。

### 为什么两个条件等价？

一个单项式 $m$ 属于单项式理想 $\langle m_1,\ldots,m_s\rangle$，当且仅当存在 $i$ 使得 $m_i\mid m$。将此事实应用于 $m=\operatorname{LM}(f)$，即得两种定义等价。

## 3. Reduction 与 Normal Form

### Definition 3：单步约减（Reduction）

如果 $\operatorname{LM}(g)\mid\operatorname{LM}(f)$，则可通过

$$
f\longmapsto f-\frac{\operatorname{LT}(f)}{\operatorname{LT}(g)}g
$$

消去 $f$ 的首项。更一般地，当 $f$ 中的某一项 $c x^\alpha$ 被 $\operatorname{LM}(g)$ 整除时，也可以减去相应倍数的 $g$，消去该项。

每次消去**当前首项**之后，得到的新多项式的首单项式严格变小。因此在固定 monomial order 下，不可能发生无限次严格首项下降。

### Definition 4：Normal Form

将 $f$ 对有序集合 $G$ 进行多变量除法，得到

$$
f=\sum_{i=1}^s q_i g_i+r,
$$

其中余式 $r$ 的每个非零项都不能被任何 $\operatorname{LM}(g_i)$ 整除。称 $r$ 为一次除法得到的 **normal form / remainder**，记为 $\operatorname{NF}_G(f)$（当 $G$ 不是 Gröbner basis 时，这一记号可能依赖除法的选择与生成元顺序）。

**若 $G$ 是 Gröbner basis，则余式唯一**，不依赖除法路径，可无歧义地写作 $\operatorname{NF}_G(f)$。

### Theorem 1：Ideal Membership Criterion

若 $G$ 是理想 $I$ 的 Gröbner basis，则

$$
\boxed{f\in I\iff\operatorname{NF}_G(f)=0.}
$$

**证明**：

- 若 $\operatorname{NF}_G(f)=0$，则 $f=\sum_i q_i g_i\in I$。
- 反之，设 $f\in I$，除法给出 $f=\sum_iq_i g_i+r$。由于 $f,g_i\in I$ 且 $I$ 是理想，故 $r\in I$。若 $r\ne0$，Gröbner basis 的定义保证某个 $\operatorname{LM}(g_i)$ 整除 $\operatorname{LM}(r)$，与余式定义矛盾。因此 $r=0$。 $\square$

### 为什么余式唯一？

如果 $r_1,r_2$ 都是合法余式，那么 $r_1-r_2\in I$。由于两者每一项都不被任何 $\operatorname{LM}(g_i)$ 整除，差 $r_1-r_2$ 的每个非零项也有同一性质。如果 $r_1-r_2\ne0$，其首单项式会违反 Gröbner basis 的整除性质。所以 $r_1=r_2$。

由此，Gröbner basis 将一个理想成员资格问题变成一个确定的计算问题。

## 4. S-polynomial：为什么需要它？

理想生成元的最大项在相互组合时**可能发生抵消**，产生原先生成元的 leading monomials 无法整除的新首项。S-polynomial 专门探测这种抵消。

### Definition 5：S-polynomial

对非零 $f,g\in R$，令

$$
m=\operatorname{lcm}(\operatorname{LM}(f),\operatorname{LM}(g)).
$$

定义

$$
\boxed{
S(f,g)
=\frac{m}{\operatorname{LT}(f)}f
-\frac{m}{\operatorname{LT}(g)}g.
}
$$

此式的作用是：把 $f$ 与 $g$ 的 leading terms 提升到同一单项式 $m$，然后相减，**消掉共同的最高项**。

### 计算例子

对 $f_1=xy-1$ 与 $f_2=x-y^2$，有

$$
m=\operatorname{lcm}(xy,x)=xy,
$$

因此

$$
\begin{aligned}
S(f_1,f_2)
&=(xy-1)-y(x-y^2)\\
&=y^3-1.
\end{aligned}
$$

这里新产生的 $y^3-1$ 无法继续用原集合 $F$ 的 leading monomials $xy,x$ 约减，说明原集合**不是** Gröbner basis。

## 5. Buchberger Criterion：何时是 Gröbner basis？

### Theorem 2：Buchberger Criterion

设 $G=\{g_1,\ldots,g_s\}$ 生成理想 $I$。则

$$
\boxed{
G\text{ 是 Gröbner basis}
\iff
\operatorname{NF}_G\bigl(S(g_i,g_j)\bigr)=0
\quad\forall\ i<j.
}
$$

这里的 $\operatorname{NF}_G=0$ 指 S-polynomial 通过多项式除法对 $G$ **约减到零**。在检验非 Gröbner 的集合时，非零余式可能依赖除法选择；Buchberger 判据使用固定的标准除法算法，或等价地要求 S-polynomial 对 $G$ 有零约减。

**直观解释**：每对生成元之间潜在的首项抵消，都能够由当前集合彻底消去，那么就不存在遗漏的 leading-monomial 关系。

> 注意：仅有 $S(g_i,g_j)\in I$ 并不够（这始终成立）；关键是它能否**被当前的 $G$ 约减至 $0$**。

## 6. Buchberger Algorithm：从普通生成元构造 Gröbner basis

**输入**：有限生成集 $F=\{f_1,\ldots,f_s\}\subseteq k[x_1,\ldots,x_n]$，一个固定的 monomial order。

**输出**：$I=\langle F\rangle$ 的 Gröbner basis。

```text
G ← F \ {0}
P ← G 中所有无序二元组 {g_i, g_j}

while P 非空:
    从 P 中取出并删除一对 {p, q}
    h ← remainder(S(p, q), G)
    if h ≠ 0:
        G ← G ∪ {h}
        将 {h, g}（g 为旧 G 中的每个元素）加入 P

return G
```

**关键不变量**：每次新加入的 $h$ 属于 $I$，且 $\langle G\rangle=I$ 始终成立。由于 $h$ 是非零余式，$\operatorname{LM}(h)$ 不属于当前由 $G$ 的 leading monomials 生成的 monomial ideal，故加入 $h$ 会让这个 monomial ideal **严格变大**。

### 手算：把 $F=\{xy-1,x-y^2\}$ 变成 Gröbner basis

固定 lex order $x\succ y$。

**Step 1.** 计算 S-polynomial：

$$
S(xy-1,x-y^2)=y^3-1.
$$

**Step 2.** 余式 $y^3-1\ne0$，故将它加入：

$$
G'=\{xy-1,\;x-y^2,\;y^3-1\}.
$$

**Step 3.** 检查所有 S-polynomials 是否都可被 $G'$ 约减至零。例如，对
$g_2=x-y^2$、$g_3=y^3-1$，

$$
\begin{aligned}
S(g_2,g_3)
&=y^3(x-y^2)-x(y^3-1)\\
&=x-y^5\\
&\xrightarrow{g_2}y^2-y^5\\
&\xrightarrow{g_3}0.
\end{aligned}
$$

原来的另一对产生 $g_3$，余式显然为零；而 $S(xy-1,y^3-1)$ 也可约减至零。于是 $G'$ 是 Gröbner basis。

**Step 4.** 去掉冗余元素 $xy-1$：它可以由 $x-y^2$ 与 $y^3-1$ 生成，而且其 leading monomial $xy$ 已被 $x$ 整除。得到更简洁的 **reduced Gröbner basis**：

$$
\boxed{G_{\mathrm{red}}=\{x-y^2,\;y^3-1\}.}
$$

这组基的首项是 $x$ 和 $y^3$，所以

$$
\boxed{\operatorname{in}_{\mathrm{lex}}(I)=\langle x,y^3\rangle.}
$$

**补充**：这里删去 $xy-1$ 不只是因为它的首单项式能被 $x$ 整除；我们还验证了它能由另外两个多项式生成：

$$
xy-1=y(x-y^2)+(y^3-1).
$$

## 7. 为什么算法一定会结束？——区分两个终止性论证

### (A) 单次多项式除法为什么结束？

每次消去当前 leading term，首单项式都会严格下降。由于 monomial order 是 **well-order**，不存在无限严格下降链。因此**单次除法必终止**。

### (B) Buchberger 算法为什么结束？

这需要更强的论证：每次真正添加一个非零余式 $h$，都会产生严格的 monomial ideal 包含关系

$$
\langle\operatorname{LM}(G_0)\rangle
\subsetneq
\langle\operatorname{LM}(G_1)\rangle
\subsetneq\cdots.
$$

根据 **Dickson's Lemma**（等价地，多项式环满足 Noetherian 性质；单项式理想不存在无限严格上升链），这种严格增长不可能无限持续。所以只能添加有限多个新多项式；待处理的 pair 数目也就有限，算法终止。

> **易错点**：well-order 直接保障的是**下降式约减**终止；Buchberger 算法不断**扩大**首单项式生成的理想，其终止性要用 **ascending chain condition / Dickson's Lemma**，不能只说“单项式是良序，所以算法结束”。

## 8. 整体逻辑图

```mermaid
flowchart TD
    A[固定 monomial order] --> B[定义 LM / LT]
    B --> C[定义 initial ideal in\(I\)]
    C --> D[Gröbner basis: in\(I\) = ideal\(LM\(G\)\)]
    D --> E[唯一 Normal Form]
    E --> F[Ideal membership: NF = 0]
    B --> G[S-polynomial: 消掉两个首项]
    G --> H[Buchberger Criterion]
    H --> I[Buchberger Algorithm]
    I --> D
    J[Dickson's Lemma / ACC] --> I
```

## 9. 常见误区与检查问题

| 常见说法 | 正确表述 |
|---|---|
| “$G$ 生成 $I$，所以除法余式非零就说明 $f\notin I$。” | 只有当 $G$ 是 Gröbner basis，余式才给出可靠的 membership 判定。 |
| “$\operatorname{in}(I)$ 就是取任意生成元的 leading monomials 构成的理想。” | 必须考虑 **$I$ 中所有非零元素**的 leading monomials；Gröbner basis 恰好允许用有限个基的首单项式替代它们。 |
| “$S(f,g)\in I$，所以它一定约减到 $0$。” | $S(f,g)\in I$ 自动成立，但若 $G$ 不是 Gröbner basis，未必能对 $G$ 约减到 $0$。 |
| “monomial order 是良序，Buchberger 当然终止。” | 除法终止用良序；Buchberger 终止需要 monomial ideals 的 ACC（Dickson's Lemma）。 |
| “任何生成集算出的 normal form 都唯一。” | 一般不唯一；对 Gröbner basis 的余式才唯一。 |

## 10. 自测练习

**练习 1（定义检查）**：解释为什么 $G$ 为 Gröbner basis 时，任意非零 $f\in I$ 都满足 $\operatorname{LM}(g_i)\mid\operatorname{LM}(f)$（对某个 $i$）。

**练习 2（计算）**：对 lex order $x\succ y$，从 $F=\{xy-1,x-y^2\}$ 出发计算 S-polynomial，并解释为何 $F$ 不是 Gröbner basis。

**练习 3（证明）**：严格证明 $f\in I\iff\operatorname{NF}_G(f)=0$，明确指出**ideal property** 被用在哪里。

**练习 4（进阶）**：证明若 $G$ 是 Gröbner basis，那么对 $G$ 的多项式除法的余式唯一。

**练习 5（核心理解）**：分别解释多变量除法与 Buchberger 算法终止的理由。为什么两个理由不能简单混为一谈？

## 11. 一分钟回顾

1. **问题**：给定 $f$ 与理想 $I$，如何算法化判断 $f\in I$？
2. **结构**：monomial order $\Rightarrow$ leading monomial $\Rightarrow$ initial ideal。
3. **定义**：$G$ 是 Gröbner basis $\iff\operatorname{in}(I)=\langle\operatorname{LM}(G)\rangle$。
4. **应用**：$f\in I\iff\operatorname{NF}_G(f)=0$；且 normal form 唯一。
5. **判据**：$G$ 是 Gröbner basis $\iff$ 所有 pair 的 S-polynomials 对 $G$ 约减到 $0$。
6. **算法**：Buchberger 不断将非零 S-polynomial 余式加入生成集；由 Dickson's Lemma 确保终止。

---

**学习关联**：Polynomial Ideals · Monomial Ideals · Multivariate Division · Buchberger Algorithm · Elimination Theory
