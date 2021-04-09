import{S as e,m as t,h as s,B as i,t as a,f as r,i as n,ak as o,D as c,z as m}from"./calfSystem-7a1cce43.js"
import{a as l,i as p,v as d}from"./arena-e71ea196.js"
import{i as f}from"./interceptSubmit-8bfb8c60.js"
import{a as u}from"./addCommas-cec84c43.js"
import{c as v}from"./createSelect-47c0afa8.js"
import{i as j}from"./insertElementAfterBegin-29d2f9c4.js"
import{i as b}from"./isSelected-a688de7c.js"
import"./allthen-8480e63e.js"
import"./all-edb79f43.js"
import"./closestTr-74523325.js"
import"./closest-4ebdb6d3.js"
import"./idb-c572d898.js"
import"./intValue-ba9b9e5a.js"
import"./changeMinMax-a6e17992.js"
import"./numberIsNaN-30cde299.js"
import"./assets-40e3d434.js"
import"./lvlTests-57aa73a7.js"
import"./loadDataTables-40abef4b.js"
import"./currentGuildId-c3cf68bc.js"
import"./isArray-6eab9c89.js"
import"./setTipped-f59a320f.js"
import"./formToUrl-487e0bc3.js"
import"./insertElementBefore-71272774.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function T(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(S,e.current_set)).join("")})
r(n,"change",a(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){m("arenaTypeTabs")?p():(f(),d().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-852a481e.js.map
