# CA-M007—CA-M010 · 本轮讨论的思维盲点与纠正

> 明确区分用户实际提出的探索问题与防错提醒；不会把已经正确的推理记录为错题。

## CA-M007 · 对 McCoy theorem 直接模任意 prime ideal（实际提出的证明路线）
- **原思路**：将 $fg=0$ 模去每个 prime ideal，使商环成为 integral domain，并尝试推出 $g$ 为常数。
- **问题**：商环只说明 $\bar f=0$ 或 $\bar g=0$，可能两个都为 $0$；即使对每个 prime 成立，也不会迫使原多项式 $g$ 次数为 $0$。
- **修正**：选最小 degree 的 annihilator，利用最高系数构造更小 degree 的非零 annihilator 并导出矛盾。
- **反例**：[CA-E003](../examples/CA-E003-nilpotent-quotient.md)；[证明](../problems/CA-Q003-mccoy-zero-divisors.md)。

## CA-M008 · 把“所有 prime ideals”误换为“存在一个”（预防性提醒）
- 判别 $c(f)=A$ 是 $\bar f\ne0$ 对**每一个** prime/maximal ideal 成立。
- 仅对单个 prime 下非零不够；参见 [CA-E002](../examples/CA-E002-one-prime-not-enough.md)。
- **注意**：你在本轮已经正确说出了全称量词，这条是复习提醒，不是你实际犯的错误。

## CA-M009 · 将 $c(fg)\subseteq c(f)c(g)$ 无条件写成等号（预防性提醒）
- 一般交换环中只有包含关系；$A=k[u,v]$、$f=u+vx$、$g=u-vx$ 给出真包含。
- 当 $f$ primitive 时，等号 $c(fg)=c(g)$ 成立，是额外定理。
- [CA-E004](../examples/CA-E004-content-strict-inclusion.md)；[CA-Q005](../problems/CA-Q005-primitive-content-preservation.md)。

## CA-M010 · Primitive 必有一个单位系数（预防性提醒）
- 定义是整个系数 ideal 为 $A$，等价于存在系数线性组合等于 $1$。
- 在 $\mathbb Z/6\mathbb Z$ 中，$f=2+3x$ primitive，但 $2,3$ 都不是 units。
- [CA-E001](../examples/CA-E001-z6-primitive.md)。

## 本轮已正确掌握的思路（非错题）
- $fg$ primitive $\implies f,g$ primitive：取 $c(f)$ 所在的 maximal ideal，归约后得到 $\bar f=0$，与 $\overline{fg}\ne0$ 矛盾。
- $f,g$ primitive $\implies fg$ primitive：在每个 maximal ideal quotient field 上利用 polynomial ring 是 integral domain。
- 把 maximal ideals 换为 **所有** prime ideals 同样成立，因为 prime quotient 已是 integral domain。
