import{S as e,m as t,h as s,B as i,t as r,f as a,i as n,aC as o,D as c,z as d}from"./calfSystem-b3667af8.js"
import{a as f,i as l,v as m}from"./arena-d945c962.js"
import{i as p}from"./interceptSubmit-dd886fe1.js"
import{a as u}from"./addCommas-b66fde4c.js"
import{c as v}from"./createSelect-341e7b0e.js"
import{i as j}from"./insertElementAfterBegin-f84b0883.js"
import{i as b}from"./isSelected-70ffb4dd.js"
import"./allthen-2ff5fddb.js"
import"./all-9b215cd1.js"
import"./closestTr-868b7fea.js"
import"./closest-06418423.js"
import"./idb-22dd2687.js"
import"./intValue-76dfee09.js"
import"./changeMinMax-5835769c.js"
import"./numberIsNaN-bf55a311.js"
import"./assets-64d5f82f.js"
import"./lvlTests-b339adbe.js"
import"./loadDataTables-ad74b274.js"
import"./currentGuildId-01980e74.js"
import"./setTipped-5e35ee46.js"
import"./formToUrl-872022b8.js"
import"./insertElementBefore-784d4581.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,f({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function N(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function _(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(S,e.current_set)).join("")})
a(n,"change",r(N,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function y(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${y("Specials",e.specials)}${y("Hell Forge",e.hellforge)}${y("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),_(e.r,t,s)}}function C(){d("arenaTypeTabs")?l():(p(),m().catch((()=>({}))).then(E))}export default C
//# sourceMappingURL=arenaJoin-4acd8b6e.js.map
