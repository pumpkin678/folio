---
id: CA-K001
title: Polynomial degree, units and nilpotent coefficients
track: 交换代数
type: concept
related_questions: [CA-Q001, CA-Q002]
---

# CA-K001 · Polynomial units

**定理（Polynomial unit criterion）**：对交换含幺环 $A$，

$$\sum_{i=0}^n a_ix^i\in A[x]^\times\iff a_0\in A^\times\text{ 且 }a_i\in\operatorname{Nil}(A)\ (i\ge1).$$

**整环中的度数**：若 $D$ 为 integral domain 且 $f,g\in D[x]$ 非零，则

$$\deg(fg)=\deg f+\deg g.$$

因此 $D[x]^\times=D^\times$。对于有 zero divisors 的环不能随意使用。

**例子**：在 $(\mathbb Z/4\mathbb Z)[x]$ 中，$2x$ nilpotent，且 $(1+2x)^2=1$。所以非零次数多项式也可能是 unit。

**关联**：[CA-Q001](../problems/CA-Q001-polynomial-units.md)、[CA-Q002](../problems/CA-Q002-jac-equals-nil.md)。
