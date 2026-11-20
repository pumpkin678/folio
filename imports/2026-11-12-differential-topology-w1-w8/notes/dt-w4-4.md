# Antipodal quotient 与 RP2

ID: `dt-w4-4` · Week 4 · exercise

题目：证明 $S^2/\{\pm1\}\to\mathbb{RP}^2$ 为同胚。

步骤 1：包含映射与射影商映射复合 $S^2\to\mathbb{RP}^2$ 连续，且对反足识别恒定，故下降为连续 $F:S^2/\{\pm1\}\to\mathbb{RP}^2$。

步骤 2：归一化 $N(x)=x/\|x\|$ 连续。对任意 $\lambda\ne0$，$N(\lambda x)=\operatorname{sgn}(\lambda)N(x)$，所以其到反足商的复合在每条射影轨道上恒定。商泛性质给连续 $G:\mathbb{RP}^2\to S^2/\{\pm1\}$。

步骤 3：单位向量归一化不变；非零向量和其归一化张成相同直线。因此 $GF=\mathrm{id}$、$FG=\mathrm{id}$，故同胚。不需要提前使用 $\mathbb{RP}^2$ Hausdorff。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.4; W4DiffTop2026.pdf

## 关联

[dt-week-04](dt-week-04.md) · [dt-rank-embedding](dt-rank-embedding.md) · [dt-inverse-constant-rank](dt-inverse-constant-rank.md) · [dt-level-sphere](dt-level-sphere.md)
