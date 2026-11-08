---
id: alg.first-isomorphism
type: thm
title: 第一同构定理
english: First isomorphism theorem
summary: 把同态无法区分的元素合并后，得到的群恰好就是它的像。
requires: [alg.homomorphism]
tags: [同构定理, 商群]
formula: 'G/\ker\varphi\cong\operatorname{im}\varphi'
order: 3
minutes: 8
---
:::statement
设 $\varphi:G\to H$ 为群同态，则映射 $g\ker\varphi\mapsto\varphi(g)$ 给出群同构 $G/\ker\varphi\cong\operatorname{im}\varphi$。
:::

:::intuition
核描述映射丢失的信息。先把这些信息取商，就能把剩下的结构完整地识别为像。
:::

:::proof
若 $g\ker\varphi=g'\ker\varphi$，则 $g'^{-1}g$ 属于核，所以 $\varphi(g)=\varphi(g')$，映射良定义。它保持乘法，并按像的定义为满射。若两个陪集映到同一个元素，则 $g'^{-1}g$ 属于核，两个陪集相同，故为单射。
:::
