---
id: dt.smooth-map
type: def
title: 光滑映射
english: Smooth map
summary: 在局部坐标下，可以用通常的多元微积分描述的映射。
requires: [dt.smooth-manifold]
tags: [光滑映射, 局部坐标]
order: 2
minutes: 4
---
:::statement
设 $M,N$ 为光滑流形。映射 $f:M\to N$ 是光滑的，如果对每个 $p\in M$，存在 $p$ 附近的坐标卡 $(U,\varphi)$ 和 $f(p)$ 附近的坐标卡 $(V,\psi)$，使 $f(U)\subset V$，且

$$\psi\circ f\circ\varphi^{-1}:\varphi(U)\longrightarrow\psi(V)$$

是 $C^\infty$ 映射。
:::

:::intuition
抽象流形上的光滑性，通过局部坐标还原为欧氏空间上的光滑性。图册的兼容性保证换一组坐标仍得到相同的定义。
:::
