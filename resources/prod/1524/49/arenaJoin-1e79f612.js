import{R as e,m as t,h as s,B as i,t as r,f as a,i as n,aA as o,D as c,z as m}from"./calfSystem-2172498b.js"
import{a as l,i as d,v as f}from"./arena-52c6b605.js"
import{i as p}from"./interceptSubmit-2a47b722.js"
import{a as u}from"./addCommas-1f67a5b9.js"
import{c as v}from"./createSelect-44b1b645.js"
import{i as b}from"./insertElementAfterBegin-538ae729.js"
import{i as j}from"./isSelected-3746a3a4.js"
import"./allthen-f7cedfa7.js"
import"./all-bb953856.js"
import"./closestTr-3eb9ff66.js"
import"./closest-0e1c7a1d.js"
import"./idb-35c610a0.js"
import"./intValue-f11572ef.js"
import"./changeMinMax-98de10ec.js"
import"./numberIsNaN-9a364388.js"
import"./assets-f2535d93.js"
import"./lvlTests-4de98bd5.js"
import"./loadDataTables-58c1f40d.js"
import"./currentGuildId-7d9d343b.js"
import"./isArray-be6d57af.js"
import"./setTipped-11c01061.js"
import"./formToUrl-cbfebad5.js"
import"./insertElementBefore-c7161beb.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${j(e.slots.join(),t.slots.join())}>${t.name}</option>`}function S(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&S(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(x,e.current_set)).join("")})
a(n,"change",r(y,e,i))
const o=t({className:"flex"})
s(o,n),b(i,o)}}(e,n),S(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function A(){m("arenaTypeTabs")?d():(p(),f().catch((()=>({}))).then(E))}export default A
//# sourceMappingURL=arenaJoin-1e79f612.js.map
