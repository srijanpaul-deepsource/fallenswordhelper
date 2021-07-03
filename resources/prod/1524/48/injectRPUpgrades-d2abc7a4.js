import{y as s,p as t,g as a,t as r,i as o}from"./calfSystem-85fa6364.js"
import{m as e}from"./myStats-af54046f.js"
import{r as f}from"./reduceBuffArray-7907f3d9.js"
import"./getProfile-abd530d8.js"
import"./cmdExport-62f110d4.js"
import"./indexAjaxJson-4fb780dc.js"
import"./playerName-2fc4f5c9.js"
import"./idb-160add45.js"
const i=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,r=[...a.matchAll(i)].filter((t=>s[t[1]]===Number(t[2])))
r.length>0&&o(t.parentNode,r.map(n).join(""))}function d(s){if(0!==s._skills.length){!function(s){const o=t.children[0].rows[9]
o&&a("a",o.cells[0].children[0]).forEach(r(c,s))}(f(s._skills))}}function l(){s()||e(!0).then(d)}export default l
//# sourceMappingURL=injectRPUpgrades-d2abc7a4.js.map
