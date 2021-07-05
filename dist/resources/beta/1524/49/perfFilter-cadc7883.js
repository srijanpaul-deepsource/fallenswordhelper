import{y as t,m as s,i as e,h as a,p as o,o as c,z as n,Q as f}from"./calfSystem-42f137cb.js"
import{g as r}from"./getArrayByClassName-97a5b37d.js"
import{g as m}from"./getInventoryById-33beb415.js"
let i,l
function b(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function p(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(b)}function h(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(o,n),c(n,p)}function u(s){t()||(l=s,m().then(h))}export{u as p}
//# sourceMappingURL=perfFilter-cadc7883.js.map
