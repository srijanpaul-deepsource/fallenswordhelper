import{u as e,v as n,z as r,b as t,d as a,U as s,bv as m,H as c,bw as u}from"./calfSystem-fe0ebf32.js"
import{d as i}from"./dataRows-fe9c44ea.js"
import{i as d}from"./intValue-1ce02c09.js"
const l={}
function o(e){const n=e.match(u)
return s-(24*Number(n[1])*60*60+60*Number(n[2])*60+60*Number(n[3])+Number(n[4]))}function f(e){const{tipped:n}=e.cells[1].children[0].dataset,r=n.match(/Stamina:<\/td><td>(\d+) \/ (\d+)</)
return{current_stamina:Number(r[1]),max_stamina:Number(r[2]),vl:Number(n.match(/VL:<\/td><td>(\d+)</)[1]),last_activity:o(n)}}function b(e){return{id:Number(e.cells[1].children[0].href.match(m)[1]),name:c(e.cells[1].children[0]),level:Number(c(e.cells[2])),xp:0,guild_xp:d(c(e.cells[4])),rank_name:c(e.cells[3])}}function h(e,n){return{rank_index:n,...f(e),...b(e)}}function p(e,n){const r=n.rank_name,t=n.rank_index,a=e.find((e=>e.name===r))
return a?a.members.push(n):e.push({id:t,name:r,members:[n]}),e}function N(e){return i(e.rows,5,1).map(h).reduce(p,[])}function _(e){const s=n(e),m=r("pCC",s),c=t(a,m),u=c[c.length-1]
return u?{r:{ranks:N(u)},s:!0}:{s:!1}}function v(n){return l[n]||(l[n]=e({cmd:"guild",subcmd:"view",guild_id:n}).then(_)),l[n]}export{v as g}
//# sourceMappingURL=guildView-a2e4ecef.js.map
