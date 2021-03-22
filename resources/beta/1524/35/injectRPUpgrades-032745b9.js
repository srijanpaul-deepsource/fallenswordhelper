import{y as s,p as t,g as e,t as a,i as r}from"./calfSystem-03050396.js"
import{m as o}from"./myStats-e7913a0f.js"
import{r as i}from"./reduceBuffArray-9636784d.js"
import"./getProfile-fdde6617.js"
import"./cmdExport-c8e611b1.js"
import"./indexAjaxJson-d9ed18eb.js"
import"./playerName-3ca7fe81.js"
import"./idb-02fb3250.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,f=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function c(s,t){const{tipped:e}=t.dataset,a=[...e.matchAll(n)].filter((t=>s[t[1]]===Number(t[2])))
a.length>0&&r(t.parentNode,a.map(f).join(""))}function l(s){if(0!==s._skills.length){!function(s){const r=t.children[0].rows[9]
r&&e("a",r.cells[0].children[0]).forEach(a(c,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-032745b9.js.map
