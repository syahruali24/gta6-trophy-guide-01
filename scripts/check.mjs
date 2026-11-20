import { readFileSync, readdirSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';
const data=JSON.parse(readFileSync('app/data/trophies.json'));
const original=JSON.parse(readFileSync('gta6-trophy-guide-01-kit/gta6-trophy-guide-01-kit/starter/app/data/trophies.json'));
assert.equal(data.trophies.length,55);
for(const t of data.trophies){const o=original.trophies.find(x=>x.id===t.id);for(const k of ['name','description','grade'])assert.equal(t[k],o[k]);assert(t.guide.trim().length>=100);assert(t.stage>=1&&t.stage<=5);assert(t.sources.length);assert.equal(typeof t.missable,'boolean')}
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(dir+'/'+e.name):[dir+'/'+e.name])}
const urls=[];for(const f of walk('app')){const s=readFileSync(f,'utf8');const matches=s.match(/https?:\/\/[^\s"'<>]+/g)||[];if(matches.length)urls.push({file:f,matches});assert.equal(matches.length,0,'Unexpected network URL in '+f)}
const script=readFileSync('app/app.js','utf8');const embedded=JSON.parse(script.slice(script.indexOf('const catalog = ')+16,script.indexOf(';\nconst trophies=')));assert.deepEqual(embedded,data);
function jpegSize(b){let i=2;while(i<b.length){if(b[i]!==255){i++;continue}const m=b[i+1];if([0xc0,0xc1,0xc2].includes(m))return [b.readUInt16BE(i+7),b.readUInt16BE(i+5)];if(m===0xd8||m===0xd9){i+=2;continue}i+=2+b.readUInt16BE(i+2)}throw Error('Missing JPEG dimensions')}
const shots=walk('screenshots');assert.equal(shots.length,4);const sizes=shots.map(f=>{const b=readFileSync(f);assert(b.length<=262144);assert.deepEqual(jpegSize(b),[1280,800]);return {file:f,bytes:b.length,width:1280,height:800}});
for(const f of ['serve.ts','LICENSE','vendor/makefun-frontend.ts'])assert(readFileSync(f).equals(readFileSync('gta6-trophy-guide-01-kit/gta6-trophy-guide-01-kit/starter/'+f)),'Kit exemption changed: '+f);
console.log(JSON.stringify({result:'PASS',trophies:55,grades:data.trophies.reduce((s,t)=>(s[t.grade]=(s[t.grade]||0)+1,s),{}),missables:data.trophies.filter(t=>t.missable).length,stages:5,minGuide:Math.min(...data.trophies.map(t=>t.guide.length)),networkURLs:urls,screenshots:sizes},null,2));
