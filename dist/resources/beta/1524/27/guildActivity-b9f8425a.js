import{T as t,a3 as a,t as n}from"./calfSystem-70c7a660.js"
import{g as s,s as e}from"./idb-d93da5f0.js"
import{u as m,a as i,c as r,m as o,l as c,v as u,g as f}from"./indexConstants-b81ff7d8.js"
import{g as l}from"./guild-4439d23d.js"
let d,b,p
function g(){return d||(d=l({subcmd:"manage"})),d}function h(a){return Math.floor(Math.max(0,t-a)/86400)}function _(a){b.members[a.name].push([h(a.last_activity),a.current_stamina,a.level,a.max_stamina,t,a.vl,a.guild_xp])}const v=[(t,a)=>a.current_stamina!==t[r],(t,a)=>a.max_stamina>t[o],(t,a)=>a.level!==t[c],(t,a)=>a.vl!==t[u],(t,a)=>a.guild_xp!==t[f]]
function x(t,a,n){return n(t,a)}function y(a,s){!function(t,a){return v.some(n(x,t,a))}(a,s)?(a[i]=h(s.last_activity),a[m]=t):_(s)}function j(a,n){!function(t){b.members[t.name]||(b.members[t.name]=[],_(t))}(n)
const s=b.members[n.name],e=s[s.length-1]
t-e[m]>=86100&&y(e,n),a.members[n.name]=b.members[n.name]}function U(t,a){a.members.forEach(n(j,t))}function A(a){a&&a.r&&(p=a,function(){const a={lastUpdate:t,members:{}}
p.r.ranks.forEach(n(U,a)),e("fsh_guildActivity",a)}())}function E(n){b=n||{lastUpdate:0,members:{}},t>a(b.lastUpdate,0)+300&&g().then(A)}function M(){s("fsh_guildActivity").then(E)}export default M
//# sourceMappingURL=guildActivity-b9f8425a.js.map