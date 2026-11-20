# CA-K002 · Nilradical vs Jacobson radical

对交换含幺环 $R$，

$$\operatorname{Nil}(R)=\{a\in R:\exists n\ge1,\ a^n=0\}=\bigcap_{\mathfrak p\in\operatorname{Spec}(R)}\mathfrak p,$$

$$\operatorname{Jac}(R)=\bigcap_{\mathfrak m\in\operatorname{MaxSpec}(R)}\mathfrak m.$$

总有 $\operatorname{Nil}(R)\subseteq\operatorname{Jac}(R)$，但通常不等。

**Jac 判别法**：

$$a\in\operatorname{Jac}(R)\iff \forall b\in R,\ 1-ab\in R^\times.$$

**Prime quotient**：$\mathfrak p$ 是 prime ideal 当且仅当 $R/\mathfrak p$ 是 integral domain。$\bar a=0$ 的准确意思是 $a\in\mathfrak p$，不是 $a=0$。

**反例**：局部整环 $R=k[t]_{(t)}$ 中，$\operatorname{Jac}(R)=(t)R\ne0$，但 $\operatorname{Nil}(R)=0$。

**多项式环的特殊结论**：

$$\operatorname{Jac}(A[x])=\operatorname{Nil}(A[x])=\operatorname{Nil}(A)[x].$$

**关联**：[CA-Q001](../problems/CA-Q001-polynomial-units.md)、[CA-Q002](../problems/CA-Q002-jac-equals-nil.md)。
