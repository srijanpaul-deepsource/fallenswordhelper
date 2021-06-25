import{y as s,p as t,g as e,t as a,i as r}from"./calfSystem-db2edbef.js"
import{m as o}from"./myStats-c4e7b0cc.js"
import{r as i}from"./reduceBuffArray-4540efb2.js"
import"./getProfile-6da1b876.js"
import"./cmdExport-e54f093d.js"
import"./indexAjaxJson-acd1a794.js"
import"./playerName-70d3d303.js"
import"./idb-937dea46.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function d(s,t){const{tipped:e}=t.dataset,a=[...e.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
a.length>0&&r(t.parentNode,a.map(c).join(""))}function f(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&e("a",r.cells[0].children[0]).forEach(a(d,s))}(i(s._skills))}}function l(){s()||o(!0).then(f)}export default l
//# sourceMappingURL=injectRPUpgrades-b93a2fd7.js.map
