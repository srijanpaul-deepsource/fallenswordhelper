import{S as t,m as s,h as e,B as i,t as a,f as r,i as n,au as o,D as c,z as f}from"./calfSystem-15b00143.js"
import{a as m,i as l,v as p}from"./arena-721f3cc9.js"
import{i as d}from"./interceptSubmit-a16f18a6.js"
import{a as u}from"./addCommas-99f495b9.js"
import{c as v}from"./createSelect-0ca50808.js"
import{i as j}from"./insertElementAfterBegin-6888d6e1.js"
import{i as b}from"./isSelected-07fc60b5.js"
import"./allthen-3a0631ad.js"
import"./all-9f53e8b3.js"
import"./closestTr-c53b56bf.js"
import"./closest-9a08f4fa.js"
import"./idb-1c9eb1ac.js"
import"./intValue-9eb8a210.js"
import"./changeMinMax-b261f8ce.js"
import"./numberIsNaN-484c0124.js"
import"./assets-62f5bf10.js"
import"./lvlTests-a299d5a1.js"
import"./loadDataTables-ad66bfa0.js"
import"./currentGuildId-ad15ffa8.js"
import"./isArray-68a41fd5.js"
import"./setTipped-1ee3895d.js"
import"./formToUrl-d1bb7512.js"
import"./insertElementBefore-34b77984.js"
function g(s){const e=Number(t("pvp_id"))
return s.arenas.find((t=>t.id===e))}let $
function h(t,s){let e=String(s-1)
0===s&&(e="x"),n(t,`<img src="${o}arena/${e}.png" class="moveImg">`)}function S(t,s){return`<option value="${String(s.id)}"${b(t.slots.join(),s.slots.join())}>${s.name}</option>`}function x(t,r){const n=function(t){return $||($=e(t,s())),$}(r)
i("",n),t.slots.forEach(a(h,n))}function T(t,s,e){var i;(i=s.target.value,m({subcmd:"usesetup",set_id:i})).then((s=>{s.s&&x(e,t)}))}function y(t,s,e){const i=t.sets.find((t=>t.id===Number(e.target.value)))
i&&T(s,e,i)}function N(t,i,n){if(n.specials){const n=s({className:"flex"})
!function(t,i){if(t.sets.length>0){const n=v({innerHTML:t.sets.map(a(S,t.current_set)).join("")})
r(n,"change",a(y,t,i))
const o=s({className:"flex"})
e(o,n),j(i,o)}}(t,n),x(t.current_set,n),e(i,n)}}function _(t,s){return`<div><div>${t}</div><div><img src="${o}ui/arena/specials_${e=s,String(Number(e))}.png"></div></div>`
var e}function E(t){const s=c("#pCC > form > table tr:nth-of-type(4) td")
if(t.r&&s){s.setAttribute("align","center")
const e=g(t.r)
n(s,function(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${_("Specials",t.specials)}${_("Hell Forge",t.hellforge)}${_("Epic",t.epic)}<div><div>Max Equip Level</div><div>${u(t.equip_level)}</div></div></div>`}(e)),N(t.r,s,e)}}function M(){f("arenaTypeTabs")?l():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-71569a85.js.map
