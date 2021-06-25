import{D as t,m as e,g as n,H as r,ar as o,z as a}from"./calfSystem-db2edbef.js"
import{n as s}from"./numberIsNaN-2f104aa2.js"
import{s as i}from"./setTipped-27e246a8.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,m=60
function d(t){return Number(o(a(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(r).join(""))}function u(t){const o=e({innerHTML:t.dataset.tipped}),a=n("b",o).map((t=>r(t))),f=d(a[2])
s(f)||function(t,e,n){const r=d(e[3]),o=Math.floor(n*(Number(e[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(o)}<br>${e[2]}: ${String(n-o)}&nbsp;&nbsp;${e[3]}: ${String(r+o)}$&`),t)}(t,a,f)}function b(e){const n=t(`#profileRightColumn img[src$="/${String(e)}.png"]`)
n&&u(n)}function g(){[c,p,m].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-8cdaf16b.js.map
