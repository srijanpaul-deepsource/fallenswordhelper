import{g as t}from"./guild-3e01f77e.js"
import{I as i,B as e,p as n,t as r,aR as a,aI as l,aY as s}from"./calfSystem-9ab64478.js"
import{p as d}from"./padZ-3a27e144.js"
import{s as c}from"./splitTime-95bb3eda.js"
async function o(i=0,e=100){const n=await function(i,e,n){const r={subcmd:"reliclist",offset:e,limit:n}
return i&&(r.guild_id=i),t(r)}(null,i,e)
return n.r.remaining_relics?n.r.relics.concat(await o(i+n.r.relics.length,Math.min(100,n.r.remaining_relics))):n.r.relics}function h(t,i){return i.id===t}function u(t){return t.attributes&&t.attributes.find(r(h,6))}function f(t,i){if(t){const e=t.find(r(h,i))
if(e)return e.value}return""}function m(t){return`<tr><td>${t.min_level}</td><td>${function(t){return`<a href="${a}relics${l}view&relic_id=${t.id}">${t.name}</a>`}(t)}</td><td>${e=t.guild,e?`<a href="${s}${e.id}">${e.name}</a>`:""}</td><td>${i=t.attributes,[6,0,4,5,7,8].map(r(f,i)).join("</td><td>")}</td><td>${function(t){if(!t)return""
const i=c(t)
return`${d(i[0])}d ${d(i[1])}h ${d(i[2])}m ${d(i[3])}s`}(t.time)}</td></tr>`
var i,e}function p(t){t.sort(((t,i)=>t.min_level-i.min_level)),e(function(t){return`<style>#pCC .reliclist {\n        border-collapse: collapse;\n        border-spacing: 0;\n        table-layout: fixed;\n      }\n      .reliclist, .reliclist th, .reliclist td {\n        border: 1px solid black;\n      }\n      .reliclist th, .reliclist td {\n        padding: 5px;\n      }\n      .reliclist th:nth-of-type(10), .reliclist td:nth-of-type(10) {\n        width: 100px;\n      }</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(u).map(m).join("")}</tbody></table>`}(t),n)}function b(){i("betaOptIn")&&(e("Loading...",n),o().then(p))}export default b
//# sourceMappingURL=reliclist-874c7789.js.map
