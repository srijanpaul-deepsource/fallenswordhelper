import{D as t,m as e,g as n,H as o,N as r,z as s}from"./calfSystem-e76f1a7d.js"
import{n as i}from"./numberIsNaN-484c0124.js"
import{s as a}from"./setTipped-1ee3895d.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,m=60
function d(t){return Number(r(s(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(o).join(""))}function u(t){const r=e({innerHTML:t.dataset.tipped}),s=n("b",r).map((t=>o(t))),f=d(s[2])
i(f)||function(t,e,n){const o=d(e[3]),r=Math.floor(n*(Number(e[1].replace(/[+%]/g,""))/100))
a(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${e[2]}: ${String(n-r)}&nbsp;&nbsp;${e[3]}: ${String(o+r)}$&`),t)}(t,s,f)}function g(e){const n=t(`#profileRightColumn img[src$="/${String(e)}.png"]`)
n&&u(n)}function l(){[c,p,m].forEach(g)}export default l
//# sourceMappingURL=updateBuffs-2232566a.js.map
