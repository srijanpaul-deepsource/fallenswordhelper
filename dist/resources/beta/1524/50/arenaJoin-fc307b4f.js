import{R as t,m as e,h as s,B as i,t as r,f as a,i as n,aB as o,D as c,z as f}from"./calfSystem-617f9a5d.js"
import{a as m,i as l,v as d}from"./arena-411cf316.js"
import{i as p}from"./interceptSubmit-6761ad9f.js"
import{a as u}from"./addCommas-b66fde4c.js"
import{c as v}from"./createSelect-5b8bfcff.js"
import{i as j}from"./insertElementAfterBegin-931665a2.js"
import{i as b}from"./isSelected-70ffb4dd.js"
import"./allthen-2ff5fddb.js"
import"./all-9b215cd1.js"
import"./closestTr-bf59743f.js"
import"./closest-06418423.js"
import"./idb-443c992c.js"
import"./intValue-76dfee09.js"
import"./changeMinMax-5835769c.js"
import"./numberIsNaN-bf55a311.js"
import"./assets-64d5f82f.js"
import"./lvlTests-2c3872b9.js"
import"./loadDataTables-cdc37e7e.js"
import"./currentGuildId-3b40ad81.js"
import"./isArray-2f495555.js"
import"./setTipped-5e35ee46.js"
import"./formToUrl-4962600c.js"
import"./insertElementBefore-784d4581.js"
function g(e){const s=Number(t("pvp_id"))
return e.arenas.find((t=>t.id===s))}let $
function h(t,e){let s=String(e-1)
0===e&&(s="x"),n(t,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(t,e){return`<option value="${String(e.id)}"${b(t.slots.join(),e.slots.join())}>${e.name}</option>`}function S(t,a){const n=function(t){return $||($=s(t,e())),$}(a)
i("",n),t.slots.forEach(r(h,n))}function T(t,e,s){var i;(i=e.target.value,m({subcmd:"usesetup",set_id:i})).then((e=>{e.s&&S(s,t)}))}function y(t,e,s){const i=t.sets.find((t=>t.id===Number(s.target.value)))
i&&T(e,s,i)}function N(t,i,n){if(n.specials){const n=e({className:"flex"})
!function(t,i){if(t.sets.length>0){const n=v({innerHTML:t.sets.map(r(x,t.current_set)).join("")})
a(n,"change",r(y,t,i))
const o=e({className:"flex"})
s(o,n),j(i,o)}}(t,n),S(t.current_set,n),s(i,n)}}function _(t,e){return`<div><div>${t}</div><div><img src="${o}ui/arena/specials_${s=e,String(Number(s))}.png"></div></div>`
var s}function E(t){const e=c("#pCC > form > table tr:nth-of-type(4) td")
if(t.r&&e){e.setAttribute("align","center")
const s=g(t.r)
n(e,function(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${_("Specials",t.specials)}${_("Hell Forge",t.hellforge)}${_("Epic",t.epic)}<div><div>Max Equip Level</div><div>${u(t.equip_level)}</div></div></div>`}(s)),N(t.r,e,s)}}function B(){f("arenaTypeTabs")?l():(p(),d().catch((()=>({}))).then(E))}export default B
//# sourceMappingURL=arenaJoin-fc307b4f.js.map
