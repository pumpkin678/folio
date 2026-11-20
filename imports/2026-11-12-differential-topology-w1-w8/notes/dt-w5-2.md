# S2 与 CP1 的显式微分同胚

ID: `dt-w5-2` · Week 5 · exercise

题目：构造两张对应图与双射 $S^2\cong\mathbb{CP}^1$，证明坐标表达光滑。

步骤 1：$\mathbb{CP}^1$ 的图 $V_0=\{[z_0:z_1]:z_0\ne0\}$，$w=z_1/z_0$；$V_1=\{z_1\ne0\}$，$\zeta=z_0/z_1$。过渡 $\zeta=1/w$。

步骤 2：球面上取 $U_0=S^2\setminus\{N\}$，坐标 $w=(x+iy)/(1-z)$；$U_1=S^2\setminus\{S\}$，坐标 $\zeta=(x-iy)/(1+z)$。在交叠上利用 $x^2+y^2=1-z^2$ 得 $w\zeta=1$。每张图是球极投影或其与复共轭的复合，均为 $\mathbb R^2$ 坐标图。

步骤 3：在 $U_0$ 定义 $F(p)=[1:w(p)]$，在 $U_1$ 定义 $F(p)=[\zeta(p):1]$，交叠因 $\zeta=1/w$ 一致。逆映射对 $[1:w]$ 为
$$\left(\frac{2\Re w}{1+|w|^2},\frac{2\Im w}{1+|w|^2},\frac{|w|^2-1}{1+|w|^2}\right),$$
并把 $[0:1]$ 送到 $N$；由上述图也知北极附近逆光滑。

步骤 4：对应图下 $F$ 及其逆均为恒等表达，因此双射是 diffeomorphism。若两张球极图都用 $x+iy$，过渡会是 $1/\bar w$；这里显式调整第二张图避免混淆。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.2; W5DiffTop2026.pdf

## 关联

[dt-week-05](dt-week-05.md) · [dt-vector-fields](dt-vector-fields.md) · [dt-fields-derivations](dt-fields-derivations.md) · [dt-lie-related](dt-lie-related.md) · [dt-bracket-example](dt-bracket-example.md)
