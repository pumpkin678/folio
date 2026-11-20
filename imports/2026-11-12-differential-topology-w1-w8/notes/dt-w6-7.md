# Coordinate vector fields commute

ID: `dt-w6-7` · Week 6 · exercise

题目：证明 $[\partial_{x^a},\partial_{x^b}]=0$。

解答：对任意局部光滑 $f$，
$$[\partial_{x^a},\partial_{x^b}]f=\partial_a\partial_b(f\circ\varphi^{-1})-\partial_b\partial_a(f\circ\varphi^{-1})=0,$$
最后由光滑函数二阶混合偏导可交换。导子由其对所有函数的作用确定，因此括号为零。结论在图域 $U$ 上成立，不声称单张图的坐标向量场都能按该公式全局定义。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 6, Problem 6.7; W6DiffTop2026(1).pdf

## 关联

[dt-week-06](dt-week-06.md) · [dt-curves-flow](dt-curves-flow.md) · [dt-ode](dt-ode.md) · [dt-incomplete](dt-incomplete.md)
