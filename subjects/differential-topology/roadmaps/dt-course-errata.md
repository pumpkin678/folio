---
id: "dt-course-errata"
title: "Week 1–8 · 原题勘误与解释边界"
english: "Course errata and interpretation boundaries"
summary: "集中查看原包记录的题面问题、反例与最小修正，并回到对应题卡核对证明。"
purpose: "review"
level: "复习"
order: 9
minutes: 10
tags: ["课程勘误", "条件检查"]
source_pack: "2026-11-12-differential-topology-w1-w8"
related: ["dt-w2-10", "dt-w2-11", "dt-w3-1", "dt-w3-10", "dt-w3-12", "dt-w3-optional", "dt-w4-0", "dt-w4-2", "dt-w4-3", "dt-w5-s1", "dt-w6-4", "dt-w7-4", "dt-w8-6"]
---

:::goal
保留课程原文、错误原因与修正版之间的区别。课程资料的勘误不代表个人已经犯过的错误。
:::

依据八份课程 PDF 的文本读取逐项核对。这里区分不成立的原文、最小修正以及补充论证。

| 位置 | 原文问题 | 本包处理 |
|---|---|---|
| Week 2 Definition 2.9 / 2.10 / 2.11 | 只要求单向 identity 光滑，不能形成图册等价关系 | 给 x/x³ 反例；修正为 identity 是 diffeomorphism，然后证明并图册判据 |
| Week 3 Problem 3.1 | 链点误写属于关系 R；等价关系交漏掉“包含 R”；链端点/长度有歧义 | 明确定义允许零长的有限无向 R 链，再证最小性 |
| Week 3 Problem 3.10 Remark | 不能不检查假设就对全局函数环套局部 Krull intersection | 补充 annihilator 理想的有限生成反证 |
| Week 3 bump Remark | β 第二因子 α(1−t) 不满足声称的性质 | 改为 α(−t−1)；图像和 V,W 使用开盒，支撑紧包含 |
| Week 3 Optional | 半直线“identify”没有写映射 | 明确采用平移 t↦t−a 与 t↦t−b，说明延拓限制必须常值 |
| Week 4 Problem 4.0 | 空图可有任意形式维数 | 说明只比较非空图域 |
| Week 4 Problem 4.2 | R^(n+k)→R^n 满秩纤维写成 n 维 | 正确为 k 维，slice 为 R^k×{0} |
| Week 4 S² 例子 | radius 在原点不光滑；极坐标不是单张全局图 | 选 graph 与 stereographic 直接比较；另用平方半径做正则水平集 |
| Week 5 Grassmannian Example | Stiefel 用“sets”，右作用误写 GL_k | 使用有序正交标架与 O(k)；加入良定义、单射、连续性及 graph charts |
| Week 5 “atlas without topology” remark | 任意这样的 atlas 不自动给 Hausdorff/second countable | 明确须另查；双原点直线即反例 |
| Week 6 Problem 6.4 | 只列初值和群律，没有列生成向量场条件 | 同时证明 ∂t F=X∘F，得到真正由 X 生成的 flow |
| Week 7 Theorem 0.1 | 外幂泛性质漏写 alternating | 修正为交替多线性；任意多线性对应 tensor power |
| Week 7 Problem 7.4 | determinant 题遗漏有限维假设 | 明确假设 dim V=n<∞ |
| Week 8 Theorem 8.1 | 第二和缺符号、定义域写 A^p、参数尾下标有误 | 导子作为参数，使用 (−1)^(i+j) 的标准公式；外幂取 A-模外幂 |
| Week 8 Problem 8.6 | contraction 输入参数数目多一个 | p-形式插入 X 后接受 p−1 个参数 |

没有把错误命题包装成证明。题面以中文重述，完整原始 PDF 的文件名和 ID 在 sources.json 中。Week 1 的 u 编号仅为本包对未编号问题的定位；Week 5 的 s 编号为原 Example / Suggestion 的扩展，不冒充原作业编号。

## 回到题目核对

- [2.10 · 图册等价定义的单向性错误](ref:dt-w2-10)
- [2.11 · 两种意义下判断图册等价](ref:dt-w2-11)
- [3.1 · 关系生成的等价关系](ref:dt-w3-1)
- [3.10 · 光滑函数环中的非零无限阶消失元](ref:dt-w3-10)
- [3.12 · 分离函数与 bump function](ref:dt-w3-12)
- [3.optional · 非 Hausdorff 空间上的延拓障碍](ref:dt-w3-optional)
- [4.0 · 光滑过渡推出维数恒定](ref:dt-w4-0)
- [4.2 · Regular level set 的 slice](ref:dt-w4-2)
- [4.3 · 球面 graph atlas 与 stereographic atlas 相容](ref:dt-w4-3)
- [5.s1 · Grassmannian 与 Plücker 映射（原题 Example 展开）](ref:dt-w5-s1)
- [6.4 · Compact manifold 上向量场 complete](ref:dt-w6-4)
- [7.4 · 用 top wedge 定义 determinant](ref:dt-w7-4)
- [8.6 · Cartan formula 的逐类消去证明](ref:dt-w8-6)

[返回八周总览](ref:dt-w1-w8-path)。
