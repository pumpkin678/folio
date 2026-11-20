# Norm topology 等于 product topology

ID: `dt-w1-u1` · Week 1 · exercise

题目：证明 $\mathbb R^n$ 的范数拓扑与乘积拓扑一致（原题未编号）。

步骤 1：先比较 Euclidean norm。给定 $q\in B_r(p)$，令 $\delta=(r-\|q-p\|_2)/\sqrt n>0$。以 $q$ 为中心、各边半长 $\delta$ 的开盒包含于 $B_r(p)$，因为 $\|z-q\|_2<\sqrt n\delta$。故每个欧氏球在乘积拓扑中开。

步骤 2：给定开盒 $\prod(a_i,b_i)$ 中的点 $p$，取 $r=\min_i(p_i-a_i,b_i-p_i)>0$；由 $|z_i-p_i|\le\|z-p\|_2$ 得 $B_r(p)$ 包含于该开盒。故两个拓扑相等。

步骤 3：任意范数 $N$ 满足 $N(v)\le\sum |v_i|N(e_i)\le C\|v\|_2$，其中 $C=(\sum N(e_i)^2)^{1/2}$。于是 $|N(v)-N(w)|\le C\|v-w\|_2$，故 $N$ 对欧氏拓扑连续。单位球面紧，$N$ 在其上取得正最小值 $c>0$，齐次性给出 $c\|v\|_2\le N(v)$。这两个不等式说明两类范数球在每个点互相细化，拓扑相等。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, 未编号问题 1.u1; DiffTop2026.pdf

## 关联

[dt-week-01](dt-week-01.md) · [dt-topology](dt-topology.md) · [dt-metric](dt-metric.md) · [dt-separation](dt-separation.md) · [dt-induced-product](dt-induced-product.md) · [dt-dimension-norm](dt-dimension-norm.md) · [dt-compact-counterexample](dt-compact-counterexample.md)
