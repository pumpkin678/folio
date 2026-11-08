---
id: op.endomorphism
type: eg
title: Endomorphism Operad
english: Endomorphism operad
summary: 在线性空间上，多线性映射通过代入形成最基本的 operad 例子。
requires: [op.non-symmetric]
tags: [Operad, 多线性映射, 例子]
formula: '\operatorname{End}_V(n)=\operatorname{Hom}_k(V^{\otimes n},V)'
order: 2
minutes: 6
---
:::example
设 $V$ 是域 $k$ 上的向量空间。令 $\operatorname{End}_V(n)$ 为所有 $n$ 元多线性映射 $V^n\to V$ 构成的集合。复合就是把多线性映射代入其他映射的输入位置，单位是恒等映射 $\operatorname{id}_V$。

代入的结合律来自函数复合的结合律。忽略输入置换的作用后，它给出上一条定义中的非对称 operad。
:::

:::intuition
一个二元乘法 $\mu:V\otimes V\to V$ 可以代入自身，形成三元操作。$\mu(\mu(a,b),c)$ 与 $\mu(a,\mu(b,c))$ 是否相等，是对所选乘法施加的结合性条件。
:::
