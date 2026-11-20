# 平面中全部仿射直线的 atlas

ID: `dt-w2-3` · Week 2 · exercise

题目：给平面中直线的集合构造二维 atlas。

步骤 1：$U$ 为非竖直线，唯一写作 $y=mx+b$，取坐标 $(m,b)$。$V$ 为非水平线，唯一写作 $x=ny+c$，取坐标 $(n,c)$。任意直线至少属于其中一个图，两个坐标像均为 $\mathbb R^2$。

步骤 2：在交集上 $m\ne0$，由 $y=mx+b$ 得 $x=m^{-1}y-b/m$，所以过渡为 $(m,b)\mapsto(1/m,-b/m)$，定义域 $\{m\ne0\}$ 开。

步骤 3：反向公式 $(n,c)\mapsto(1/n,-c/n)$ 在 $n\ne0$ 上光滑，因而是二维 atlas。这里是所有仿射直线，不能误用过原点直线的 $\mathbb{RP}^1$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.3; W2DiffTop2026.pdf

## 关联

[dt-week-02](dt-week-02.md) · [dt-atlas](dt-atlas.md) · [dt-compatibility](dt-compatibility.md) · [dt-atlas-topology](dt-atlas-topology.md) · [dt-exotic-coordinate](dt-exotic-coordinate.md) · [dt-projective](dt-projective.md)
