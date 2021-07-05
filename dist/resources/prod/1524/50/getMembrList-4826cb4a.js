import{t,c as n,ao as r,a8 as e,ak as s}from"./calfSystem-365d90f3.js"
import{c as u}from"./currentGuildId-605c07b2.js"
import{c as i}from"./cmdExport-16d6b4f1.js"
import{g as o,s as m}from"./idb-62f64cd2.js"
function c(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}function f(n){return o("fsh_membrList").then(t(c,n)),n}function a(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(a,n))}function b(t){return d(t).then(f)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return p.every(t(h,n,r))}(n,r)?r:b(n)}function g(t,r){if(r)return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?b(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-4826cb4a.js.map
