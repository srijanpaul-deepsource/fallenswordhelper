import{y as s,p as e,g as t,t as a,i as r}from"./calfSystem-a2fd9017.js"
import{m as o}from"./myStats-4434ecd1.js"
import{r as i}from"./reduceBuffArray-4540efb2.js"
import"./getProfile-bbee5de2.js"
import"./cmdExport-84fee8d4.js"
import"./indexAjaxJson-9619f1ba.js"
import"./playerName-fab1659b.js"
import"./idb-09e8fa3a.js"
const f=/>\s*([ a-zA-Z]+) Level (\d+)/g,n=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function l(s,e){const{tipped:t}=e.dataset,a=[...t.matchAll(f)].filter((e=>s[e[1]]===Number(e[2])))
a.length>0&&r(e.parentNode,a.map(n).join(""))}function m(s){if(0!==s._skills.length){!function(s){const r=e.children[0].rows[9]
r&&t("a",r.cells[0].children[0]).forEach(a(l,s))}(i(s._skills))}}function p(){s()||o(!0).then(m)}export default p
//# sourceMappingURL=injectRPUpgrades-04a44ea0.js.map
