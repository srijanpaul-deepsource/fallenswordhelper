import{y as s,p as t,g as e,t as a,i as r}from"./calfSystem-c464cb1d.js"
import{m as o}from"./myStats-259eca05.js"
import{r as i}from"./reduceBuffArray-33e6984f.js"
import"./getProfile-757b7e26.js"
import"./cmdExport-5edaf067.js"
import"./indexAjaxJson-9476707b.js"
import"./playerName-c64906b6.js"
import"./idb-870991e0.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,t){const{tipped:e}=t.dataset,a=[...e.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
a.length>0&&r(t.parentNode,a.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&e("a",r.cells[0].children[0]).forEach(a(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-60c705b7.js.map
