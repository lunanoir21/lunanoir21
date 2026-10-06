#!/usr/bin/env python3
"""Writes data/repos.json (numbers for every public, non-fork repo) and data/releases.json (latest releases).
Run by .github/workflows/update-site-data.yml (every 3 hours) so the site and the profile README always have a
fresh snapshot even when a visitor's browser cannot reach the GitHub API. GITHUB_TOKEN is optional."""
import json, os, re, urllib.request
from datetime import datetime, timezone
from pathlib import Path

USER = os.environ.get("GH_USER", "lunanoir21")
TOKEN = os.environ.get("GITHUB_TOKEN", "")
OUT = Path(__file__).resolve().parent.parent / "data" / "repos.json"
H = {"Accept": "application/vnd.github+json", "X-GitHub-Api-Version": "2022-11-28", "User-Agent": USER}
if TOKEN:
    H["Authorization"] = f"Bearer {TOKEN}"

def get(path):
    with urllib.request.urlopen(urllib.request.Request("https://api.github.com" + path, headers=H)) as r:
        return json.loads(r.read())

repos, page = [], 1
while True:
    batch = get(f"/users/{USER}/repos?per_page=100&page={page}&type=owner")
    if not batch:
        break
    repos += batch
    page += 1

user = get(f"/users/{USER}")
rows = [{
    "name": r["name"], "description": r.get("description") or "", "stars": r["stargazers_count"], "forks": r["forks_count"],
    "issues": r["open_issues_count"], "language": r.get("language") or "", "topics": r.get("topics", []),
    "license": (r.get("license") or {}).get("spdx_id") or "", "homepage": r.get("homepage") or "",
    "created": r["created_at"], "pushed": r["pushed_at"], "size": r["size"],
} for r in repos if not r["fork"] and not r["private"] and not r.get("archived")]
rows.sort(key=lambda x: (-x["stars"], x["name"].lower()))
data = {
    "generatedAt": datetime.now(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ"), "user": USER,
    "profile": {"followers": user["followers"], "publicRepos": user["public_repos"], "joined": user["created_at"]},
    "repos": rows,
}
OUT.parent.mkdir(exist_ok=True)
OUT.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n")
print(f"{len(rows)} repos, {sum(r['stars'] for r in rows)} stars")

# ---- releases ----
def summarize(body):
    out = []
    for line in (body or "").splitlines():
        t = re.sub(r"^[#>\-*\s]+", "", line.strip())
        t = re.sub(r"[*_`]|\[([^\]]*)\]\([^)]*\)", lambda m: m.group(1) or "", t).strip()
        if len(t) > 12 and not t.lower().startswith(("full changelog", "what's changed", "released")):
            out.append(t)
        if len(" ".join(out)) > 160:
            break
    s = " ".join(out)
    return (s[:197].rstrip() + "…") if len(s) > 200 else s

rels = []
for r in rows:
    try:
        for x in get(f"/repos/{USER}/{r['name']}/releases?per_page=3"):
            if x.get("draft"):
                continue
            rels.append({"repo": r["name"], "tag": x["tag_name"], "name": x.get("name") or x["tag_name"], "published": x["published_at"], "prerelease": x.get("prerelease", False), "summary": summarize(x.get("body")), "url": x["html_url"]})
    except Exception as e:  # a single repo failing must not lose the rest
        print("releases skipped:", r["name"], e)
rels.sort(key=lambda x: x["published"], reverse=True)
(OUT.parent / "releases.json").write_text(json.dumps({"generatedAt": data["generatedAt"], "releases": rels[:40]}, indent=1, ensure_ascii=False) + "\n")
print(f"{len(rels)} releases")
