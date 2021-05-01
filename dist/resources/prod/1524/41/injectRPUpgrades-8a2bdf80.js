import{y as s,p as t,g as e,t as a,i as r}from"./calfSystem-030d7057.js"
import{m as o}from"./myStats-b9821539.js"
import{r as i}from"./reduceBuffArray-0cf0b016.js"
import"./getProfile-99ed2671.js"
import"./cmdExport-05db5c9c.js"
import"./indexAjaxJson-e454b0de.js"
import"./playerName-3b098b7d.js"
import"./idb-ab72cbe2.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function l(s,t){const{tipped:e}=t.dataset,a=[...e.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
a.length>0&&r(t.parentNode,a.map(c).join(""))}function m(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&e("a",r.cells[0].children[0]).forEach(a(l,s))}(i(s._skills))}}function p(){s()||o(!0).then(m)}export default p
//# sourceMappingURL=injectRPUpgrades-8a2bdf80.js.map
