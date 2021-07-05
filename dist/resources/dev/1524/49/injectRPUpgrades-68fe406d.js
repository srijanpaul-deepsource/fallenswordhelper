import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-9ab64478.js"
import{m as o}from"./myStats-eafccf98.js"
import{r as i}from"./reduceBuffArray-05963b78.js"
import"./getProfile-f5771e2a.js"
import"./cmdExport-22edc582.js"
import"./indexAjaxJson-b31a9d3b.js"
import"./playerName-b4c2ff3f.js"
import"./idb-9da90398.js"
const f=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(f)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(c,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-68fe406d.js.map
