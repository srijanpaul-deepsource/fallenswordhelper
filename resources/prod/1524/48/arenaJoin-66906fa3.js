import{R as e,m as t,h as s,B as i,t as r,f as a,i as n,aA as o,D as c,z as d}from"./calfSystem-85fa6364.js"
import{a as m,i as l,v as f}from"./arena-16e14626.js"
import{i as p}from"./interceptSubmit-6f4d5b99.js"
import{a as u}from"./addCommas-5de3e9c4.js"
import{c as v}from"./createSelect-c9e79739.js"
import{i as j}from"./insertElementAfterBegin-fb8d21a6.js"
import{i as b}from"./isSelected-77d835f5.js"
import"./allthen-d828bb84.js"
import"./all-f24d81d0.js"
import"./closestTr-5f6e9767.js"
import"./closest-3a475e96.js"
import"./idb-160add45.js"
import"./intValue-9eb5015a.js"
import"./changeMinMax-6a9eb8c2.js"
import"./numberIsNaN-68797c81.js"
import"./assets-7b5d479d.js"
import"./lvlTests-20be337c.js"
import"./loadDataTables-632c755a.js"
import"./currentGuildId-01e2fed9.js"
import"./isArray-f9d2634e.js"
import"./setTipped-71facd91.js"
import"./formToUrl-fe5f507a.js"
import"./insertElementBefore-5adb1609.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function S(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&S(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(x,e.current_set)).join("")})
a(n,"change",r(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),S(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function A(){d("arenaTypeTabs")?l():(p(),f().catch((()=>({}))).then(E))}export default A
//# sourceMappingURL=arenaJoin-66906fa3.js.map
