# 连续单射到 Hausdorff 空间

ID: `dt-w5-3` · Week 5 · exercise

题目：$X$ 紧、$q:X\to Y$ 连续商满射、$i:Y\to Z$ 连续单射且 $Z$ Hausdorff，证明 $Y$ Hausdorff。

解答：给 $y_1\ne y_2$，单射给 $i(y_1)\ne i(y_2)$。在 $Z$ 中取不交开邻域 $O_1,O_2$，连续性使 $i^{-1}(O_1),i^{-1}(O_2)$ 成为不交开邻域，故 $Y$ Hausdorff。此结论事实上不需要紧性或商条件。

较强结论：$q(X)=Y$ 紧，故连续单射 $i$ 是到其像的同胚。因为对闭集 $C\subset Y$，$C$ 紧，其像在 Hausdorff 的 $i(Y)$ 中闭，所以逆映射连续。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.3; W5DiffTop2026.pdf

## 关联

[dt-week-05](dt-week-05.md) · [dt-vector-fields](dt-vector-fields.md) · [dt-fields-derivations](dt-fields-derivations.md) · [dt-lie-related](dt-lie-related.md) · [dt-bracket-example](dt-bracket-example.md)
