# 交换代数 · 2026-11-13 习题易错点（新增）

> 标记说明：“讨论中出现”来自本次交流；“建议预防”是学习提醒，不算实际犯错。

## CA-M20261113-01 · 讨论中出现：Boolean ring 是否含单位元

- **修正**：本题沿用 A–M 约定，ring 为含单位元的 commutative ring；$A/\mathfrak p$ 的单位元是 $1_A+\mathfrak p$。
- **关联**：[CA-Q20261113-01](../problems/CA-Q20261113-01-boolean-basic.md)。

## CA-M20261113-02 · 讨论中出现：把素商环结论写成原环结论

- **修正**：对 prime ideal $\mathfrak p$ 证明的是 $A/\mathfrak p\cong\mathbb F_2$；不能直接写 $A\cong\mathbb F_2$。反例 $A=\mathbb F_2\times\mathbb F_2$。
- **关联**：[CA-Q20261113-01](../problems/CA-Q20261113-01-boolean-basic.md)、[CA-E20261113-01](../examples/CA-E20261113-01-f2-product.md)。

## CA-M20261113-03 · 讨论中出现：混淆理想与商环的代数性质

- **修正**：$\mathfrak p$ 是 prime ideal 当且仅当 $A/\mathfrak p$ 是 integral domain；$\mathfrak p$ 是 maximal ideal 当且仅当 $A/\mathfrak p$ 是 field。
- **关联**：[CA-Q20261113-01](../problems/CA-Q20261113-01-boolean-basic.md)、[CA-Q20261113-02](../problems/CA-Q20261113-02-unique-prime-nilradical.md)。

## CA-M20261113-04 · 讨论中出现：两个生成元的构造缺失

- **修正**：不必从消元开始，先要构造 $e\in(a,b)$ 且 $a=ae,b=be$。取 $e=a+b-ab$；验证两个包含关系。
- **关联**：[CA-Q20261113-03](../problems/CA-Q20261113-03-boolean-fg-ideals.md)。

## CA-M20261113-05 · 建议预防：商环非零陪集可逆的逻辑跳步

- **修正**：$a+\mathfrak N\neq0$ 仅推出 $a$ 不是 nilpotent；再使用“每个元素 unit 或 nilpotent”的假设才推出 $a$ 是 unit。
- **关联**：[CA-Q20261113-02](../problems/CA-Q20261113-02-unique-prime-nilradical.md)。

## CA-M20261113-06 · 建议预防：nil ideal 和 nilpotent ideal 混淆

- **修正**：每个 $n\in\mathfrak N$ 都有某个幂为零，不表示存在统一指数 $r$ 使 $\mathfrak N^r=0$。
- **关联**：[CA-Q20261113-02](../problems/CA-Q20261113-02-unique-prime-nilradical.md)、[CA-K20261113-02](../concepts/CA-K20261113-02-nilradical-local-rings.md)。
