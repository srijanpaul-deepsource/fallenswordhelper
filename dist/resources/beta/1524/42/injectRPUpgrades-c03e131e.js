import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-e76f1a7d.js"
import{m as o}from"./myStats-17e78a6b.js"
import{r as i}from"./reduceBuffArray-863d24b1.js"
import"./getProfile-8a6df09b.js"
import"./cmdExport-2950976d.js"
import"./indexAjaxJson-77d0e468.js"
import"./playerName-957aed2f.js"
import"./idb-fb8483d2.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function d(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(d,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-c03e131e.js.map
