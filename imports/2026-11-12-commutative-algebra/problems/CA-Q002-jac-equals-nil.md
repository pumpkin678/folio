# CA-Q002 · 证明 $\operatorname{Jac}(A[x])=\operatorname{Nil}(A[x])$

## 题目
设 $A$ 是交换含幺环，证明

$$\boxed{\operatorname{Jac}(A[x])=\operatorname{Nil}(A[x]).}$$

记 $\operatorname{Jac}(R)=\bigcap_{\mathfrak m\in\operatorname{MaxSpec}(R)}\mathfrak m$。

## 提示（先不要看答案）
对交换含幺环 $R$，有判别法

$$a\in\operatorname{Jac}(R)\iff 1-ab\in R^\times\quad\forall b\in R.$$

若 $f(x)\in\operatorname{Jac}(A[x])$，尤其考虑 $1-xf(x)$。联想 [CA-Q001](CA-Q001-polynomial-units.md) 的 polynomial units 定理。

## 严格证明

### 包含一：$\operatorname{Nil}(A[x])\subseteq\operatorname{Jac}(A[x])$
任取 nilpotent $f\in A[x]$，设 $f^N=0$。对任意 $g\in A[x]$，有 $(fg)^N=0$。于是

$$(1-fg)^{-1}=1+fg+\cdots+(fg)^{N-1}.$$

由 Jacobson radical 判别法，$f\in\operatorname{Jac}(A[x])$。

### 包含二：$\operatorname{Jac}(A[x])\subseteq\operatorname{Nil}(A[x])$
任取 $f=a_0+a_1x+\cdots+a_nx^n\in\operatorname{Jac}(A[x])$。判别法对 $g=x$ 给出

$$1-xf(x)=1-a_0x-a_1x^2-\cdots-a_nx^{n+1}\in A[x]^\times.$$

应用 [CA-Q001](CA-Q001-polynomial-units.md) 的 polynomial units 定理：上式的所有正次数系数均 nilpotent，因此 $a_0,\ldots,a_n\in\operatorname{Nil}(A)$。

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
2. 不引用 [CA-Q001](CA-Q001-polynomial-units.md) 的完整结论，仅用 prime ideal + degree 再证明一次。
3. 思考为何不能从“所有 maximal ideals”直接推出“所有 prime ideals”。
