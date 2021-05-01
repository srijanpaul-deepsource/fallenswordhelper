import{T as e,m as t,h as s,B as i,t as a,f as r,i as n,ax as o,D as c,z as l}from"./calfSystem-817ceb25.js"
import{a as m,i as d,v as f}from"./arena-48f688e4.js"
import{i as p}from"./interceptSubmit-b5f83dc2.js"
import{a as u}from"./addCommas-81c8f148.js"
import{c as v}from"./createSelect-cc3a9931.js"
import{i as j}from"./insertElementAfterBegin-fb5a3996.js"
import{i as b}from"./isSelected-db9e9a8c.js"
import"./allthen-13a2ca46.js"
import"./all-73a73e22.js"
import"./closestTr-710e3fd1.js"
import"./closest-865e9de8.js"
import"./idb-104727d0.js"
import"./intValue-af3aed3f.js"
import"./changeMinMax-9818e713.js"
import"./numberIsNaN-9d4c441b.js"
import"./assets-cf4c1cc6.js"
import"./lvlTests-d8350da2.js"
import"./loadDataTables-71d4a49e.js"
import"./currentGuildId-0741b5a4.js"
import"./setTipped-2eacee59.js"
import"./formToUrl-0f02df3e.js"
import"./insertElementBefore-2bf2da7f.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function T(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function S(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&T(s,e)}))}function N(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&S(t,s,i)}function _(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(x,e.current_set)).join("")})
r(n,"change",a(N,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),T(e.current_set,n),s(i,n)}}function y(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function M(){l("arenaTypeTabs")?d():(p(),f().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-a93000f6.js.map
