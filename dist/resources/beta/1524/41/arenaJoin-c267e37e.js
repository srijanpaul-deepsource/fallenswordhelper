import{S as e,m as t,h as s,B as i,t as a,f as r,i as n,aw as o,D as c,z as m}from"./calfSystem-587dd8d3.js"
import{a as l,i as f,v as d}from"./arena-f539f5a3.js"
import{i as p}from"./interceptSubmit-8814daab.js"
import{a as u}from"./addCommas-81c8f148.js"
import{c as v}from"./createSelect-e33adb88.js"
import{i as j}from"./insertElementAfterBegin-95fb87ae.js"
import{i as b}from"./isSelected-db9e9a8c.js"
import"./allthen-13a2ca46.js"
import"./all-73a73e22.js"
import"./closestTr-332a99c2.js"
import"./closest-865e9de8.js"
import"./idb-ce2f4bde.js"
import"./intValue-af3aed3f.js"
import"./changeMinMax-9818e713.js"
import"./numberIsNaN-9d4c441b.js"
import"./assets-cf4c1cc6.js"
import"./lvlTests-68991519.js"
import"./loadDataTables-4a42200f.js"
import"./currentGuildId-f1814c84.js"
import"./isArray-562fbe88.js"
import"./setTipped-2eacee59.js"
import"./formToUrl-2c1cc653.js"
import"./insertElementBefore-2bf2da7f.js"
function g(t){const s=Number(e("pvp_id"))
return t.arenas.find((e=>e.id===s))}let $
function h(e,t){let s=String(t-1)
0===t&&(s="x"),n(e,`<img src="${o}arena/${s}.png" class="moveImg">`)}function S(e,t){return`<option value="${String(t.id)}"${b(e.slots.join(),t.slots.join())}>${t.name}</option>`}function x(e,r){const n=function(e){return $||($=s(e,t())),$}(r)
i("",n),e.slots.forEach(a(h,n))}function T(e,t,s){var i;(i=t.target.value,l({subcmd:"usesetup",set_id:i})).then((t=>{t.s&&x(s,e)}))}function y(e,t,s){const i=e.sets.find((e=>e.id===Number(s.target.value)))
i&&T(t,s,i)}function N(e,i,n){if(n.specials){const n=t({className:"flex"})
!function(e,i){if(e.sets.length>0){const n=v({innerHTML:e.sets.map(a(S,e.current_set)).join("")})
r(n,"change",a(y,e,i))
const o=t({className:"flex"})
s(o,n),j(i,o)}}(e,n),x(e.current_set,n),s(i,n)}}function _(e,t){return`<div><div>${e}</div><div><img src="${o}ui/arena/specials_${s=t,String(Number(s))}.png"></div></div>`
var s}function E(e){const t=c("#pCC > form > table tr:nth-of-type(4) td")
if(e.r&&t){t.setAttribute("align","center")
const s=g(e.r)
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){m("arenaTypeTabs")?f():(p(),d().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-c267e37e.js.map