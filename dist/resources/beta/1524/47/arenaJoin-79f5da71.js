import{R as e,m as t,h as s,B as i,t as r,f as a,i as n,aA as o,D as c,z as m}from"./calfSystem-db2edbef.js"
import{a as l,i as f,v as d}from"./arena-2050beb0.js"
import{i as p}from"./interceptSubmit-37405c90.js"
import{a as u}from"./addCommas-27b35f1c.js"
import{c as v}from"./createSelect-cf3062d3.js"
import{i as j}from"./insertElementAfterBegin-9758a790.js"
import{i as b}from"./isSelected-a02583fd.js"
import"./allthen-2719c129.js"
import"./all-ceaf9817.js"
import"./closestTr-72dc4267.js"
import"./closest-4542e515.js"
import"./idb-937dea46.js"
import"./intValue-e4ce6bb5.js"
import"./changeMinMax-53cfdc4f.js"
import"./numberIsNaN-2f104aa2.js"
import"./assets-e9494ccd.js"
import"./lvlTests-d3684efc.js"
import"./loadDataTables-25f545a1.js"
import"./currentGuildId-3f7c0e1c.js"
import"./isArray-fb536e29.js"
import"./setTipped-27e246a8.js"
import"./formToUrl-b338bcd1.js"
import"./insertElementBefore-165ce171.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function S(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&S(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(x,e.current_set)).join("")})
a(n,"change",r(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),S(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function A(){m("arenaTypeTabs")?f():(p(),d().catch((()=>({}))).then(E))}export default A
//# sourceMappingURL=arenaJoin-79f5da71.js.map
