# 从 Euclidean IFT 到 manifold IFT

ID: `dt-w4-1` · Week 4 · exercise

题目：从 Jacobian 版反函数定理推出切空间版及流形版。

步骤 1：在欧氏坐标基下 $d f_0(\partial_i)=\sum_j(\partial_i f^j)(0)\partial_j$，所以 $df_0$ 的矩阵正是 $Jf(0)$。线性同构等价于矩阵可逆，故 (i) 推出 (ii)。

步骤 2：对流形映射取以 $p,f(p)$ 为中心、原点为坐标值的图 $\varphi,\psi$，缩小源图以使其像在目标图域内。令 $F=\psi\circ f\circ\varphi^{-1}$。链式法则给
$$dF_0=d\psi_{f(p)}\circ df_p\circ(d\varphi_p)^{-1},$$
三个因子均同构，故 $DF_0$ 可逆。

步骤 3：由 (i) 取 $F:O\to P$ 为局部微分同胚。于是 $f:\varphi^{-1}(O)\to\psi^{-1}(P)$ 的逆为 $\varphi^{-1}\circ(F|_O)^{-1}\circ\psi$，光滑，得到 (iii)。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.1; W4DiffTop2026.pdf

## 关联

[dt-week-04](dt-week-04.md) · [dt-rank-embedding](dt-rank-embedding.md) · [dt-inverse-constant-rank](dt-inverse-constant-rank.md) · [dt-level-sphere](dt-level-sphere.md)
