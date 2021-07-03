import{R as t,m as e,h as s,B as i,t as a,f as r,i as n,aB as o,D as c,z as d}from"./calfSystem-8af1dca2.js"
import{a as m,i as l,v as p}from"./arena-0a52c00e.js"
import{i as f}from"./interceptSubmit-57af03dc.js"
import{a as u}from"./addCommas-5de3e9c4.js"
import{c as v}from"./createSelect-9cc6ad17.js"
import{i as j}from"./insertElementAfterBegin-a140326f.js"
import{i as b}from"./isSelected-77d835f5.js"
import"./allthen-d828bb84.js"
import"./all-f24d81d0.js"
import"./closestTr-627423b9.js"
import"./closest-3a475e96.js"
import"./idb-30d71a28.js"
import"./intValue-9eb5015a.js"
import"./changeMinMax-6a9eb8c2.js"
import"./numberIsNaN-68797c81.js"
import"./assets-7b5d479d.js"
import"./lvlTests-87d82dc1.js"
import"./loadDataTables-8a5539c9.js"
import"./currentGuildId-ae75dbfc.js"
import"./isArray-f9d2634e.js"
import"./setTipped-71facd91.js"
import"./formToUrl-71081055.js"
import"./insertElementBefore-5adb1609.js"
function g(e){const s=Number(t("pvp_id"))
return e.arenas.find((t=>t.id===s))}let $
function h(t,e){let s=String(e-1)
0===e&&(s="x"),n(t,`<img src="${o}arena/${s}.png" class="moveImg">`)}function x(t,e){return`<option value="${String(e.id)}"${b(t.slots.join(),e.slots.join())}>${e.name}</option>`}function S(t,r){const n=function(t){return $||($=s(t,e())),$}(r)
i("",n),t.slots.forEach(a(h,n))}function T(t,e,s){var i;(i=e.target.value,m({subcmd:"usesetup",set_id:i})).then((e=>{e.s&&S(s,t)}))}function y(t,e,s){const i=t.sets.find((t=>t.id===Number(s.target.value)))
i&&T(e,s,i)}function N(t,i,n){if(n.specials){const n=e({className:"flex"})
!function(t,i){if(t.sets.length>0){const n=v({innerHTML:t.sets.map(a(x,t.current_set)).join("")})
r(n,"change",a(y,t,i))
const o=e({className:"flex"})
s(o,n),j(i,o)}}(t,n),S(t.current_set,n),s(i,n)}}function _(t,e){return`<div><div>${t}</div><div><img src="${o}ui/arena/specials_${s=e,String(Number(s))}.png"></div></div>`
var s}function E(t){const e=c("#pCC > form > table tr:nth-of-type(4) td")
if(t.r&&e){e.setAttribute("align","center")
const s=g(t.r)
n(e,function(t){return`<div class="flex"><div><div>Players</div><div>${t.players.length} / ${t.max_players}</div></div>${_("Specials",t.specials)}${_("Hell Forge",t.hellforge)}${_("Epic",t.epic)}<div><div>Max Equip Level</div><div>${u(t.equip_level)}</div></div></div>`}(s)),N(t.r,e,s)}}function B(){d("arenaTypeTabs")?l():(f(),p().catch((()=>({}))).then(E))}export default B
//# sourceMappingURL=arenaJoin-81f4ff41.js.map
