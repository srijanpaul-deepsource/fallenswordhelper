import{T as e,m as t,h as s,B as i,t as r,f as a,i as n,ax as o,D as c,z as l}from"./calfSystem-4b6b865d.js"
import{a as m,i as f,v as p}from"./arena-28697b8d.js"
import{i as d}from"./interceptSubmit-4558b472.js"
import{a as u}from"./addCommas-99f495b9.js"
import{c as v}from"./createSelect-67ae9c02.js"
import{i as j}from"./insertElementAfterBegin-4ec7552e.js"
import{i as b}from"./isSelected-07fc60b5.js"
import"./allthen-3a0631ad.js"
import"./all-9f53e8b3.js"
import"./closestTr-2426267d.js"
import"./closest-9a08f4fa.js"
import"./idb-a46a6973.js"
import"./intValue-9eb8a210.js"
import"./changeMinMax-b261f8ce.js"
import"./numberIsNaN-484c0124.js"
import"./assets-62f5bf10.js"
import"./lvlTests-dd53afb2.js"
import"./loadDataTables-37ce9f53.js"
import"./currentGuildId-830390c7.js"
import"./setTipped-1ee3895d.js"
import"./formToUrl-c8d32791.js"
import"./insertElementBefore-34b77984.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function T(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function S(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&T(s,e)}))}function N(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&S(t,s,i)}function _(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(x,e.current_set)).join("")})
a(n,"change",r(N,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),T(e.current_set,n),s(i,n)}}function y(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function M(){l("arenaTypeTabs")?f():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-cd82fe8c.js.map
