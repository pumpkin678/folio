# Week 8 · 外微分、Lie derivative 与 Cartan formula

能手算一、二形式的 d²；证明 A-多线性、flow 公式与 Cartan。

# Exterior derivative 的符号约定

ID: `dt-exterior-derivative` · Week 8 · definition

对 $p$-形式采用
$$d\omega(X_1,\ldots,X_{p+1})=\sum_i(-1)^{i-1}X_i\omega(X_1,\widehat X_i,\ldots,X_{p+1})+\sum_{i<j}(-1)^{i+j}\omega([X_i,X_j],X_1,\widehat X_i,\widehat X_j,\ldots,X_{p+1}).$$
后面未删参数保持原顺序。特别地 $df(X)=Xf$，$d\alpha(X,Y)=X\alpha(Y)-Y\alpha(X)-\alpha([X,Y])$。

在流形坐标中，若 $\omega=\sum_Ia_I dx^I$，则 $d\omega=\sum_{j,I}\partial_ja_I dx^j\wedge dx^I$。与上式相等可在坐标向量场上检验：它们括号为零，二者都是张量，坐标基取值决定形式。上式的 $A$-多线性来自 $[X,aY]=X(a)Y+a[X,Y]$ 中的额外项与第一和的 Leibniz 项抵消。

## 来源

- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-08](../notes/dt-week-08.md) · [dt-w8-2](../notes/dt-w8-2.md) · [dt-w8-3](../notes/dt-w8-3.md) · [dt-w8-4](../notes/dt-w8-4.md) · [dt-w8-5](../notes/dt-w8-5.md) · [dt-w8-6](../notes/dt-w8-6.md)


---

# Pullback、contraction 与 Lie derivative

ID: `dt-contraction-lie` · Week 8 · definition

光滑 $F:M\to N$ 对 $k$-形式的拉回为 $(F^*\omega)_p(v_1,\ldots,v_k)=\omega_{F(p)}(dF_pv_1,\ldots,dF_pv_k)$，其中 $p\in M$、$v_j\in T_pM$。

Contraction $i_X:\Omega^p\to\Omega^{p-1}$ 定义为首槽插入 $X$；对函数为零。Lie derivative 定义为 $L_X\omega=\left.\frac d{dt}\right|_0F_t^*\omega$，其中 $F_t$ 为 $X$ 的局部 flow。等价代数公式是 $X(\omega(Y_1,\ldots,Y_p))-\sum_j\omega(\ldots,[X,Y_j],\ldots)$，见 8.5。

## 来源

- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-08](../notes/dt-week-08.md) · [dt-w8-2](../notes/dt-w8-2.md) · [dt-w8-3](../notes/dt-w8-3.md) · [dt-w8-4](../notes/dt-w8-4.md) · [dt-w8-5](../notes/dt-w8-5.md) · [dt-w8-6](../notes/dt-w8-6.md)


---

# Cartan formula 与 de Rham complex

ID: `dt-cartan-complex` · Week 8 · theorem

Cartan identity：$L_X=di_X+i_Xd$，逐项证明见 8.6。

Exterior derivative 满足 $d^2=0$。对流形，在坐标展开中 $d^2\omega=\sum_{i,j,I}\partial_i\partial_ja_I\,dx^i\wedge dx^j\wedge dx^I$；$i=j$ 项为零，$i,j$ 互换的项因混合偏导相等与楔反对称相消，故为零。对一般交换代数的导子形式，同样结论来自括号定义与 Jacobi；1、2 次的完整代数计算见 8.2–8.3。

于是 $0\to\Omega^0(M)\xrightarrow d\Omega^1(M)\xrightarrow d\cdots$ 为 cochain complex。Closed 指 $d\omega=0$，exact 指 $\omega=d\eta$；$H^p_{dR}(M)=\ker(d:\Omega^p\to\Omega^{p+1})/\operatorname{im}(d:\Omega^{p-1}\to\Omega^p)$。这是后续延伸定义，并非 Week 8 原作业要求计算的内容。

## 来源

- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-08](../notes/dt-week-08.md) · [dt-w8-2](../notes/dt-w8-2.md) · [dt-w8-3](../notes/dt-w8-3.md) · [dt-w8-4](../notes/dt-w8-4.md) · [dt-w8-5](../notes/dt-w8-5.md) · [dt-w8-6](../notes/dt-w8-6.md)


---

# 用一个可计算例子检查符号

ID: `dt-cartan-example` · Week 8 · example

在 $\mathbb R^2$ 取 $\omega=x\,dy$、$X=\partial_x$。$d\omega=dx\wedge dy$，$i_X\omega=0$，$i_Xd\omega=dy$，故 Cartan 给 $L_X\omega=dy$。

直接验证：flow 为 $F_t(x,y)=(x+t,y)$，所以 $F_t^*\omega=(x+t)dy$，在零时求导也是 $dy$。另外 $d(d\omega)=d(dx\wedge dy)=0$。这个例子可同时核对 pullback、contraction 的首槽位置以及 Lie derivative 的正负号。

## 来源

- 为 Week 8 roadmap 编写的配套知识卡；原课程文件 W8DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-08](../notes/dt-week-08.md) · [dt-w8-2](../notes/dt-w8-2.md) · [dt-w8-3](../notes/dt-w8-3.md) · [dt-w8-4](../notes/dt-w8-4.md) · [dt-w8-5](../notes/dt-w8-5.md) · [dt-w8-6](../notes/dt-w8-6.md)


---

# 一形式的 d² 逐项计算

ID: `dt-w8-2` · Week 8 · exercise

题目：对 $\omega\in\operatorname{Hom}_A(\operatorname{Der}(A),A)$ 计算 $d^2\omega$。

统一勘误与约定：$A$ 是交换含幺实代数，$L=\operatorname{Der}_{\mathbb R}(A,A)$，$\Omega^p=\operatorname{Hom}_A(\Lambda_A^pL,A)$，$\Omega^0=A$，负次数为零。外微分使用
$$d\omega(X_1,\ldots,X_{p+1})=\sum_i(-1)^{i-1}X_i\omega(X_1,\widehat X_i,\ldots,X_{p+1})+\sum_{i<j}(-1)^{i+j}\omega([X_i,X_j],X_1,\widehat X_i,\widehat X_j,\ldots,X_{p+1}).$$
原文第二个求和缺少 $(-1)^{i+j}$，末尾参数和定义域也有笔误。以下均按此标准公式计算。

步骤 1：$d\omega(X,Y)=X\omega(Y)-Y\omega(X)-\omega([X,Y])$。

步骤 2：代入二形式的外微分得到完整展开
$$\begin{aligned}
d^2\omega(X,Y,Z)={}&XY\omega(Z)-XZ\omega(Y)-X\omega([Y,Z])\\
&-YX\omega(Z)+YZ\omega(X)+Y\omega([X,Z])\\
&+ZX\omega(Y)-ZY\omega(X)-Z\omega([X,Y])\\
&-[X,Y]\omega(Z)+Z\omega([X,Y])+\omega([[X,Y],Z])\\
&+[X,Z]\omega(Y)-Y\omega([X,Z])-\omega([[X,Z],Y])\\
&-[Y,Z]\omega(X)+X\omega([Y,Z])+\omega([[Y,Z],X]).
\end{aligned}$$

步骤 3：形如 $X\omega([Y,Z])$ 的六项成对抵消；作用于 $\omega(Z)$ 的项合成 $(XY-YX-[X,Y])\omega(Z)=0$，其他两个同理。

步骤 4：剩下 $\omega([[X,Y],Z]-[[X,Z],Y]+[[Y,Z],X])=0$，因为括号内为 Jacobi 恒等式。因此 $d^2\omega=0$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.2; W8DiffTop2026.pdf

## 关联

[dt-week-08](../notes/dt-week-08.md) · [dt-exterior-derivative](../notes/dt-exterior-derivative.md) · [dt-contraction-lie](../notes/dt-contraction-lie.md) · [dt-cartan-complex](../notes/dt-cartan-complex.md) · [dt-cartan-example](../notes/dt-cartan-example.md)


---

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

[dt-week-08](../notes/dt-week-08.md) · [dt-exterior-derivative](../notes/dt-exterior-derivative.md) · [dt-contraction-lie](../notes/dt-contraction-lie.md) · [dt-cartan-complex](../notes/dt-cartan-complex.md) · [dt-cartan-example](../notes/dt-cartan-example.md)


---

# Lie derivative 的 A-multilinearity

ID: `dt-w8-4` · Week 8 · exercise

题目：证明
$$L_X\omega(Y_1,\ldots,Y_p)=X\omega(Y_1,\ldots,Y_p)-\sum_j\omega(Y_1,\ldots,[X,Y_j],\ldots,Y_p)$$
对每个参数 $A$-线性。

步骤 1：先由导子 Leibniz 规则直接计算 $[X,aY]=X(a)Y+a[X,Y]$。

步骤 2：把第 $j$ 槽换成 $aY_j$。首项变为 $X(a)\omega(Y_1,\ldots,Y_p)+aX(\omega(Y_1,\ldots,Y_p))$。和式中第 $j$ 项是 $-X(a)\omega(Y_1,\ldots,Y_p)-a\omega(\ldots,[X,Y_j],\ldots)$；其他各项因 $\omega$ 的 $A$-多线性均可提出 $a$。

步骤 3：两项 $X(a)\omega$ 抵消，剩下恰为 $aL_X\omega(Y_1,\ldots,Y_p)$。加法性由各运算的实线性和括号加法性直接得到，因此每个槽均 $A$-线性。$p=0$ 时没有槽，$L_Xf=Xf$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.4; W8DiffTop2026.pdf

## 关联

[dt-week-08](../notes/dt-week-08.md) · [dt-exterior-derivative](../notes/dt-exterior-derivative.md) · [dt-contraction-lie](../notes/dt-contraction-lie.md) · [dt-cartan-complex](../notes/dt-cartan-complex.md) · [dt-cartan-example](../notes/dt-cartan-example.md)


---

# Flow pullback 的导数等于 Lie derivative

ID: `dt-w8-5` · Week 8 · exercise

题目：对 $p$-形式证明 $\left.\frac d{dt}\right|_0F_t^*\omega=L_X\omega$。

步骤 1：固定 $m$，取坐标包含 $m$ 及小时间轨迹。对任意向量场 $Y$，由 flow 方程有
$$F_t^i(m)=m^i+tX^i(m)+O(t^2),\qquad (dF_t)_mY_m=Y^i(m)\partial_i|_{F_t(m)}+t\,\partial_jX^i(m)Y^j(m)\partial_i|_{F_t(m)}+O(t^2).$$
另一方面 $Y^i(F_t(m))=Y^i(m)+tX^j\partial_jY^i(m)+O(t^2)$。所以在该坐标平凡化中
$$\left.\frac d{dt}\right|_0\big((dF_t)_mY_m-Y_{F_t(m)}\big)=-[X,Y]_m.$$

步骤 2：定义标量函数 $g=\omega(Y_1,\ldots,Y_p)$。由拉回定义，
$$ (F_t^*\omega)_m(Y_1(m),\ldots,Y_p(m))=\omega_{F_t(m)}((dF_t)_mY_1(m),\ldots,(dF_t)_mY_p(m)).$$
把每个参数写成 $Y_j(F_t(m))$ 加上一阶差，利用多线性求导得
$$Xg(m)-\sum_j\omega_m(Y_1(m),\ldots,[X,Y_j]_m,\ldots,Y_p(m)),$$
即 $L_X\omega$ 的定义。两个或更多差因子的乘积是 $O(t^2)$，求一阶导数不贡献。

步骤 3：$m$ 任意，所以形式相等。局部 flow 只需在每个 $m$ 附近的小时间定义；不能假定不完备向量场的 $F_t$ 对所有时间全局存在。$p=0$ 时公式就是 $(f\circ F_t)'|_0=Xf$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.5; W8DiffTop2026.pdf

## 关联

[dt-week-08](../notes/dt-week-08.md) · [dt-exterior-derivative](../notes/dt-exterior-derivative.md) · [dt-contraction-lie](../notes/dt-contraction-lie.md) · [dt-cartan-complex](../notes/dt-cartan-complex.md) · [dt-cartan-example](../notes/dt-cartan-example.md)


---

# Cartan formula 的逐类消去证明

ID: `dt-w8-6` · Week 8 · exercise

题目：定义 contraction 并证明 $L_X=di_X+i_Xd$。

定义：对 $p\ge1$，$(i_X\omega)(Y_1,\ldots,Y_{p-1})=\omega(X,Y_1,\ldots,Y_{p-1})$；$p=0$ 时 $i_X=0$。它显然 $A$-多线性且交替，故值在 $\Omega^{p-1}$。原题右侧参数数目应为 $p-1$。

步骤 1：对 $p\ge1$，把 $d(i_X\omega)$ 应用于 $Y_1,\ldots,Y_p$：
$$\sum_j(-1)^{j-1}Y_j\omega(X,Y_1,\widehat Y_j,\ldots,Y_p)+\sum_{j<k}(-1)^{j+k}\omega(X,[Y_j,Y_k],Y_1,\widehat Y_j,\widehat Y_k,\ldots,Y_p).$$

步骤 2：$i_Xd\omega(Y_1,\ldots,Y_p)=d\omega(X,Y_1,\ldots,Y_p)$ 的展开分四类：
$$X\omega(Y_1,\ldots,Y_p),$$
$$\sum_j(-1)^jY_j\omega(X,Y_1,\widehat Y_j,\ldots,Y_p),$$
$$\sum_j(-1)^j\omega([X,Y_j],Y_1,\widehat Y_j,\ldots,Y_p),$$
$$\sum_{j<k}(-1)^{j+k}\omega([Y_j,Y_k],X,Y_1,\widehat Y_j,\widehat Y_k,\ldots,Y_p).$$

步骤 3：第二类与步骤 1 的第一和抵消。第四类把 $X$ 与前面的括号交换一次，出现负号，与步骤 1 的第二和抵消。第三类把 $[X,Y_j]$ 从首槽移到第 $j$ 槽，产生 $(-1)^{j-1}$，乘上原符号 $(-1)^j$ 得 $-1$。因此剩下
$$X\omega(Y_1,\ldots,Y_p)-\sum_j\omega(Y_1,\ldots,[X,Y_j],\ldots,Y_p)=L_X\omega.$$

步骤 4：$p=0$ 时右侧 $di_Xf+i_Xdf=0+df(X)=Xf=L_Xf$。负次数空间按零处理。所以各次数均成立。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 8, Problem 8.6; W8DiffTop2026.pdf

## 关联

[dt-week-08](../notes/dt-week-08.md) · [dt-exterior-derivative](../notes/dt-exterior-derivative.md) · [dt-contraction-lie](../notes/dt-contraction-lie.md) · [dt-cartan-complex](../notes/dt-cartan-complex.md) · [dt-cartan-example](../notes/dt-cartan-example.md)
