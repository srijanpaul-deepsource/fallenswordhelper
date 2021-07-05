import{S as e,m as t,h as s,B as i,t as a,f as r,i as n,aC as o,D as c,z as l}from"./calfSystem-9ab64478.js"
import{a as m,i as f,v as d}from"./arena-98f7c635.js"
import{i as p}from"./interceptSubmit-ba23111a.js"
import{a as u}from"./addCommas-1f67a5b9.js"
import{c as v}from"./createSelect-7e51edd8.js"
import{i as j}from"./insertElementAfterBegin-ff2c1da5.js"
import{i as b}from"./isSelected-3746a3a4.js"
import"./allthen-f7cedfa7.js"
import"./all-bb953856.js"
import"./closestTr-e99b6a01.js"
import"./closest-0e1c7a1d.js"
import"./idb-9da90398.js"
import"./intValue-f11572ef.js"
import"./changeMinMax-98de10ec.js"
import"./numberIsNaN-9a364388.js"
import"./assets-f2535d93.js"
import"./lvlTests-e3abbf2e.js"
import"./loadDataTables-5edaaf63.js"
import"./currentGuildId-c05147ac.js"
import"./setTipped-11c01061.js"
import"./formToUrl-6294f17c.js"
import"./insertElementBefore-c7161beb.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function T(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function N(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function _(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(S,e.current_set)).join("")})
r(n,"change",a(N,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function y(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function C(){l("arenaTypeTabs")?f():(p(),d().catch((()=>({}))).then(E))}export default C
//# sourceMappingURL=arenaJoin-56c153d8.js.map
