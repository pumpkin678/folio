---
track: "模与张量积"
study_date: "2026-11-17"
source_pack: "folio-am-ch2-modules-2026-11-17"
source_verified: false
source_note: "用户提供的 Folio_AM_Ch2_Modules_Exercises.zip；A–M Chapter 2 的题号、页码沿用原包，未独立核实。"
id: "alg.modules-nakayama-cokernel-theorem"
title: "Nakayama：模理想满射的提升"
english: "Nakayama and surjectivity via the cokernel"
summary: "对有限生成余核使用 Nakayama，把模 I 的满射提升为原映射满射；不要求定义域有限生成。"
source_document: "03_Nakayama_and_Cokernel.md"
tags: ["模", "Nakayama", "Jacobson-radical", "cokernel", "right-exactness"]
order: 34
source_label: "原包标注：A–M Chapter 2, Exercise 10, p. 32（未独立核实）"
type: "thm"
minutes: 6
related_questions: ["alg.modules-nakayama-cokernel"]
related: ["alg.modules-tensor-path", "CA-K002"]
requires: []
aliases: ["03", "Nakayama and surjectivity via the cokernel"]
---

:::statement
设 $A$ 为交换含幺环，$I\subseteq\operatorname{Jac}(A)$，$N$ 为有限生成 $A$-模，$M$ 为任意 $A$-模。若 $A$-线性映射 $u:M\to N$ 诱导的

$$\bar u:M/IM\longrightarrow N/IN$$

满射，则 $u$ 满射。无需假设 $M$ 有限生成。
:::

:::intuition
令 $C=\operatorname{coker}(u)=N/u(M)$。张量积的右正合性给出

$$M/IM\xrightarrow{\bar u}N/IN\longrightarrow C/IC\longrightarrow0.$$

于是 $C/IC=0$。$C$ 作为 $N$ 的商模有限生成，由 Nakayama 引理，$C=IC$ 推出 $C=0$。Jacobson 根基条件保证 $1-a$ 对每个 $a\in I$ 可逆；有限生成条件用在余核上。
:::

:::remark
[完整证明、易错点与复习检查](ref:alg.modules-nakayama-cokernel)。
:::
