import{D as t,m as n,g as e,H as r,ar as o,z as a}from"./calfSystem-a2fd9017.js"
import{n as s}from"./numberIsNaN-2f104aa2.js"
import{s as i}from"./setTipped-27e246a8.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,m=60
function u(t){return Number(o(a(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(r).join(""))}function d(t){const o=n({innerHTML:t.dataset.tipped}),a=e("b",o).map((t=>r(t))),f=u(a[2])
s(f)||function(t,n,e){const r=u(n[3]),o=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(o)}<br>${n[2]}: ${String(e-o)}&nbsp;&nbsp;${n[3]}: ${String(r+o)}$&`),t)}(t,a,f)}function g(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&d(e)}function l(){[c,p,m].forEach(g)}export default l
//# sourceMappingURL=updateBuffs-9cd90eb4.js.map
