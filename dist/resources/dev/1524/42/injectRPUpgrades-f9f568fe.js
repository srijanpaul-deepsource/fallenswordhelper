import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-4b6b865d.js"
import{m as o}from"./myStats-7b20d4ea.js"
import{r as i}from"./reduceBuffArray-863d24b1.js"
import"./getProfile-827ab461.js"
import"./cmdExport-bf6b936d.js"
import"./indexAjaxJson-9849e745.js"
import"./playerName-64ba6f1f.js"
import"./idb-a46a6973.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function l(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(f).join(""))}function m(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(l,s))}(i(s._skills))}}function p(){s()||o(!0).then(m)}export default p
//# sourceMappingURL=injectRPUpgrades-f9f568fe.js.map
