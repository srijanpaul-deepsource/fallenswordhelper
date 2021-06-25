import{y as t,m as s,i as a,h as e,p as o,o as f,z as n,Q as c}from"./calfSystem-a2fd9017.js"
import{g as r}from"./getArrayByClassName-44af3bfd.js"
import{g as m}from"./getInventoryById-7fb67bd6.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&c(t)}function b(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function h(t){i=t.items
const n=s({className:"fshAC"})
a(n,'<button class="fshBl">Perfect</button>'),e(o,n),f(n,b)}function u(s){t()||(l=s,m().then(h))}export{u as p}
//# sourceMappingURL=perfFilter-ef51e63b.js.map
