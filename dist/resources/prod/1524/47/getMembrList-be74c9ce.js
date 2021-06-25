import{t,c as n,ao as r,a8 as e,ak as s}from"./calfSystem-a2fd9017.js"
import{c as u}from"./currentGuildId-871ea013.js"
import{c as i}from"./cmdExport-84fee8d4.js"
import{g as o,s as m}from"./idb-09e8fa3a.js"
function a(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}function f(n){return o("fsh_membrList").then(t(a,n)),n}function c(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(c,n))}function p(t){return d(t).then(f)}const b=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return b.every(t(h,n,r))}(n,r)?r:p(n)}function g(t,r){if(r)return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?p(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-be74c9ce.js.map
