---
id: CA-M-ADD-20261112
title: Content 与 primitive 讨论：易错点补充
english: Content and primitive polynomial review
summary: 汇总一条实际探索路线与三条预防性提醒，保留本轮已正确完成的 primitive 乘积证明思路。
track: 交换代数
study_date: 2026-11-12
source_note: 本次讨论题面与笔记（2026-11-12）；Atiyah–Macdonald Chapter 1 相关主题，原书精确习题编号未独立核对。
source_verified: false
tags:
  - 交换代数
  - 复盘
level: 专题复盘
order: 1
minutes: 20
purpose: review
---

:::goal
按原包区分实际提出的探索路线和预防性提醒；本轮已经正确的 primitive 乘积证明不记作错题。
:::

::mistake{id="CA-M007"}

::mistake{id="CA-M008"}

::mistake{id="CA-M009"}

::mistake{id="CA-M010"}

## 本轮已正确掌握的思路（非错题）

- $fg$ primitive $\implies f,g$ primitive：取 $c(f)$ 所在的 maximal ideal，归约后得到 $\bar f=0$，与 $\overline{fg}\ne0$ 矛盾。
- $f,g$ primitive $\implies fg$ primitive：在每个 maximal ideal quotient field 上利用 polynomial ring 是 integral domain。
- 把 maximal ideals 换为 **所有** prime ideals 同样成立，因为 prime quotient 已是 integral domain。

返回 [11 月 12 日交换代数题组](ref:ca.daily-2026-11-12)。
