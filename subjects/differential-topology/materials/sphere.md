---
id: dt.sphere
type: eg
title: 球面是一个光滑流形
english: The sphere as a regular level set
summary: 用一个方程和一次秩检验，构造熟悉的二维球面。
requires: [dt.regular-value-theorem]
tags: [球面, 等值集, 子流形]
formula: 'S^2=\{(x,y,z)\in\R^3:x^2+y^2+z^2=1\}'
order: 6
minutes: 5
---
:::example
令 $F:\R^3\to\R$，$F(x,y,z)=x^2+y^2+z^2$。在 $F^{-1}(1)$ 上，点不可能是原点，因此微分

$$dF_{(x,y,z)}=2(x,y,z)$$

对应的线性泛函不为零，因而满射。于是 $1$ 是正则值，$S^2=F^{-1}(1)$ 是二维光滑子流形。
:::

:::intuition
对球面上一点 $p$，切空间是所有与半径向量 $p$ 垂直的向量：$T_pS^2=\{v:p\cdot v=0\}$。
:::
