#!/usr/bin/env python3
"""Folio Knowledge Pack v1: stdlib-only validation, diff, safe content merge, index build.

Designed for a checked-out Git repository. Do not expose this CLI as an unauthenticated API.
"""
import argparse
import hashlib
import json
import os
import re
import tempfile
from pathlib import Path

NODE_ID = re.compile(r"^[a-z][a-z0-9]*(?:-[a-z0-9]+)+$")
PACK_ID = re.compile(r"^[A-Za-z0-9._-]{4,100}$")
KINDS = {"definition", "theorem", "example", "exercise", "solution", "counterexample", "note"}
SUBJECT = re.compile(r"^[a-z][a-z0-9-]*$")

class PackError(Exception):
    pass


def data_bytes(path):
    return Path(path).read_bytes()


def digest(raw):
    return "sha256:" + hashlib.sha256(raw).hexdigest()


def json_from(path):
    try:
        return json.loads(Path(path).read_text(encoding="utf-8"))
    except (OSError, ValueError) as exc:
        raise PackError(f"Cannot load JSON {path}: {exc}") from exc


def safe_path(root, rel):
    if not isinstance(rel, str) or rel.startswith("/") or "\\" in rel:
        raise PackError(f"Invalid pack path: {rel!r}")
    path = (root / rel).resolve()
    if not path.is_relative_to(root.resolve()) or not path.is_file():
        raise PackError(f"Pack file missing or unsafe: {rel}")
    return path


def valid_id(value, what="id"):
    if not isinstance(value, str) or not NODE_ID.fullmatch(value):
        raise PackError(f"Invalid {what}: {value!r}")


def load_pack(pack):
    pack = Path(pack).resolve()
    manifest = json_from(safe_path(pack, "manifest.json"))
    if manifest.get("format") != "folio-knowledge-pack" or manifest.get("schema_version") != "1.0":
        raise PackError("Unsupported format/schema_version")
    if not PACK_ID.fullmatch(str(manifest.get("pack_id", ""))):
        raise PackError("Invalid pack_id")
    changes = json_from(safe_path(pack, "changes.json"))
    ops = changes.get("operations")
    if not isinstance(ops, list) or not ops:
        raise PackError("changes.json must contain a non-empty operations array")
    seen = set()
    checked = []
    for op in ops:
        if not isinstance(op, dict) or op.get("op") != "upsert":
            raise PackError("Only upsert is supported in v1 (deletion requires a reviewed tombstone)")
        node_id = op.get("id")
        valid_id(node_id)
        if node_id in seen:
            raise PackError(f"Duplicate operation on {node_id}")
        seen.add(node_id)
        raw = data_bytes(safe_path(pack, op.get("content_file")))
        if digest(raw) != op.get("content_sha256"):
            raise PackError(f"Content digest does not match for {node_id}")
        meta = json_from(safe_path(pack, op.get("metadata_file")))
        if meta.get("id") != node_id or meta.get("kind") not in KINDS:
            raise PackError(f"Bad id or kind for {node_id}")
        if not isinstance(meta.get("title"), str) or not meta["title"].strip():
            raise PackError(f"Missing title for {node_id}")
        if not isinstance(meta.get("subject"), str) or not SUBJECT.fullmatch(meta["subject"]):
            raise PackError(f"Bad subject for {node_id}")
        links = meta.get("links", [])
        if not isinstance(links, list):
            raise PackError(f"Links must be array for {node_id}")
        for link in links:
            valid_id(link, "linked node ID")
        if not isinstance(meta.get("sources", []), list):
            raise PackError(f"sources must be an array for {node_id}")
        expected = op.get("expected_content_sha256")
        if expected is not None and (not isinstance(expected, str) or not re.fullmatch(r"sha256:[0-9a-f]{64}", expected)):
            raise PackError(f"Bad expected_content_sha256 for {node_id}")
        checked.append((node_id, raw, meta, expected))
    return manifest, checked


def target(repo, node_id, suffix):
    return repo / "knowledge" / f"{node_id}.{suffix}"


def state(repo, checked):
    ids = {node_id for node_id, *_ in checked}
    known = {p.stem for p in (repo / "knowledge").glob("*.json")} if (repo / "knowledge").exists() else set()
    for node_id, _, meta, _ in checked:
        dangling = set(meta.get("links", [])) - ids - known
        if dangling:
            raise PackError(f"Unresolved knowledge links in {node_id}: {sorted(dangling)}")
    changes, conflicts = [], []
    for node_id, raw, meta, expected in checked:
        md = target(repo, node_id, "md")
        meta_target = target(repo, node_id, "json")
        current = digest(md.read_bytes()) if md.exists() else None
        previous_meta = json_from(meta_target) if meta_target.exists() else None
        if md.exists() != meta_target.exists():
            conflicts.append((node_id, "incomplete existing record"))
        elif current == digest(raw) and previous_meta == meta:
            changes.append((node_id, "unchanged"))
        elif current == expected:
            changes.append((node_id, "create" if current is None else "update"))
        else:
            conflicts.append((node_id, f"expected={expected}, actual={current}"))
    return changes, conflicts


def atomic_write(path, raw):
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, tmp = tempfile.mkstemp(prefix=f".{path.name}.", dir=path.parent)
    try:
        with os.fdopen(fd, "wb") as f:
            f.write(raw)
        os.replace(tmp, path)
    finally:
        if os.path.exists(tmp):
            os.unlink(tmp)


def generate_index(repo):
    items = []
    knowledge = repo / "knowledge"
    if knowledge.exists():
        for meta_file in sorted(knowledge.glob("*.json")):
            meta = json_from(meta_file)
            md_file = meta_file.with_suffix(".md")
            if not md_file.exists() or meta.get("id") != meta_file.stem:
                raise PackError(f"Broken record {meta_file}")
            items.append({**meta, "markdown": md_file.read_text(encoding="utf-8"), "content_sha256": digest(md_file.read_bytes())})
    ids = {n["id"] for n in items}
    for node in items:
        unknown = set(node.get("links", [])) - ids
        if unknown:
            raise PackError(f"Broken link from {node['id']} to {sorted(unknown)}")
    index = {"format": "folio-read-model", "schema_version": "1.0", "nodes": items}
    out = repo / "public" / "folio" / "index.json"
    atomic_write(out, (json.dumps(index, ensure_ascii=False, indent=2) + "\n").encode("utf-8"))
    return len(items), out


def main():
    p = argparse.ArgumentParser(description=__doc__)
    sub = p.add_subparsers(dest="command", required=True)
    for name in ("check", "diff", "apply"):
        cmd = sub.add_parser(name)
        cmd.add_argument("--pack", required=True, type=Path)
        cmd.add_argument("--repo", default=Path("."), type=Path)
    build = sub.add_parser("build-index")
    build.add_argument("--repo", default=Path("."), type=Path)
    args = p.parse_args()
    repo = args.repo.resolve()
    try:
        if args.command == "build-index":
            count, out = generate_index(repo)
            print(f"Indexed {count} nodes into {out}")
            return
        manifest, checked = load_pack(args.pack)
        changes, conflicts = state(repo, checked)
        print(f"Pack {manifest['pack_id']}: {len(checked)} records")
        for node_id, action in changes:
            print(f"  {action:9} {node_id}")
        for node_id, why in conflicts:
            print(f"  CONFLICT  {node_id}: {why}")
        if conflicts:
            raise PackError("Conflicts found. Reconcile manually; no content was written.")
        if args.command == "apply":
            by_id = {node_id: (raw, meta) for node_id, raw, meta, _ in checked}
            for node_id, action in changes:
                if action == "unchanged":
                    continue
                raw, meta = by_id[node_id]
                atomic_write(target(repo, node_id, "md"), raw)
                atomic_write(target(repo, node_id, "json"), (json.dumps(meta, ensure_ascii=False, indent=2) + "\n").encode("utf-8"))
            count, out = generate_index(repo)
            print(f"Applied successfully; index contains {count} nodes: {out}")
        else:
            print("Valid. Use apply to merge this pack.")
    except PackError as exc:
        p.exit(2, f"ERROR: {exc}\n")

if __name__ == "__main__":
    main()
