import{S as e,m as t,h as s,B as i,t as r,f as a,i as n,aB as o,D as c,z as f}from"./calfSystem-bfc1f6c0.js"
import{a as l,i as m,v as d}from"./arena-76f42bbc.js"
import{i as p}from"./interceptSubmit-6c866cd4.js"
import{a as u}from"./addCommas-27b35f1c.js"
import{c as v}from"./createSelect-9df19b0f.js"
import{i as j}from"./insertElementAfterBegin-8e0b3cdc.js"
import{i as b}from"./isSelected-a02583fd.js"
import"./allthen-2719c129.js"
import"./all-ceaf9817.js"
import"./closestTr-c2f47269.js"
import"./closest-4542e515.js"
import"./idb-d8a4a427.js"
import"./intValue-e4ce6bb5.js"
import"./changeMinMax-53cfdc4f.js"
import"./numberIsNaN-2f104aa2.js"
import"./assets-e9494ccd.js"
import"./lvlTests-4fdba93f.js"
import"./loadDataTables-e7b030ee.js"
import"./currentGuildId-92fe6d54.js"
import"./setTipped-27e246a8.js"
import"./formToUrl-bf2c911a.js"
import"./insertElementBefore-165ce171.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function N(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function _(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(S,e.current_set)).join("")})
a(n,"change",r(N,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function y(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function B(){f("arenaTypeTabs")?m():(p(),d().catch((()=>({}))).then(E))}export default B
//# sourceMappingURL=arenaJoin-e0a7785b.js.map
