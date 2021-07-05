import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-2172498b.js"
import{m as o}from"./myStats-3fea7e4d.js"
import{r as i}from"./reduceBuffArray-05963b78.js"
import"./getProfile-8db6fc9e.js"
import"./cmdExport-b6bb85ab.js"
import"./indexAjaxJson-b5d4e9de.js"
import"./playerName-a5989c6d.js"
import"./idb-35c610a0.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-dd958e15.js.map
