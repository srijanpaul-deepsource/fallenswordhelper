import{d as t,l as a}from"./lastActivityToDays-716a00c1.js"
import{V as s,a6 as n,t as e}from"./calfSystem-01849445.js"
import{u as m,a as i,c as r,m as c,l as o,v as f,g as l}from"./indexConstants-5aacac15.js"
import{g as u,s as d}from"./idb-72291501.js"
import"./guild-4745cf8f.js"
let p,b
function v(t){p.members[t.name].push([a(t.last_activity),t.current_stamina,t.level,t.max_stamina,s,t.vl,t.guild_xp])}const _=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[c],(t,a)=>a.level!==t[o],(t,a)=>a.vl!==t[f],(t,a)=>a.guild_xp!==t[l]]
function g(t,a,s){return s(t,a)}function h(t,n){!function(t,a){return _.some(e(g,t,a))}(t,n)?(t[i]=a(n.last_activity),t[m]=s):v(n)}function y(t,a){!function(t){p.members[t.name]||(p.members[t.name]=[],v(t))}(a)
const n=p.members[a.name],e=n[n.length-1]
s-e[m]>=86100&&h(e,a),t.members[a.name]=p.members[a.name]}function x(t,a){a.members.forEach(e(y,t))}function j(t){t&&t.r&&(b=t,function(){const t={lastUpdate:s,members:{}}
b.r.ranks.forEach(e(x,t)),d("fsh_guildActivity",t)}())}function A(a){p=a||{lastUpdate:0,members:{}},s>n(p.lastUpdate,0)+300&&t().then(j)}function U(){u("fsh_guildActivity").then(A)}export default U
//# sourceMappingURL=guildActivity-902b261c.js.map
