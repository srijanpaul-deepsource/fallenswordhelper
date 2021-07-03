import{S as t,m as e,h as s,B as i,t as a,f as r,i as n,aC as o,D as c,z as l}from"./calfSystem-01849445.js"
import{a as m,i as d,v as f}from"./arena-79551b85.js"
import{i as p}from"./interceptSubmit-12207649.js"
import{a as u}from"./addCommas-5de3e9c4.js"
import{c as v}from"./createSelect-894f0745.js"
import{i as j}from"./insertElementAfterBegin-93df6fa4.js"
import{i as b}from"./isSelected-77d835f5.js"
import"./allthen-d828bb84.js"
import"./all-f24d81d0.js"
import"./closestTr-74f72fa1.js"
import"./closest-3a475e96.js"
import"./idb-72291501.js"
import"./intValue-9eb5015a.js"
import"./changeMinMax-6a9eb8c2.js"
import"./numberIsNaN-68797c81.js"
import"./assets-7b5d479d.js"
import"./lvlTests-fdbc1e5b.js"
import"./loadDataTables-74577f9a.js"
import"./currentGuildId-8dd620e8.js"
import"./setTipped-71facd91.js"
import"./formToUrl-01a5ba54.js"
import"./insertElementBefore-5adb1609.js"
function g(e){const s=Number(t("pvp_id"))
return e.arenas.find((t=>t.id===s))}let $
function h(t,e){let s=String(e-1)
0===e&&(s="x"),n(t,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(t,e){return`<option value="${String(e.id)}"${b(t.slots.join(),e.slots.join())}>${e.name}</option>`}function x(t,r){const n=function(t){return $||($=s(t,e())),$}(r)
i("",n),t.slots.forEach(a(h,n))}function T(t,e,s){var i;(i=e.target.value,m({subcmd:"usesetup",set_id:i})).then((e=>{e.s&&x(s,t)}))}function N(t,e,s){const i=t.sets.find((t=>t.id===Number(s.target.value)))
i&&T(e,s,i)}function _(t,i,n){if(n.specials){const n=e({className:"flex"})
!function(t,i){if(t.sets.length>0){const n=v({innerHTML:t.sets.map(a(S,t.current_set)).join("")})
r(n,"change",a(N,t,i))
const o=e({className:"flex"})
s(o,n),j(i,o)}}(t,n),x(t.current_set,n),s(i,n)}}function y(t,e){return`<div><div>${t}</div><div><img src="${o}ui/arena/specials_${s=e,String(Number(s))}.png"></div></div>`
var s}function E(t){const e=c("#pCC > form > table tr:nth-of-type(4) td")
if(t.r&&e){e.setAttribute("align","center")
const s=g(t.r)
n(e,function(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${y("Specials",t.specials)}${y("Hell Forge",t.hellforge)}${y("Epic",t.epic)}<div><div>Max Equip Level</div><div>${u(t.equip_level)}</div></div></div>`}(s)),_(t.r,e,s)}}function C(){l("arenaTypeTabs")?d():(p(),f().catch((()=>({}))).then(E))}export default C
//# sourceMappingURL=arenaJoin-1fa28001.js.map
