import{S as e,m as t,h as s,B as i,t as r,f as a,i as n,al as o,D as c,z as l}from"./calfSystem-fe0ebf32.js"
import{a as m,i as f,v as p}from"./arena-ee3f392d.js"
import{i as d}from"./interceptSubmit-1425876c.js"
import{a as u}from"./addCommas-fa3f11ee.js"
import{c as v}from"./createSelect-3ebe7be5.js"
import{i as j}from"./insertElementAfterBegin-eef98cf1.js"
import{i as b}from"./isSelected-8b20baae.js"
import"./allthen-e8de2991.js"
import"./all-3be74659.js"
import"./closestTr-35c47492.js"
import"./closest-1ff01e01.js"
import"./idb-b0de0ac7.js"
import"./intValue-1ce02c09.js"
import"./changeMinMax-51d14a10.js"
import"./numberIsNaN-1e8b4508.js"
import"./assets-716577f9.js"
import"./lvlTests-353de1c5.js"
import"./loadDataTables-3c299285.js"
import"./currentGuildId-09820c92.js"
import"./isArray-c05157b9.js"
import"./setTipped-b11fa6f8.js"
import"./formToUrl-487e3c2d.js"
import"./insertElementBefore-9228b012.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,m({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(S,e.current_set)).join("")})
a(n,"change",r(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){l("arenaTypeTabs")?f():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-b7a2cec5.js.map
