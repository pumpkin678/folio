# Norm 诱导 metric

ID: `dt-w1-2` · Week 1 · exercise

题目：由范数定义距离并核对公理。

解答：令 $d(x,y)=N(x-y)$。非负性以及 $d(x,y)=0\iff x=y$ 来自正定性；$d(y,x)=N(-(x-y))=d(x,y)$ 来自齐次性；$d(x,z)=N((x-y)+(y-z))\le d(x,y)+d(y,z)$。故这是 metric。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, Problem 1.2; DiffTop2026.pdf

## 关联

[dt-week-01](dt-week-01.md) · [dt-topology](dt-topology.md) · [dt-metric](dt-metric.md) · [dt-separation](dt-separation.md) · [dt-induced-product](dt-induced-product.md) · [dt-dimension-norm](dt-dimension-norm.md) · [dt-compact-counterexample](dt-compact-counterexample.md)
