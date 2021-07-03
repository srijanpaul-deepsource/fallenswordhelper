import{t,c as n,ap as r,a9 as e,al as s}from"./calfSystem-8af1dca2.js"
import{c as u}from"./currentGuildId-ae75dbfc.js"
import{c as i}from"./cmdExport-c3a6f54b.js"
import{g as o,s as a}from"./idb-30d71a28.js"
function c(t,n){const r=n||{}
a("fsh_membrList",$.extend(r,t))}function m(n){return o("fsh_membrList").then(t(c,n)),n}function f(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(f,n))}function p(t){return d(t).then(m)}const b=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function l(t,n,r){return r(t,n)}function h(n,r){return function(n,r){return b.every(t(l,n,r))}(n,r)?r:p(n)}function g(t,r){if(r)return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?p(r):o("fsh_membrList").then(t(h,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-cb94da61.js.map
