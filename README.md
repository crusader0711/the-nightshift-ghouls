# The Nightshift Ghouls

![tier: T1 public](https://img.shields.io/badge/tier-T1%20public-2ea44f) ![license: MIT](https://img.shields.io/badge/license-MIT-blue) [![ci](https://github.com/crusader0711/the-nightshift-ghouls/actions/workflows/ci.yml/badge.svg)](https://github.com/crusader0711/the-nightshift-ghouls/actions/workflows/ci.yml)

## Overview

<div align="center"><img src="./assets/nightshift-ghouls-logo.jpg" width="440" alt="The Nightshift Ghouls" /></div>

**THE NIGHTSHIFT GHOULS** — the AI bot team roster, a themed fork of Project SAGE.
Nine household agents, one lane each, hard limits enforced, one reporting line
through the Chief of Staff (Count Grokula). No bot moves money or trades; nothing
is sent, paid, or ordered without per-instance human approval.
Built on the static-spa v1.TW engine: zero backend, hash-routed, dark-only,
JetBrains Mono, ecto-green + spectre-violet.

**Pages:** Roster (`#/`) — stat row + nine profile cards (avatar, tagline,
lane, schedule, hard limits, reports) · Doctrine (`#/doctrine`) —
why the team works.

**Live site:** https://crusader0711.github.io/the-nightshift-ghouls/

## Quickstart

```bash
git clone https://github.com/crusader0711/the-nightshift-ghouls.git && cd the-nightshift-ghouls
make setup          # install git hooks (gitleaks pre-commit if available)
python3 -m http.server 8000   # then open http://localhost:8000
```

Or just open `index.html` in a browser; the site has no backend.

## Architecture

A zero-backend, hash-routed single-page app. `index.html` loads `css/style.css`, Tailwind (CDN) and three scripts:
`js/data.js` (all content), `js/app.js` (router + page renderers) and `js/custom.js` (theme helpers).
GitHub Pages serves the repo root of `main`, so the root site files are this repo's `src/` equivalent.
Details: [docs/architecture.md](docs/architecture.md).

## Usage

Pages: Roster (#/), Doctrine (#/doctrine). Edit content in `js/data.js`, theme tokens in `css/style.css`, images in `assets/`.

### Configure

Everything you edit lives in **`js/data.js`**:

| What | Where |
|---|---|
| Card content per bot (lane / schedule / limits / reports) | `BOTS` array (mirrors SAGE `docs/dashboard/cards.json`) |
| Why-the-team-works principles | `DOCTRINE` array |
| Masthead / footer text | `SITE` |
| Tag chip colors | `tagColor` in `js/custom.js` |
| Theme colors | `css/style.css` TOKENS block |
| Avatars | `assets/<slug>.jpg` (640px, pre-optimized) |
| Master logo (roster hero + README banner) | `assets/nightshift-ghouls-logo.jpg` |

Preview locally by opening `index.html` in a browser (no server needed —
the roster makes no fetch calls).

## Development

| Command | What it does |
|---|---|
| `make help` | List targets |
| `make setup` | Install git hooks |
| `make lint` | `node --check` on JS, JSON/Python parse, shellcheck |
| `make test` | Site smoke tests (`tests/unit/test_site_refs.py`) |
| `make build` | Copy the site into `dist/site/` + tarball |
| `make release` | Build, then write `RELEASE_MANIFEST.json` + `SHA256SUMS` |
| `make clean` | Remove `dist/` and caches |

See [CONTRIBUTING.md](CONTRIBUTING.md), [AGENTS.md](AGENTS.md) and [WIKI.md](WIKI.md).

## License

[MIT](LICENSE). See also [ATTRIBUTION.md](ATTRIBUTION.md), [SECURITY.md](SECURITY.md), [PRIVACY.md](PRIVACY.md) and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md).
