# CA-Q005 · Primitive factor preserves content

> 类型：拓展练习｜状态：可选挑战｜数学结论已核对｜精确习题来源未核对。

## 题目
证明任意交换含幺环 $A$、任意 $f,g\in A[x]$ 满足：

$$\boxed{c(f)=A\implies c(fg)=c(g).}$$

此命题强于 [CA-Q004](CA-Q004-primitive-product.md) 的充分方向。

## Hint
考虑 $I=c(fg)$ 与 $B=A/I$。在 $B[x]$ 中有 $\bar f\bar g=0$；并且 $c_B(\bar f)=B$。尝试调用 [CA-Q003 · McCoy theorem](CA-Q003-mccoy-zero-divisors.md)。

## 严格证明
通常有 $c(fg)\subseteq c(g)$。现在令 $I=c(fg)$、$B=A/I$。系数化到 $B$ 后，$\bar f\bar g=0$，且

$$c_B(\bar f)=\frac{c_A(f)+I}{I}=B.$$

假设 $\bar g\ne0$。由 McCoy theorem（在 $B$ 上适用），存在 $0\ne b\in B$ 使 $b\bar f=0$。但 $\bar f$ 的系数生成整个 $B$，所以

$$b=b\cdot1=b\sum_i r_i\bar a_i=\sum_i r_i(b\bar a_i)=0,$$

矛盾。因此 $\bar g=0$，即 $g$ 的每个系数都属于 $I$，得到 $c(g)\subseteq I=c(fg)$。两边包含合并即得 $c(fg)=c(g)$。$\square$

## 进一步了解
一般的 Dedekind–Mertens lemma：若 $m=\deg g$（$g\ne0$），则

$$c(f)^{m+1}c(g)=c(f)^mc(fg).$$

从中也可在 $c(f)=A$ 时直接得到 $c(fg)=c(g)$。此处不要求你证明 Dedekind–Mertens lemma。

## 关联
- [CA-Q003 · McCoy theorem](CA-Q003-mccoy-zero-divisors.md)
- [CA-Q004 · Primitive product criterion](CA-Q004-primitive-product.md)
- [CA-K006 · Content formula](../concepts/CA-K006-content-product.md)
