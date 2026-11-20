# CA-K20261113-01 · Boolean ring：定义、特征与 prime ideals

## Definition

含幺交换环 $A$ 称为 **Boolean ring**，若 $a^2=a$ 对所有 $a\in A$ 成立。称 $a$ 为 idempotent（幂等元）。

## Theorem

对 Boolean ring $A$：

1. $2a=0$ 对所有 $a\in A$ 成立（因此非零 Boolean ring 的 characteristic 为 $2$）。
2. 每个 prime ideal $\mathfrak p$ 是 maximal，且 $A/\mathfrak p\cong\mathbb F_2$。
3. 因此 $\operatorname{Spec}(A)=\operatorname{MaxSpec}(A)$。

## Proof sketch

用 $(-a)^2=-a$ 和 $(-a)^2=a^2=a$ 得到 $2a=0$。对 prime $\mathfrak p$，商环是 integral domain，$x(x-1)=0$ 强迫 $x\in\{0,1\}$，所以是 $\mathbb F_2$。

## Example & counterexample

$\mathbb F_2\times\mathbb F_2$ 是 Boolean ring，但不是 integral domain，更不是 field。不能由所有素商环同构 $\mathbb F_2$ 推出原环同构 $\mathbb F_2$。

## 链接

- 证明：[Basic exercises](../problems/CA-Q20261113-01-boolean-basic.md)
- 练习：[Finite ideals](../problems/CA-Q20261113-03-boolean-fg-ideals.md)
- 例子：[$\mathbb F_2\times\mathbb F_2$](../examples/CA-E20261113-01-f2-product.md)
