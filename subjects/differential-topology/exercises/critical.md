---
id: dt.critical-exercise
title: 正则性是必要条件吗？
english: Is regularity necessary?
summary: 构造一个非正则值，但原像仍是光滑子流形的例子。
targets: [dt.regular-value, dt.regular-value-theorem, dt.critical-level]
tags: [反例, 概念辨析]
difficulty: 思考
minutes: 12
order: 3
---
:::problem
判断命题：“如果 $f^{-1}(0)$ 是光滑子流形，那么 $0$ 一定是 $f$ 的正则值。”给出证明或反例，并解释它与正则值定理的关系。
:::

:::hint
试试把一个线性坐标函数平方。零点集合改变了吗？零点上的微分改变了吗？
:::

:::solution
命题为假。取 $f:\R^2\to\R$，$f(x,y)=x^2$。零原像是直线 $\{x=0\}$，是光滑子流形；但在这条直线上的每一点，$df=0$，所以 $0$ 不是正则值。

正则值定理给出的是充分条件，这个例子说明其逆命题一般不成立。
:::
