import{t,c as n,ao as r,a8 as e,ak as s}from"./calfSystem-2172498b.js"
import{c as u}from"./currentGuildId-7d9d343b.js"
import{c as i}from"./cmdExport-b6bb85ab.js"
import{g as o,s as m}from"./idb-35c610a0.js"
function c(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}function a(n){return o("fsh_membrList").then(t(c,n)),n}function f(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(f,n))}function b(t){return d(t).then(a)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return p.every(t(h,n,r))}(n,r)?r:b(n)}function g(t,r){if(r)return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?b(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-351d1812.js.map
