# Leonida Trophy Guide
[![make.fun · gta6-trophy-guide-01](https://make.fun/badge/gta6-trophy-guide-01.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![rank](https://make.fun/badge/gta6-trophy-guide-01/syahruali24/gta6-trophy-guide-01/rank.svg)](https://make.fun/bounty/gta6-trophy-guide-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)
[![reward](https://make.fun/badge/gta6-trophy-guide-01/syahruali24/gta6-trophy-guide-01/reward.svg)](https://make.fun/bounty/gta6-trophy-guide-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-trophy-guide-01)

An offline PlayStation 5 trophy checklist for Grand Theft Auto VI. Open `app/index.html` directly in a browser or serve the repository with `node serve.ts`.

The guide includes all 55 official trophy records, a five-stage route, checkpoint warnings, local earned-state persistence, filters, per-trophy field notes and sources, spoiler masking, and optional progress counters. Browser progress stays in local storage on the device.

To validate and package with Node 22 or later:

```sh
node scripts/test-app.mjs
node scripts/check.mjs
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Screenshots are captured from the app using `shots.json` and the local Chrome DevTools Protocol endpoint on port 9222.
