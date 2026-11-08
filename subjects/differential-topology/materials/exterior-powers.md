---
id: dt.exterior-powers
type: thm
title: "外幂、行列式与外幂丛"
english: "Exterior powers, determinants and exterior bundles"
summary: "复习外幂、行列式与外幂丛的核心结论与使用方法。"
requires: ["dt.tangent-bundle"]
tags: ["微分拓扑","课程复习"]
minutes: 8
order: 17
---
:::statement
$\bigwedge^k V$ 由交替 $k$ 线性映射的泛性质刻画。若 $e_1,\ldots,e_n$ 是一组基，则按下标递增的 $e_{i_1}\wedge\cdots\wedge e_{i_k}$ 构成基。线性映射诱导 $\bigwedge^k f$，它在简单楔积上逐因子作用。有限维情形的顶次外幂是一维，$\bigwedge^n f$ 作用的标量就是 $\det f$。
:::

:::proof
基向量楔积由多线性和交替性张成。对应的坐标余子式是交替多线性映射，下降到外幂后能分别检出这些生成元，故它们独立。由泛性质，外幂保持复合，因此行列式可乘。对余切丛逐纤维取外幂，过渡矩阵的条目是余切过渡矩阵的子式，所以依然光滑。
:::

**出处**　Week 7，第 7.1–7.5 题。[W7DiffTop2026.pdf](https://chatgpt.com/library?file_id=libfile_90d38310d02481919a3c01bbc4ab2245&account_id=personal)
