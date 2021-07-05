import{y as t,m as s,i as a,h as e,p as o,o as c,z as n,Q as f}from"./calfSystem-2172498b.js"
import{g as r}from"./getArrayByClassName-c230ba3d.js"
import{g as m}from"./getInventoryById-f4d5c4b7.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function b(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function h(t){i=t.items
const n=s({className:"fshAC"})
a(n,'<button class="fshBl">Perfect</button>'),e(o,n),c(n,b)}function u(s){t()||(l=s,m().then(h))}export{u as p}
//# sourceMappingURL=perfFilter-8881694f.js.map
