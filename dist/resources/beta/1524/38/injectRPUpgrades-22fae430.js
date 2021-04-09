import{y as s,p as t,g as e,t as r,i as a}from"./calfSystem-71efcdd9.js"
import{m as o}from"./myStats-4193c382.js"
import{r as i}from"./reduceBuffArray-70400887.js"
import"./getProfile-c5cc5dbb.js"
import"./cmdExport-29c620b8.js"
import"./indexAjaxJson-9e9c7404.js"
import"./playerName-03336191.js"
import"./idb-3de49256.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function l(s,t){const{tipped:e}=t.dataset,r=[...e.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
r.length>0&&a(t.parentNode,r.map(n).join(""))}function m(s){if(0!==s._skills.length){!function(s){const a=t.children[0].rows[9]
a&&e("a",a.cells[0].children[0]).forEach(r(l,s))}(i(s._skills))}}function p(){s()||o(!0).then(m)}export default p
//# sourceMappingURL=injectRPUpgrades-22fae430.js.map
