# Norm 的定义

ID: `dt-w1-1` · Week 1 · exercise

题目：陈述 $\mathbb R^n$ 上范数的定义。

解答：函数 $N:\mathbb R^n\to[0,\infty)$ 是 norm，当且仅当：(1) $N(v)=0\iff v=0$；(2) 对 $a\in\mathbb R$ 有 $N(av)=|a|N(v)$；(3) $N(u+v)\le N(u)+N(v)$。三个条件对所有向量成立。例如 $N(v)=(\sum v_i^2)^{1/2}$；三角不等式由 Cauchy–Schwarz 给出。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.1; DiffTop2026.pdf

## 关联

[dt-week-01](dt-week-01.md) · [dt-topology](dt-topology.md) · [dt-metric](dt-metric.md) · [dt-separation](dt-separation.md) · [dt-induced-product](dt-induced-product.md) · [dt-dimension-norm](dt-dimension-norm.md) · [dt-compact-counterexample](dt-compact-counterexample.md)
