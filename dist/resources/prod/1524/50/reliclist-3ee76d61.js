import{g as t}from"./guild-0fcc2705.js"
import{I as i,B as n,p as r,t as e,aP as l,aG as a,bz as s}from"./calfSystem-365d90f3.js"
import{p as d}from"./padZ-a45d0ad0.js"
import{s as c}from"./splitTime-ca281ff6.js"
async function o(i=0,n=100){const r=await function(i,n,r){const e={subcmd:"reliclist",offset:n,limit:r}
return i&&(e.guild_id=i),t(e)}(null,i,n)
return r.r.remaining_relics?r.r.relics.concat(await o(i+r.r.relics.length,Math.min(100,r.r.remaining_relics))):r.r.relics}function f(t,i){return i.id===t}function h(t){return t.attributes&&t.attributes.find(e(f,6))}function u(t,i){if(t){const n=t.find(e(f,i))
if(n)return n.value}return""}function m(t){return`<tr><td>${t.min_level}</td><td>${function(t){return`<a href="${l}relics${a}view&relic_id=${t.id}">${t.name}</a>`}(t)}</td><td>${n=t.guild,n?`<a href="${s}${n.id}">${n.name}</a>`:""}</td><td>${i=t.attributes,[6,0,4,5,7,8].map(e(u,i)).join("</td><td>")}</td><td>${function(t){if(!t)return""
const i=c(t)
return`${d(i[0])}d ${d(i[1])}h ${d(i[2])}m ${d(i[3])}s`}(t.time)}</td></tr>`
var i,n}function p(t){t.sort(((t,i)=>t.min_level-i.min_level)),n(function(t){return`<style>#pCC .reliclist {\n        border-collapse: collapse;\n        border-spacing: 0;\n        table-layout: fixed;\n      }\n      .reliclist, .reliclist th, .reliclist td {\n        border: 1px solid black;\n      }\n      .reliclist th, .reliclist td {\n        padding: 5px;\n      }\n      .reliclist th:nth-of-type(10), .reliclist td:nth-of-type(10) {\n        width: 100px;\n      }</style><table class="reliclist"><thead><tr><th>Level</th><th>Name</th><th>Guild</th><th>Stam<br>Gain</th><th>Atk</th><th>Dmg</th><th>Stam</th><th>Gold<br>Gain</th><th>XP<br>Gain</th><th>Time</th></tr></thead><tbody>${t.filter(h).map(m).join("")}</tbody></table>`}(t),r)}function b(){i("betaOptIn")&&(n("Loading...",r),o().then(p))}export default b
//# sourceMappingURL=reliclist-3ee76d61.js.map
