import{T as e,m as t,h as s,B as i,t as r,f as a,i as n,an as o,D as c,z as l}from"./calfSystem-d56087e1.js"
import{a as m,i as d,v as p}from"./arena-a2bdc8b8.js"
import{i as f}from"./interceptSubmit-1b6b81ff.js"
import{a as u}from"./addCommas-cec84c43.js"
import{c as v}from"./createSelect-87c2db87.js"
import{i as j}from"./insertElementAfterBegin-2d4418e8.js"
import{i as b}from"./isSelected-a688de7c.js"
import"./allthen-8480e63e.js"
import"./all-edb79f43.js"
import"./closestTr-5f1ce258.js"
import"./closest-4ebdb6d3.js"
import"./idb-a1e4e2c2.js"
import"./intValue-ba9b9e5a.js"
import"./changeMinMax-a6e17992.js"
import"./numberIsNaN-30cde299.js"
import"./assets-40e3d434.js"
import"./lvlTests-a778f69b.js"
import"./loadDataTables-851264f9.js"
import"./currentGuildId-1893e725.js"
import"./setTipped-f59a320f.js"
import"./formToUrl-becb9cc8.js"
import"./insertElementBefore-71272774.js"
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
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function M(){l("arenaTypeTabs")?d():(f(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-ad5cc950.js.map
