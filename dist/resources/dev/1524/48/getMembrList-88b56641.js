import{t,c as n,aq as r,aa as e,am as s}from"./calfSystem-01849445.js"
import{c as u}from"./currentGuildId-8dd620e8.js"
import{c as i}from"./cmdExport-703b1590.js"
import{g as o,s as m}from"./idb-72291501.js"
function c(t,n){const r=n||{}
m("fsh_membrList",$.extend(r,t))}function a(n){return o("fsh_membrList").then(t(c,n)),n}function f(t,n){if(!n)return
const s=r(n.map((t=>[t.username,t])))
return{[t]:{lastUpdate:e,...s}}}function d(n){return function(t){return i({guild_id:t,subcmd:"guild_members"})}(n).then(t(f,n))}function p(t){return d(t).then(a)}const b=[(t,n)=>n,(t,n)=>s(n),(t,n)=>s(n[t]),(t,n)=>"number"==typeof n[t].lastUpdate,(t,n)=>n[t].lastUpdate>e-3e5]
function h(t,n,r){return r(t,n)}function l(n,r){return function(n,r){return b.every(t(h,n,r))}(n,r)?r:p(n)}function g(t,r){if(r)return n.membrList=r[t],n.membrList}function j(n){const r=u()
return r?function(n,r){return n?p(r):o("fsh_membrList").then(t(l,r))}(n,r).then(t(g,r)):Promise.reject(new Error("no guild id"))}export{j as g}
//# sourceMappingURL=getMembrList-88b56641.js.map
