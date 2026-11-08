---
id: dt.circle-exercise
title: 一个圆的两种描述
english: A circle as a regular level set
summary: 用正则值定理证明单位圆是子流形，并写出切空间。
targets: [dt.regular-value-theorem, dt.tangent-space]
tags: [计算, 证明]
difficulty: 基础
minutes: 10
order: 1
---
:::problem
设 $F:\R^2\to\R$，$F(x,y)=x^2+y^2$。

1. 证明 $1$ 是 $F$ 的正则值。
2. 求 $F^{-1}(1)$ 的维数。
3. 写出 $p=(a,b)\in F^{-1}(1)$ 处的切空间。
:::

:::hint
先写出 $dF_p$。一个到 $\R$ 的线性映射，什么时候是满射？
:::

:::hint
利用 $a^2+b^2=1$，说明向量 $(a,b)$ 非零。切空间由微分的核给出。
:::

:::solution
在 $p=(a,b)$ 处，$dF_p(u,v)=2au+2bv$。因为 $(a,b)\ne(0,0)$，这个线性泛函非零，所以满射。

因此 $1$ 是正则值，原像是一维子流形；切空间为

$$T_pF^{-1}(1)=\{(u,v):au+bv=0\}=\operatorname{span}\{(-b,a)\}.$$
:::
