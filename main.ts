import { cpSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildDossier } from "./vendor/makefun-frontend.ts";

const root = fileURLToPath(new URL(".", import.meta.url));
const output = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
mkdirSync(output, {recursive:true});
for (const folder of ["app", "screenshots"]) {
  cpSync(join(root, folder), join(output, folder), {recursive:true});
}
cpSync(join(root, "app"), join(output, "dashboard"), {recursive:true});
const dossier = await buildDossier(output, {
  text_max_bytes: 163840,
  screenshots: {max: 4, max_bytes: 262144}
});
writeFileSync(join(output, "dossier.json"), dossier);
writeFileSync(join(output, "board.json"), JSON.stringify({
  title: "Leonida Trophy Guide",
  dashboard: "dashboard/index.html",
  trophies: 55,
  dossier: "dossier.json"
}, null, 2) + "\n");
