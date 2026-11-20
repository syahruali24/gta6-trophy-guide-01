import { mkdirSync, writeFileSync } from "node:fs";
import { resolve, join } from "node:path";
import { fileURLToPath } from "node:url";

const root=fileURLToPath(new URL("../",import.meta.url));
const shots=JSON.parse(await (await import("node:fs/promises")).readFile(join(root,"shots.json"),"utf8"));
const base="http://127.0.0.1:9222";
const page="file://"+resolve(root,"app/index.html");
const wait=ms=>new Promise(r=>setTimeout(r,ms));
async function openTarget(url){
 const response=await fetch(base+"/json/new?"+encodeURIComponent(url),{method:"PUT"});
 if(!response.ok)throw Error("Chrome could not open a capture tab: "+response.status);
 return response.json();
}
async function captureOne(shot){
 const target=await openTarget(page);
 const socket=new WebSocket(target.webSocketDebuggerUrl);
 let sequence=0;
 const waiting=new Map();
 socket.onmessage=event=>{const msg=JSON.parse(event.data);if(msg.id&&waiting.has(msg.id)){const done=waiting.get(msg.id);waiting.delete(msg.id);msg.error?done.reject(Error(msg.error.message)):done.resolve(msg.result);}};
 await new Promise((resolve,reject)=>{socket.onopen=resolve;socket.onerror=()=>reject(Error("CDP websocket failed"));});
 const send=(method,params={})=>new Promise((resolve,reject)=>{const id=++sequence;waiting.set(id,{resolve,reject});socket.send(JSON.stringify({id,method,params}));});
 await send("Page.enable");
 await send("Runtime.enable");
 await send("Emulation.setDeviceMetricsOverride",{width:shots.width,height:shots.height,deviceScaleFactor:1,mobile:false});
 await send("Page.navigate",{url:page});
 let ready=false;
 for(let i=0;i<80;i++){await wait(150);const result=await send("Runtime.evaluate",{expression:"Boolean(window.__shotReady)",returnByValue:true});if(result.result?.value){ready=true;break;}}
 if(!ready)throw Error("App did not report capture readiness");
 const selected=await send("Runtime.evaluate",{expression:"window.__setShot("+JSON.stringify(shot.view)+")",awaitPromise:true,returnByValue:true});
 if(selected.exceptionDetails)throw Error("Could not select screenshot view: "+shot.view);
 await wait(400);
 const shotResult=await send("Page.captureScreenshot",{format:"jpeg",quality:72,fromSurface:true});
 const bytes=Buffer.from(shotResult.data,"base64");
 mkdirSync(join(root,"screenshots"),{recursive:true});
 writeFileSync(join(root,"screenshots",shot.name),bytes);
 await fetch(base+"/json/close/"+target.id);
 socket.close();
 return bytes.length;
}
for(const shot of shots.shots){const size=await captureOne(shot);console.log(shot.name+": "+size+" bytes");}
