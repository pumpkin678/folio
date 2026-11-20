/** Folio v1 adapter. Pure selection: never changes progress or deletes legacy nodes. */
export function selectSubject(index, subject) {
  const byId = new Map(index.nodes.map(n => [n.id,n]));
  const ids = new Set(subject.active_node_ids);
  const missing = [...ids].filter(id => !byId.has(id));
  if (missing.length) throw new Error(`Missing subject nodes: ${missing.join(', ')}`);
  return {
    ...subject,
    nodes: [...ids].map(id => byId.get(id)),
    weeks: subject.roadmap.map(week => ({
      ...week,
      definitions: week.definition_ids.map(id => byId.get(id)),
      theorems: week.theorem_ids.map(id => byId.get(id)),
      examples: week.example_ids.map(id => byId.get(id)),
      exercises: week.exercise_ids.map(id => byId.get(id)),
    })),
  };
}

/** For existing MD+JSON question-card consumers; retain all other tracks. */
export function mergeSiteData(existing, incoming) {
  if (incoming.track !== '微分拓扑') throw new Error('Unexpected track');
  const merge = (old = [], fresh = []) => {
    const m = new Map(old.map(item => [item.id,item]));
    for (const item of fresh) {
      const previous = m.get(item.id);
      if (previous && previous.track && previous.track !== incoming.track)
        throw new Error(`Cross-track ID conflict: ${item.id}`);
      // Preserve existing status fields; incoming pack intentionally has none.
      m.set(item.id, {...previous,...item});
    }
    return [...m.values()];
  };
  const subjects = {...(existing.subjects || {}), [incoming.subject.id]: incoming.subject};
  return {...existing, subjects,
    questions: merge(existing.questions, incoming.questions),
    concepts: merge(existing.concepts, incoming.concepts)};
}
