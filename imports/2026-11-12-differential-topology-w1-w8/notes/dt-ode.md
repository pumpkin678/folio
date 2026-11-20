# 流形上的局部 ODE 定理

ID: `dt-ode` · Week 6 · theorem

对光滑 $X$ 和 $p\in M$，存在 $U\ni p$、$\varepsilon>0$、光滑 $F:(-\varepsilon,\varepsilon)\times U\to M$，满足 $F(0,q)=q$、$\partial_tF(t,q)=X(F(t,q))$，且积分曲线局部唯一。这是对一整个初值邻域的统一时间与光滑依赖，不只是一个初值的存在性。

推导：图中写 $X=\sum a^i(x)\partial_i$，求解欧氏方程 $x'=a(x)$，其右端光滑故局部 Lipschitz，应用欧氏局部存在唯一和光滑依赖定理，再用逆坐标图搬回。重叠图上解由唯一性一致。所有局部解粘成最大积分曲线；紧流形上通过有限子覆盖得到统一短时间，进而 complete，完整证明见 6.4。

## 来源

- 为 Week 6 roadmap 编写的配套知识卡；原课程文件 W6DiffTop2026(1).pdf；补充内容在正文标识

## 关联

[dt-week-06](dt-week-06.md) · [dt-w6-1](dt-w6-1.md) · [dt-w6-2](dt-w6-2.md) · [dt-w6-3](dt-w6-3.md) · [dt-w6-4](dt-w6-4.md) · [dt-w6-5](dt-w6-5.md) · [dt-w6-6](dt-w6-6.md) · [dt-w6-7](dt-w6-7.md)
