# Exterior power 的函子性

ID: `dt-w7-3` · Week 7 · exercise

题目：线性 $f:V\to W$ 诱导 $\Lambda^pf$，满足对纯楔逐因子作用。

解答：$(v_1,\ldots,v_p)\mapsto f(v_1)\wedge\cdots\wedge f(v_p)$ 是交替多线性，泛性质给唯一线性映射 $\Lambda^pf$，满足所求公式。若 $g:W\to Z$，则 $\Lambda^pg\circ\Lambda^pf$ 与 $\Lambda^p(gf)$ 在每个纯楔上相等，纯楔张成，故两映射相等。同理 $\Lambda^p\mathrm{id}=\mathrm{id}$。$p=0$ 时诱导映射是 $\mathbb R$ 的恒等映射。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.3; W7DiffTop2026.pdf

## 关联

[dt-week-07](dt-week-07.md) · [dt-exterior](dt-exterior.md) · [dt-exterior-basis](dt-exterior-basis.md) · [dt-forms](dt-forms.md) · [dt-wedge-example](dt-wedge-example.md)
