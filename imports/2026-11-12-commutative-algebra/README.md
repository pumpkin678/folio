# Folio 交换代数知识包：2026-11-12

## 下载解压后先看
- `all-in-one.md`：一次阅读本轮全部定义、题目、解答、例子和复盘（KaTeX/MathJax 公式）。
- `delta-site-data.json`：**增量包，推荐导入入口**；适用既有 `schema_version: 1`、`CA-Q001...` 编号的 Folio。
- `site-data.json`：基于此前已有 `site-data.json` 合并出来的**完整快照**（Q001/Q002/K001/K002 + 新卡）。仅当你确认站点内容尚未变化时，才可作为完整替换参考；**不要无条件覆盖当前在线数据**。
- `problems/`, `concepts/`, `examples/`, `mistakes/`：逐卡 Markdown 文件，可直接编辑并做 Git diff。
- `notes/CA-*.md` + `.json`：新版 Folio Knowledge Pack 的内容/索引分离表示；JSON 记录 ID、链接与来源。
- `subject.json`：现有“交换代数” subject 的知识包入口。
- `manifest.json`、`changes.json`：文件哈希、变更类型和冲突策略。

## 导入规则（重要）
1. 将 `delta-site-data.json` 中 `questions`、`concepts`、`examples`、`mistake_addenda` **按 `id` merge/upsert** 到当前数据，不要把这些增量数组当完整数据库直接替换。
2. **保留原学习记录**：做题状态、完成日期、个人证明、复习次数、错题历史等应独立于知识卡保留，不应被当前包覆盖。导入程序如遇同 ID 但内容不一致，应人工确认，不能静默覆盖。
3. 所有新增编号均未与之前的 `CA-Q001/Q002`、`CA-K001/K002` 冲突。
4. 若你的 Folio 页面尚无 JSON/ZIP 导入器，可以先复制 Markdown 到对应目录，更新站点索引后重新构建；ZIP **不会自动修改 Sites 云端**。
5. 所有题面都是本次对话给定的题目；虽然属 Atiyah–Macdonald Chapter 1 相关主题，**原书精确 Exercise 编号未核对**，`source_verified=false`。不要自动显示为“已核实出自某个 Exercise”。

## 增量操作伪代码

```js
for (const section of ['questions', 'concepts', 'examples', 'mistake_addenda']) {
  const oldItems = siteData[section] ?? [];
  const byId = new Map(oldItems.map(item => [item.id, item]));
  for (const item of delta[section] ?? []) {
    // 若冲突、用户修改过同 ID 卡片，请先做 diff 并确认。
    byId.set(item.id, { ...byId.get(item.id), ...item });
  }
  siteData[section] = [...byId.values()];
}
// userProgress 独立保留；不用 delta 中的 status 覆盖练习进度
```

## 修订说明
- 本次内容含两个主练习（CA-Q003 / Q004）和一个加强练习（Q005）。
- 专门加入了你提出的 prime ideal 推导 McCoy 的思路，以及为什么它并不充分。
- 记录了你正确完成的 primitive product 和 prime/maximal 等价思路；没有将正确论证标成错题。
- 修正了上一轮示例不足以反驳 $c(fg)=c(f)c(g)$ 的问题：以 $k[u,v]$ 中 $f=u+vx$、$g=u-vx$ 给出真实真包含反例。
