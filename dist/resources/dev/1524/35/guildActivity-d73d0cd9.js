import{d as t,l as s}from"./lastActivityToDays-8e09feb5.js"
import{V as a,a6 as e,t as n}from"./calfSystem-186455ab.js"
import{u as m,a as i,c as r,m as o,l as c,v as u,g as f}from"./indexConstants-72ee67f7.js"
import{g as l,s as d}from"./idb-97f66b86.js"
import"./guild-7919b015.js"
import"./currentGuildId-7dd95943.js"
import"./guildView-bd6f17b6.js"
import"./dataRows-f1e5d572.js"
import"./intValue-1ce02c09.js"
let b,p
function v(t){b.members[t.name].push([s(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}const _=[(t,s)=>s.current_stamina!==t[r],(t,s)=>s.max_stamina>t[o],(t,s)=>s.level!==t[c],(t,s)=>s.vl!==t[u],(t,s)=>s.guild_xp!==t[f]]
function g(t,s,a){return a(t,s)}function j(t,e){!function(t,s){return _.some(n(g,t,s))}(t,e)?(t[i]=s(e.last_activity),t[m]=a):v(e)}function h(t,s){!function(t){b.members[t.name]||(b.members[t.name]=[],v(t))}(s)
const e=b.members[s.name],n=e[e.length-1]
a-n[m]>=86100&&j(n,s),t.members[s.name]=b.members[s.name]}function y(t,s){s.members.forEach(n(h,t))}function x(t){t&&t.r&&(p=t,function(){const t={lastUpdate:a,members:{}}
p.r.ranks.forEach(n(y,t)),d("fsh_guildActivity",t)}())}function A(s){b=s||{lastUpdate:0,members:{}},a>e(b.lastUpdate,0)+300&&t().then(x)}function U(){l("fsh_guildActivity").then(A)}export default U
//# sourceMappingURL=guildActivity-d73d0cd9.js.map
