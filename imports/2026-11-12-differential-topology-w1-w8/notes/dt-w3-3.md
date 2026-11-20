# Quotient map 未必 open

ID: `dt-w3-3` · Week 3 · exercise

题目：一般商映射是否是开映射？

反例：$q:[0,1]\to S^1$，$q(t)=e^{2\pi it}$。它连续满射，且是闭映射：闭子集在紧空间中紧，其连续像紧，在 Hausdorff 空间中闭。因此它是商映射（若 $q^{-1}(A)$ 闭，则 $A=q(q^{-1}(A))$ 闭）。$[0,1/4)$ 在 $[0,1]$ 中开，但像包含 $1\in S^1$ 而不包含从负角度逼近 1 的点，故像不是开集。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.3; W3DiffTop2026.pdf

## 关联

[dt-week-03](dt-week-03.md) · [dt-quotient](dt-quotient.md) · [dt-germs-cotangent](dt-germs-cotangent.md) · [dt-bump-locality](dt-bump-locality.md) · [dt-hadamard](dt-hadamard.md) · [dt-flat](dt-flat.md)
