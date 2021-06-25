import{R as e,m as t,h as s,B as i,t as a,f as r,i as n,ay as o,D as c,z as m}from"./calfSystem-a2fd9017.js"
import{a as l,i as p,v as f}from"./arena-953b4895.js"
import{i as d}from"./interceptSubmit-ce135195.js"
import{a as u}from"./addCommas-27b35f1c.js"
import{c as v}from"./createSelect-74d50a3a.js"
import{i as j}from"./insertElementAfterBegin-0945414a.js"
import{i as b}from"./isSelected-a02583fd.js"
import"./allthen-2719c129.js"
import"./all-ceaf9817.js"
import"./closestTr-c667a8e5.js"
import"./closest-4542e515.js"
import"./idb-09e8fa3a.js"
import"./intValue-e4ce6bb5.js"
import"./changeMinMax-53cfdc4f.js"
import"./numberIsNaN-2f104aa2.js"
import"./assets-e9494ccd.js"
import"./lvlTests-a0a61e5e.js"
import"./loadDataTables-b1cb127b.js"
import"./currentGuildId-871ea013.js"
import"./isArray-fb536e29.js"
import"./setTipped-27e246a8.js"
import"./formToUrl-a8a254b6.js"
import"./insertElementBefore-165ce171.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function y(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function S(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&y(s,e)}))}function T(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&S(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(x,e.current_set)).join("")})
r(n,"change",a(T,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),y(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){m("arenaTypeTabs")?p():(d(),f().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-a51d8473.js.map
