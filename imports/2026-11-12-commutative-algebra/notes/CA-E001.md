# CA-E001 · Primitive 不要求单个系数是 unit

令 $A=\mathbb Z/6\mathbb Z$，有 zero divisors。取

$$f(x)=2+3x,\qquad g(x)=3+2x.$$

因为 $(2,3)=A$（如 $2\cdot2+3\cdot1=7\equiv1\pmod6$），所以

$$c(f)=c(g)=A.$$

可是 $2,3\in A$ 都不是 units！

计算乘积：

$$fg=6+(4+9)x+6x^2=x\quad\text{in }A[x].$$

于是 $c(fg)=(1)=A$，验证 [CA-Q004](../problems/CA-Q004-primitive-product.md)。

**收获：**判断 primitive 看的是系数生成的 ideal，**不是**“存在一个单位系数”。
