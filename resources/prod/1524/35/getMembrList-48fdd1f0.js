import{t,c as n,az as r,a7 as e,ag as s}from"./calfSystem-fe0ebf32.js"
import{c as u}from"./currentGuildId-09820c92.js"
import{c as o}from"./cmdExport-fd555515.js"
import{g as i,s as m}from"./idb-b0de0ac7.js"
function c(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}function f(n){return i("fsh_membrList").then(t(c,n)),n}function a(t,n){const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return o({guild_id:t,subcmd:"guild_members"})}(n).then(t(a,n))}function b(t){return d(t).then(f)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return p.every(t(h,n,r))}(n,r)?r:b(n)}function g(t,r){return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?b(r):i("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-48fdd1f0.js.map
