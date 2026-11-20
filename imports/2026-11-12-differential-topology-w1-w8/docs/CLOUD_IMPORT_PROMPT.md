# 可复制给云端 Folio 开发会话

请用本 ZIP 重构现有 Folio 的“微分拓扑”subject：

1. 先检查实际项目的 subject ID、知识数据格式、用户进度存储和 Markdown 数学渲染方式。
2. 以 subject.json / roadmap.json 的 Week 1–8 为主导航，active_node_ids 决定展示范围；每周按 definitions → theorems → examples → exercises 组织。
3. 采用 notes 的 MD+JSON 或 site-data.json 的完整正文，保留全部严格解答、原题来源和勘误。已有 v1 仓库可运行 tools/install_subject.py。
4. 只更新微分拓扑导航与知识内容；保留其他 subjects、用户笔记、错题和完成状态。旧微分拓扑内容保留在 legacy 入口；旧到新进度 ID 必须有已核实映射。
5. 使用现有数学渲染器正确渲染行内/块级 LaTeX；把节点链接转换为站内知识详情跳转。
6. 不把包内 public/folio/index.json 直接覆盖全站总索引，应合并并重建全量索引。
7. 完成后检查八周顺序、62 个习题条目、34 张卡片、104 个总节点，验证原题 2.10、4.2、8.3 的勘误/解答以及跨卡链接。
8. 提供更新后的本地源码或 Git 提交，使本地与云端使用同一内容版本。实际部署遵循当前项目已有发布流程。
