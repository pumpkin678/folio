---
id: dt.smooth-cutoff
type: thm
title: "截断函数与单位分解"
english: "Bump functions and partitions of unity"
summary: "复习截断函数与单位分解的核心结论与使用方法。"
requires: ["dt.smooth-map"]
tags: ["微分拓扑","课程复习"]
minutes: 8
order: 13
---
:::statement
光滑流形的每个开覆盖都有从属于它的局部有限光滑单位分解。每个系数非负，支撑位于对应的覆盖开集，且逐点求和为 $1$。因此可对实值函数取加权和来拼接。
:::

:::example
令 $\eta(t)=e^{-1/t}$（$t>0$）且 $\eta(t)=0$（$t\le0$）。每阶右导数都是 $e^{-1/t}$ 乘以 $1/t$ 的多项式，在 $0$ 处趋于 $0$，故 $\eta$ 光滑。函数 $\eta(t)/(\eta(t)+\eta(1-t))$ 在 $t\le0$ 时为 $0$，在 $t\ge1$ 时为 $1$。
:::

**出处**　Differential_Topology_Week3.md，第 3.9–3.12 题；PSet 2 Part 1。[Differential_Topology_Week3.md](https://chatgpt.com/library?file_id=libfile_d7ce3fb845e88191844ba219bd439f62&account_id=personal) · [PSet2-1.pdf](https://chatgpt.com/library?file_id=libfile_a0a3a7ab57a8819183736acc4e00253e&account_id=personal)
