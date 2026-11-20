---
id: op.gb-buchberger-algorithm
type: thm
title: Buchberger 算法的正确性与终止性
english: Correctness and termination of Buchberger algorithm
summary: 依次加入 S 多项式的非零余式，保持原理想并严格扩大首单项式理想，最终得到 Gröbner 基。
requires: [op.gb-buchberger-criterion, op.gb-dickson, op.gb-division-theorem]
tags: [Gröbner 基, Buchberger 算法, 终止性]
track: Gröbner 基
order: 21
minutes: 12
source_document: grobner_basis_folio.md
source_verified: false
---

:::statement
输入域 $k$ 上的有限多项式集合 $F\subseteq k[x_1,\ldots,x_n]$ 及一个固定全局单项式序。下列算法在有限步后输出 $I=\langle F\rangle$ 的一个 Gröbner 基：

```text
G ← F 去掉零多项式
P ← G 中所有无序的不同元素对
while P 非空:
    从 P 取出并删除一对 {p, q}
    h ← S(p, q) 对当前有序 G 的标准除法余式
    if h ≠ 0:
        记下旧 G
        把 h 加入 G
        把 {h, g}（g 遍历旧 G）加入 P
return G
```

若输入全部为零，则返回空集合，作为零理想的 Gröbner 基。系数域及单项式序均需支持算法中的有限算术和比较操作。
:::

:::proof
**1. 生成理想保持不变。** 初始去掉零元素不改变 $I$。若当前 $\langle G\rangle=I$，则 $S(p,q)\in I$。除法给出

$$S(p,q)=\sum_i a_i g_i+h,$$

故 $h\in I$。旧集合保留在新集合中，而新增 $h$ 已属于旧理想，所以加入后仍生成同一个 $I$。

**2. 非零余式使首单项式理想严格扩大。** 记当前

$$J_G=\langle\operatorname{LM}(g):g\in G\rangle.$$

当 $h\ne0$ 时，其每个单项式都不被任何旧 $\operatorname{LM}(g)$ 整除，特别是 $\operatorname{LM}(h)\notin J_G$。加入 $h$ 后

$$J_G\subsetneq J_{G\cup\{h\}}.$$

**3. 外层循环终止。** 由 [Dickson 引理的上升链条件](ref:op.gb-dickson)，第 2 步的严格扩大只能发生有限次。每次扩大仅新增有限个配对，因此整个运行过程总共只会产生有限个配对；每一轮都删除一个待处理配对，每次内部除法又由[良序性](ref:op.gb-division-theorem)保证终止，故整个算法终止。

**4. 结束时满足判据的有界表示条件。** 最终集合中的任意一对 $p,q$，都会在二者均加入 $G$ 后进入配对表并被处理。记 $L=\operatorname{lcm}(\operatorname{LM}(p),\operatorname{LM}(q))$。若 $S(p,q)=0$，使用空表示即可。否则，当时的标准除法给出

$$S(p,q)=\sum_i a_i g_i+h.$$

由除法的首项上界，每个非零 $a_i g_i$ 及非零余式 $h$ 的首单项式都不大于 $\operatorname{LM}(S(p,q))$，而这个单项式严格小于 $L$。若 $h=0$，上式已是最终集合元素的有界表示；若 $h\ne0$，它随后加入集合并被保留，故上式也成为最终集合元素的有界表示，其中 $h$ 的系数为 $1$。

因此最终每对 S 多项式都有乘积首单项式均小于相应 $L$ 的表示，且由第 1 步仍生成 $I$。应用 [Buchberger 判据证明中的充分条件](ref:op.gb-buchberger-criterion)，输出是 $I$ 的 Gröbner 基。

这里没有把“将不可约首项移入余式”的操作误当作首项约减；完整除法留下的有界表示才是衔接最终判据所用的信息。

核验：内层除法终止依赖工作首项下降；外层添加新元素的次数有限依赖单项式理想上升链稳定。配对表的处理还需要“每轮删除一个配对”这一有限性检查。
:::

:::remark
该算法保证输出 Gröbner 基；若要得到[约化 Gröbner 基](ref:op.gb-reduced-basis)，还需首一化并清理冗余及可约的尾项。原稿的完整手算见[生成元的补全算例](ref:op.gb-worked-example)。
:::
