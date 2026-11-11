# 多项式环单位、Jac 与 Nil｜题目·解答·易错点合辑

> 适合直接阅读；网站导入更推荐使用独立 MD 文件和 `site-data.json`。


---

<!-- problems/CA-Q001-polynomial-units.md -->

# CA-Q001 · 多项式环中的单位

## 题目
设 $A$ 为交换含幺环，$f(x)=a_0+a_1x+\cdots+a_nx^n\in A[x]$。证明

$$
f(x)\in A[x]^\times
\iff
 a_0\in A^\times \quad\text{且}\quad a_1,\ldots,a_n\in\operatorname{Nil}(A).
$$

## 提示（先不要看答案）
1. 当 $A$ 为 integral domain 时，非零多项式满足 $\deg(fg)=\deg f+\deg g$。假设 $fg=1$，可以得到什么？
2. 对任意 prime ideal $\mathfrak p$，把 $fg=1$ 映到 $(A/\mathfrak p)[x]$。
3. 对充分性，将 $f=a_0(1+h)$，证明 $h$ nilpotent，再写出有限几何级数。

## 严格证明

### 必要性
若 $fg=1$，比较常数项得到 $a_0b_0=1$，故 $a_0\in A^\times$。

任取 $\mathfrak p\in\operatorname{Spec}(A)$，系数取模 $\mathfrak p$ 的映射诱导

$$A[x]\longrightarrow(A/\mathfrak p)[x].$$

因为 $A/\mathfrak p$ 是 integral domain，$\bar f\bar g=1$ 意味着

$$\deg\bar f+\deg\bar g=\deg1=0,$$

所以 $\bar f$ 是常数多项式，即 $\bar a_i=0$（$i\ge1$）。这只意味着 $a_i\in\mathfrak p$，**不等于** $a_i=0$。

$\mathfrak p$ 任意，因此

$$a_i\in\bigcap_{\mathfrak p\in\operatorname{Spec}(A)}\mathfrak p=\operatorname{Nil}(A),\quad i\ge1.$$

### 充分性
若 $a_0\in A^\times$，各 $a_i$（$i\ge1$）nilpotent，令

$$h=a_0^{-1}\sum_{i=1}^na_ix^i,\qquad f=a_0(1+h).$$

取整数 $r_i\ge1$ 使得 $(a_0^{-1}a_i)^{r_i}=0$。令 $N=1+\sum_{i=1}^n(r_i-1)$。在 $h^N$ 的每个展开项中，必有一个系数出现至少 $r_i$ 次，因此 $h^N=0$。

于是

$$(1+h)^{-1}=1-h+h^2-\cdots+(-h)^{N-1},$$

从而 $f$ 是 unit。证毕。

## 关键转折 / 证明策略
- **整环中的 degree**：只允许常数多项式可逆。
- **模任意素理想**：把一般交换环的问题转到整环。
- **Nilradical theorem**：在每个素理想中消失 $\iff$ nilpotent。
- **有限个 nilpotents 的和仍然 nilpotent**（交换环条件不可忽略）。

## 易错点与纠正
- [CA-M003](mistakes/CA-mistakes.md) $\deg(fg)=\deg f+\deg g$ 只在 integral domain 等适当条件下保证，不能对任意环直接用。
- [CA-M004](mistakes/CA-mistakes.md) $\bar a_i=0$ 表示 $a_i\in\mathfrak p$，不表示 $a_i=0$。
- [CA-M006](mistakes/CA-mistakes.md) “各系数 nilpotent”到“多项式 nilpotent”需解释为什么有限项的和 nilpotent。

## 自测
1. 为什么在 $\mathbb Z/4\mathbb Z[x]$ 中，$1+2x$ 是 unit？
2. 说明 $\operatorname{Nil}(A[x])=\operatorname{Nil}(A)[x]$。
3. 如果只对某个 $\mathfrak p$ 证明 $a_i\in\mathfrak p$，是否足够？


---

<!-- problems/CA-Q002-jac-equals-nil.md -->

# CA-Q002 · 证明 $\operatorname{Jac}(A[x])=\operatorname{Nil}(A[x])$

## 题目
设 $A$ 是交换含幺环，证明

$$\boxed{\operatorname{Jac}(A[x])=\operatorname{Nil}(A[x]).}$$

记 $\operatorname{Jac}(R)=\bigcap_{\mathfrak m\in\operatorname{MaxSpec}(R)}\mathfrak m$。

## 提示（先不要看答案）
对交换含幺环 $R$，有判别法

$$a\in\operatorname{Jac}(R)\iff 1-ab\in R^\times\quad\forall b\in R.$$

若 $f(x)\in\operatorname{Jac}(A[x])$，尤其考虑 $1-xf(x)$。联想 [CA-Q001](problems/CA-Q001-polynomial-units.md) 的 polynomial units 定理。

## 严格证明

### 包含一：$\operatorname{Nil}(A[x])\subseteq\operatorname{Jac}(A[x])$
任取 nilpotent $f\in A[x]$，设 $f^N=0$。对任意 $g\in A[x]$，有 $(fg)^N=0$。于是

$$(1-fg)^{-1}=1+fg+\cdots+(fg)^{N-1}.$$

由 Jacobson radical 判别法，$f\in\operatorname{Jac}(A[x])$。

### 包含二：$\operatorname{Jac}(A[x])\subseteq\operatorname{Nil}(A[x])$
任取 $f=a_0+a_1x+\cdots+a_nx^n\in\operatorname{Jac}(A[x])$。判别法对 $g=x$ 给出

$$1-xf(x)=1-a_0x-a_1x^2-\cdots-a_nx^{n+1}\in A[x]^\times.$$

应用 [CA-Q001](problems/CA-Q001-polynomial-units.md) 的 polynomial units 定理：上式的所有正次数系数均 nilpotent，因此 $a_0,\ldots,a_n\in\operatorname{Nil}(A)$。

由于 $f$ 只有有限多个系数，$f$ 本身 nilpotent（例如取 $a_i^{r_i}=0$，令 $N=1+\sum_{i=0}^n(r_i-1)$，则 $f^N=0$）。故 $f\in\operatorname{Nil}(A[x])$。两边合并即得所证。

## 另一种证明（使用 prime ideals）
由 $1-xf$ 是 unit，任取 $\mathfrak p\in\operatorname{Spec}(A)$，映到 $(A/\mathfrak p)[x]$ 中仍为 unit。商环是 integral domain，故像必须是常数多项式，所以 $a_i\in\mathfrak p$ 对所有 $i$。对所有 $\mathfrak p$ 取交，得到 $a_i\in\operatorname{Nil}(A)$，从而 $f$ nilpotent。

## 用户讨论的思路评估
1. **用判别法构造几何级数逆元**：正确，最直接用于证明 Nil $\subseteq$ Jac。
2. **从 Jac 出发取 $g=x$**：正确，最直接用于证明 Jac $\subseteq$ Nil；这里不是先构造逆元，而是从逆元存在反推系数 nilpotent。
3. **“$A[x]$ 是 PID”**：一般错误，如 $\mathbb Z[x]$ 中 $(2,x)$ 不是 principal ideal。
4. **“PID 的 prime 都 maximal”**：不精确；只有**非零** prime ideals 必然 maximal。$k[x]$ 是 PID，但 $(0)$ 是 prime 且不是 maximal。

## 结构总结
一般交换环满足 $\operatorname{Nil}(R)\subseteq\operatorname{Jac}(R)$，但不一定相等。多项式环的特殊性在于 $g=x$ 把所有系数移到正次数，unit 判别法就强迫它们 nilpotent。

## 自测
1. 证明 $k[t]_{(t)}$ 中 $\operatorname{Nil}(R)=0$，而 $\operatorname{Jac}(R)=(t)R$。
2. 不引用 [CA-Q001](problems/CA-Q001-polynomial-units.md) 的完整结论，仅用 prime ideal + degree 再证明一次。
3. 思考为何不能从“所有 maximal ideals”直接推出“所有 prime ideals”。


---

<!-- concepts/CA-K001-polynomial-units.md -->

# CA-K001 · Polynomial units

**定理（Polynomial unit criterion）**：对交换含幺环 $A$，

$$\sum_{i=0}^n a_ix^i\in A[x]^\times\iff a_0\in A^\times\text{ 且 }a_i\in\operatorname{Nil}(A)\ (i\ge1).$$

**整环中的度数**：若 $D$ 为 integral domain 且 $f,g\in D[x]$ 非零，则

$$\deg(fg)=\deg f+\deg g.$$

因此 $D[x]^\times=D^\times$。对于有 zero divisors 的环不能随意使用。

**例子**：在 $(\mathbb Z/4\mathbb Z)[x]$ 中，$2x$ nilpotent，且 $(1+2x)^2=1$。所以非零次数多项式也可能是 unit。

**关联**：[CA-Q001](problems/CA-Q001-polynomial-units.md)、[CA-Q002](problems/CA-Q002-jac-equals-nil.md)。


---

<!-- concepts/CA-K002-radicals.md -->

# CA-K002 · Nilradical vs Jacobson radical

对交换含幺环 $R$，

$$\operatorname{Nil}(R)=\{a\in R:\exists n\ge1,\ a^n=0\}=\bigcap_{\mathfrak p\in\operatorname{Spec}(R)}\mathfrak p,$$

$$\operatorname{Jac}(R)=\bigcap_{\mathfrak m\in\operatorname{MaxSpec}(R)}\mathfrak m.$$

总有 $\operatorname{Nil}(R)\subseteq\operatorname{Jac}(R)$，但通常不等。

**Jac 判别法**：

$$a\in\operatorname{Jac}(R)\iff \forall b\in R,\ 1-ab\in R^\times.$$

**Prime quotient**：$\mathfrak p$ 是 prime ideal 当且仅当 $R/\mathfrak p$ 是 integral domain。$\bar a=0$ 的准确意思是 $a\in\mathfrak p$，不是 $a=0$。

**反例**：局部整环 $R=k[t]_{(t)}$ 中，$\operatorname{Jac}(R)=(t)R\ne0$，但 $\operatorname{Nil}(R)=0$。

**多项式环的特殊结论**：

$$\operatorname{Jac}(A[x])=\operatorname{Nil}(A[x])=\operatorname{Nil}(A)[x].$$

**关联**：[CA-Q001](problems/CA-Q001-polynomial-units.md)、[CA-Q002](problems/CA-Q002-jac-equals-nil.md)。


---

<!-- mistakes/CA-mistakes.md -->

# 错误 / 薄弱环节记录

区分**你已表达过的想法需要修正**与**基于当前提问建议重点复习**，避免把尚未发生的错误记成实际错题。

## 已在讨论中出现

### CA-M001 · 误以为一般 $A[x]$ 是 PID
- 原想法：使用“$A[x]$ 是 PID”证明 Jac 与 Nil 的关系。
- 纠正：只有在某些特殊情形（例如 $A=k$ 是 field）$A[x]$ 才是 PID；一般 $\mathbb Z[x]$ 不是 PID。
- 反例：$(2,x)\subseteq\mathbb Z[x]$ 不能由单个多项式生成。
- 关联题目：[CA-Q002](problems/CA-Q002-jac-equals-nil.md)。

### CA-M002 · 误以为 PID 中所有 prime ideals 都是 maximal
- 原想法：“prime ideal 等价于 maximal ideal”。
- 纠正：在 PID 中，只有非零 prime ideals 必然 maximal。
- 反例：$k[x]$ 中 $(0)$ prime 但非 maximal。
- 关联题目：[CA-Q002](problems/CA-Q002-jac-equals-nil.md)。

## 建议重点复习（不视作已犯错误）

### CA-M003 · Degree 公式的前提
- 风险：对含 zero divisors 的 $A$ 直接使用 $\deg(fg)=\deg f+\deg g$。
- 正确做法：先转到 integral domain（例如模 $\mathfrak p$）。
- 关联题目：[CA-Q001](problems/CA-Q001-polynomial-units.md)。

### CA-M004 · 商环像为零的含义
- 风险：从 $\bar a=0\in A/\mathfrak p$ 直接得到 $a=0\in A$。
- 正确做法：得到 $a\in\mathfrak p$；若对所有 prime ideal 成立，才推出 $a$ nilpotent。
- 关联题目：[CA-Q001](problems/CA-Q001-polynomial-units.md)。

### CA-M005 · 把“构造逆元”用在不合适的方向
- 风险：为证明 Jac $\subseteq$ Nil 而陷入主动构造 $1-xf$ 的逆元。
- 正确做法：Jac 判别法已经保证它是 unit，使用 polynomial unit criterion 反推系数；有限几何级数主要用于 Nil $\subseteq$ Jac。
- 关联题目：[CA-Q002](problems/CA-Q002-jac-equals-nil.md)。

### CA-M006 · 有限个 nilpotent 系数为何推出多项式 nilpotent
- 风险：只写“显然”而没有解释有限性和交换性。
- 正确做法：若 $c_i^{r_i}=0$，取 $N=1+\sum_i(r_i-1)$，则 $N$ 个因子中某个 $c_i$ 必至少出现 $r_i$ 次，从而每个展开项为零。
- 关联题目：[CA-Q001](problems/CA-Q001-polynomial-units.md)、[CA-Q002](problems/CA-Q002-jac-equals-nil.md)。

## 复习建议
先闭卷证明 CA-Q001 的必要性，然后独立证明 CA-Q002 的 Jac $\subseteq$ Nil，最后口述 CA-M001 与 CA-M002 的反例。
