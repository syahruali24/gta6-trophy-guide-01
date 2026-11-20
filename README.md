# Leonida Trophy Guide

An offline PlayStation 5 trophy checklist for Grand Theft Auto VI. Open `app/index.html` directly in a browser or serve the repository with `node serve.ts`.

The guide includes all 55 official trophy records, a five-stage route, checkpoint warnings, local earned-state persistence, filters, per-trophy field notes and sources, spoiler masking, and optional progress counters. Browser progress stays in local storage on the device.

To validate and package with Node 22 or later:

```sh
node scripts/test-app.mjs
node scripts/check.mjs
MAKEFUN_OUTPUT_DIR=out node main.ts
```

Screenshots are captured from the app using `shots.json` and the local Chrome DevTools Protocol endpoint on port 9222.
