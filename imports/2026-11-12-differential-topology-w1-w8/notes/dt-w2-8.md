# 不相容图册仍可微分同胚

ID: `dt-w2-8` · Week 2 · exercise

题目：$\mathbb R$ 上图册 $A=\{\mathrm{id}\}$ 与 $B=\{\varphi(x)=x^3\}$ 所得流形微分同胚。

解答：定义底层映射 $F(x)=\sqrt[3]{x}$，它是双射。其从 $A$ 到 $B$ 的坐标表达为 $\varphi\circ F\circ\mathrm{id}^{-1}(u)=u$，光滑。逆映射的坐标表达为 $\mathrm{id}\circ F^{-1}\circ\varphi^{-1}(v)=v$，也光滑。故 $F$ 是所求 diffeomorphism。不能用底层函数在标准坐标中是否光滑来替代两端实际图册中的判断。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.8; W2DiffTop2026.pdf

## 关联

[dt-week-02](dt-week-02.md) · [dt-atlas](dt-atlas.md) · [dt-compatibility](dt-compatibility.md) · [dt-atlas-topology](dt-atlas-topology.md) · [dt-exotic-coordinate](dt-exotic-coordinate.md) · [dt-projective](dt-projective.md)
