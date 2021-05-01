import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-540da563.js"
import{m as o}from"./myStats-e6b5a975.js"
import{r as i}from"./reduceBuffArray-33e6984f.js"
import"./getProfile-b67e3e0c.js"
import"./cmdExport-a330f27a.js"
import"./indexAjaxJson-8f18f901.js"
import"./playerName-c00ebc45.js"
import"./idb-62a50947.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(c,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-990fce7a.js.map
