import{d as t,l as s}from"./lastActivityToDays-292f2105.js"
import{V as a,a6 as e,t as n}from"./calfSystem-c464cb1d.js"
import{u as m,a as i,c as r,m as o,l as c,v as f,g as l}from"./indexConstants-eecdd98e.js"
import{g as u,s as d}from"./idb-870991e0.js"
import"./guild-fd341d08.js"
let p,b
function v(t){p.members[t.name].push([s(t.last_activity),t.current_stamina,t.level,t.max_stamina,a,t.vl,t.guild_xp])}const _=[(t,s)=>s.current_stamina!==t[r],(t,s)=>s.max_stamina>t[o],(t,s)=>s.level!==t[c],(t,s)=>s.vl!==t[f],(t,s)=>s.guild_xp!==t[l]]
function g(t,s,a){return a(t,s)}function h(t,e){!function(t,s){return _.some(n(g,t,s))}(t,e)?(t[i]=s(e.last_activity),t[m]=a):v(e)}function y(t,s){!function(t){p.members[t.name]||(p.members[t.name]=[],v(t))}(s)
const e=p.members[s.name],n=e[e.length-1]
a-n[m]>=86100&&h(n,s),t.members[s.name]=p.members[s.name]}function x(t,s){s.members.forEach(n(y,t))}function j(t){t&&t.r&&(b=t,function(){const t={lastUpdate:a,members:{}}
b.r.ranks.forEach(n(x,t)),d("fsh_guildActivity",t)}())}function A(s){p=s||{lastUpdate:0,members:{}},a>e(p.lastUpdate,0)+300&&t().then(j)}function U(){u("fsh_guildActivity").then(A)}export default U
//# sourceMappingURL=guildActivity-b84c19d9.js.map
