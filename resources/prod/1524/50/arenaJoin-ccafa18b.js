import{R as e,m as t,h as s,B as i,t as r,f as a,i as n,aA as o,D as c,z as f}from"./calfSystem-365d90f3.js"
import{a as d,i as m,v as l}from"./arena-79f2aa20.js"
import{i as p}from"./interceptSubmit-ed906294.js"
import{a as u}from"./addCommas-b66fde4c.js"
import{c as v}from"./createSelect-e6164fb8.js"
import{i as j}from"./insertElementAfterBegin-91a0ceb3.js"
import{i as b}from"./isSelected-70ffb4dd.js"
import"./allthen-2ff5fddb.js"
import"./all-9b215cd1.js"
import"./closestTr-75f82cf0.js"
import"./closest-06418423.js"
import"./idb-62f64cd2.js"
import"./intValue-76dfee09.js"
import"./changeMinMax-5835769c.js"
import"./numberIsNaN-bf55a311.js"
import"./assets-64d5f82f.js"
import"./lvlTests-914d7714.js"
import"./loadDataTables-068568ce.js"
import"./currentGuildId-605c07b2.js"
import"./isArray-2f495555.js"
import"./setTipped-5e35ee46.js"
import"./formToUrl-95d4fbda.js"
import"./insertElementBefore-784d4581.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function S(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,d({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&S(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(x,e.current_set)).join("")})
a(n,"change",r(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),S(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function A(){f("arenaTypeTabs")?m():(p(),l().catch((()=>({}))).then(E))}export default A
//# sourceMappingURL=arenaJoin-ccafa18b.js.map
