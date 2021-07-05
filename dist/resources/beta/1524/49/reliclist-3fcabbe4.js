import{g as t}from"./guild-13f35edb.js"
import{I as i,B as n,p as e,t as r,aQ as l,aH as a,bA as s}from"./calfSystem-42f137cb.js"
import{p as d}from"./padZ-3a27e144.js"
import{s as c}from"./splitTime-95bb3eda.js"
async function o(i=0,n=100){const e=await function(i,n,e){const r={subcmd:"reliclist",offset:n,limit:e}
return i&&(r.guild_id=i),t(r)}(null,i,n)
return e.r.remaining_relics?e.r.relics.concat(await o(i+e.r.relics.length,Math.min(100,e.r.remaining_relics))):e.r.relics}function h(t,i){return i.id===t}function u(t){return t.attributes&&t.attributes.find(r(h,6))}function f(t,i){if(t){const n=t.find(r(h,i))
if(n)return n.value}return""}function m(t){return`<tr><td>${t.min_level}</td><td>${function(t){return`<a href="${l}relics${a}view&relic_id=${t.id}">${t.name}</a>`}(t)}</td><td>${n=t.guild,n?`<a href="${s}${n.id}">${n.name}</a>`:""}</td><td>${i=t.attributes,[6,0,4,5,7,8].map(r(f,i)).join("</td><td>")}</td><td>${function(t){if(!t)return""
const i=c(t)
return`${d(i[0])}d ${d(i[1])}h ${d(i[2])}m ${d(i[3])}s`}(t.time)}</td></tr>`
var i,n}function b(t){t.sort(((t,i)=>t.min_level-i.min_level)),n(function(t){return`<style>#pCC .reliclist {\n        border-collapse: collapse;\n        border-spacing: 0;\n        table-layout: fixed;\n      }\n      .reliclist, .reliclist th, .reliclist td {\n        border: 1px solid black;\n      }\n      .reliclist th, .reliclist td {\n        padding: 5px;\n      }\n      .reliclist th:nth-of-type(10), .reliclist td:nth-of-type(10) {\n        width: 100px;\n      }</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(u).map(m).join("")}</tbody></table>`}(t),e)}function p(){i("betaOptIn")&&(n("Loading...",e),o().then(b))}export default p
//# sourceMappingURL=reliclist-3fcabbe4.js.map
