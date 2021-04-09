import{t,c as n,az as r,a7 as e,af as s}from"./calfSystem-7a1cce43.js"
import{c as u}from"./currentGuildId-c3cf68bc.js"
import{c}from"./cmdExport-b5bb530e.js"
import{g as i,s as o}from"./idb-c572d898.js"
function m(t,n){const r=n||{}
o("fsh_membrList",$.extend(r,t))}function f(n){return i("fsh_membrList").then(t(m,n)),n}function a(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return c({guild_id:t,subcmd:"guild_members"})}(n).then(t(a,n))}function b(t){return d(t).then(f)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return p.every(t(h,n,r))}(n,r)?r:b(n)}function g(t,r){return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?b(r):i("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-bfb04e21.js.map
