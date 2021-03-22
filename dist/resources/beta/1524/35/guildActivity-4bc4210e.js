import{$ as t,U as a,a5 as e,t as n}from"./calfSystem-03050396.js"
import{g as s}from"./guild-61d59bbe.js"
import{c as m}from"./currentGuildId-4235046f.js"
import{g as r}from"./guildView-b7aa8e6b.js"
import{u as i,a as o,c as u,m as c,l as f,v as l,g as d}from"./indexConstants-72ee67f7.js"
import{g as b,s as p}from"./idb-02fb3250.js"
import"./dataRows-737117b7.js"
import"./intValue-1ce02c09.js"
let g,h,_
function j(){return g||(g=s({subcmd:"manage"})),g}function v(){return m()?r(m()):Promise.reject(new Error("no guild id"))}function x(t){return Math.floor(Math.max(0,a-t)/86400)}function y(t){h.members[t.name].push([x(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}const U=[(t,a)=>a.current_stamina!==t[u],(t,a)=>a.max_stamina>t[c],(t,a)=>a.level!==t[f],(t,a)=>a.vl!==t[l],(t,a)=>a.guild_xp!==t[d]]
function w(t,a,e){return e(t,a)}function E(t,e){!function(t,a){return U.some(n(w,t,a))}(t,e)?(t[o]=x(e.last_activity),t[i]=a):y(e)}function A(t,e){!function(t){h.members[t.name]||(h.members[t.name]=[],y(t))}(e)
const n=h.members[e.name],s=n[n.length-1]
a-s[i]>=86100&&E(s,e),t.members[e.name]=h.members[e.name]}function M(t,a){a.members.forEach(n(A,t))}function V(t){t&&t.r&&(_=t,function(){const t={lastUpdate:a,members:{}}
_.r.ranks.forEach(n(M,t)),p("fsh_guildActivity",t)}())}function k(n){h=n||{lastUpdate:0,members:{}},a>e(h.lastUpdate,0)+300&&t(j,v).then(V)}function C(){b("fsh_guildActivity").then(k)}export default C
//# sourceMappingURL=guildActivity-4bc4210e.js.map
