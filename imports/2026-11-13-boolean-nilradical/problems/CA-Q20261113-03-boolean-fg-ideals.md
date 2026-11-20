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
