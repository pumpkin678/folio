# Compact 不蕴含 second countable

ID: `dt-w1-u2` · Week 1 · exercise

题目：紧空间是否一定第二可数（原题 Question）？

反例及证明：令 $D$ 为不可数离散集合，$X=D\cup\{\infty\}$；$D$ 的任意子集开，含 $\infty$ 的集合开当且仅当补集为有限集。包含 $\infty$ 的一个覆盖成员已覆盖除有限点外的全部空间，因此每个开覆盖有有限子覆盖。不同的 $D$ 中点用单点集分离，$d$ 与 $\infty$ 用 $\{d\}$ 与 $X\setminus\{d\}$ 分离，所以它甚至 Hausdorff。若有可数基 $\mathcal B$，对每个 $d$，开集 $\{d\}$ 必含一个包含 $d$ 的基元素，只能是 $\{d\}$。不可数多个单点都必须在基中，矛盾。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 1, 未编号问题 1.u2; DiffTop2026.pdf

## 关联

[dt-week-01](dt-week-01.md) · [dt-topology](dt-topology.md) · [dt-metric](dt-metric.md) · [dt-separation](dt-separation.md) · [dt-induced-product](dt-induced-product.md) · [dt-dimension-norm](dt-dimension-norm.md) · [dt-compact-counterexample](dt-compact-counterexample.md)
