import{y as s,p as t,g as e,t as a,i as r}from"./calfSystem-7a1cce43.js"
import{m as o}from"./myStats-662030be.js"
import{r as i}from"./reduceBuffArray-70400887.js"
import"./getProfile-f62f3400.js"
import"./cmdExport-b5bb530e.js"
import"./indexAjaxJson-48ec5c5d.js"
import"./playerName-1f8ebec9.js"
import"./idb-c572d898.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:e}=t.dataset,a=[...e.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
a.length>0&&r(t.parentNode,a.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&e("a",r.cells[0].children[0]).forEach(a(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-d4ced0ec.js.map
