// Capture newly rendered built pages over CDP; no npm dependencies.
import { mkdirSync, writeFileSync } from 'node:fs';
mkdirSync(new URL('../screenshots/',import.meta.url),{recursive:true});
const tabs=await(await fetch('http://127.0.0.1:9222/json')).json();
const target=tabs.find(t=>t.type==='page');
if(!target)throw Error('No Chrome page target');
const ws=new WebSocket(target.webSocketDebuggerUrl);await new Promise((ok,no)=>{ws.onopen=ok;ws.onerror=no});
let seq=0;const pending=new Map();
ws.onmessage=e=>{const m=JSON.parse(e.data);if(m.id){const p=pending.get(m.id);pending.delete(m.id);m.error?p.reject(Error(JSON.stringify(m.error))):p.resolve(m.result)}};
function cdp(method,params={}){return new Promise((resolve,reject)=>{const id=++seq;pending.set(id,{resolve,reject});ws.send(JSON.stringify({id,method,params}))})}
await cdp('Page.enable');await cdp('Runtime.enable');
await cdp('Emulation.setDeviceMetricsOverride',{width:1280,height:800,deviceScaleFactor:1,mobile:false});
const shots=[['1-checklist.jpg','view=checklist&detail=34&seed=13'],['2-roadmap.jpg','view=roadmap&seed=13'],['3-missables.jpg','view=missables&seed=13'],['4-spoiler.jpg','view=checklist&spoilers=on&seed=13']];
for(const [file,state] of shots){
await cdp('Page.navigate',{url:'file:///home/hatch/workspace/make-fun-trophy-guide/out/app/index.html?'+state});
let ready=false;for(let n=0;n<100;n++){await new Promise(r=>setTimeout(r,150));const r=await cdp('Runtime.evaluate',{expression:'window.__shotReady === true && document.readyState === "complete"',returnByValue:true});if(r.result.value){ready=true;break}}
if(!ready)throw Error('Screenshot readiness timeout: '+file);
await new Promise(r=>setTimeout(r,250));
const stateResult=await cdp('Runtime.evaluate',{expression:'JSON.stringify({length:document.body.innerText.length,shield:document.querySelector("#shield").textContent,hidden:document.body.innerText.includes("Story trophy · hidden"),errors:window.__errors||[]})',returnByValue:true});
const page=JSON.parse(stateResult.result.value);if(page.length<1000)throw Error('Page did not render '+file);
let shot=await cdp('Page.captureScreenshot',{format:'jpeg',quality:82,captureBeyondViewport:false});
let bytes=Buffer.from(shot.data,'base64');if(bytes.length>262144){shot=await cdp('Page.captureScreenshot',{format:'jpeg',quality:75,captureBeyondViewport:false});bytes=Buffer.from(shot.data,'base64')}
if(bytes.length>262144)throw Error('Oversize screenshot');
writeFileSync(new URL('../screenshots/'+file,import.meta.url),bytes);
console.log(JSON.stringify({file,bytes:bytes.length,...page}));
}
// Exercise controls without persisting a different seed screenshot.
const test=await cdp('Runtime.evaluate',{expression:`(()=>{const q=document.querySelector('#search');q.value='Retail Therapy';q.dispatchEvent(new Event('input'));const matches=document.querySelectorAll('.trophy-row').length;document.querySelector('[data-open="34"]').click();const detail=document.querySelector('.detail').innerText.includes('without losing')||document.querySelector('.detail').innerText.includes('Wanted Level');const before=document.querySelector('.total strong').textContent;document.querySelector('[data-earn="34"]').click();const after=document.querySelector('.total strong').textContent;return {matches,detail,before,after}})()`,returnByValue:true});
console.log('INTERACTION',JSON.stringify(test.result.value));if(test.result.value.matches!==1||!test.result.value.detail||test.result.value.before===test.result.value.after)throw Error('Interaction check failed');ws.close();
