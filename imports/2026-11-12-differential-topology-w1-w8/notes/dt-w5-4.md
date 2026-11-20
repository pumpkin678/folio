# Product manifold 的构造与唯一性

ID: `dt-w5-4` · Week 5 · exercise

题目：构造乘积流形并证明光滑映射的乘积泛性质。

步骤 1：给 $M,N$ 的图 $\varphi:U\to O\subset\mathbb R^m$、$\psi:V\to P\subset\mathbb R^n$，定义 $\varphi\times\psi:U\times V\to O\times P$。乘积空间 Hausdorff；两个可数基的全部成对乘积仍可数，故第二可数。上述图是同胚且覆盖。

步骤 2：过渡为 $(u,v)\mapsto(F(u),G(v))$，两个分量光滑，因此是光滑 atlas。投影的坐标表达为标准线性投影，故光滑。

步骤 3：若 $h:Z\to M\times N$ 光滑，投影复合光滑。反之若两个分量光滑，则它们连续，所以 $h$ 连续；在任意积图中，$h$ 的坐标表达是两个光滑分量拼成的向量值函数，因此光滑。

步骤 4：若另一光滑结构也满足相同性质，则到底层乘积的 identity 两个投影均光滑，泛性质使 identity 光滑；交换结构再用一次，逆也光滑。因此两个结构相容。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.4; W5DiffTop2026.pdf

## 关联

[dt-week-05](dt-week-05.md) · [dt-vector-fields](dt-vector-fields.md) · [dt-fields-derivations](dt-fields-derivations.md) · [dt-lie-related](dt-lie-related.md) · [dt-bracket-example](dt-bracket-example.md)
