---
id: alg.homomorphism
type: def
title: 群同态
english: Group homomorphism
summary: 保持群运算的映射，让我们在不同群之间比较结构。
requires: [alg.group]
tags: [同态, 核, 像]
formula: '\varphi(ab)=\varphi(a)\varphi(b)'
order: 2
minutes: 5
---
:::statement
群之间的映射 $\varphi:G\to H$ 称为群同态，若对所有 $a,b\in G$，均有 $\varphi(ab)=\varphi(a)\varphi(b)$。

它的核是 $\ker\varphi=\{g:\varphi(g)=e_H\}$，像是 $\operatorname{im}\varphi=\{\varphi(g):g\in G\}$。
:::

:::remark
同态自动保持单位元与逆元。核是正规子群，因此商群 $G/\ker\varphi$ 有定义。
:::
