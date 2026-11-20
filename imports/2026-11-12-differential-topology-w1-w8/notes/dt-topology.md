# Topology、basis 与邻域

ID: `dt-topology` · Week 1 · definition

Topology 是集合 $X$ 的子集族 $\tau$，包含 $\varnothing,X$，对任意并和有限交封闭。Basis $\mathcal B$ 满足覆盖性及交点细化性：若 $x\in B_1\cap B_2$，存在 $B_3\in\mathcal B$ 使 $x\in B_3\subset B_1\cap B_2$。生成的开集恰为基元素的并。

判定 $U$ 开只需对每个 $x\in U$ 找到一个 $x\in B\subset U$，因为此时 $U=\bigcup_{x\in U}B_x$。这里证明的是某集合为开集，不是证明某个“集合族属于另一个集合族”。比较两拓扑通常对基元素做这种逐点细化。

## 来源

- 为 Week 1 roadmap 编写的配套知识卡；原课程文件 DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-01](dt-week-01.md) · [dt-w1-1](dt-w1-1.md) · [dt-w1-2](dt-w1-2.md) · [dt-w1-3](dt-w1-3.md) · [dt-w1-4](dt-w1-4.md) · [dt-w1-u1](dt-w1-u1.md) · [dt-w1-u2](dt-w1-u2.md) · [dt-w1-u3](dt-w1-u3.md) · [dt-w1-u4](dt-w1-u4.md)
