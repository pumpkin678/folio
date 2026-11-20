# Atlas 生成拓扑

ID: `dt-w2-2` · Week 2 · exercise

题目：由集合上的 atlas 构造使图域开、坐标图为同胚的拓扑。

步骤 1：定义 $O\subset X$ 为开，当且仅当每个 $a$ 都有 $\varphi_a(O\cap U_a)$ 在 $V_a$ 中开。原像与并、交的相容性立即给出空集、全体、任意并及有限交公理。

步骤 2：对每个 $a$，$\varphi_b(U_a\cap U_b)$ 开是 atlas 假设，所以 $U_a$ 开。

步骤 3：若 $W\subset V_a$ 开，令 $O=\varphi_a^{-1}(W)$。在 $b$ 图中，其像是过渡同胚将 $W\cap\varphi_a(U_a\cap U_b)$ 映出的开集，故 $O$ 在 $X$ 中开。这证明 $\varphi_a$ 连续。

步骤 4：若 $O\subset U_a$ 在子空间中开，由 $U_a$ 开知 $O$ 在 $X$ 中也开，定义给出 $\varphi_a(O)$ 开，故逆映射连续。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.2; W2DiffTop2026.pdf

## 关联

[dt-week-02](dt-week-02.md) · [dt-atlas](dt-atlas.md) · [dt-compatibility](dt-compatibility.md) · [dt-atlas-topology](dt-atlas-topology.md) · [dt-exotic-coordinate](dt-exotic-coordinate.md) · [dt-projective](dt-projective.md)
