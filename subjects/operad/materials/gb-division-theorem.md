---
id: op.gb-division-theorem
type: thm
title: 多变量除法及其终止性
english: Multivariate division and termination
summary: 对有限非零除数逐次处理工作多项式的首项，得到余式，并用单项式序的良序性证明终止。
requires: [op.gb-reduction-normal-form]
tags: [Gröbner 基, 多变量除法, 良序]
track: Gröbner 基
order: 15
minutes: 9
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
设 $k$ 为域，$R=k[x_1,\ldots,x_n]$ 固定一个全局单项式序，$G=(g_1,\ldots,g_s)$ 是有序的非零多项式集合。对每个 $f\in R$，标准除法在有限步后给出

$$f=\sum_{i=1}^s q_i g_i+r,$$

其中 $r$ 的每个单项式都不被任何 $\operatorname{LM}(g_i)$ 整除。若 $f\ne0$，每个非零乘积 $q_i g_i$ 的首单项式不大于 $\operatorname{LM}(f)$；若 $r\ne0$，也有 $\operatorname{LM}(r)\preceq\operatorname{LM}(f)$。

$G$ 为空时，约定所有求和为空，余式就是 $f$。
:::

:::proof
**1. 初始化并保持等式。** 令工作多项式 $p=f$、$r=0$，所有 $q_i=0$。全过程保持

$$f=\sum_i q_i g_i+p+r.$$

**2. 可约首项。** 若 $p\ne0$ 且某个 $\operatorname{LM}(g_i)$ 整除 $\operatorname{LM}(p)$，按固定顺序选第一个这样的 $i$，令

$$a=\frac{\operatorname{LT}(p)}{\operatorname{LT}(g_i)},\qquad q_i\leftarrow q_i+a,\qquad p\leftarrow p-a g_i.$$

域的假设保证首系数可除；整除假设保证 $a$ 是系数乘单项式。新增的 $a g_i$ 恰好抵消旧 $p$ 的首项，其余项都更小，因此新工作多项式为零，或其首单项式严格下降。不变量仍成立。

**3. 不可约首项。** 若没有可用除数，记旧首项为 $t=\operatorname{LT}(p)$，令

$$r\leftarrow r+t,\qquad p\leftarrow p-t.$$

这既保持不变量，也删除了工作多项式的首项。移入 $r$ 的每一项都是对所有除数不可约的；以后移入的项更小，因此不会引入可约单项式。

**4. 终止及首项上界。** 每一轮结束后，非零工作多项式的首单项式都严格下降。良序不存在无限严格下降链，故最终 $p=0$，不变量给出所需表示。所有加入 $q_i g_i$ 的单项式倍数的首单项式都等于某一步的 $\operatorname{LM}(p)$，因而不大于最初的 $\operatorname{LM}(f)$；把这些倍数相加也不会产生更大的单项式。

余式 $r$ 的每一项也来自某一步的工作首项，因此若 $r\ne0$，其首单项式同样不大于最初的 $\operatorname{LM}(f)$。

核验：这里检查了两种分支，既包括消去可约首项，也包括把不可约首项移入余式。仅仅“无法消去首项就停止”不足以保证最终余式的每一项均不可约。
:::

:::remark
这一定理不要求 $G$ 已经是 Gröbner 基。因此一般只能保证得到一个余式，不能保证余式唯一，也不能从非零余式直接断言 $f\notin\langle G\rangle$。
:::
