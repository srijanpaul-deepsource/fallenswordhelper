import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-617f9a5d.js"
import{m as o}from"./myStats-a71050f1.js"
import{r as i}from"./reduceBuffArray-cbfe0f54.js"
import"./getProfile-50ff6571.js"
import"./cmdExport-39e5a4b7.js"
import"./indexAjaxJson-1f941a45.js"
import"./playerName-90c8eb43.js"
import"./idb-443c992c.js"
const f=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(f)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(c,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-c69d1d6e.js.map
