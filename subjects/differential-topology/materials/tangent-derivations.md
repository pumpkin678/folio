---
id: dt.tangent-derivations
type: thm
title: "切向量的曲线与导子模型"
english: "Curves, derivations and the cotangent space"
summary: "复习切向量的曲线与导子模型的核心结论与使用方法。"
requires: ["dt.tangent-space"]
tags: ["微分拓扑","课程复习"]
minutes: 8
order: 14
---
:::statement
设 $\mathfrak m_p$ 是在 $p$ 处取值为零的光滑函数芽构成的理想。对每个切向量 $v$，$[f-f(p)]\mapsto v(f)$ 给出 $T_pM\cong(\mathfrak m_p/\mathfrak m_p^2)^*$。若 $v=[\gamma]$，则 $v(f)=(f\circ\gamma)'(0)$。
:::

:::proof
由 Leibniz 法则，导子杀掉常数和 $\mathfrak m_p^2$。反之，作用于 $[f-f(p)]$ 的线性泛函满足 Leibniz 法则，因为两个在 $p$ 消失的芽的乘积在商中为零。坐标差的类生成商，由 Hadamard 引理或一阶 Taylor 展开得到；独立性由坐标方向求导得到。
:::

**出处**　Differential_Topology_Week3.md，第 3.13 题；Week 6，第 6.3 题；PSet 2 Part 2，第 1–2 题。[Differential_Topology_Week3.md](https://chatgpt.com/library?file_id=libfile_d7ce3fb845e88191844ba219bd439f62&account_id=personal) · [W6DiffTop2026\(1\).pdf](https://chatgpt.com/library?file_id=libfile_23c7d824cae081918dbc9ad3c9755bd0&account_id=personal) · [PSet2-2.pdf](https://chatgpt.com/library?file_id=libfile_8397bf8d5840819184daa96e519bb2a5&account_id=personal)
