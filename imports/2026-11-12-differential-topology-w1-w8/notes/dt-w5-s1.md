# Grassmannian 与 Plücker 映射（原题 Example 展开）

ID: `dt-w5-s1` · Week 5 · exercise

补充任务：补全原讲义 Grassmannian 例子的关键证明。

步骤 1：Stiefel 空间应为有序正交标架 $V_k(\mathbb R^n)=\{Q\in\mathbb R^{n\times k}:Q^TQ=I_k\}$。它是多项式方程的闭集，且 $\|Q\|_F^2=k$，故紧。右作用群是 $O(k)$，不是原文误写的整个 $GL_k$（后者不保持正交标架）。

步骤 2：同一 $k$ 维子空间的两个正交标架满足 $Q'=QA$ 且 $A\in O(k)$，所以商正好参数化 $k$ 维子空间。

步骤 3：若换标架 $v'_j=\sum_i v_iA_{ij}$，多重线性和交替性给 $v'_1\wedge\cdots\wedge v'_k=(\det A)v_1\wedge\cdots\wedge v_k$，射影类不变。对 $k\ge1$，非零可分解 $\omega=v_1\wedge\cdots\wedge v_k$ 满足
$$\operatorname{span}(v_1,\ldots,v_k)=\{v:v\wedge\omega=0\}.$$
包含正向由重复因子；逆向把 $v_i$ 扩充为基，$v$ 的其余分量对应线性独立的 $(k+1)$ 重楔，必须为零。因此射影楔确定子空间，Plücker 映射单射。$k=n$ 时两边全空间；$k=0$ 时 Grassmannian 只有一点，单射直接成立。

步骤 4：楔的坐标是标架矩阵的 minors，连续；投影到射影空间连续，因此商泛性质使 Plücker 映射连续。目标射影空间 Hausdorff，由 5.3 源空间 Hausdorff；又因源紧，此映射是 topological embedding。

步骤 5（补充局部坐标）：固定分解 $\mathbb R^n=E\oplus F$，$\dim E=k$。投影到 $E$ 可逆的子空间唯一为 $\operatorname{graph}(A)$，$A:E\to F$，给 $k(n-k)$ 个坐标。换分解后的坐标为 $(c+dA)(a+bA)^{-1}$，定义域 $\det(a+bA)\ne0$ 开，且公式光滑。图映射连续可由 $(I,A)$ 的 Gram–Schmidt 正交化后取商得到；逆坐标在标架分块 $(Q_E,Q_F)$ 上为 $Q_FQ_E^{-1}$，连续并下降到商。故这些图与商拓扑相容，给出 Grassmannian 光滑结构。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Example / Suggestion（补充展开）; W5DiffTop2026.pdf

## 关联

[dt-week-05](dt-week-05.md) · [dt-vector-fields](dt-vector-fields.md) · [dt-fields-derivations](dt-fields-derivations.md) · [dt-lie-related](dt-lie-related.md) · [dt-bracket-example](dt-bracket-example.md)
