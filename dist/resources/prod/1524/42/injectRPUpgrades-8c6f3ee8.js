import{y as s,p as a,g as t,t as e,i as r}from"./calfSystem-15b00143.js"
import{m as o}from"./myStats-0ebd47a8.js"
import{r as i}from"./reduceBuffArray-863d24b1.js"
import"./getProfile-a6dabd90.js"
import"./cmdExport-22e87ca6.js"
import"./indexAjaxJson-430cd162.js"
import"./playerName-41a4004e.js"
import"./idb-1c9eb1ac.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function l(s,a){const{tipped:t}=a.dataset,e=[...t.matchAll(n)].filter((a=>s[a[1]]===Number(a[2])))
e.length>0&&r(a.parentNode,e.map(c).join(""))}function m(s){if(0!==s._skills.length){!function(s){const r=a.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(e(l,s))}(i(s._skills))}}function p(){s()||o(!0).then(m)}export default p
//# sourceMappingURL=injectRPUpgrades-8c6f3ee8.js.map
