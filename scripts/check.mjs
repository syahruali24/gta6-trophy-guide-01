import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const locate = path => new URL(path,root);
const read = path => readFile(locate(path),"utf8");
const kit = "gta6-trophy-guide-01-kit/gta6-trophy-guide-01-kit/starter/app/data/trophies.json";
const official = JSON.parse(await read(kit)).trophies;
const catalog = JSON.parse(await read("app/data/trophies.json"));
const embedded = (await read("app/app.js")).match(/^const catalog = (\[[\s\S]*?^\]);/m);
assert.ok(embedded, "Embedded catalog declaration not found");
assert.deepEqual(JSON.parse(embedded[1]),catalog);
assert.equal(catalog.length,55);
assert.equal(new Set(catalog.map(t => t.name)).size,55);
const identity = t => [t.name,t.description,t.grade];
assert.deepEqual(catalog.map(identity),official.map(identity));
assert.equal(catalog.filter(t => t.missable).length,6);
for (const t of catalog) {
  assert.ok(t.guide.trim().length >= 100,t.name);
  assert.ok(Number.isInteger(t.stage) && t.stage >= 1 && t.stage <= 5,t.name);
  assert.equal(typeof t.missable,"boolean");
  assert.ok(t.kind && t.target && typeof t.warning === "string");
  assert.ok(!t.missable || t.warning.trim());
  assert.ok(Array.isArray(t.sources) && t.sources.length && t.sources.every(s => typeof s === "string" && s.trim()));
}
async function checkApp(dir) {
  for (const entry of await readdir(dir,{withFileTypes:true})) {
    const url = new URL(entry.name + (entry.isDirectory() ? "/" : ""),dir);
    if (entry.isDirectory()) await checkApp(url);
    else {
      assert.ok(entry.isFile(),entry.name);
      assert.doesNotMatch(await readFile(url,"utf8"),/https?:\/\//i,entry.name);
    }
  }
}
await checkApp(locate("app/"));

function jpegSize(bytes) {
  assert.equal(bytes.subarray(0,3).toString("hex"),"ffd8ff");
  assert.equal(bytes.subarray(-2).toString("hex"),"ffd9");
  for (let p = 2; p < bytes.length;) {
    assert.equal(bytes[p++],255);
    while (bytes[p] === 255) p++;
    const marker = bytes[p++];
    const length = bytes.readUInt16BE(p);
    assert.ok(length >= 2 && p + length <= bytes.length);
    if ([0xc0,0xc1,0xc2,0xc3,0xc5,0xc6,0xc7,0xc9,0xca,0xcb,0xcd,0xce,0xcf].includes(marker)) {
      return [bytes.readUInt16BE(p+5),bytes.readUInt16BE(p+3)];
    }
    if (marker === 0xda) break;
    p += length;
  }
  throw new Error("No JPEG frame marker");
}
const shots = JSON.parse(await read("shots.json"));
const expected = shots.map(s => s.file).sort();
assert.equal(expected.length,4);
assert.deepEqual((await readdir(locate("screenshots/"))).sort(),expected);
for (const name of expected) {
  const bytes = await readFile(locate("screenshots/" + name));
  assert.ok(bytes.length <= 262144,name);
  assert.deepEqual(jpegSize(bytes),[1280,800],name);
  console.log(name + ": " + bytes.length + " bytes, 1280×800 JPEG");
}
console.log("PASS: 55 official trophies, embedded parity, six flags, offline files, four JPEGs.");
