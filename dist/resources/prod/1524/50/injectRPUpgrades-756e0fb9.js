import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-365d90f3.js"
import{m as o}from"./myStats-3aa6ebcb.js"
import{r as i}from"./reduceBuffArray-cbfe0f54.js"
import"./getProfile-21cc29b6.js"
import"./cmdExport-16d6b4f1.js"
import"./indexAjaxJson-81a9c061.js"
import"./playerName-17f8d780.js"
import"./idb-62f64cd2.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function n(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(n,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-756e0fb9.js.map
