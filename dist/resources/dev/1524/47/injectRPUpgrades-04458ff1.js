import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-bfc1f6c0.js"
import{m as o}from"./myStats-1a0b0275.js"
import{r as i}from"./reduceBuffArray-4540efb2.js"
import"./getProfile-84988fb5.js"
import"./cmdExport-f5d5b9e2.js"
import"./indexAjaxJson-bf365b96.js"
import"./playerName-3c8c8393.js"
import"./idb-d8a4a427.js"
const f=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(f)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(c,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-04458ff1.js.map
