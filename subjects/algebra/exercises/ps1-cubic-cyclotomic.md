---
id: alg.ps1-cubic-cyclotomic
title: "三次分裂域与九次单位根"
english: "A cubic and ninth roots of unity"
summary: "Advanced Algebra · Problem Sheet 1，第 2 题。"
targets: ["alg.galois-correspondence"]
tags: ["高等代数","课程作业"]
difficulty: 进阶
minutes: 15
order: 3
---
:::problem
设 $\zeta_9$ 是本原九次单位根。计算 $\mathbb Q(\sqrt[3]{2},\zeta_9)$ 在 $\mathbb Q$ 上的 Galois 群。
:::

:::hint
先找三次式的分裂域与分圆域的交，再用限制映射比较两个群。
:::

:::solution
令 $L=\mathbb Q(\sqrt[3]{2},\zeta_3)$，$C=\mathbb Q(\zeta_9)$。其群分别为 $S_3$ 和 $C_6$。交域是 $L$ 的阿贝尔 Galois 子扩张，包含 $\mathbb Q(\zeta_3)$，所以恰是该二次域。合成域的群为 $S_3\times_{C_2}C_6$，其中两边映到对该二次域的限制。由于 $C_6\cong C_2\times C_3$，得到 $S_3\times C_3$。
:::

**出处**　Advanced Algebra · Problem Sheet 1，第 2 题。[AdA-ProblemSheet-1.pdf](https://chatgpt.com/library?file_id=libfile_c9ff79117e7c8191ac434a4cd49f620d&account_id=personal)
