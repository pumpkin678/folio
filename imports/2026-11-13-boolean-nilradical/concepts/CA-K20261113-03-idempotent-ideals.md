# CA-K20261113-03 · Idempotent ideals、join 与 projective modules

## Definition

$e\in A$ 是 idempotent 如果 $e^2=e$。对含幺交换环，任意 idempotent $e$ 给出理想 $eA$。

## Two-idempotent join

若 $a^2=a,b^2=b$，令

$$a\vee b=a+b-ab=1-(1-a)(1-b).$$

则 $a(a\vee b)=a$、$b(a\vee b)=b$，因此

$$(a,b)=(a\vee b).$$

对有限族递归操作，得到

$$(a_1,\ldots,a_n)=\left(1-\prod_{i=1}^n(1-a_i)\right).$$

## Direct sum decomposition

若 $e^2=e$，则

$$A=eA\oplus(1-e)A.$$

证明：$1=e+(1-e)$，因而和为 $A$；若 $z\in eA\cap(1-e)A$，则 $ez=z$，同时 $ez=0$，故 $z=0$。

因此由 idempotent 生成的理想是 projective $A$-module。特别地，Boolean ring 的每个 finitely generated ideal 都是 projective。

## 链接

- 完整练习：[Boolean ring 的有限生成理想](../problems/CA-Q20261113-03-boolean-fg-ideals.md)
- 基础定义：[Boolean rings](../concepts/CA-K20261113-01-boolean-rings.md)
