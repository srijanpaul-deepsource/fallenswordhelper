import{S as e,m as t,h as s,B as i,t as a,f as r,i as n,an as o,D as c,z as m}from"./calfSystem-03050396.js"
import{a as l,i as f,v as p}from"./arena-a7ba9c0a.js"
import{i as d}from"./interceptSubmit-3f95205d.js"
import{a as u}from"./addCommas-fa3f11ee.js"
import{c as v}from"./createSelect-b198aed8.js"
import{i as j}from"./insertElementAfterBegin-ee5de178.js"
import{i as b}from"./isSelected-8b20baae.js"
import"./allthen-e8de2991.js"
import"./all-3be74659.js"
import"./closestTr-67a84d77.js"
import"./closest-1ff01e01.js"
import"./idb-02fb3250.js"
import"./intValue-1ce02c09.js"
import"./changeMinMax-51d14a10.js"
import"./numberIsNaN-1e8b4508.js"
import"./assets-716577f9.js"
import"./lvlTests-1f4d8322.js"
import"./loadDataTables-0833a795.js"
import"./currentGuildId-4235046f.js"
import"./isArray-c05157b9.js"
import"./setTipped-b11fa6f8.js"
import"./formToUrl-ef9a2d78.js"
import"./insertElementBefore-9228b012.js"
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
n(t,function(e){return`<div class="flex"><div><div>Players</div><div>${e.players.length} / ${e.max_players}</div></div>${_("Specials",e.specials)}${_("Hell Forge",e.hellforge)}${_("Epic",e.epic)}<div><div>Max Equip Level</div><div>${u(e.equip_level)}</div></div></div>`}(s)),N(e.r,t,s)}}function M(){m("arenaTypeTabs")?f():(d(),p().catch((()=>({}))).then(E))}export default M
//# sourceMappingURL=arenaJoin-3883fe97.js.map
