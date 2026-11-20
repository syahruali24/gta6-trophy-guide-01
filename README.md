# GTA 6 Trophy Guide — make.fun gta6-trophy-guide-01
[![make.fun · gta6-trophy-guide-01](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![rank](https://make.fun/badge/gta6-trophy-guide-01/syahruali24/gta6-trophy-guide-01/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![reward](https://make.fun/badge/gta6-trophy-guide-01/syahruali24/gta6-trophy-guide-01/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)

Leonida Trophy Guide is an independent, offline trophy guide with all 55 supplied official entries, original description-led guidance, a five-stage roadmap, conditional-attempt warnings, spoiler protection, search, filters, manual count targets, and local progress with JSON import/export. Unspecified locations and ambiguous triggers are explicitly disclosed. Sources identify the supplied list provenance; no external guide text or official artwork is used.

Open `app/index.html` directly or run `node serve.ts`. Package with `MAKEFUN_OUTPUT_DIR=out node main.ts` (Node 22+). The embedded catalog in app.js matches app/data/trophies.json so direct file access needs no fetch. Spoiler shield defaults on. Screenshot query parameters support view, detail, seed, and spoilers. Seed 13 earns the first 13 IDs deterministically.

Verification: `node scripts/check.mjs`. Screenshot capture: launch Chromium with the documented competition flags, then `node scripts/capture.mjs`. Screenshots are captured from the built out/app files. MIT licensed; see LICENSE.
