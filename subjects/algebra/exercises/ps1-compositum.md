---
id: alg.ps1-compositum
title: "复合域与有限和"
english: "Composita and sums of products"
summary: "Advanced Algebra · Problem Sheet 1，第 1 题。"
targets: ["alg.field-extensions"]
tags: ["高等代数","课程作业"]
difficulty: 进阶
minutes: 15
order: 11
---
:::problem
设 $K,L\subset E$ 为域。令 $R$ 为有限和 $\sum k_i\ell_i$ 组成的子环。证明若 $K$ 的每个元素在 $L$ 上代数，则 $R=KL$，并给出无该条件时的反例。
:::

:::solution
任一非零有限和属于某个由有限多个 $k_i$ 生成的 $L$-代数。该代数是有限维整域，乘以非零元是单射线性自映射，故满射，该元素在其中可逆。反例取 $E=F(x,y)$，$K=F(x)$、$L=F(y)$。分母只能取 $x$ 和 $y$ 各自的一元多项式乘积，故 $1/(x+y)$ 不在 $R$。
:::

**出处**　Advanced Algebra · Problem Sheet 1，第 1 题。[AdA-ProblemSheet-1.pdf](https://chatgpt.com/library?file_id=libfile_c9ff79117e7c8191ac434a4cd49f620d&account_id=personal)
