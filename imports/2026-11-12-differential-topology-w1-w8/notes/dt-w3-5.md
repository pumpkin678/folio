# 所有扩张的并与极大性

ID: `dt-w3-5` · Week 3 · exercise

题目：$S\subset2^T$，$a\in S$，令 $\bar a=\bigcup_{a\subset b\in S}b$。若 $\bar a\in S$，证明其极大。

解答：因 $a$ 自身在并中，$a\subset\bar a$。若 $\bar a\subset c\in S$，则 $a\subset c$，所以 $c$ 是定义 $\bar a$ 的一个并项，故 $c\subset\bar a$。两包含给出 $c=\bar a$，这正是极大性。一般 $\bar a$ 未必属于 $S$，故该假设不可省。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.5; W3DiffTop2026.pdf

## 关联

[dt-week-03](dt-week-03.md) · [dt-quotient](dt-quotient.md) · [dt-germs-cotangent](dt-germs-cotangent.md) · [dt-bump-locality](dt-bump-locality.md) · [dt-hadamard](dt-hadamard.md) · [dt-flat](dt-flat.md)
