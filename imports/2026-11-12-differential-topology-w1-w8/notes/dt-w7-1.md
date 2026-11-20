# Top exterior power 一维

ID: `dt-w7-1` · Week 7 · exercise

题目：$\dim V=n$，证明 $\dim\Lambda^nV=1$。

步骤 1：选基 $e_1,\ldots,e_n$。展开任意 $n$ 重楔，每项有重复基向量即为零，无重复者为 $e_1\wedge\cdots\wedge e_n$ 的带符号排列。因此该元素生成 $\Lambda^nV$。

步骤 2：相对所选基的坐标行列式 $D(v_1,\ldots,v_n)$ 是交替多线性映射，泛性质给线性 $\bar D:\Lambda^nV\to\mathbb R$，满足 $\bar D(e_1\wedge\cdots\wedge e_n)=1$。故生成元不为零，维数为 1。$n=0$ 时约定 $\Lambda^0(0)=\mathbb R$，结论仍成立。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 7, Problem 7.1; W7DiffTop2026.pdf

## 关联

[dt-week-07](dt-week-07.md) · [dt-exterior](dt-exterior.md) · [dt-exterior-basis](dt-exterior-basis.md) · [dt-forms](dt-forms.md) · [dt-wedge-example](dt-wedge-example.md)
