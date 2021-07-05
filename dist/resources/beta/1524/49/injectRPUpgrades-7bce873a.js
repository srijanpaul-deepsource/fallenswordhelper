import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-42f137cb.js"
import{m as o}from"./myStats-91cafdf1.js"
import{r as i}from"./reduceBuffArray-05963b78.js"
import"./getProfile-2a36fbe8.js"
import"./cmdExport-16a19312.js"
import"./indexAjaxJson-4839dee4.js"
import"./playerName-e12b866a.js"
import"./idb-6beadc2c.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-7bce873a.js.map
