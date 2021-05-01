import{y as s,p as t,g as a,t as e,i as r}from"./calfSystem-ab393688.js"
import{m as o}from"./myStats-8d1bbc84.js"
import{r as i}from"./reduceBuffArray-33e6984f.js"
import"./getProfile-2959c6fc.js"
import"./cmdExport-72a02624.js"
import"./indexAjaxJson-e927e360.js"
import"./playerName-17cbc946.js"
import"./idb-4a088c10.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:a}=t.dataset,e=[...a.matchAll(c)].filter((t=>s[t[1]]===Number(t[2])))
e.length>0&&r(t.parentNode,e.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&a("a",r.cells[0].children[0]).forEach(e(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-5f7e82f3.js.map
