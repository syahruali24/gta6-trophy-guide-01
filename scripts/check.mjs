import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
const root=fileURLToPath(new URL("../",import.meta.url));
const kit=join(root,"gta6-trophy-guide-01-kit/gta6-trophy-guide-01-kit/starter");
const data=JSON.parse(readFileSync(join(root,"app/data/trophies.json"),"utf8"));
const official=JSON.parse(readFileSync(join(kit,"app/data/trophies.json"),"utf8"));
assert.equal(data.trophies.length,55,"expected all 55 trophies");
assert.deepEqual(data.trophies.map(({id,name,description,grade})=>({id,name,description,grade})),official.trophies.map(({id,name,description,grade})=>({id,name,description,grade})),"official trophy fields must match the starter list");
assert.deepEqual(data.trophies.reduce((a,t)=>(a[t.grade]=(a[t.grade]||0)+1,a),{}),{platinum:1,gold:2,silver:6,bronze:46});
assert.equal(data.trophies.filter(t=>t.missable).length,6);
for(const t of data.trophies){assert.ok(t.guide.trim().length>=100,"guide too short: "+t.name);assert.ok(Number.isInteger(t.stage)&&t.stage>=1&&t.stage<=5,"bad stage: "+t.name);assert.ok(Array.isArray(t.sources)&&t.sources.length>0,"missing source: "+t.name);assert.equal(typeof t.missable,"boolean");}
const js=readFileSync(join(root,"app/app.js"),"utf8");
const match=js.match(/const catalog = ([\s\S]*?);\nconst trophies=/);
assert.ok(match,"embedded catalog declaration not found");
assert.deepEqual(JSON.parse(match[1]),data,"embedded catalog differs from JSON");
for(const name of readdirSync(join(root,"app"))){const path=join(root,"app",name);if(statSync(path).isFile()){const body=readFileSync(path,"utf8");assert.ok(!/https?:\/\//i.test(body),"network URL in app/"+name);}}
const shots=readdirSync(join(root,"screenshots")).filter(x=>/\.(?:jpe?g|png)$/i.test(x));
assert.equal(shots.length,4,"expected exactly four screenshots");
function jpegSize(buf){assert.deepEqual([...buf.subarray(0,3)],[255,216,255],"screenshot is not JPEG");let p=2;while(p<buf.length){if(buf[p]!==255){p++;continue;}const marker=buf[p+1];if([192,193,194,195,198,199,201,202,203,205,206,207].includes(marker))return {height:buf.readUInt16BE(p+5),width:buf.readUInt16BE(p+7)};if(marker===217||marker===218)break;const len=buf.readUInt16BE(p+2);p+=2+len;}throw Error("JPEG dimensions not found");}
for(const name of shots){const path=join(root,"screenshots",name);const buf=readFileSync(path);assert.ok(buf.length<=262144,"screenshot exceeds size limit: "+name);assert.deepEqual(jpegSize(buf),{width:1280,height:800},"wrong screenshot dimensions: "+name);}
for(const path of ["serve.ts","LICENSE","vendor/makefun-frontend.ts"]){assert.deepEqual(readFileSync(join(root,path)),readFileSync(join(kit,path)),path+" must remain identical to starter");}
console.log("check.mjs: all trophy, catalog, offline, screenshot and protected-file assertions passed.");
