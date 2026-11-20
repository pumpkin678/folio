# f-related 向量场的括号

ID: `dt-w5-6` · Week 5 · exercise

题目：$X_i$ 与 $Y_i$ 分别 $f$-related，证明其 Lie brackets 也相关。

步骤 1：相关性等价于对任意 $h\in C^\infty(N)$，$X_i(h\circ f)=(Y_i h)\circ f$。这是 $df_p(X_i(p))=Y_i(f(p))$ 在函数上的作用。

步骤 2：两次应用得到
$$[X_0,X_1](h\circ f)=X_0((Y_1h)\circ f)-X_1((Y_0h)\circ f)=([Y_0,Y_1]h)\circ f.$$
函数上的相等确定切向量，故结论成立。

## 来源

- Yohsuke Imagi, Differential Topology, Autumn 2026, Week 5, Problem 5.6; W5DiffTop2026.pdf

## 关联

[dt-week-05](dt-week-05.md) · [dt-vector-fields](dt-vector-fields.md) · [dt-fields-derivations](dt-fields-derivations.md) · [dt-lie-related](dt-lie-related.md) · [dt-bracket-example](dt-bracket-example.md)
