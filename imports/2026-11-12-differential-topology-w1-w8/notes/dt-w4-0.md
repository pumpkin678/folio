# 光滑过渡推出维数恒定

ID: `dt-w4-0` · Week 4 · exercise

题目：连通空间有欧氏图，过渡为 diffeomorphism，直接证明各图维数相同。

勘误：须忽略空图域，否则可以加入任意维数的空图，原结论不成立。

步骤 1：非空交叠处，设过渡为 $F:\mathbb R^m\supset O\to P\subset\mathbb R^n$，逆为 $G$。链式法则给 $DG\,DF=I_m$ 和 $DF\,DG=I_n$。前式推出 $m\le n$，后式推出 $n\le m$，故 $m=n$。

步骤 2：固定一张非空图，取所有可经有限个非空图域交叠连接到它的图域之并 $C$。它开。任何未在其中的图域不与 $C$ 相交，否则也可连接，所以补集也是图域之并，开。

步骤 3：$C$ 非空，由连通性为全空间，每张非空图都与其中某图相交，故全部图维数相同。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.0; W4DiffTop2026.pdf

## 关联

[dt-week-04](dt-week-04.md) · [dt-rank-embedding](dt-rank-embedding.md) · [dt-inverse-constant-rank](dt-inverse-constant-rank.md) · [dt-level-sphere](dt-level-sphere.md)
