import{y as s,p as t,g as e,t as a,i as r}from"./calfSystem-b3667af8.js"
import{m as o}from"./myStats-dce07744.js"
import{r as c}from"./reduceBuffArray-cbfe0f54.js"
import"./getProfile-61bb15d7.js"
import"./cmdExport-31421fb2.js"
import"./indexAjaxJson-79cecebf.js"
import"./playerName-8bccbcca.js"
import"./idb-22dd2687.js"
const i=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function n(s,t){const{tipped:e}=t.dataset,a=[...e.matchAll(i)].filter((t=>s[t[1]]===Number(t[2])))
a.length>0&&r(t.parentNode,a.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&e("a",r.cells[0].children[0]).forEach(a(n,s))}(c(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-cf451b9b.js.map
