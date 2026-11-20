# Regular level set 的 slice

ID: `dt-w4-2` · Week 4 · exercise

题目修正：$f:\mathbb R^{n+k}\to\mathbb R^n$ 处处满秩，则非空纤维是 **$k$ 维**，局部 slice 为 $\mathbb R^k\times\{0\}\subset\mathbb R^{k+n}$。原文写 $n$ 维是笔误。

步骤 1：给 $p\in f^{-1}(y)$。满秩保证可重排源坐标为 $(u,v)\in\mathbb R^k\times\mathbb R^n$，使 $\partial f/\partial v(p)$ 可逆。

步骤 2：令 $H(u,v)=(u,f(u,v)-y)$。其导数为块矩阵
$$DH_p=\begin{pmatrix}I_k&0\\ *&\partial f/\partial v(p)\end{pmatrix},$$
可逆。反函数定理给邻域 $U,V$ 使 $H:U\to V$ 微分同胚。

步骤 3：对 $q\in U$，$f(q)=y$ 当且仅当 $H(q)$ 最后 $n$ 坐标为零，故 $H(U\cap f^{-1}(y))=V\cap(\mathbb R^k\times\{0\})$。这正是 embedded submanifold 的 slice 条件，维数 $k$。纤维空时按空子流形约定处理。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 4, Problem 4.2; W4DiffTop2026.pdf

## 关联

[dt-week-04](dt-week-04.md) · [dt-rank-embedding](dt-rank-embedding.md) · [dt-inverse-constant-rank](dt-inverse-constant-rank.md) · [dt-level-sphere](dt-level-sphere.md)
