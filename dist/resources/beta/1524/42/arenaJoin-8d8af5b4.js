import{S as e,m as t,h as s,B as i,t as r,f as a,i as n,aw as o,D as c,z as m}from"./calfSystem-e76f1a7d.js"
import{a as l,i as f,v as d}from"./arena-35d81684.js"
import{i as p}from"./interceptSubmit-cb7652f8.js"
import{a as u}from"./addCommas-99f495b9.js"
import{c as v}from"./createSelect-74878796.js"
import{i as b}from"./insertElementAfterBegin-38aedae9.js"
import{i as j}from"./isSelected-07fc60b5.js"
import"./allthen-3a0631ad.js"
import"./all-9f53e8b3.js"
import"./closestTr-6dc7debb.js"
import"./closest-9a08f4fa.js"
import"./idb-fb8483d2.js"
import"./intValue-9eb8a210.js"
import"./changeMinMax-b261f8ce.js"
import"./numberIsNaN-484c0124.js"
import"./assets-62f5bf10.js"
import"./lvlTests-747c38a4.js"
import"./loadDataTables-40b17dec.js"
import"./currentGuildId-b1971071.js"
import"./isArray-68a41fd5.js"
import"./setTipped-1ee3895d.js"
import"./formToUrl-2b5b5569.js"
import"./insertElementBefore-34b77984.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${j(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,a){const n=function(e){return $||($=s(e,t())),$}(a)
i("",n),e.slots.forEach(r(h,n))}function T(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(r(S,e.current_set)).join("")})
a(n,"change",r(y,e,i))
const o=t({className:"flex"})
s(o,n),b(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){m("arenaTypeTabs")?f():(p(),d().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-8d8af5b4.js.map
