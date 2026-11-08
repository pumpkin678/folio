---
id: alg.ps1-cyclotomic-degree
title: "分圆扩张的次数"
english: "Degree of a cyclotomic extension"
summary: "Advanced Algebra · Problem Sheet 1，第 3 题。"
targets: ["alg.field-extensions","alg.galois-correspondence"]
tags: ["高等代数","课程作业"]
difficulty: 进阶
minutes: 15
order: 10
---
:::problem
证明 $[\mathbb Q(\zeta_n):\mathbb Q]=\varphi(n)$，其中 $\zeta_n$ 为本原 $n$ 次单位根。
:::

:::hint
证明每个 $p\nmid n$ 的素数都把任一本原根送到与它共轭的 $p$ 次幂。
:::

:::solution
设 $f$ 是本原根 $\zeta$ 的首一最小多项式。若 $\zeta^p$ 的首一最小多项式 $g$ 与 $f$ 不同，则 $f\mid g(X^p)$，且 $fg\mid X^n-1$。模 $p$ 有 $\bar f\mid\bar g(X)^p$，故 $\bar f,\bar g$ 有公共不可约因子。这与 $X^n-1$ 在特征 $p$ 无重根矛盾。由此逐个应用素数幂操作可得所有 $\zeta^a$（$\gcd(a,n)=1$）都与 $\zeta$ 共轭，而共轭根只能是本原根。
:::

**出处**　Advanced Algebra · Problem Sheet 1，第 3 题。[AdA-ProblemSheet-1.pdf](https://chatgpt.com/library?file_id=libfile_c9ff79117e7c8191ac434a4cd49f620d&account_id=personal)
