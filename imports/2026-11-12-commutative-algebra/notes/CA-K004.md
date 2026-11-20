# CA-K004 · 通过所有 prime/maximal ideals 检测 primitive

## 首先证明基础等价
对任意 ideal $I\subseteq A$，自然商映射 $\pi_I:A[x]\to(A/I)[x]$ 满足

$$\boxed{\pi_I(f)=0\iff c(f)\subseteq I.}$$

因为多项式为零当且仅当各个系数为零；系数 $\bar a_i=0$ 当且仅当 $a_i\in I$。

## Maximal ideal criterion

$$\boxed{\ c(f)=A\iff \pi_\mathfrak m(f)\ne0\ \forall \mathfrak m\in\operatorname{MaxSpec}(A).\ }$$

理由：$c(f)\ne A$ 是 proper ideal，因此至少包含于一个 maximal ideal；反过来 $c(f)=A$ 不可能包含于任何 proper ideal。

## Prime ideal criterion

$$\boxed{\ c(f)=A\iff \pi_\mathfrak p(f)\ne0\ \forall \mathfrak p\in\operatorname{Spec}(A).\ }$$

**为什么成立？** 因为每个 maximal ideal 都是 prime ideal，故任何 proper ideal 也包含于某个 prime ideal。

## 区别与使用场景
- $\mathfrak p$ prime $\iff A/\mathfrak p$ integral domain。
- $\mathfrak m$ maximal $\iff A/\mathfrak m$ field。
- 证明 primitive product criterion：只需 integral domain，无需 field；用所有 prime 或所有 maximal 都可以。
- **量词不能改成“存在一个 prime ideal”**：$\mathbb Z$ 中 $f=2x+4$ 在 $\mathfrak p=(0)$ 下仍非零，但 $c(f)=(2)\ne\mathbb Z$。
- 模去**所有** primes 可检测 ideal 是否为单位理想，但不能随意从每个商环的信息恢复原环中的精确 annihilator 关系或 nilpotent 系数；见 [CA-E003](../examples/CA-E003-nilpotent-quotient.md)。

## 关联
- [CA-Q004](../problems/CA-Q004-primitive-product.md)
- [CA-E002](../examples/CA-E002-one-prime-not-enough.md)
- [CA-K002 · Radical and quotient（既有卡片）](CA-K002-radicals.md)
