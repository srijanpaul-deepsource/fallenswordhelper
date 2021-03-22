import{t,c as n,aB as r,a7 as e,ag as s}from"./calfSystem-03050396.js"
import{c as u}from"./currentGuildId-4235046f.js"
import{c as o}from"./cmdExport-c8e611b1.js"
import{g as i,s as m}from"./idb-02fb3250.js"
function c(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}function f(n){return i("fsh_membrList").then(t(c,n)),n}function a(t,n){const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return o({guild_id:t,subcmd:"guild_members"})}(n).then(t(a,n))}function b(t){return d(t).then(f)}const p=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return p.every(t(h,n,r))}(n,r)?r:b(n)}function g(t,r){return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?b(r):i("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-59c1e7a8.js.map
