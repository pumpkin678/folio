# CA-K005 · McCoy theorem 与 minimal degree argument

## 定理
令 $A$ 为交换含幺环，$f\in A[x]$。zero divisor 指存在非零 annihilator，则

$$\boxed{\exists\,0\ne g\in A[x]:fg=0\iff\exists\,0\ne a\in A:fa=0.}$$

即多项式的 zero divisor 总有一个**常数 annihilator**。

## 精髓
从所有 $0\ne g$ 且 $fg=0$ 中取 degree 最小的。若最高首项系数 $b_m\ne0$，证明 $fb_m=0$。

核心推理是：若 $a_jg\ne0$，但由最高次项比较得 $a_jb_m=0$，则 $h=a_jg$ 满足 $fh=0$、$0\ne h$ 且 $\deg h<\deg g$，与最小性矛盾。

## 衍生推论
若 $f$ primitive，则 $f$ 不是 zero divisor：常数 $a$ 若满足 $af=0$，由 $c(f)=A$ 得 $a=0$；再用本定理。

**不要混淆**：并非说任一非零 annihilator $g$ 都是常数，而是说存在非零常数 annihilator。

## 关联
- [CA-Q003 · 完整证明](../problems/CA-Q003-mccoy-zero-divisors.md)
- [CA-Q005 · 在 quotient ring 上应用](../problems/CA-Q005-primitive-content-preservation.md)
- [CA-E003 · 模 prime 丢失 nilpotent 信息](../examples/CA-E003-nilpotent-quotient.md)
