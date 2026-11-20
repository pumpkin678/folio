---
id: op.gb-worked-example
type: eg
title: 从两个生成元算出 Gröbner 基
english: A complete Buchberger computation
summary: 在字典序下补入 y³−1，检查所有 S 多项式，再验证二元约化基与初始理想。
requires: [op.gb-buchberger-algorithm, op.gb-reduced-basis]
tags: [Gröbner 基, 手算, 反例]
track: Gröbner 基
order: 23
minutes: 12
source_document: grobner_basis_folio.md
source_verified: false
---

:::example
设 $k$ 为任意域，$R=k[x,y]$，固定字典序 $x\succ y$。令

$$g_1=xy-1,\qquad g_2=x-y^2,\qquad F=\{g_1,g_2\},\qquad I=\langle F\rangle.$$

我们将得到约化 Gröbner 基

$$G_{\mathrm{red}}=\{x-y^2,\ y^3-1\},\qquad \operatorname{in}_{\mathrm{lex}}(I)=\langle x,y^3\rangle.$$
:::

:::proof
**1. 普通生成元会给出错误的非成员直觉。** 首单项式分别为 $xy,x$。但

$$g_3:=y^3-1=(xy-1)-y(x-y^2)\in I.$$

$g_3$ 的两项都不被 $xy$ 或 $x$ 整除，所以对原集合 $F$ 做除法，其余式仍为 $y^3-1\ne0$。这只能说明原生成集不足以用于零余式判定，不能说明 $g_3\notin I$。同时 $y^3\notin\langle xy,x\rangle$，故 $F$ 不是 Gröbner 基。

**2. 第一次 S 多项式产生缺失的关系。** 因 $\operatorname{lcm}(xy,x)=xy$，有

$$S(g_1,g_2)=g_1-y g_2=y^3-1=g_3.$$

它对旧集合不可约，于是加入 $g_3$，得到 $G'=\{g_1,g_2,g_3\}$，生成理想保持为 $I$。

**3. 完整检查三组配对。** 第一对的 S 多项式为 $g_3$，减去 $g_3$ 得零。第二对为

$$\begin{aligned}
S(g_1,g_3)&=y^2(xy-1)-x(y^3-1)\\
&=x-y^2=g_2\xrightarrow{-g_2}0.
\end{aligned}$$

第三对为

$$\begin{aligned}
S(g_2,g_3)&=y^3(x-y^2)-x(y^3-1)\\
&=x-y^5\\
&\xrightarrow{-g_2}y^2-y^5\\
&\xrightarrow{+y^2g_3}0.
\end{aligned}$$

最后一步用到首项为 $-y^5$，与 $g_3$ 的首项之比为 $-y^2$，因此标准消去操作是加上 $y^2g_3$。三对均约减为零，由判据 $G'$ 是 Gröbner 基。

**4. 删除冗余前核对生成理想。** 恒等式

$$g_1=y g_2+g_3$$

说明删除 $g_1$ 后仍生成 $I$。保留下来的 $g_2,g_3$ 的首单项式分别为 $x,y^3$，并且

$$\langle xy,x,y^3\rangle=\langle x,y^3\rangle.$$

因此二元集合仍满足初始理想条件，是 $I$ 的 Gröbner 基。

**5. 检查约化条件。** 两个元素都首一。$g_2$ 的单项式 $x,y^2$ 均不被另一个首单项式 $y^3$ 整除；$g_3$ 的单项式 $y^3,1$ 均不被 $x$ 整除。所以二元基是约化 Gröbner 基。

核验：删去 $g_1$ 不只是因为 $x\mid xy$；我们同时核对了原理想的生成性和初始理想没有改变。整个计算只用域运算，不要求特征为零。
:::
