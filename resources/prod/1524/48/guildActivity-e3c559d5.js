import{$ as a,U as t,a4 as n,t as s}from"./calfSystem-85fa6364.js"
import{g as e}from"./guild-4d3dc7f1.js"
import{u as m,a as i,c as r,m as o,l as c,v as u,g as f}from"./indexConstants-5aacac15.js"
import{g as l,s as d}from"./idb-160add45.js"
let b,p,g
function h(){return b||(b=e({subcmd:"manage"})),b}function _(a){return Math.floor(Math.max(0,t-a)/86400)}function v(a){p.members[a.name].push([_(a.last_activity),a.current_stamina,a.level,a.max_stamina,t,a.vl,a.guild_xp])}const x=[(a,t)=>t.current_stamina!==a[r],(a,t)=>t.max_stamina>a[o],(a,t)=>t.level!==a[c],(a,t)=>t.vl!==a[u],(a,t)=>t.guild_xp!==a[f]]
function y(a,t,n){return n(a,t)}function j(a,n){!function(a,t){return x.some(s(y,a,t))}(a,n)?(a[i]=_(n.last_activity),a[m]=t):v(n)}function U(a,n){!function(a){p.members[a.name]||(p.members[a.name]=[],v(a))}(n)
const s=p.members[n.name],e=s[s.length-1]
t-e[m]>=86100&&j(e,n),a.members[n.name]=p.members[n.name]}function A(a,t){t.members.forEach(s(U,a))}function E(a){a&&a.r&&(g=a,function(){const a={lastUpdate:t,members:{}}
g.r.ranks.forEach(s(A,a)),d("fsh_guildActivity",a)}())}function M(s){p=s||{lastUpdate:0,members:{}},t>n(p.lastUpdate,0)+300&&a(h).then(E)}function k(){l("fsh_guildActivity").then(M)}export default k
//# sourceMappingURL=guildActivity-e3c559d5.js.map
