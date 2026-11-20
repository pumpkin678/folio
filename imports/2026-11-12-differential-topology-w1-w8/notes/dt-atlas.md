# Chart、atlas 与 smooth map

ID: `dt-atlas` · Week 2 · definition

在已给拓扑的 $X$ 上，$n$ 维 chart 为 $(U,\varphi)$，其中 $U$ 开、$\varphi:U\to V\subset\mathbb R^n$ 为同胚，$V$ 开。Atlas 是覆盖 $X$ 的图族，各过渡 $\psi\circ\varphi^{-1}$ 在其开交叠域上光滑（把两图交换也要求，故逆光滑）。

Smooth manifold 是 Hausdorff、第二可数的空间加这样的 atlas（或其 maximal atlas）。映射 $f:M\to N$ 光滑指在每点附近的源图和目标图中，坐标表达 $\psi\circ f\circ\varphi^{-1}$ 光滑。Diffeomorphism 是光滑双射且逆光滑。

若只有集合没有拓扑，可先给满足开交叠、光滑可逆过渡的双射图，再按 2.2 生成拓扑；此步骤**不自动保证 Hausdorff 或第二可数**，必须另查。

## 来源

- 为 Week 2 roadmap 编写的配套知识卡；原课程文件 W2DiffTop2026.pdf；补充内容在正文标识

## 关联

[dt-week-02](dt-week-02.md) · [dt-w2-0](dt-w2-0.md) · [dt-w2-2](dt-w2-2.md) · [dt-w2-3](dt-w2-3.md) · [dt-w2-4](dt-w2-4.md) · [dt-w2-5](dt-w2-5.md) · [dt-w2-6](dt-w2-6.md) · [dt-w2-8](dt-w2-8.md) · [dt-w2-10](dt-w2-10.md) · [dt-w2-11](dt-w2-11.md)
