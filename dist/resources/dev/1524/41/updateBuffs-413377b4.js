import{D as t,m as e,g as n,H as o,N as r,z as s}from"./calfSystem-817ceb25.js"
import{n as i}from"./numberIsNaN-9d4c441b.js"
import{s as a}from"./setTipped-2eacee59.js"
function c(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const f=98,p=85,m=60
function u(t){return Number(r(s(`stat-${t.toLowerCase()}`).childNodes).filter(c).map(o).join(""))}function d(t){const r=e({innerHTML:t.dataset.tipped}),s=n("b",r).map((t=>o(t))),c=u(s[2])
i(c)||function(t,e,n){const o=u(e[3]),r=Math.floor(n*(Number(e[1].replace(/[+%]/g,""))/100))
a(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${e[2]}: ${String(n-r)}&nbsp;&nbsp;${e[3]}: ${String(o+r)}$&`),t)}(t,s,c)}function b(e){const n=t(`#profileRightColumn img[src$="/${String(e)}.png"]`)
n&&d(n)}function g(){[f,p,m].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-413377b4.js.map
