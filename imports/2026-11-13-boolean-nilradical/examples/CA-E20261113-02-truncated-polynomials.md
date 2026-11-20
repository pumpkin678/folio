# CA-E20261113-02 · $k[\varepsilon]/(\varepsilon^3)$ 的唯一 prime ideal

## Example

设 $k$ 是 field，$A=k[\varepsilon]/(\varepsilon^3)$。任意元素唯一表示为

$$u=a+b\varepsilon+c\varepsilon^2,\qquad a,b,c\in k.$$

若 $a=0$，则 $u\in(\varepsilon)$，故 $u^3=0$，是 nilpotent。

若 $a\neq0$，写成 $u=a(1+t)$，其中 $t\in(\varepsilon)$ 且 $t^3=0$。因此

$$u^{-1}=a^{-1}(1-t+t^2).$$

故非单位元恰是 $\mathfrak N=(\varepsilon)$，并且

$$A/\mathfrak N\cong k.$$

所以 $\operatorname{Spec}(A)=\{(\varepsilon)\}$，且 $A$ 不是 field（$\varepsilon\ne0$ 但 nilpotent）。

## 关联

- [唯一 prime ideal 等价条件](../problems/CA-Q20261113-02-unique-prime-nilradical.md)
- [Nilradical / local ring](../concepts/CA-K20261113-02-nilradical-local-rings.md)
