import{y as s,p as t,g as e,t as a,i as r}from"./calfSystem-587dd8d3.js"
import{m as o}from"./myStats-2d1987c0.js"
import{r as i}from"./reduceBuffArray-0cf0b016.js"
import"./getProfile-09bb87ab.js"
import"./cmdExport-8bedb500.js"
import"./indexAjaxJson-a5185e0b.js"
import"./playerName-79fdbfb0.js"
import"./idb-ce2f4bde.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:e}=t.dataset,a=[...e.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
a.length>0&&r(t.parentNode,a.map(f).join(""))}function d(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&e("a",r.cells[0].children[0]).forEach(a(c,s))}(i(s._skills))}}function l(){s()||o(!0).then(d)}export default l
//# sourceMappingURL=injectRPUpgrades-d9b61819.js.map
