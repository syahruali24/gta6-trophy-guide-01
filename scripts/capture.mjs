import { mkdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath, pathToFileURL } from "node:url";
import { setTimeout as pause } from "node:timers/promises";

const root = new URL("../", import.meta.url);
export const page = new URL("app/index.html", root);

export async function connect(port = 9222) {
  const base = "http://127.0.0.1:" + port;
  const response = await fetch(base + "/json/new?about:blank", {method:"PUT",signal:AbortSignal.timeout(5000)});
  if (!response.ok) throw new Error("Chrome refused a new tab: " + response.status);
  const tab = await response.json();
  const socket = new WebSocket(tab.webSocketDebuggerUrl);
  await new Promise((resolve,reject) => {
    socket.addEventListener("open", resolve, {once:true});
    socket.addEventListener("error", reject, {once:true});
    setTimeout(() => reject(new Error("CDP connection timed out")),5000).unref();
  });
  const waiting = new Map();
  let id = 0;
  socket.addEventListener("message", event => {
    const reply = JSON.parse(event.data);
    const call = waiting.get(reply.id);
    if (!call) return;
    waiting.delete(reply.id);
    clearTimeout(call.timer);
    if (reply.error) call.reject(new Error(reply.error.message));
    else call.resolve(reply.result);
  });
  const send = (method, params = {}) => new Promise((resolve,reject) => {
    const request = ++id;
    const timer = setTimeout(() => {
      waiting.delete(request);
      reject(new Error(method + " timed out"));
    },10000);
    waiting.set(request,{resolve,reject,timer});
    socket.send(JSON.stringify({id:request,method,params}));
  });
  async function evaluate(expression) {
    const answer = await send("Runtime.evaluate",{expression,returnByValue:true,awaitPromise:true});
    if (answer.exceptionDetails) throw new Error(answer.exceptionDetails.exception?.description || "Evaluation failed");
    return answer.result.value;
  }
  async function open(url) {
    const address = String(url);
    const result = await send("Page.navigate",{url:address});
    if (result.errorText) throw new Error(result.errorText);
    for (let i = 0; i < 80; i++) {
      if (await evaluate("location.href === " + JSON.stringify(address) + " && window.__shotReady === true").catch(() => false)) return;
      await pause(125);
    }
    throw new Error("App readiness timed out");
  }
  async function close() {
    socket.close();
    await fetch(base + "/json/close/" + tab.id,{signal:AbortSignal.timeout(3000)});
  }
  return {send,evaluate,open,close};
}

async function capture() {
  const output = new URL("screenshots/",root);
  await mkdir(output,{recursive:true});
  const shots = JSON.parse(await readFile(new URL("shots.json",root),"utf8"));
  if (shots.length !== 4 || new Set(shots.map(s => s.file)).size !== 4) throw new Error("Expected four distinct shots");
  const tab = await connect();
  try {
    await tab.send("Page.enable");
    await tab.send("Emulation.setDeviceMetricsOverride",{width:1280,height:800,deviceScaleFactor:1,mobile:false});
    for (const {file,query} of shots) {
      if (!/^[1-4]-[a-z]+\.jpg$/.test(file)) throw new Error("Invalid capture name");
      const url = new URL(page);
      url.searchParams.set("demo",query);
      await tab.open(url);
      await tab.evaluate("document.fonts.ready.then(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))))");
      let bytes;
      for (const quality of [94,86,74,60,45]) {
        const shot = await tab.send("Page.captureScreenshot",{format:"jpeg",quality,fromSurface:true});
        bytes = Buffer.from(shot.data,"base64");
        if (bytes.length <= 262144) break;
      }
      if (bytes.length > 262144 || bytes.subarray(0,3).toString("hex") !== "ffd8ff") throw new Error("Capture did not meet JPEG limits");
      await writeFile(new URL(file,output),bytes);
      console.log(file,bytes.length);
    }
  } finally {
    await tab.close();
  }
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) await capture();
