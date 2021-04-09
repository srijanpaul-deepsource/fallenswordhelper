import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-d56087e1.js"
import{m as o}from"./myStats-6c4fb90d.js"
import{r as i}from"./reduceBuffArray-70400887.js"
import"./getProfile-4f74be92.js"
import"./cmdExport-58f360a9.js"
import"./indexAjaxJson-976f4bdd.js"
import"./playerName-78fba94b.js"
import"./idb-a1e4e2c2.js"
const f=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(f)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(c,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-fe76f504.js.map
