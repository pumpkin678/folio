# CA-Q004 · Primitive polynomial 的乘积判别

> 类型：证明题｜状态：思路正确，建议闭卷复做｜来源：本次讨论题面与 Hint；原书精确题号待核对。

## 题目
设 $A$ 为交换含幺环，$f,g\in A[x]$，且

$$c(f)=(\text{$f$ 的全部系数})\subseteq A.$$

定义 $f$ primitive 当且仅当 $c(f)=A$。证明

$$fg\text{ primitive}\iff f\text{ 和 }g\text{ 均 primitive}.$$

## 基本引理：mod maximal / prime 判别
任意 ideal $I\subseteq A$，将 $f$ 映到 $(A/I)[x]$，则

$$\bar f=0\iff c(f)\subseteq I.$$

因此（只需使用 proper ideals 包含于 maximal ideals）

$$
\boxed{\ c(f)=A\iff
\bar f\ne0\ \text{in }(A/\mathfrak m)[x]
\ \forall\mathfrak m\in\operatorname{MaxSpec}(A).\ }
$$

同样，**maximal 可替换成所有 prime ideals**：

$$
\boxed{\ c(f)=A\iff
\bar f\ne0\ \text{in }(A/\mathfrak p)[x]
\ \forall\mathfrak p\in\operatorname{Spec}(A).\ }
$$

理由是每个 maximal ideal 都是 prime ideal；若 $c(f)\ne A$，它必包含于某个 maximal（从而 prime）ideal。

## 严格证明
**“$\Rightarrow$”** 若 $fg$ primitive，但 $f$ 非 primitive，则存在 maximal ideal $\mathfrak m$ 满足 $c(f)\subseteq\mathfrak m$，故 $\bar f=0$，从而 $\overline{fg}=\bar f\bar g=0$。由 $fg$ primitive 与判别引理，这不可能。所以 $f$ primitive；交换 $f,g$ 同理。

**“$\Leftarrow$”** 若 $f,g$ 均 primitive，对任意 maximal ideal $\mathfrak m$ 有 $\bar f\ne0$、$\bar g\ne0$。因为 $A/\mathfrak m$ 是 field，$(A/\mathfrak m)[x]$ 是 integral domain，故

$$\overline{fg}=\bar f\bar g\ne0.$$

对所有 maximal ideals 成立，再用判别引理得到 $c(fg)=A$。 $\square$

## 同一证明也适用于 prime ideals
对任意 prime ideal $\mathfrak p$，$A/\mathfrak p$ 虽不必是 field，但已经是 integral domain，所以仍有 $\bar f\ne0,\bar g\ne0\Rightarrow\overline{fg}\ne0$。**prime 版本成立，量词必须是“所有”。**

## Content ideal 的另一条路线
写 $f=\sum a_ix^i$、$g=\sum b_jx^j$，乘积的系数 $d_k=\sum_{i+j=k}a_ib_j$ 均在 $c(f)c(g)$ 中，因此

$$\boxed{c(fg)\subseteq c(f)c(g).}$$

若 $c(fg)=A$，则 $A\subseteq c(f)c(g)\subseteq c(f)$（或 $c(g)$），故两者均为 $A$。这能**直接**证明“$\Rightarrow$”。

但是一般**不能**把 $c(fg)\subseteq c(f)c(g)$ 写成等号；反例见 [CA-E004](../examples/CA-E004-content-strict-inclusion.md)。

## 对你的思路的评价
你提供的两条思路正确：
- 若 $f$ 非 primitive，选择 $\mathfrak m\supset c(f)$，得到 $\bar f=0$ 与 $\overline{fg}=0$，和 $fg$ primitive 矛盾。
- 反向利用“对所有 $\mathfrak m$ 的像非零”的充要条件，结合 $A/\mathfrak m$ 为 field，非零多项式乘积非零。

## 关联
- [CA-K003 · Content ideal / primitive](../concepts/CA-K003-content-primitive.md)
- [CA-K004 · Mod prime/maximal criterion](../concepts/CA-K004-prime-maximal-detection.md)
- [CA-K006 · Content multiplicativity](../concepts/CA-K006-content-product.md)
- [CA-E001 · 零因子环上的 primitive 实例](../examples/CA-E001-z6-primitive.md)
- [CA-Q005 · 更强的结论](CA-Q005-primitive-content-preservation.md)

## 自测
1. 为什么仅在**一个** prime ideal 下 $\bar f\ne0$ 不够？给出 $A=\mathbb Z$ 的例子。
2. 为什么要说 $(A/\mathfrak m)[x]$ 是 integral domain，而不是简单断言 $A[x]$ 是 integral domain？
3. 能否使用 $c(fg)\subseteq c(f)c(g)$ 直接完成反向证明？缺少什么？
