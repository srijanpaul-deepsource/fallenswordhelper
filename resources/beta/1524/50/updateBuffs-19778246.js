import{D as t,m as e,g as n,H as o,as as r,z as s}from"./calfSystem-617f9a5d.js"
import{n as a}from"./numberIsNaN-bf55a311.js"
import{s as i}from"./setTipped-5e35ee46.js"
function f(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const c=98,p=85,m=60
function u(t){return Number(r(s(`stat-${t.toLowerCase()}`).childNodes).filter(f).map(o).join(""))}function d(t){const r=e({innerHTML:t.dataset.tipped}),s=n("b",r).map((t=>o(t))),f=u(s[2])
a(f)||function(t,e,n){const o=u(e[3]),r=Math.floor(n*(Number(e[1].replace(/[+%]/g,""))/100))
i(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${e[2]}: ${String(n-r)}&nbsp;&nbsp;${e[3]}: ${String(o+r)}$&`),t)}(t,s,f)}function b(e){const n=t(`#profileRightColumn img[src$="/${String(e)}.png"]`)
n&&d(n)}function g(){[c,p,m].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-19778246.js.map
