import{d as t,l as a}from"./lastActivityToDays-959ee360.js"
import{V as s,a6 as e,t as n}from"./calfSystem-4b6b865d.js"
import{u as m,a as i,c as r,m as o,l as c,v as f,g as l}from"./indexConstants-6fab66f5.js"
import{g as u,s as b}from"./idb-a46a6973.js"
import"./guild-91284196.js"
let d,p
function v(t){d.members[t.name].push([a(t.last_activity),t.current_stamina,t.level,t.max_stamina,s,t.vl,t.guild_xp])}const _=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[o],(t,a)=>a.level!==t[c],(t,a)=>a.vl!==t[f],(t,a)=>a.guild_xp!==t[l]]
function g(t,a,s){return s(t,a)}function h(t,e){!function(t,a){return _.some(n(g,t,a))}(t,e)?(t[i]=a(e.last_activity),t[m]=s):v(e)}function y(t,a){!function(t){d.members[t.name]||(d.members[t.name]=[],v(t))}(a)
const e=d.members[a.name],n=e[e.length-1]
s-n[m]>=86100&&h(n,a),t.members[a.name]=d.members[a.name]}function x(t,a){a.members.forEach(n(y,t))}function j(t){t&&t.r&&(p=t,function(){const t={lastUpdate:s,members:{}}
p.r.ranks.forEach(n(x,t)),b("fsh_guildActivity",t)}())}function A(a){d=a||{lastUpdate:0,members:{}},s>e(d.lastUpdate,0)+300&&t().then(j)}function U(){u("fsh_guildActivity").then(A)}export default U
//# sourceMappingURL=guildActivity-47cc6a70.js.map
