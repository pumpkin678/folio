---
id: op.gb-initial-ideal
type: def
title: 单项式理想与初始理想
english: Monomial ideals and initial ideals
summary: 用理想中所有非零元素的首单项式生成初始理想，并用整除关系检查单项式成员。
requires: [op.gb-leading-term]
tags: [Gröbner 基, 交换多项式]
aliases: [monomial ideal, initial ideal, 首项理想]
track: Gröbner 基
order: 12
minutes: 7
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
设 $k$ 为域，$R=k[x_1,\ldots,x_n]$。由单项式生成的理想称为单项式理想。

固定单项式序 $\succ$，对理想 $I\subseteq R$ 定义初始理想

$$\operatorname{in}_{\succ}(I)
=\langle\operatorname{LM}(f):f\in I,\ f\ne0\rangle.$$

它是一个单项式理想。若 $I=(0)$，生成集合为空，约定 $\operatorname{in}_{\succ}(I)=(0)$。

对单项式 $m$ 和由单项式集合生成的理想 $J=\langle m_\lambda:\lambda\in\Lambda\rangle$，有

$$m\in J\quad\Longleftrightarrow\quad
\text{存在 }\lambda\in\Lambda\text{ 使 }m_\lambda\mid m.$$
:::

:::proof
证明最后的整除判别。若 $m_\lambda\mid m$，则 $m=(m/m_\lambda)m_\lambda\in J$。

反过来，若 $m\in J$，按理想生成的定义，可以写成有限和 $m=\sum_{i=1}^t h_i m_{\lambda_i}$。展开每个 $h_i$，右边成为若干单项式及其系数的和。左边 $m$ 的系数为 $1$，所以右边至少有一个非零项的单项式恰为 $m$。该项来自某个 $h_i m_{\lambda_i}$，故 $m_{\lambda_i}\mid m$。其他项之间即使发生抵消，也不影响这个必要条件。
:::

:::remark
定义中的范围是 $I$ 的所有非零元素。若仅知 $I=\langle f_1,\ldots,f_s\rangle$，一般只能先得到

$$\langle\operatorname{LM}(f_1),\ldots,\operatorname{LM}(f_s)\rangle
\subseteq\operatorname{in}_{\succ}(I).$$

这个包含未必是等号。Gröbner 基的定义正是要求有限集合的首单项式已经生成整个初始理想。
:::
