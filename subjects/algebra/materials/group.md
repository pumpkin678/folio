---
id: alg.group
type: def
title: 群
english: Group
summary: 一个带有结合运算、单位元和逆元的集合。
tags: [群, 代数结构]
aliases: [group axioms, 群公理]
order: 1
minutes: 4
---
:::statement
群是一个集合 $G$ 配备二元运算 $G\times G\to G$，满足结合律，并且存在单位元 $e$，使每个元素 $g$ 都有逆元 $g^{-1}$。
:::

:::example
整数在加法下构成群 $(\Z,+)$，单位元是 $0$，元素 $n$ 的逆元是 $-n$。整数在乘法下不构成群。
:::

:::intuition
群把可逆操作及其复合组织起来。例如一个几何对象的对称变换，可以通过先后执行而相乘。
:::
