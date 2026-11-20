# Week 2 · 图册、射影空间与光滑结构

能写出完整 chart 五要素；区分相容与微分同胚；构造 RPn、CPn 图。

# Chart、atlas 与 smooth map

ID: `dt-atlas` · Week 2 · definition

在已给拓扑的 $X$ 上，$n$ 维 chart 为 $(U,\varphi)$，其中 $U$ 开、$\varphi:U\to V\subset\mathbb R^n$ 为同胚，$V$ 开。Atlas 是覆盖 $X$ 的图族，各过渡 $\psi\circ\varphi^{-1}$ 在其开交叠域上光滑（把两图交换也要求，故逆光滑）。

Smooth manifold 是 Hausdorff、第二可数的空间加这样的 atlas（或其 maximal atlas）。映射 $f:M\to N$ 光滑指在每点附近的源图和目标图中，坐标表达 $\psi\circ f\circ\varphi^{-1}$ 光滑。Diffeomorphism 是光滑双射且逆光滑。

若只有集合没有拓扑，可先给满足开交叠、光滑可逆过渡的双射图，再按 2.2 生成拓扑；此步骤**不自动保证 Hausdorff 或第二可数**，必须另查。

## 来源

- 为 Week 2 roadmap 编写的配套知识卡；原课程文件 W2DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-w2-0](../notes/dt-w2-0.md) · [dt-w2-2](../notes/dt-w2-2.md) · [dt-w2-3](../notes/dt-w2-3.md) · [dt-w2-4](../notes/dt-w2-4.md) · [dt-w2-5](../notes/dt-w2-5.md) · [dt-w2-6](../notes/dt-w2-6.md) · [dt-w2-8](../notes/dt-w2-8.md) · [dt-w2-10](../notes/dt-w2-10.md) · [dt-w2-11](../notes/dt-w2-11.md)


---

# Compatibility、equivalence、maximal atlas

ID: `dt-compatibility` · Week 2 · definition

两张图 compatible：交叠过渡及逆都光滑。两个 atlas compatible/equivalent：并集为 atlas，等价于同一底层空间上的 identity 是 diffeomorphism。Maximal atlas 是按包含极大的 atlas，也就是所有与给定 atlas 相容的图。

相同光滑结构是同一个 maximal atlas；微分同胚类则允许非 identity 的双射。二者不是同一个概念。Week 2 原文只要求单向 identity 光滑，不能定义对称的等价关系，见 2.10–2.11 的反例。

## 来源

- 为 Week 2 roadmap 编写的配套知识卡；原课程文件 W2DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-w2-0](../notes/dt-w2-0.md) · [dt-w2-2](../notes/dt-w2-2.md) · [dt-w2-3](../notes/dt-w2-3.md) · [dt-w2-4](../notes/dt-w2-4.md) · [dt-w2-5](../notes/dt-w2-5.md) · [dt-w2-6](../notes/dt-w2-6.md) · [dt-w2-8](../notes/dt-w2-8.md) · [dt-w2-10](../notes/dt-w2-10.md) · [dt-w2-11](../notes/dt-w2-11.md)


---

# Atlas 诱导唯一拓扑

ID: `dt-atlas-topology` · Week 2 · theorem

若集合上的图族覆盖，各交叠在坐标中开且过渡同胚，则存在唯一使各图域开、各图为同胚的拓扑：$O$ 开当且仅当每个 $\varphi_a(O\cap U_a)$ 开。存在性见 2.2；唯一性来自在任何满足条件的拓扑中，$O$ 开当且仅当它与开覆盖中每个图域的交开。

## 来源

- 为 Week 2 roadmap 编写的配套知识卡；原课程文件 W2DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-w2-0](../notes/dt-w2-0.md) · [dt-w2-2](../notes/dt-w2-2.md) · [dt-w2-3](../notes/dt-w2-3.md) · [dt-w2-4](../notes/dt-w2-4.md) · [dt-w2-5](../notes/dt-w2-5.md) · [dt-w2-6](../notes/dt-w2-6.md) · [dt-w2-8](../notes/dt-w2-8.md) · [dt-w2-10](../notes/dt-w2-10.md) · [dt-w2-11](../notes/dt-w2-11.md)


---

# x 与 x³ 图册

ID: `dt-exotic-coordinate` · Week 2 · example

$A=\{\mathrm{id}\}$、$B=\{x\mapsto x^3\}$ 在同一实线上不相容，原因是反向过渡 $x^{1/3}$ 零点不可微。但 $F(x)=x^{1/3}:(\mathbb R,A)\to(\mathbb R,B)$ 的坐标表达是 identity，给出微分同胚。此例区分“同一光滑结构”和“微分同胚”。见 2.8、2.10、2.11。

## 来源

- 为 Week 2 roadmap 编写的配套知识卡；原课程文件 W2DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-w2-0](../notes/dt-w2-0.md) · [dt-w2-2](../notes/dt-w2-2.md) · [dt-w2-3](../notes/dt-w2-3.md) · [dt-w2-4](../notes/dt-w2-4.md) · [dt-w2-5](../notes/dt-w2-5.md) · [dt-w2-6](../notes/dt-w2-6.md) · [dt-w2-8](../notes/dt-w2-8.md) · [dt-w2-10](../notes/dt-w2-10.md) · [dt-w2-11](../notes/dt-w2-11.md)


---

# 射影坐标的计算模板

ID: `dt-projective` · Week 2 · example

$\mathbb{RP}^n$ 是非零实向量按非零缩放的商，$\mathbb{CP}^n$ 是对应复商。图 $U_i=\{[x]:x_i\ne0\}$ 的坐标是其余分量除以 $x_i$；逆操作是第 $i$ 位插入 1 后取 span。

例如 $\mathbb{RP}^2$ 中 $i=0$ 图坐标 $(u,v)=(x_1/x_0,x_2/x_0)$，换到 $i=1$ 图为 $(1/u,v/u)$，要求 $u\ne0$。每次写图都应注明：图域、坐标像、逆映射、交叠域、过渡公式。

## 来源

- 为 Week 2 roadmap 编写的配套知识卡；原课程文件 W2DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-w2-0](../notes/dt-w2-0.md) · [dt-w2-2](../notes/dt-w2-2.md) · [dt-w2-3](../notes/dt-w2-3.md) · [dt-w2-4](../notes/dt-w2-4.md) · [dt-w2-5](../notes/dt-w2-5.md) · [dt-w2-6](../notes/dt-w2-6.md) · [dt-w2-8](../notes/dt-w2-8.md) · [dt-w2-10](../notes/dt-w2-10.md) · [dt-w2-11](../notes/dt-w2-11.md)


---

# 双原点直线

ID: `dt-w2-0` · Week 2 · exercise

题目：构造连通、第二可数、局部欧氏但非 Hausdorff 空间。

步骤 1：在 $\mathbb R\times\{a,b\}$ 中把 $(t,a)\sim(t,b)$ 当 $t\ne0$，而两个原点不识别，赋予商拓扑。记商映射 $q$，两个原点为 $0_a,0_b$。

步骤 2：$U_a=X\setminus\{0_b\}$ 和 $U_b=X\setminus\{0_a\}$ 开。把每个点送到其实坐标给出 $U_a,U_b\cong\mathbb R$：对直线上开集，其在商前像中是该支开集和另一支去掉原点的同一开集，因此像开。故这两张图确实为同胚。

步骤 3：每个 $U_a,U_b$ 连通且交集非空，所以它们的并 $X$ 连通。两张图中有理端点区间的像之并给出可数基。

步骤 4：任意 $0_a,0_b$ 的邻域都含充分小的非零实数的像，因此相交，不能分离，故非 Hausdorff。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.0; W2DiffTop2026.pdf

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-atlas](../notes/dt-atlas.md) · [dt-compatibility](../notes/dt-compatibility.md) · [dt-atlas-topology](../notes/dt-atlas-topology.md) · [dt-exotic-coordinate](../notes/dt-exotic-coordinate.md) · [dt-projective](../notes/dt-projective.md)


---

# Atlas 生成拓扑

ID: `dt-w2-2` · Week 2 · exercise

题目：由集合上的 atlas 构造使图域开、坐标图为同胚的拓扑。

步骤 1：定义 $O\subset X$ 为开，当且仅当每个 $a$ 都有 $\varphi_a(O\cap U_a)$ 在 $V_a$ 中开。原像与并、交的相容性立即给出空集、全体、任意并及有限交公理。

步骤 2：对每个 $a$，$\varphi_b(U_a\cap U_b)$ 开是 atlas 假设，所以 $U_a$ 开。

步骤 3：若 $W\subset V_a$ 开，令 $O=\varphi_a^{-1}(W)$。在 $b$ 图中，其像是过渡同胚将 $W\cap\varphi_a(U_a\cap U_b)$ 映出的开集，故 $O$ 在 $X$ 中开。这证明 $\varphi_a$ 连续。

步骤 4：若 $O\subset U_a$ 在子空间中开，由 $U_a$ 开知 $O$ 在 $X$ 中也开，定义给出 $\varphi_a(O)$ 开，故逆映射连续。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.2; W2DiffTop2026.pdf

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-atlas](../notes/dt-atlas.md) · [dt-compatibility](../notes/dt-compatibility.md) · [dt-atlas-topology](../notes/dt-atlas-topology.md) · [dt-exotic-coordinate](../notes/dt-exotic-coordinate.md) · [dt-projective](../notes/dt-projective.md)


---

# 平面中全部仿射直线的 atlas

ID: `dt-w2-3` · Week 2 · exercise

题目：给平面中直线的集合构造二维 atlas。

步骤 1：$U$ 为非竖直线，唯一写作 $y=mx+b$，取坐标 $(m,b)$。$V$ 为非水平线，唯一写作 $x=ny+c$，取坐标 $(n,c)$。任意直线至少属于其中一个图，两个坐标像均为 $\mathbb R^2$。

步骤 2：在交集上 $m\ne0$，由 $y=mx+b$ 得 $x=m^{-1}y-b/m$，所以过渡为 $(m,b)\mapsto(1/m,-b/m)$，定义域 $\{m\ne0\}$ 开。

步骤 3：反向公式 $(n,c)\mapsto(1/n,-c/n)$ 在 $n\ne0$ 上光滑，因而是二维 atlas。这里是所有仿射直线，不能误用过原点直线的 $\mathbb{RP}^1$。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.3; W2DiffTop2026.pdf

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-atlas](../notes/dt-atlas.md) · [dt-compatibility](../notes/dt-compatibility.md) · [dt-atlas-topology](../notes/dt-atlas-topology.md) · [dt-exotic-coordinate](../notes/dt-exotic-coordinate.md) · [dt-projective](../notes/dt-projective.md)


---

# 圆周商 R/Z 的 atlas

ID: `dt-w2-4` · Week 2 · exercise

题目：在集合 $\mathbb R/\mathbb Z$ 上构造一维 atlas。

解答：设 $q:\mathbb R\to\mathbb R/\mathbb Z$。对每个 $a\in\mathbb R$ 取 $I_a=(a-1/3,a+1/3)$，其长度小于 1，故 $q|_{I_a}$ 单射。令 $U_a=q(I_a)$，$\varphi_a=(q|_{I_a})^{-1}:U_a\to I_a$。图域覆盖。交叠在 $a$ 坐标中为 $\bigcup_{k\in\mathbb Z}(I_a\cap(I_b+k))$，是开集；在每个这样的区间，过渡是 $t\mapsto t-k$，其中 $k$ 唯一。故过渡局部为平移，光滑且逆光滑。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.4; W2DiffTop2026.pdf

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-atlas](../notes/dt-atlas.md) · [dt-compatibility](../notes/dt-compatibility.md) · [dt-atlas-topology](../notes/dt-atlas-topology.md) · [dt-exotic-coordinate](../notes/dt-exotic-coordinate.md) · [dt-projective](../notes/dt-projective.md)


---

# 实射影空间的 atlas

ID: `dt-w2-5` · Week 2 · exercise

题目：为 $\mathbb R^{n+1}$ 中过原点的直线集合构造 $n$ 维 atlas。

解答：令 $U_i$ 为第 $i$ 坐标非零的直线。对非零代表 $x$ 定义 $\varphi_i([x])=(x_j/x_i)_{j\ne i}$。缩放不改变比值，所以良定义；逆映射把 $u\in\mathbb R^n$ 送到第 $i$ 坐标为 1、其余为 $u$ 的向量所张成的直线，因此是双射。图域覆盖。在 $i$ 图里写 $u_i=1$，与 $j$ 图的交集是 $u_j\ne0$，过渡的第 $\ell\ne j$ 个分量为 $u_\ell/u_j$。它们及其反向公式均为分母不为零的有理函数，所以光滑。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.5; W2DiffTop2026.pdf

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-atlas](../notes/dt-atlas.md) · [dt-compatibility](../notes/dt-compatibility.md) · [dt-atlas-topology](../notes/dt-atlas-topology.md) · [dt-exotic-coordinate](../notes/dt-exotic-coordinate.md) · [dt-projective](../notes/dt-projective.md)


---

# 复射影空间的实 atlas

ID: `dt-w2-6` · Week 2 · exercise

题目：为 $\mathbb C^{n+1}$ 的复直线集合构造 $2n$ 维实 atlas。

解答：同 2.5，$U_i=\{[z]:z_i\ne0\}$，$\varphi_i([z])=(z_j/z_i)_{j\ne i}\in\mathbb C^n\cong\mathbb R^{2n}$，逆映射把归一化向量送到其复线。交集由复坐标 $u_j\ne0$ 定义，是实开集。复除法 $a/b=a\bar b/|b|^2$ 在 $b\ne0$ 时是实坐标的光滑函数，因此所有过渡和逆过渡实光滑。这已证明实 $2n$ 维 atlas，不需要引用复流形理论。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.6; W2DiffTop2026.pdf

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-atlas](../notes/dt-atlas.md) · [dt-compatibility](../notes/dt-compatibility.md) · [dt-atlas-topology](../notes/dt-atlas-topology.md) · [dt-exotic-coordinate](../notes/dt-exotic-coordinate.md) · [dt-projective](../notes/dt-projective.md)


---

# 不相容图册仍可微分同胚

ID: `dt-w2-8` · Week 2 · exercise

题目：$\mathbb R$ 上图册 $A=\{\mathrm{id}\}$ 与 $B=\{\varphi(x)=x^3\}$ 所得流形微分同胚。

解答：定义底层映射 $F(x)=\sqrt[3]{x}$，它是双射。其从 $A$ 到 $B$ 的坐标表达为 $\varphi\circ F\circ\mathrm{id}^{-1}(u)=u$，光滑。逆映射的坐标表达为 $\mathrm{id}\circ F^{-1}\circ\varphi^{-1}(v)=v$，也光滑。故 $F$ 是所求 diffeomorphism。不能用底层函数在标准坐标中是否光滑来替代两端实际图册中的判断。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.8; W2DiffTop2026.pdf

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-atlas](../notes/dt-atlas.md) · [dt-compatibility](../notes/dt-compatibility.md) · [dt-atlas-topology](../notes/dt-atlas-topology.md) · [dt-exotic-coordinate](../notes/dt-exotic-coordinate.md) · [dt-projective](../notes/dt-projective.md)


---

# 图册等价定义的单向性错误

ID: `dt-w2-10` · Week 2 · exercise

题目：原题 Definition 2.9 仅要求 $\mathrm{id}:(X,A)\to(X,B)$ 光滑，却声称这等价于 $A\cup B$ 为 atlas。

原文按字面是错误命题。反例：取 2.8 的 $A,B$。$\mathrm{id}:(X,A)\to(X,B)$ 的坐标表达是 $u\mapsto u^3$，确实光滑；但反向过渡 $u\mapsto\sqrt[3]u$ 在零点不可微，所以并集不是 atlas。不能写出原命题的正确证明。

修正版：定义 $A,B$ 等价为恒等映射是 diffeomorphism（两个方向光滑）。证明：若两个方向光滑，则每个跨图册过渡 $\psi\circ\varphi^{-1}$ 及其逆光滑，图册内部过渡原已光滑，所以 $A\cup B$ 为 atlas。反过来，并集是 atlas 就保证每个跨图册过渡及逆过渡光滑，正是两个恒等映射光滑的坐标判据。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.10; W2DiffTop2026.pdf

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-atlas](../notes/dt-atlas.md) · [dt-compatibility](../notes/dt-compatibility.md) · [dt-atlas-topology](../notes/dt-atlas-topology.md) · [dt-exotic-coordinate](../notes/dt-exotic-coordinate.md) · [dt-projective](../notes/dt-projective.md)


---

# 两种意义下判断图册等价

ID: `dt-w2-11` · Week 2 · exercise

题目：证明 2.8 中图册不等价。

按修正后的标准定义：两图册的过渡之一为 $t^{1/3}$；其零点差商 $t^{1/3}/t=|t|^{-2/3}$ 无有限极限，故非光滑，图册不相容，因而不等价。

按原 Definition 2.9 的单向定义：$\mathrm{id}:(\mathbb R,A)\to(\mathbb R,B)$ 是光滑的，故题目结论不成立。这与 2.10 是同一处定义缺失，必须一并勘误。相同底层集合上的相同光滑结构要求 identity 为 diffeomorphism；仅存在某个 diffeomorphism 是更弱的分类意义。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 2, Problem 2.11; W2DiffTop2026.pdf

## 关联

[dt-week-02](../notes/dt-week-02.md) · [dt-atlas](../notes/dt-atlas.md) · [dt-compatibility](../notes/dt-compatibility.md) · [dt-atlas-topology](../notes/dt-atlas-topology.md) · [dt-exotic-coordinate](../notes/dt-exotic-coordinate.md) · [dt-projective](../notes/dt-projective.md)
