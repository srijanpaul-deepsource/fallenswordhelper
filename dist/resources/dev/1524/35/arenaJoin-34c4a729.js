import{T as e,m as t,h as s,B as i,t as r,f as a,i as n,ao as o,D as c,z as l}from"./calfSystem-186455ab.js"
import{a as m,i as f,v as p}from"./arena-f81be7d3.js"
import{i as d}from"./interceptSubmit-24989074.js"
import{a as u}from"./addCommas-fa3f11ee.js"
import{c as v}from"./createSelect-3c00643c.js"
import{i as j}from"./insertElementAfterBegin-22d97b25.js"
import{i as b}from"./isSelected-8b20baae.js"
import"./allthen-e8de2991.js"
import"./all-3be74659.js"
import"./closestTr-27d31e9d.js"
import"./closest-1ff01e01.js"
import"./idb-97f66b86.js"
import"./intValue-1ce02c09.js"
import"./changeMinMax-51d14a10.js"
import"./numberIsNaN-1e8b4508.js"
import"./assets-716577f9.js"
import"./lvlTests-b430a512.js"
import"./loadDataTables-0667a93b.js"
import"./currentGuildId-7dd95943.js"
import"./setTipped-b11fa6f8.js"
import"./formToUrl-91e15396.js"
import"./insertElementBefore-9228b012.js"
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
//# sourceMappingURL=arenaJoin-34c4a729.js.map
