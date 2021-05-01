import{y as s,p as e,g as t,t as a,i as r}from"./calfSystem-817ceb25.js"
import{m as o}from"./myStats-9723dfe8.js"
import{r as i}from"./reduceBuffArray-0cf0b016.js"
import"./getProfile-a80eecd0.js"
import"./cmdExport-a8921dc9.js"
import"./indexAjaxJson-50c9cfe2.js"
import"./playerName-43ee76fa.js"
import"./idb-104727d0.js"
const c=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,e){const{tipped:t}=e.dataset,a=[...t.matchAll(c)].filter((e=>s[e[1]]===Number(e[2])))
a.length>0&&r(e.parentNode,a.map(n).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=e.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(a(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-d226d002.js.map
