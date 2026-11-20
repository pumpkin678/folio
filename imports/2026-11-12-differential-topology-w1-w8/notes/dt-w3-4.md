# 射影坐标与商拓扑相容

ID: `dt-w3-4` · Week 3 · exercise

题目：证明 $U_a\subset\mathbb{RP}^n$ 开，坐标及逆连续，过渡光滑。

步骤 1：$q^{-1}(U_a)=\{x:x_a\ne0\}$ 开，故 $U_a$ 开。

步骤 2：$q$ 是开商映射（3.2），限制到 $q^{-1}(U_a)$ 仍是商映射。$\varphi_a\circ q(x)=(x_j/x_a)_{j\ne a}$ 连续，由商映射的泛性质，$\varphi_a$ 连续。

步骤 3：令 $s_a:\mathbb R^n\to\mathbb R^{n+1}\setminus0$ 在第 $a$ 位插入 1。它连续，$\varphi_a^{-1}=q\circ s_a$，故逆连续。

步骤 4：置 $u_a=1$，交叠域为 $u_b\ne0$，过渡分量是 $u_j/u_b$（$j\ne b$），均光滑。反向交换 $a,b$ 同理。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 3, Problem 3.4; W3DiffTop2026.pdf

## 关联

[dt-week-03](dt-week-03.md) · [dt-quotient](dt-quotient.md) · [dt-germs-cotangent](dt-germs-cotangent.md) · [dt-bump-locality](dt-bump-locality.md) · [dt-hadamard](dt-hadamard.md) · [dt-flat](dt-flat.md)
