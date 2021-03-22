import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-fe0ebf32.js"
import{m as o}from"./myStats-ba055955.js"
import{r as i}from"./reduceBuffArray-9636784d.js"
import"./getProfile-9e74c09c.js"
import"./cmdExport-fd555515.js"
import"./indexAjaxJson-a9fbc5f9.js"
import"./playerName-dca56241.js"
import"./idb-b0de0ac7.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function n(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(n,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-66097157.js.map
