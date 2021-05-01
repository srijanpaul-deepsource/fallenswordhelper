import{T as e,m as t,h as s,B as i,t as r,f as a,i as n,aw as o,D as c,z as l}from"./calfSystem-c464cb1d.js"
import{a as m,i as f,v as p}from"./arena-823f2384.js"
import{i as d}from"./interceptSubmit-ce385627.js"
import{a as u}from"./addCommas-6123a9f9.js"
import{c as v}from"./createSelect-7db8729a.js"
import{i as j}from"./insertElementAfterBegin-1e95816f.js"
import{i as b}from"./isSelected-b93489f2.js"
import"./allthen-7b3f20e7.js"
import"./all-be4763d3.js"
import"./closestTr-810f6a0f.js"
import"./closest-abbeba17.js"
import"./idb-870991e0.js"
import"./intValue-e485889b.js"
import"./changeMinMax-969ea6b3.js"
import"./numberIsNaN-2764ce9c.js"
import"./assets-5392162d.js"
import"./lvlTests-85066328.js"
import"./loadDataTables-a094c6b3.js"
import"./currentGuildId-72946831.js"
import"./setTipped-c42cf871.js"
import"./formToUrl-89e002dc.js"
import"./insertElementBefore-6e80e0ff.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function T(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function S(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function N(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&S(t,s,i)}function _(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(T,e.current_set)).join("")})
a(n,"change",r(N,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function y(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function M(){l("arenaTypeTabs")?f():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-d178cbcc.js.map
