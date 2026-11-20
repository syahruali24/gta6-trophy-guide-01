// Deterministic static entry packager. Run with Node 22+; no dependencies.
import { cpSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildDossier } from './vendor/makefun-frontend.ts';

const root = fileURLToPath(new URL('.', import.meta.url));
const output = resolve(process.env.MAKEFUN_OUTPUT_DIR || '/output');
mkdirSync(output, { recursive: true });
for (const folder of ['app', 'screenshots']) {
  const source = join(root, folder);
  if (existsSync(source)) cpSync(source, join(output, folder), { recursive: true });
}
const dossier = buildDossier(output, {
  text_max_bytes: 163840,
  screenshots: { max: 4, max_bytes: 262144 },
  app_max_files: 993,
  app_max_bytes: 50331648,
});
writeFileSync(join(output, 'dossier.json'), dossier);
console.log('Built app, screenshots, and deterministic dossier.');
