# Folio · 交换代数题组 · 2026-11-13

> 本合订本用于阅读；独立导入请使用 JSON / MD 卡片。


---

# 题目

# CA-Q20261113-01 · Boolean rings：特征与 prime ideals

> **出处**：Atiyah–Macdonald, *Introduction to Commutative Algebra*, Chapter 1, Exercise 11(i)–(ii), p. 11（题号和页码来自本次提问，尚未独立核对）。
> **建议用时**：15 分钟。**术语约定**：所有 ring 均为含单位元的 commutative ring；prime ideal 总为 proper ideal。

## 题目

称 $A$ 为 **Boolean ring**，如果对每个 $a\in A$，$a^2=a$。

1. 证明 $2a=0$ 对所有 $a\in A$ 成立。
2. 证明任意 prime ideal $\mathfrak p\subset A$ 都是 maximal，并且 $A/\mathfrak p\cong\mathbb F_2$。

## 提示（先独立作答）

1. 比较 $(-a)^2$ 与 $-a$，或展开 $(a+a)^2$。
2. $A/\mathfrak p$ 是 integral domain；商环中的每个元素仍满足 $x^2=x$。
3. 在 integral domain 中，$x(x-1)=0$ 说明了什么？

## 严格证明

### (i) 每个元素都满足 $2a=0$

因为 $-a\in A$ 也幂等，故

$$(-a)^2=-a.$$

另一方面，$(-a)^2=a^2=a$，故 $a=-a$，从而

$$\boxed{2a=0.}$$

特别地，取 $a=1$，得到 $1+1=0$（当 $A\neq0$ 时，$\operatorname{char} A=2$）。

### (ii) 素理想的商环是 $\mathbb F_2$

任取 prime ideal $\mathfrak p$，设 $B=A/\mathfrak p$。由素理想判别法，$B$ 是 integral domain；由于 $\mathfrak p$ proper，$1_B\neq0_B$。

任意 $\bar a\in B$ 都满足

$$\bar a^2=\overline{a^2}=\bar a,$$

因此

$$\bar a(\bar a-1_B)=0.$$

由于 $B$ 是 integral domain，必有 $\bar a=0_B$ 或 $\bar a=1_B$。两者不同，因而 $B$ 恰有两个元素。映射 $\mathbb F_2\to B$，$\bar0\mapsto0_B$、$\bar1\mapsto1_B$，是环同构：

$$\boxed{A/\mathfrak p\cong\mathbb F_2.}$$

特别地，$A/\mathfrak p$ 是 field，由 maximal ideal 判别法，$\mathfrak p$ 是 maximal。

## 用户已出现的疑惑与修正

- **环有没有 $1$？** 本题采用 A–M 的含幺交换环约定。商环 $A/\mathfrak p$ 的单位是 $1_A+\mathfrak p$。
- **“得到 $A=\mathbb F_2$”**：只有在 $A$ 本身还是 integral domain 时才成立；一般只能推出 $A/\mathfrak p\cong\mathbb F_2$。
- **“素理想是整环”**：准确陈述为“$A/\mathfrak p$ 是 integral domain”，随后进一步推出“$\mathfrak p$ 是 maximal ideal”。

## 结构总结与自测

$$\operatorname{Spec}(A)=\operatorname{MaxSpec}(A)\qquad\text{(Boolean ring)}.$$

自测：为什么 $\mathbb F_2\times\mathbb F_2$ 是 Boolean ring 却不是 field？找出其所有 prime ideals。

## 双向链接

- 定义 / 定理：[Boolean ring](../concepts/CA-K20261113-01-boolean-rings.md)
- 例子：[$\mathbb F_2\times\mathbb F_2$](../examples/CA-E20261113-01-f2-product.md)
- 后续练习：[Boolean ring 的有限生成理想](CA-Q20261113-03-boolean-fg-ideals.md)
- 易错点：[本题易错点](../mistakes/CA-mistakes-2026-11-13.md)

# CA-Q20261113-02 · 唯一 prime ideal、nilpotent elements 与 reduced quotient

> **出处**：本次对话中的题目（未提供确定书籍题号）；**建议用时**：15 分钟。
> 设 $A\neq0$ 是含单位元的 commutative ring，$\mathfrak N=\operatorname{Nil}(A)$。

## 题目

证明以下三项等价：

1. $A$ 恰有一个 prime ideal。
2. $A$ 的每个元素不是 unit 就是 nilpotent。
3. $A/\mathfrak N$ 是 field。

## 提示（先独立作答）

- $\mathfrak N=\bigcap_{\mathfrak p\in\operatorname{Spec} A}\mathfrak p$。
- 非单位元所属的 principal ideal 是 proper 的，故包含于某个 maximal ideal。
- Prime ideal correspondence 说明 $\operatorname{Spec}(A/\mathfrak N)$ 与 $\operatorname{Spec}(A)$ 对应。

## 严格证明

### (i) $\Rightarrow$ (ii)

设 $\operatorname{Spec}(A)=\{\mathfrak p\}$。因为 nilradical 是所有 prime ideals 的交集，故 $\mathfrak N=\mathfrak p$。

由于 $A\neq0$，$A$ 存在 maximal ideal $\mathfrak m$；它必为 prime ideal，故 $\mathfrak m=\mathfrak p$，这也是 $A$ 唯一的 maximal ideal。

任取非单位元 $a$，则 $(a)$ proper，因此存在 maximal ideal $\mathfrak m'$ 使 $(a)\subseteq\mathfrak m'$。由唯一性 $\mathfrak m'=\mathfrak p=\mathfrak N$，于是 $a\in\mathfrak N$，即 $a$ nilpotent。命题 (ii) 成立。

### (ii) $\Rightarrow$ (iii)

因为 $A\neq0$，$1_A$ 不可能 nilpotent，故 $1_A\notin\mathfrak N$；因此 $A/\mathfrak N$ 是非零环。

任取非零陪集 $\bar a=a+\mathfrak N$，则 $a\notin\mathfrak N$，所以 $a$ 不是 nilpotent。由 (ii)，$a$ 是 unit，存在 $b\in A$ 使得 $ab=1_A$。于是

$$\bar a\,\bar b=\overline{ab}=\bar 1.$$

故商环中每个非零元素可逆，$A/\mathfrak N$ 是 field。

### (iii) $\Rightarrow$ (i)

若 $A/\mathfrak N$ 是 field，则它的唯一 prime ideal 是 $(0)$。由 prime ideal correspondence theorem，$A/\mathfrak N$ 的 prime ideals 与 $A$ 中包含 $\mathfrak N$ 的 prime ideals 一一对应。

而所有 prime ideals 都包含 $\mathfrak N$，故 $A$ 恰有一个 prime ideal，且它正是 $\mathfrak N$。

综上，(i)、(ii)、(iii) 等价。

## 易错点

- “唯一 prime ideal 就是 maximal”需要说明 maximal ideals 存在、且它们都是 prime ideals。
- $\bar a\neq0$ 只推出 $a\notin\mathfrak N$；还需要 (ii) 才能得到 $a$ 是 unit。
- $A/\mathfrak N$ 为 field 不意味着 $A$ 为 field。$k[\varepsilon]/(\varepsilon^3)$ 是反例。
- “每个元素分别 nilpotent”不意味着存在统一 $n$ 使 $\mathfrak N^n=0$。
- **非零假设不可省**：零环没有 prime ideals，且零商环不是 field。

## 进一步结构

这些条件等价于：$A$ 是 Krull dimension 为 $0$ 的 local ring，其唯一 maximal ideal 等于 $\operatorname{Nil}(A)$。

## 双向链接

- 定理：[Nilradical、local rings 与商环](../concepts/CA-K20261113-02-nilradical-local-rings.md)
- 例子：[$k[\varepsilon]/(\varepsilon^3)$](../examples/CA-E20261113-02-truncated-polynomials.md)
- 易错点：[本题易错点](../mistakes/CA-mistakes-2026-11-13.md)

# CA-Q20261113-03 · Boolean ring 的每个 finitely generated ideal 都是 principal

> **出处**：Atiyah–Macdonald, *Introduction to Commutative Algebra*, Chapter 1, Exercise 11(iii), p. 11（题号和页码来自本次提问，尚未独立核对）。
> **建议用时**：5–10 分钟；本题重点是构造生成元。

## 题目

若 $A$ 是 Boolean ring，$I=(a_1,\ldots,a_n)$ 为 finitely generated ideal，证明存在 $e\in A$ 使 $I=(e)$。

## 提示（先独立作答）

先设 $I=(a,b)$，寻找 $e\in(a,b)$，使 $ae=a$ 且 $be=b$。注意 $a(a+b)=a+ab$ 多出了一项 $ab$。

## 严格证明

### 两个生成元

取

$$\boxed{e=a+b-ab.}$$

因为 $e=a(1-b)+b$，所以 $e\in(a,b)$，从而 $(e)\subseteq(a,b)$。

由 $a^2=a$、$b^2=b$，

$$ae=a^2+ab-a^2b=a,$$

$$be=ab+b^2-ab^2=b.$$

于是 $a,b\in(e)$，故 $(a,b)\subseteq(e)$。综合得到

$$\boxed{(a,b)=(a+b-ab).}$$

### 有限个生成元

对 $n$ 作归纳：$n=1$ 时取 $e_1=a_1$。若 $(a_1,\ldots,a_{n-1})=(e_{n-1})$，则

$$
(a_1,\ldots,a_n)=(e_{n-1},a_n)
=(e_{n-1}+a_n-e_{n-1}a_n).
$$

故令 $e_n=e_{n-1}+a_n-e_{n-1}a_n$ 即完成归纳。等价地，有显式公式

$$\boxed{e=1-\prod_{i=1}^n(1-a_i).}$$

对 $n=0$ 的零理想，可取 $e=0$。故所有 finitely generated ideals 都是 principal。

## 构造动机：idempotent 的 join

$e=a+b-ab=1-(1-a)(1-b)$ 与集合并集的特征函数公式相同，可理解为 idempotent 的 join（并）。在 Boolean ring 中由 (i) 知 $-ab=ab$，因此亦可写为 $a+b+ab$。

**注意**：从 $e\in(a,b)$ 仅能得到 $(e)\subseteq(a,b)$；还必须逐个证明 $ae=a,be=b$ 以得到反向包含。

## 结构延伸（可选）

任意 idempotent $e$ 满足

$$A=eA\oplus(1-e)A.$$

因为 $a=ea+(1-e)a$，且若 $z=eu=(1-e)v$，则 $z=ez=e(1-e)v=0$。因此 $eA$ 是 $A$-module 的 direct summand，尤其是 projective module。

## 双向链接

- 定理：[Idempotent、join 与 direct summand](../concepts/CA-K20261113-03-idempotent-ideals.md)
- 前置：[Boolean ring 的基本性质](CA-Q20261113-01-boolean-basic.md)
- 例子：[$\mathbb F_2^2$ 中的主理想](../examples/CA-E20261113-01-f2-product.md)
- 易错点：[本题易错点](../mistakes/CA-mistakes-2026-11-13.md)


---

# 定义与定理

# CA-K20261113-01 · Boolean ring：定义、特征与 prime ideals

## Definition

含幺交换环 $A$ 称为 **Boolean ring**，若 $a^2=a$ 对所有 $a\in A$ 成立。称 $a$ 为 idempotent（幂等元）。

## Theorem

对 Boolean ring $A$：

1. $2a=0$ 对所有 $a\in A$ 成立（因此非零 Boolean ring 的 characteristic 为 $2$）。
2. 每个 prime ideal $\mathfrak p$ 是 maximal，且 $A/\mathfrak p\cong\mathbb F_2$。
3. 因此 $\operatorname{Spec}(A)=\operatorname{MaxSpec}(A)$。

## Proof sketch

用 $(-a)^2=-a$ 和 $(-a)^2=a^2=a$ 得到 $2a=0$。对 prime $\mathfrak p$，商环是 integral domain，$x(x-1)=0$ 强迫 $x\in\{0,1\}$，所以是 $\mathbb F_2$。

## Example & counterexample

$\mathbb F_2\times\mathbb F_2$ 是 Boolean ring，但不是 integral domain，更不是 field。不能由所有素商环同构 $\mathbb F_2$ 推出原环同构 $\mathbb F_2$。

## 链接

- 证明：[Basic exercises](../problems/CA-Q20261113-01-boolean-basic.md)
- 练习：[Finite ideals](../problems/CA-Q20261113-03-boolean-fg-ideals.md)
- 例子：[$\mathbb F_2\times\mathbb F_2$](../examples/CA-E20261113-01-f2-product.md)

# CA-K20261113-02 · Nilradical、prime correspondence 与 local ring

## Definition

对含幺交换环 $A$，

$$\operatorname{Nil}(A)=\{a\in A:\exists n\ge1,\ a^n=0\}.$$

**Nilradical theorem**：

$$\operatorname{Nil}(A)=\bigcap_{\mathfrak p\in\operatorname{Spec}(A)}\mathfrak p.$$

**Local ring**：恰有一个 maximal ideal 的含幺交换环。

## 基本判别法

- $\mathfrak p$ prime $\Longleftrightarrow$ $A/\mathfrak p$ 是 integral domain。
- $\mathfrak m$ maximal $\Longleftrightarrow$ $A/\mathfrak m$ 是 field。
- 对 ideal $I$，$\operatorname{Spec}(A/I)\cong\{\mathfrak p\in\operatorname{Spec}(A): I\subseteq\mathfrak p\}$，通过原像映射对应。

## Theorem（非零环）

对于非零交换含幺环 $A$，以下等价：

$$
|\operatorname{Spec}(A)|=1
\iff
A\setminus A^\times=\operatorname{Nil}(A)
\iff
A/\operatorname{Nil}(A)\text{ is a field}.
$$

这是 Krull dimension 为 $0$ 的 local ring 的刻画。

## 一个常见误区

“$\operatorname{Nil}(A)$ 是 nil ideal”（其中每个元素各自 nilpotent）与“$\operatorname{Nil}(A)$ 是 nilpotent ideal”（存在 $N$ 使 $\operatorname{Nil}(A)^N=0$）不同。

## 补充引理（商去 nil ideal 的单位可提升）

若 $a+\mathfrak N$ 是 $A/\mathfrak N$ 中的 unit，则存在 $b\in A$ 使 $ab=1+n$，其中 $n\in\mathfrak N$。取 $n^r=0$，有限几何级数给出 $(1+n)^{-1}=1-n+\cdots+(-n)^{r-1}$，故 $a$ 也可逆。

## 链接

- 严格证明：[唯一 prime ideal 等价条件](../problems/CA-Q20261113-02-unique-prime-nilradical.md)
- 例子：[$k[\varepsilon]/(\varepsilon^3)$](../examples/CA-E20261113-02-truncated-polynomials.md)

# CA-K20261113-03 · Idempotent ideals、join 与 projective modules

## Definition

$e\in A$ 是 idempotent 如果 $e^2=e$。对含幺交换环，任意 idempotent $e$ 给出理想 $eA$。

## Two-idempotent join

若 $a^2=a,b^2=b$，令

$$a\vee b=a+b-ab=1-(1-a)(1-b).$$

则 $a(a\vee b)=a$、$b(a\vee b)=b$，因此

$$(a,b)=(a\vee b).$$

对有限族递归操作，得到

$$(a_1,\ldots,a_n)=\left(1-\prod_{i=1}^n(1-a_i)\right).$$

## Direct sum decomposition

若 $e^2=e$，则

$$A=eA\oplus(1-e)A.$$

证明：$1=e+(1-e)$，因而和为 $A$；若 $z\in eA\cap(1-e)A$，则 $ez=z$，同时 $ez=0$，故 $z=0$。

因此由 idempotent 生成的理想是 projective $A$-module。特别地，Boolean ring 的每个 finitely generated ideal 都是 projective。

## 链接

- 完整练习：[Boolean ring 的有限生成理想](../problems/CA-Q20261113-03-boolean-fg-ideals.md)
- 基础定义：[Boolean rings](../concepts/CA-K20261113-01-boolean-rings.md)


---

# 例子

# CA-E20261113-01 · $\mathbb F_2\times\mathbb F_2$ 中的 Boolean 结构

## Example

令 $A=\mathbb F_2\times\mathbb F_2$，加法与乘法逐坐标进行。对任意 $(a,b)$，

$$(a,b)^2=(a^2,b^2)=(a,b),$$

故 $A$ 是 Boolean ring。但 $(1,0)(0,1)=(0,0)$，因此 $A$ 不是 integral domain。

## Prime ideals

$\mathfrak p_1=\{0\}\times\mathbb F_2$ 与 $\mathfrak p_2=\mathbb F_2\times\{0\}$；商环都是 $\mathbb F_2$。除此以外没有 prime ideals：一个 prime ideal 必包含 $(1,0)$ 或 $(0,1)$，因为二者乘积为 $0$，且不可同时包含二者（否则含 $1$）。

## Principal ideals

取 $u=(1,0),v=(0,1)$。则

$$e=u+v-uv=(1,1),\qquad(u,v)=(e)=A.$$

本例说明“环本身不是 field”与“所有 prime quotients 都是 field”并不矛盾。

## 关联

- [Boolean ring 的 prime ideals](../problems/CA-Q20261113-01-boolean-basic.md)
- [Boolean ring 的 principal ideals](../problems/CA-Q20261113-03-boolean-fg-ideals.md)

# CA-E20261113-02 · $k[\varepsilon]/(\varepsilon^3)$ 的唯一 prime ideal

## Example

设 $k$ 是 field，$A=k[\varepsilon]/(\varepsilon^3)$。任意元素唯一表示为

$$u=a+b\varepsilon+c\varepsilon^2,\qquad a,b,c\in k.$$

若 $a=0$，则 $u\in(\varepsilon)$，故 $u^3=0$，是 nilpotent。

若 $a\neq0$，写成 $u=a(1+t)$，其中 $t\in(\varepsilon)$ 且 $t^3=0$。因此

$$u^{-1}=a^{-1}(1-t+t^2).$$

故非单位元恰是 $\mathfrak N=(\varepsilon)$，并且

$$A/\mathfrak N\cong k.$$

所以 $\operatorname{Spec}(A)=\{(\varepsilon)\}$，且 $A$ 不是 field（$\varepsilon\ne0$ 但 nilpotent）。

## 关联

- [唯一 prime ideal 等价条件](../problems/CA-Q20261113-02-unique-prime-nilradical.md)
- [Nilradical / local ring](../concepts/CA-K20261113-02-nilradical-local-rings.md)


---

# 易错点

# 交换代数 · 2026-11-13 习题易错点（新增）

> 标记说明：“讨论中出现”来自本次交流；“建议预防”是学习提醒，不算实际犯错。

## CA-M20261113-01 · 讨论中出现：Boolean ring 是否含单位元

- **修正**：本题沿用 A–M 约定，ring 为含单位元的 commutative ring；$A/\mathfrak p$ 的单位元是 $1_A+\mathfrak p$。
- **关联**：[CA-Q20261113-01](../problems/CA-Q20261113-01-boolean-basic.md)。

## CA-M20261113-02 · 讨论中出现：把素商环结论写成原环结论

- **修正**：对 prime ideal $\mathfrak p$ 证明的是 $A/\mathfrak p\cong\mathbb F_2$；不能直接写 $A\cong\mathbb F_2$。反例 $A=\mathbb F_2\times\mathbb F_2$。
- **关联**：[CA-Q20261113-01](../problems/CA-Q20261113-01-boolean-basic.md)、[CA-E20261113-01](../examples/CA-E20261113-01-f2-product.md)。

## CA-M20261113-03 · 讨论中出现：混淆理想与商环的代数性质

- **修正**：$\mathfrak p$ 是 prime ideal 当且仅当 $A/\mathfrak p$ 是 integral domain；$\mathfrak p$ 是 maximal ideal 当且仅当 $A/\mathfrak p$ 是 field。
- **关联**：[CA-Q20261113-01](../problems/CA-Q20261113-01-boolean-basic.md)、[CA-Q20261113-02](../problems/CA-Q20261113-02-unique-prime-nilradical.md)。

## CA-M20261113-04 · 讨论中出现：两个生成元的构造缺失

- **修正**：不必从消元开始，先要构造 $e\in(a,b)$ 且 $a=ae,b=be$。取 $e=a+b-ab$；验证两个包含关系。
- **关联**：[CA-Q20261113-03](../problems/CA-Q20261113-03-boolean-fg-ideals.md)。

## CA-M20261113-05 · 建议预防：商环非零陪集可逆的逻辑跳步

- **修正**：$a+\mathfrak N\neq0$ 仅推出 $a$ 不是 nilpotent；再使用“每个元素 unit 或 nilpotent”的假设才推出 $a$ 是 unit。
- **关联**：[CA-Q20261113-02](../problems/CA-Q20261113-02-unique-prime-nilradical.md)。

## CA-M20261113-06 · 建议预防：nil ideal 和 nilpotent ideal 混淆

- **修正**：每个 $n\in\mathfrak N$ 都有某个幂为零，不表示存在统一指数 $r$ 使 $\mathfrak N^r=0$。
- **关联**：[CA-Q20261113-02](../problems/CA-Q20261113-02-unique-prime-nilradical.md)、[CA-K20261113-02](../concepts/CA-K20261113-02-nilradical-local-rings.md)。
