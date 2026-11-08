---
id: dt.regular-value-theorem
type: thm
title: 正则值定理
english: Regular value theorem
summary: 满秩的约束切出光滑子流形，其维数等于源空间维数减去目标空间维数。
requires: [dt.regular-value]
tags: [子流形, 正则值, 维数]
aliases: [原像定理, preimage theorem, regular level set theorem]
formula: '\dim f^{-1}(y)=\dim M-\dim N'
order: 5
minutes: 9
---
:::statement
设 $M^m,N^n$ 是无边界光滑流形，$f:M\to N$ 为光滑映射，$y\in N$ 为正则值。

若 $f^{-1}(y)$ 非空，则它是 $M$ 的一个 $m-n$ 维嵌入子流形，并且在每个 $p\in f^{-1}(y)$ 处，

$$T_p f^{-1}(y)=\ker(df_p).$$
:::

:::intuition
一个独立的标量约束，通常会减少一个自由度。正则性保证这些约束在一阶意义下独立，所以维数能稳定地减去 $n$。

例如，三维空间中的一个正则等值面具有两个局部自由度。
:::

:::proof
取任意 $p\in f^{-1}(y)$。因为 $df_p$ 满射，满秩条件在 $p$ 的一个邻域内保持成立。由局部满射标准形，可选择 $p$ 和 $y$ 附近的坐标，使 $y$ 对应原点，且 $f$ 在这些坐标下为投影：

$$ (x_1,\ldots,x_m)\longmapsto(x_1,\ldots,x_n). $$

因此，原像在这一坐标邻域中由 $x_1=\cdots=x_n=0$ 给出，剩余 $m-n$ 个坐标给出嵌入子流形的局部参数。

在同一坐标中，这个原像的切向量正是投影微分的核。由于 $p$ 任意，得到结论。
:::

:::remark
证明使用了局部满射标准形（隐函数定理的流形版本）。空原像的情形单独理解，不使用上面的非空维数断言。
:::
