import{D as a,ca as t,o as e,h as n,i as s,z as c,M as o,E as i,Q as l}from"./calfSystem-85fa6364.js"
import{c as r}from"./createSpan-54352f01.js"
function b(){const a=c("backpack_tabs"),t=o("tab-selected",a)[0].getAttribute("data-type")
let e=i(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(0===e.length)return
const n=i(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
n.length>0&&(e=n),e.forEach(l)}function p(){const c=a(`#profileRightColumn a[href="${t}"]`)
if(!c)return
const o=r({className:"smallLink",textContent:"All"})
e(o,b)
const i=r({innerHTML:"[&nbsp;"})
n(i,o),s(i,"&nbsp;]&nbsp;"),n(c.parentNode,i)}export default p
//# sourceMappingURL=selectAllLink-3a3e1cb4.js.map
