# 开球唯一生成拓扑

ID: `dt-w1-3` · Week 1 · exercise

题目：证明 metric space 的开球构成唯一一个拓扑的 basis。

步骤 1：每个 $x$ 属于 $B_1(x)$，所以开球覆盖 $X$。

步骤 2：若 $x\in B_r(a)\cap B_s(b)$，令 $\varepsilon=\min(r-d(x,a),s-d(x,b))>0$。三角不等式给出 $B_\varepsilon(x)\subset B_r(a)\cap B_s(b)$。

步骤 3：令 $\tau$ 为任意开球的并（允许空并）。它包含 $\varnothing,X$，对任意并封闭。若 $U,V\in\tau$，对每个 $x\in U\cap V$ 取步骤 2 的小球，得到 $U\cap V$ 是开球的并。因此 $\tau$ 为拓扑，开球为基。

步骤 4：任何以这些球为基的拓扑，其每个开集恰是球的并，故必为 $\tau$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.3; DiffTop2026.pdf

## 关联

[dt-week-01](dt-week-01.md) · [dt-topology](dt-topology.md) · [dt-metric](dt-metric.md) · [dt-separation](dt-separation.md) · [dt-induced-product](dt-induced-product.md) · [dt-dimension-norm](dt-dimension-norm.md) · [dt-compact-counterexample](dt-compact-counterexample.md)
