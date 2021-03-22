import{$ as t,U as e,a5 as a,t as n}from"./calfSystem-fe0ebf32.js"
import{g as s}from"./guild-8f63aac2.js"
import{c as m}from"./currentGuildId-09820c92.js"
import{g as r}from"./guildView-a2e4ecef.js"
import{u as i,a as o,c,m as u,l as f,v as l,g as d}from"./indexConstants-72ee67f7.js"
import{g as p,s as b}from"./idb-b0de0ac7.js"
import"./dataRows-fe9c44ea.js"
import"./intValue-1ce02c09.js"
let g,h,_
function j(){return g||(g=s({subcmd:"manage"})),g}function v(){return m()?r(m()):Promise.reject(new Error("no guild id"))}function x(t){return Math.floor(Math.max(0,e-t)/86400)}function y(t){h.members[t.name].push([x(t.last_activity),t.current_stamina,t.level,t.max_stamina,e,t.vl,t.guild_xp])}const U=[(t,e)=>e.current_stamina!==t[c],(t,e)=>e.max_stamina>t[u],(t,e)=>e.level!==t[f],(t,e)=>e.vl!==t[l],(t,e)=>e.guild_xp!==t[d]]
function w(t,e,a){return a(t,e)}function E(t,a){!function(t,e){return U.some(n(w,t,e))}(t,a)?(t[o]=x(a.last_activity),t[i]=e):y(a)}function A(t,a){!function(t){h.members[t.name]||(h.members[t.name]=[],y(t))}(a)
const n=h.members[a.name],s=n[n.length-1]
e-s[i]>=86100&&E(s,a),t.members[a.name]=h.members[a.name]}function M(t,e){e.members.forEach(n(A,t))}function V(t){t&&t.r&&(_=t,function(){const t={lastUpdate:e,members:{}}
_.r.ranks.forEach(n(M,t)),b("fsh_guildActivity",t)}())}function k(n){h=n||{lastUpdate:0,members:{}},e>a(h.lastUpdate,0)+300&&t(j,v).then(V)}function C(){p("fsh_guildActivity").then(k)}export default C
//# sourceMappingURL=guildActivity-5d5a5ed2.js.map
