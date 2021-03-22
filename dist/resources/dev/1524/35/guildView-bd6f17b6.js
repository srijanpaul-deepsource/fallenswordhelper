import{u as e,v as n,z as r,b as t,d as a,V as s,bw as m,H as u,bx as c}from"./calfSystem-186455ab.js"
import{d as i}from"./dataRows-f1e5d572.js"
import{i as d}from"./intValue-1ce02c09.js"
const l={}
function o(e){const n=e.match(c)
return s-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function b(e){const{tipped:n}=e.cells[1].children[0].dataset,r=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(r[1]),max_stamina:Number(r[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:o(n)}}function f(e){return{id:Number(e.cells[1].children[0].href.match(m)[1]),name:u(e.cells[1].children[0]),level:Number(u(e.cells[2])),xp:0,guild_xp:d(u(e.cells[4])),rank_name:u(e.cells[3])}}function h(e,n){return{rank_index:n,...b(e),...f(e)}}function p(e,n){const r=n.rank_name,t=n.rank_index,a=e.find((e=>e.name===r))
return a?a.members.push(n):e.push({id:t,name:r,members:[n]}),e}function N(e){return i(e.rows,5,1).map(h).reduce(p,[])}function _(e){const s=n(e),m=r("pCC",s),u=t(a,m),c=u[u.length-1]
return c?{r:{ranks:N(c)},s:!0}:{s:!1}}function x(n){return l[n]||(l[n]=e({cmd:"guild",subcmd:"view",guild_id:n}).then(_)),l[n]}export{x as g}
//# sourceMappingURL=guildView-bd6f17b6.js.map
