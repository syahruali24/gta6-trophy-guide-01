import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { mkdtemp, rm, readFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createHash } from "node:crypto";
import { setTimeout as pause } from "node:timers/promises";
import { connect, page } from "./capture.mjs";

const expectedHash = "8097045f0459c96c4cdc76e3a1af4e0f43f640b4b59c43d6db35e3641c0264c6";
const policy = "/tmp/webgl-policy.txt";
assert.equal(createHash("sha256").update(await readFile(policy)).digest("hex"),expectedHash);
const profile = await mkdtemp(join(tmpdir(),"leonida-test-"));
const chrome = spawn(process.env.CHROME_BIN || "/opt/meta-chromium/chrome",[
  "--headless=new","--no-sandbox","--disable-gpu","--allow-file-access-from-files",
  "--remote-debugging-port=0","--user-data-dir=" + profile,
  "--hatch-webgl-allowed-domains-file=" + policy,"--hatch-webgl-allowed-domains-sha256=" + expectedHash
],{stdio:"ignore"});
const stopped = new Promise(resolve => {
  chrome.once("error",resolve);
  chrome.once("exit",resolve);
});
let tab;
try {
  let port;
  for (let i = 0; i < 40 && !port; i++) {
    const file = await readFile(join(profile,"DevToolsActivePort"),"utf8").catch(() => "");
    port = Number(file.split("\n")[0]);
    if (!port) await pause(250);
  }
  assert.ok(port,"Chrome did not report a debugging port");
  tab = await connect(port);
  await tab.send("Network.enable");
  await tab.send("Network.setBlockedURLs",{urls:["http://*","https://*"]});
  await tab.open(page);
  const {evaluate:run} = tab;
  assert.equal(await run('document.querySelectorAll(".trophy").length'),55);
  assert.equal(await run('document.body.textContent.includes("Gone Fishing")'),false);
  assert.equal(await run('document.querySelector("#shield").checked'),true);
  const filter = name => run('Array.from(document.querySelectorAll("#filters button")).find(b => b.textContent === ' + JSON.stringify(name) + ').click()');
  await filter("Missable");
  assert.equal(await run('document.querySelectorAll(".trophy .risk").length'),6);
  await filter("Story");
  await run('document.querySelector("#rows input").click()');
  assert.equal(await run('document.querySelector("#earned").textContent'),"1");
  assert.equal(await run('document.querySelector("#rows strong").textContent'),"Just Like Paradise");
  const reload = new URL(page);
  reload.searchParams.set("reload","1");
  await tab.open(reload);
  assert.equal(await run('document.querySelector("#earned").textContent'),"1");
  await run('document.querySelector("[data-view=route]").click()');
  assert.equal(await run('document.querySelectorAll(".stage").length'),5);
  await run('document.querySelector(".stage button").click()');
  assert.match(await run('document.querySelector("#results").textContent'),/Stage 1/);
  const importBackup = async value => {
    await run('(() => { const input = document.querySelector("#backup"); const dt = new DataTransfer(); dt.items.add(new File([' + JSON.stringify(value) + '],"backup.json")); input.files = dt.files; input.dispatchEvent(new Event("change")); })()');
    for (let i = 0; i < 30; i++) {
      if (await run('document.querySelector("#backup").files.length === 0')) return;
      await pause(100);
    }
    assert.fail("Import did not finish");
  };
  await importBackup(JSON.stringify({version:1,shield:false,earned:[4,0]}));
  assert.equal(await run('document.querySelector("#earned").textContent'),"2");
  assert.equal(await run('document.querySelector("#shield").checked'),false);
  await importBackup('{"version":1,"shield":true,"earned":[999]}');
  assert.equal(await run('document.querySelector("#earned").textContent'),"2");
  assert.match(await run('document.querySelector("#notice").textContent'),/Import failed/);
  const exportData = await run('new Promise(resolve => { const original = URL.createObjectURL; URL.createObjectURL = blob => { URL.createObjectURL = original; resolve(blob.text()); return original.call(URL,blob); }; document.querySelector("#export").click(); })');
  assert.deepEqual(JSON.parse(exportData),{version:1,shield:false,earned:[0,4]});
  console.log("PASS: offline Chrome, filters, spoiler shield, persistence, roadmap, import and export.");
} finally {
  try {
    await tab?.close();
  } finally {
    chrome.kill();
    await stopped;
    await rm(profile,{recursive:true,force:true,maxRetries:3});
  }
}
