import{D as a,cb as t,o as e,h as n,i as c,z as s,M as o,E as i,Q as b}from"./calfSystem-42f137cb.js"
import{c as l}from"./createSpan-54af063c.js"
function r(){const a=s("backpack_tabs"),t=o("tab-selected",a)[0].getAttribute("data-type")
let e=i(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackItem`)
if(0===e.length)return
const n=i(`#backpackTab_${t} li:not(.hcsPaginate_hidden) .backpackCheckbox:not(:disabled)`)
n.length>0&&(e=n),e.forEach(b)}function p(){const s=a(`#profileRightColumn a[href="${t}"]`)
if(!s)return
const o=l({className:"smallLink",textContent:"All"})
e(o,r)
const i=l({innerHTML:"[&nbsp;"})
n(i,o),c(i,"&nbsp;]&nbsp;"),n(s.parentNode,i)}export default p
//# sourceMappingURL=selectAllLink-ce9fd59f.js.map
