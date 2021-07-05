import{D as t,m as e,g as n,H as r,ar as o,z as s}from"./calfSystem-365d90f3.js"
import{n as a}from"./numberIsNaN-bf55a311.js"
import{s as i}from"./setTipped-5e35ee46.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,m=60
function u(t){return Number(o(s(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(r).join(""))}function d(t){const o=e({innerHTML:t.dataset.tipped}),s=n("b",o).map((t=>r(t))),f=u(s[2])
a(f)||function(t,e,n){const r=u(e[3]),o=Math.floor(n*(Number(e[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(o)}<br>${e[2]}: ${String(n-o)}&nbsp;&nbsp;${e[3]}: ${String(r+o)}$&`),t)}(t,s,f)}function b(e){const n=t(`#profileRightColumn img[src$="/${String(e)}.png"]`)
n&&d(n)}function g(){[c,p,m].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-da1e4e44.js.map
