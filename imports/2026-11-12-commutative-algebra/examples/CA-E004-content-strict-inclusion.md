# CA-E004 · $c(fg)\subsetneq c(f)c(g)$ 的反例

取 field $k$，令 $A=k[u,v]$，且 $x$ 是另一个 indeterminate。设

$$f=u+vx,\quad g=u-vx.$$

于是

$$c(f)=c(g)=(u,v),\quad c(f)c(g)=(u^2,uv,v^2).$$

但

$$fg=u^2-v^2x^2,\quad c(fg)=(u^2,v^2).$$

因为 $uv\notin(u^2,v^2)$（它的单项式同时不被 $u^2$ 或 $v^2$ 整除），所以

$$\boxed{c(fg)\subsetneq c(f)c(g).}$$

**说明：**此前讨论中的 $(\mathbb Z/4\mathbb Z)[x]$ 例子 $f=2+x$、$g=2-x$ 的确有 $c(fg)=c(f)c(g)=A$，**不是严格包含的反例**；这里给出正确反例。
