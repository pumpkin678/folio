# 二形式的 d² 手算与抵消表

ID: `dt-w8-3` · Week 8 · exercise

题目：对二形式 $\omega$ 逐项计算 $d^2\omega$。

记 $A=X_1,B=X_2,C=X_3,D=X_4$（此处字母 $A$ 表示导子，底层代数仍按上下文区分）。设 $\eta=d\omega$，三变量公式是
$$\eta(U,V,W)=U\omega(V,W)-V\omega(U,W)+W\omega(U,V)-\omega([U,V],W)+\omega([U,W],V)-\omega([V,W],U).$$

步骤 1：四变量完整外层展开为
$$\begin{aligned}
d\eta(A,B,C,D)={}&A\eta(B,C,D)-B\eta(A,C,D)+C\eta(A,B,D)-D\eta(A,B,C)\\
&-\eta([A,B],C,D)+\eta([A,C],B,D)-\eta([A,D],B,C)\\
&-\eta([B,C],A,D)+\eta([B,D],A,C)-\eta([C,D],A,B).
\end{aligned}$$
每个 $\eta$ 都替换为上述六项，以下按类型列出全部 60 项的归并，保证无遗漏。

步骤 2（18 项）：前四项产生 12 个双重导子项，后六项各产生一个括号导子作用项，合并为
$$\begin{aligned}
&(AB-BA-[A,B])\omega(C,D)\\
&-(AC-CA-[A,C])\omega(B,D)\\
&+(AD-DA-[A,D])\omega(B,C)\\
&+(BC-CB-[B,C])\omega(A,D)\\
&-(BD-DB-[B,D])\omega(A,C)\\
&+(CD-DC-[C,D])\omega(A,B)=0.
\end{aligned}$$

步骤 3（24 项）：前四项产生以下 12 项
$$\begin{aligned}
&-A\omega([B,C],D)+A\omega([B,D],C)-A\omega([C,D],B)\\
&+B\omega([A,C],D)-B\omega([A,D],C)+B\omega([C,D],A)\\
&-C\omega([A,B],D)+C\omega([A,D],B)-C\omega([B,D],A)\\
&+D\omega([A,B],C)-D\omega([A,C],B)+D\omega([B,C],A).
\end{aligned}$$
后六项中，每个 $\eta([U,V],W,Z)$ 的第二、三项分别为 $-W\omega([U,V],Z)$ 与 $Z\omega([U,V],W)$；乘上外层符号后正好得到上面 12 项的相反数。例如 $-\eta([B,C],A,D)$ 贡献 $+A\omega([B,C],D)-D\omega([B,C],A)$，逐一抵消。

步骤 4（6 项）：两个不相交括号的项为
$$\begin{aligned}
&\omega([C,D],[A,B])+\omega([A,B],[C,D])\\
&-\omega([B,D],[A,C])-\omega([A,C],[B,D])\\
&+\omega([B,C],[A,D])+\omega([A,D],[B,C])=0,
\end{aligned}$$
由 $\omega$ 交替性每对为零。

步骤 5（12 项）：令 $J(U,V,W)=[[U,V],W]-[[U,W],V]+[[V,W],U]$，剩余嵌套括号项为
$$\omega(J(A,B,C),D)-\omega(J(A,B,D),C)+\omega(J(A,C,D),B)-\omega(J(B,C,D),A)=0.$$
每个 $J=0$ 由 Jacobi。四类共 $18+24+6+12=60$ 项，全部消去，故 $d^2\omega=0$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.3; W8DiffTop2026.pdf

## 关联

[dt-week-08](dt-week-08.md) · [dt-exterior-derivative](dt-exterior-derivative.md) · [dt-contraction-lie](dt-contraction-lie.md) · [dt-cartan-complex](dt-cartan-complex.md) · [dt-cartan-example](dt-cartan-example.md)
