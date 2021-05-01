import{D as t,m as n,g as e,H as o,N as r,z as s}from"./calfSystem-c464cb1d.js"
import{n as i}from"./numberIsNaN-2764ce9c.js"
import{s as c}from"./setTipped-c42cf871.js"
function a(t){if(t instanceof Node)return t.nodeType===Node.TEXT_NODE}const f=98,p=85,m=60
function u(t){return Number(r(s(`stat-${t.toLowerCase()}`).childNodes).filter(a).map(o).join(""))}function d(t){const r=n({innerHTML:t.dataset.tipped}),s=e("b",r).map((t=>o(t))),a=u(s[2])
i(a)||function(t,n,e){const o=u(n[3]),r=Math.floor(e*(Number(n[1].replace(/[+%]/g,""))/100))
c(t.dataset.tipped.replace("</center></div>",`<br>Buff Effect: ${String(r)}<br>${n[2]}: ${String(e-r)}&nbsp;&nbsp;${n[3]}: ${String(o+r)}$&`),t)}(t,s,a)}function b(n){const e=t(`#profileRightColumn img[src$="/${String(n)}.png"]`)
e&&d(e)}function g(){[f,p,m].forEach(b)}export default g
//# sourceMappingURL=updateBuffs-34bc74e2.js.map
