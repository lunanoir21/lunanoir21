#!/usr/bin/env python3
"""Builds the profile README.md and its SVG cards from data/repos.json and data/releases.json.
Everything that changes (stars, releases, dates) comes from those files, which scripts/update_data.py refreshes.
Screenshots are linked straight from each project's own repo, so they stay current when the repo changes."""
import json
from datetime import datetime, timezone
from html import escape
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
USER = "lunanoir21"
SITE = f"https://{USER}.github.io/{USER}/"

# repo, name, one-liner, has its own page, screenshot inside the repo (or None)
PROJECTS = [
    ("quickshell-dynamic-island", "Dynamic Island", "Monochrome Dynamic Island for Hyprland: media, timers, pixel clock, privacy indicators.", True, "docs/cover.png"),
    ("quickshell-quay", "Quay", "A vertical, home-screen-style app launcher with live window previews.", True, "docs/screenshots/preview.png"),
    ("flare-notch", "Flare Notch", "Your AI coding limits on the screen edge.", True, "docs/screenshots/sessions.png"),
    ("tally-screentime", "Tally", "Screen time for Hyprland with PNG, PDF and HTML reports.", True, "docs/screenshots/hero.png"),
    ("desktop-widget-control", "Widget Control", "Live desktop widgets with a full editor.", True, "docs/screenshots/black/editor.webp"),
    ("scribe", "Scribe", "Select and copy text from anywhere on your Hyprland screen, like Google Lens.", True, "preview.png"),
    ("dep-lens", "dep-lens", "Dependencies, licenses and commercial-use risk across 9 ecosystems.", True, "docs/assets/tui-screenshot.png"),
    ("inktype", "Inktype", "Free typing practice through real books.", True, "docs/screenshots/typing.png"),
    ("Life-os-project", "Life OS", "A local-first personal life OS.", True, "docs/screenshots/dashboard.jpg"),
    ("aurguard-project", "AURGuard", "Checks AUR packages before you install them.", True, "assets/install.gif"),
]
OMARCHY = {"quickshell-dynamic-island": "dynamic-island-omarchy", "quickshell-quay": "quay-omarchy", "flare-notch": "flare-omarchy",
           "tally-screentime": "tally-omarchy", "desktop-widget-control": "desktop-widget-control-omarchy", "scribe": "scribe-omarchy"}
MORE = [("petty", "petty", "a pixel-art pet for your terminal"), ("orca-project", "Orca", "a security-focused file manager (pre-release)"),
        ("connectible-project", "Connectible", "a KDE Connect alternative (pre-release)")]

SANS = "ui-sans-serif, -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif"
MONO = "ui-monospace, 'SF Mono', Menlo, Consolas, monospace"
THEMES = {"dark": dict(bg="#000000", line="#30363d", fg="#ffffff", dim="#8b949e", bar="#ffffff", track="#21262d"),
          "light": dict(bg="#ffffff", line="#d0d7de", fg="#0a0a0a", dim="#57606a", bar="#0a0a0a", track="#eaeef2")}


NUMWORD = {5: "Five", 6: "Six", 7: "Seven", 8: "Eight"}


def ago(iso):
    d = (datetime.now(timezone.utc) - datetime.fromisoformat(iso.replace("Z", "+00:00"))).days
    return "today" if d <= 0 else "yesterday" if d == 1 else f"{d} days ago" if d < 60 else f"{d // 30} months ago"


def stats_svg(t, stars, repos, last_rel, last_push):
    cells = [(str(stars), "stars on public repos"), (str(repos), "public repos"), (last_rel[0], last_rel[1]), (last_push, "last push")]
    w, h = 900, 112
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="{stars} stars, {repos} public repos">',
           f'<rect x=".5" y=".5" width="{w - 1}" height="{h - 1}" rx="14" fill="{t["bg"]}" stroke="{t["line"]}"/>']
    for i, (big, small) in enumerate(cells):
        x = 36 + i * 218
        if i:
            out.append(f'<line x1="{x - 24}" y1="26" x2="{x - 24}" y2="86" stroke="{t["line"]}"/>')
        out.append(f'<text x="{x}" y="60" font-family="{SANS}" font-size="38" font-weight="600" fill="{t["fg"]}">{escape(big)}</text>')
        out.append(f'<text x="{x}" y="86" font-family="{MONO}" font-size="12.5" fill="{t["dim"]}">{escape(small)}</text>')
    out.append("</svg>")
    return "\n".join(out)


def stars_svg(t, rows):
    w, rowh, top = 900, 30, 62
    h = top + rowh * len(rows) + 34
    mx = max([r[1] for r in rows] + [1])
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="Stars per repository">',
           f'<rect x=".5" y=".5" width="{w - 1}" height="{h - 1}" rx="14" fill="{t["bg"]}" stroke="{t["line"]}"/>',
           f'<text x="32" y="38" font-family="{MONO}" font-size="12" letter-spacing="1.6" fill="{t["dim"]}">STARS PER REPO</text>']
    for i, (name, n) in enumerate(rows):
        y = top + i * rowh
        bw = max(6, round(520 * n / mx))
        out.append(f'<text x="32" y="{y + 11}" font-family="{MONO}" font-size="13" fill="{t["fg"]}">{escape(name)}</text>')
        out.append(f'<rect x="300" y="{y}" width="520" height="12" rx="6" fill="{t["track"]}"/>')
        out.append(f'<rect x="300" y="{y}" width="{bw}" height="12" rx="6" fill="{t["bar"]}"/>')
        out.append(f'<text x="836" y="{y + 11}" font-family="{MONO}" font-size="13" fill="{t["fg"]}">{n}</text>')
    out.append(f'<text x="868" y="{h - 14}" text-anchor="end" font-family="{MONO}" font-size="11" fill="{t["dim"]}">source: GitHub API · refreshed automatically</text>')
    out.append("</svg>")
    return "\n".join(out)


def main():
    repos = json.loads((ROOT / "data/repos.json").read_text())
    rels = json.loads((ROOT / "data/releases.json").read_text())["releases"]
    by = {r["name"]: r for r in repos["repos"]}
    stars = sum(r["stars"] for r in repos["repos"])
    n = len(repos["repos"])
    last_push = max(r["pushed"] for r in repos["repos"])
    lr = rels[0] if rels else None
    names = {p[0]: p[1] for p in PROJECTS}
    names.update({m[0]: m[1] for m in MORE})
    last_rel = ((lr["tag"], f'{names.get(lr["repo"], lr["repo"])} · {ago(lr["published"])}') if lr else ("—", "latest release"))
    top = sorted(((names.get(r["name"], r["name"]), r["stars"]) for r in repos["repos"] if r["stars"] >= 2), key=lambda x: (-x[1], x[0]))[:8]

    assets = ROOT / "assets"
    for mode, t in THEMES.items():
        (assets / f"stats-{mode}.svg").write_text(stats_svg(t, stars, n, last_rel, ago(last_push)) + "\n")
        (assets / f"stars-{mode}.svg").write_text(stars_svg(t, top) + "\n")

    def pic(name, alt, width=None):
        w = f' width="{width}"' if width else ""
        return (f'<picture><source media="(prefers-color-scheme: dark)" srcset="assets/{name}-dark.svg">'
                f'<img alt="{escape(alt)}" src="assets/{name}-light.svg"{w}></picture>')

    cells = []
    for repo, name, desc, page, img in PROJECTS:
        link = f"https://{USER}.github.io/{repo}/" if page else f"https://github.com/{USER}/{repo}"
        s = by.get(repo, {}).get("stars", 0)
        cells.append(f'<td width="33%" valign="top"><a href="{link}"><img src="https://raw.githubusercontent.com/{USER}/{repo}/main/{img}" alt="{escape(name)}" width="100%"></a><br>'
                     f'<b><a href="https://github.com/{USER}/{repo}">{escape(name)}</a></b> · ★ {s}<br><sub>{escape(desc)}</sub></td>')
    rows = ["<tr>" + "".join(cells[i:i + 3]) + "</tr>" for i in range(0, len(cells), 3)]
    gallery = "<table>\n" + "\n".join(rows) + "\n</table>"
    more = " · ".join(f'<a href="https://github.com/{USER}/{r}">{n_}</a> ({d})' for r, n_, d in MORE)

    seen, rel_rows = set(), []
    for r in rels:
        if r["repo"] in seen:
            continue
        seen.add(r["repo"])
        rel_rows.append(f'| [{names.get(r["repo"], r["repo"])}]({r["url"]}) | `{r["tag"]}` | {ago(r["published"])} | {r["summary"].replace("|", "/")} |')
        if len(rel_rows) == 6:
            break
    releases = "| Project | Release | When | What changed |\n| --- | --- | --- | --- |\n" + "\n".join(rel_rows)

    om_rows = []
    for repo, name, desc, page, img in PROJECTS:
        om = OMARCHY.get(repo)
        if om:
            om_rows.append(f'| [{name}](https://github.com/{USER}/{om}) | {desc} | `omarchy plugin add https://github.com/{USER}/{om}.git --enable` | ★ {by.get(om, {}).get("stars", 0)} |')
    omarchy = "| Plugin | What it does | Install | Stars |\n| --- | --- | --- | --- |\n" + "\n".join(om_rows)

    readme = f"""<p align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/banner-dark.svg">
    <img alt="Luna Noir. I build with AI. I'm not a developer." src="assets/banner-light.svg" width="100%">
  </picture>
</p>

<p align="center">
  <a href="{SITE}"><b>Website</b></a> ·
  <a href="https://lunanoir21.github.io/">Pixel world</a> ·
  <a href="https://github.com/{USER}?tab=repositories">All repositories</a>
</p>

**I'm not a developer.** I make tools and small projects together with AI, and I publish them so anyone curious can use them, learn from them or make them better. I decide what to build and how it should feel, then I run it, review it and fix what's wrong. Every project says openly that it was built with AI.

{pic("stats", f"{stars} stars across {n} public repos")}

## What I've made

{gallery}

<sub>Also: {more}. Screenshots come straight from each project's own repo.</sub>

## New releases

{releases}

## Running Omarchy?

{NUMWORD[len(om_rows)]} of my projects are packaged as [Omarchy](https://omarchy.org) plugins. One command installs and enables each. Browse more in the [Omarchy plugin marketplace](https://plugins.omarchy.org/).

{omarchy}

<sub>Plugins run with your user's permissions and are not sandboxed. Mine are open source with no telemetry, but read the code before you enable any plugin.</sub>

## Stars

{pic("stars", "Stars per repository", 900)}

## How I work, honestly

- **AI writes most of the code.** I steer, test and review. I don't claim to be an engineer.
- **Local-first, no telemetry.** Your data stays on your machine.
- **Open source, MIT.** Every repo of mine is under the [MIT license](LICENSE). Read it, fork it, send a fix.
- **Expect rough edges.** Open an issue on the project, or write to [lunanoir_1@protonmail.com](mailto:lunanoir_1@protonmail.com).

<details>
<summary><b>Türkçe özet</b></summary>

Yapay zekâ kullanarak proje ve araçlar yapan biriyim. **Yazılımcı değilim**, ama işe yarayan şeyler yapmaya çalışıyorum. Meraklı ve işine yarayacak herkes kullansın diye hepsini açık kaynak (MIT) olarak yayınlıyorum. Ne yapılacağına ben karar veriyorum, kodu yapay zekâ yazıyor, sonra çalıştırıp gözden geçiriyorum.

</details>

<sub>This page refreshes itself every few hours with GitHub Actions: stars, releases and the gallery all come from the repos. Last refresh: {datetime.now(timezone.utc).strftime("%Y-%m-%d")}.</sub>
"""
    (ROOT / "README.md").write_text(readme)
    print("README.md,", stars, "stars,", n, "repos,", len(rel_rows), "release rows")


if __name__ == "__main__":
    main()
