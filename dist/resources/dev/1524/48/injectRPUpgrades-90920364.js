import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-01849445.js"
import{m as o}from"./myStats-ca0035f4.js"
import{r as i}from"./reduceBuffArray-7907f3d9.js"
import"./getProfile-80c13ae9.js"
import"./cmdExport-703b1590.js"
import"./indexAjaxJson-0f9790ea.js"
import"./playerName-b318da41.js"
import"./idb-72291501.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(c,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-90920364.js.map
