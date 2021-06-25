import{t,c as n,ap as r,a9 as e,al as s}from"./calfSystem-bfc1f6c0.js"
import{c as u}from"./currentGuildId-92fe6d54.js"
import{c as i}from"./cmdExport-f5d5b9e2.js"
import{g as o,s as f}from"./idb-d8a4a427.js"
function m(t,n){const r=n||{}
f("fsh_membrList",$.extend(r,t))}function c(n){return o("fsh_membrList").then(t(m,n)),n}function a(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(a,n))}function p(t){return d(t).then(c)}const b=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function l(t,n,r){return r(t,n)}function h(n,r){return function(n,r){return b.every(t(l,n,r))}(n,r)?r:p(n)}function g(t,r){if(r)return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?p(r):o("fsh_membrList").then(t(h,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-c0254b8a.js.map
