# CA-K20261113-02 · Nilradical、prime correspondence 与 local ring

## Definition

对含幺交换环 $A$，

$$\operatorname{Nil}(A)=\{a\in A:\exists n\ge1,\ a^n=0\}.$$

**Nilradical theorem**：

$$\operatorname{Nil}(A)=\bigcap_{\mathfrak p\in\operatorname{Spec}(A)}\mathfrak p.$$

**Local ring**：恰有一个 maximal ideal 的含幺交换环。

## 基本判别法

- $\mathfrak p$ prime $\Longleftrightarrow$ $A/\mathfrak p$ 是 integral domain。
- $\mathfrak m$ maximal $\Longleftrightarrow$ $A/\mathfrak m$ 是 field。
- 对 ideal $I$，$\operatorname{Spec}(A/I)\cong\{\mathfrak p\in\operatorname{Spec}(A): I\subseteq\mathfrak p\}$，通过原像映射对应。

## Theorem（非零环）

对于非零交换含幺环 $A$，以下等价：

$$
|\operatorname{Spec}(A)|=1
\iff
A\setminus A^\times=\operatorname{Nil}(A)
\iff
A/\operatorname{Nil}(A)\text{ is a field}.
$$

这是 Krull dimension 为 $0$ 的 local ring 的刻画。

## 一个常见误区

“$\operatorname{Nil}(A)$ 是 nil ideal”（其中每个元素各自 nilpotent）与“$\operatorname{Nil}(A)$ 是 nilpotent ideal”（存在 $N$ 使 $\operatorname{Nil}(A)^N=0$）不同。

## 补充引理（商去 nil ideal 的单位可提升）

若 $a+\mathfrak N$ 是 $A/\mathfrak N$ 中的 unit，则存在 $b\in A$ 使 $ab=1+n$，其中 $n\in\mathfrak N$。取 $n^r=0$，有限几何级数给出 $(1+n)^{-1}=1-n+\cdots+(-n)^{r-1}$，故 $a$ 也可逆。

## 链接

- 严格证明：[唯一 prime ideal 等价条件](../problems/CA-Q20261113-02-unique-prime-nilradical.md)
- 例子：[$k[\varepsilon]/(\varepsilon^3)$](../examples/CA-E20261113-02-truncated-polynomials.md)
