import{R as e,m as t,h as s,B as i,t as a,f as r,i as n,aB as o,D as c,z as m}from"./calfSystem-42f137cb.js"
import{a as l,i as d,v as f}from"./arena-e0c6cb3b.js"
import{i as p}from"./interceptSubmit-b85719fa.js"
import{a as u}from"./addCommas-1f67a5b9.js"
import{c as v}from"./createSelect-27921629.js"
import{i as b}from"./insertElementAfterBegin-c46ad05b.js"
import{i as j}from"./isSelected-3746a3a4.js"
import"./allthen-f7cedfa7.js"
import"./all-bb953856.js"
import"./closestTr-2c592cbb.js"
import"./closest-0e1c7a1d.js"
import"./idb-6beadc2c.js"
import"./intValue-f11572ef.js"
import"./changeMinMax-98de10ec.js"
import"./numberIsNaN-9a364388.js"
import"./assets-f2535d93.js"
import"./lvlTests-52345e92.js"
import"./loadDataTables-a189ddcc.js"
import"./currentGuildId-d1f28a3b.js"
import"./isArray-be6d57af.js"
import"./setTipped-11c01061.js"
import"./formToUrl-869dd05e.js"
import"./insertElementBefore-c7161beb.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(e,t){return`<option value="${String(t.id)}"${j(e.slots.join(),t.slots.join())}>${t.name}</option>`}function S(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function T(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&S(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(x,e.current_set)).join("")})
r(n,"change",a(y,e,i))
const o=t({className:"flex"})
s(o,n),b(i,o)}}(e,n),S(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function B(){m("arenaTypeTabs")?d():(p(),f().catch((()=>({}))).then(E))}export default B
//# sourceMappingURL=arenaJoin-961bea6e.js.map
