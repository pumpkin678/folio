# CA-K003 · Content ideal & primitive polynomial

## 定义
设 $A$ 是交换含幺环，$f(x)=a_0+\cdots+a_nx^n\in A[x]$。

$$\boxed{c(f):=(a_0,\ldots,a_n)\subseteq A.}$$

这叫 **content ideal（系数理想）**。若 $c(f)=A$，称 $f$ 为 **primitive polynomial**。

## 等价刻画

$$f\text{ primitive}\iff \exists r_0,\ldots,r_n\in A,\quad \sum_i r_i a_i=1.$$

**注意：**primitive 不要求某一个系数可逆。例见 [CA-E001](../examples/CA-E001-z6-primitive.md)。

## 与 annihilator 的关系
若 $f$ primitive 且 $af=0$（$a\in A$），则 $a a_i=0$（所有 $i$），所以

$$a=a\sum_i r_ia_i=\sum_i r_i(aa_i)=0.$$

因此 primitive polynomial 没有非零的**常数** annihilator。结合 [McCoy theorem](CA-K005-mccoy.md) 得：primitive polynomial 在 $A[x]$ 中不是 zero divisor（这里 zero divisor 按存在非零 annihilator 定义）。

## 关联
- [CA-Q004 · Primitive product criterion](../problems/CA-Q004-primitive-product.md)
- [CA-Q005 · Primitive preserves content](../problems/CA-Q005-primitive-content-preservation.md)
- [CA-K004 · Quotient detection](CA-K004-prime-maximal-detection.md)
- [CA-E002 · 非 primitive 多项式](../examples/CA-E002-one-prime-not-enough.md)
