import{y as s,p as a,g as t,t as r,i as e}from"./calfSystem-8af1dca2.js"
import{m as o}from"./myStats-ad917b7b.js"
import{r as i}from"./reduceBuffArray-7907f3d9.js"
import"./getProfile-9774b117.js"
import"./cmdExport-c3a6f54b.js"
import"./indexAjaxJson-6e1804ba.js"
import"./playerName-7218c72a.js"
import"./idb-30d71a28.js"
const n=/>\s*([ a-zA-Z]+) Level (\d+)/g,c=s=>`<br><span class="fshRed fshNoWrap">${s[1]} ${s[2]} active</span>`
function f(s,a){const{tipped:t}=a.dataset,r=[...t.matchAll(n)].filter((a=>s[a[1]]===Number(a[2])))
r.length>0&&e(a.parentNode,r.map(c).join(""))}function l(s){if(0!==s._skills.length){!function(s){const e=a.children[0].rows[9]
e&&t("a",e.cells[0].children[0]).forEach(r(f,s))}(i(s._skills))}}function m(){s()||o(!0).then(l)}export default m
//# sourceMappingURL=injectRPUpgrades-2d0f9522.js.map
