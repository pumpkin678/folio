# 错误 / 薄弱环节记录

区分**你已表达过的想法需要修正**与**基于当前提问建议重点复习**，避免把尚未发生的错误记成实际错题。

## 已在讨论中出现

### CA-M001 · 误以为一般 $A[x]$ 是 PID
- 原想法：使用“$A[x]$ 是 PID”证明 Jac 与 Nil 的关系。
- 纠正：只有在某些特殊情形（例如 $A=k$ 是 field）$A[x]$ 才是 PID；一般 $\mathbb Z[x]$ 不是 PID。
- 反例：$(2,x)\subseteq\mathbb Z[x]$ 不能由单个多项式生成。
- 关联题目：[CA-Q002](../problems/CA-Q002-jac-equals-nil.md)。

### CA-M002 · 误以为 PID 中所有 prime ideals 都是 maximal
- 原想法：“prime ideal 等价于 maximal ideal”。
- 纠正：在 PID 中，只有非零 prime ideals 必然 maximal。
- 反例：$k[x]$ 中 $(0)$ prime 但非 maximal。
- 关联题目：[CA-Q002](../problems/CA-Q002-jac-equals-nil.md)。

## 建议重点复习（不视作已犯错误）

### CA-M003 · Degree 公式的前提
- 风险：对含 zero divisors 的 $A$ 直接使用 $\deg(fg)=\deg f+\deg g$。
- 正确做法：先转到 integral domain（例如模 $\mathfrak p$）。
- 关联题目：[CA-Q001](../problems/CA-Q001-polynomial-units.md)。

### CA-M004 · 商环像为零的含义
- 风险：从 $\bar a=0\in A/\mathfrak p$ 直接得到 $a=0\in A$。
- 正确做法：得到 $a\in\mathfrak p$；若对所有 prime ideal 成立，才推出 $a$ nilpotent。
- 关联题目：[CA-Q001](../problems/CA-Q001-polynomial-units.md)。

### CA-M005 · 把“构造逆元”用在不合适的方向
- 风险：为证明 Jac $\subseteq$ Nil 而陷入主动构造 $1-xf$ 的逆元。
- 正确做法：Jac 判别法已经保证它是 unit，使用 polynomial unit criterion 反推系数；有限几何级数主要用于 Nil $\subseteq$ Jac。
- 关联题目：[CA-Q002](../problems/CA-Q002-jac-equals-nil.md)。

### CA-M006 · 有限个 nilpotent 系数为何推出多项式 nilpotent
- 风险：只写“显然”而没有解释有限性和交换性。
- 正确做法：若 $c_i^{r_i}=0$，取 $N=1+\sum_i(r_i-1)$，则 $N$ 个因子中某个 $c_i$ 必至少出现 $r_i$ 次，从而每个展开项为零。
- 关联题目：[CA-Q001](../problems/CA-Q001-polynomial-units.md)、[CA-Q002](../problems/CA-Q002-jac-equals-nil.md)。

## 复习建议
先闭卷证明 CA-Q001 的必要性，然后独立证明 CA-Q002 的 Jac $\subseteq$ Nil，最后口述 CA-M001 与 CA-M002 的反例。
