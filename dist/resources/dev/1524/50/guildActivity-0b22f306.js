import{d as t,l as a}from"./lastActivityToDays-615dfac7.js"
import{V as s,a6 as n,t as e}from"./calfSystem-b3667af8.js"
import{u as m,a as i,c as r,m as o,l as c,v as f,g as l}from"./indexConstants-430344ec.js"
import{g as u,s as d}from"./idb-22dd2687.js"
import"./guild-d8974bcd.js"
let b,p
function v(t){b.members[t.name].push([a(t.last_activity),t.current_stamina,t.level,t.max_stamina,s,t.vl,t.guild_xp])}const _=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[o],(t,a)=>a.level!==t[c],(t,a)=>a.vl!==t[f],(t,a)=>a.guild_xp!==t[l]]
function g(t,a,s){return s(t,a)}function h(t,n){!function(t,a){return _.some(e(g,t,a))}(t,n)?(t[i]=a(n.last_activity),t[m]=s):v(n)}function y(t,a){!function(t){b.members[t.name]||(b.members[t.name]=[],v(t))}(a)
const n=b.members[a.name],e=n[n.length-1]
s-e[m]>=86100&&h(e,a),t.members[a.name]=b.members[a.name]}function x(t,a){a.members.forEach(e(y,t))}function j(t){t&&t.r&&(p=t,function(){const t={lastUpdate:s,members:{}}
p.r.ranks.forEach(e(x,t)),d("fsh_guildActivity",t)}())}function A(a){b=a||{lastUpdate:0,members:{}},s>n(b.lastUpdate,0)+300&&t().then(j)}function U(){u("fsh_guildActivity").then(A)}export default U
//# sourceMappingURL=guildActivity-0b22f306.js.map
