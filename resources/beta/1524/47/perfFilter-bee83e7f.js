import{y as t,m as s,i as e,h as a,p as o,o as f,z as c,Q as n}from"./calfSystem-db2edbef.js"
import{g as r}from"./getArrayByClassName-e5960a90.js"
import{g as m}from"./getInventoryById-fff7bcba.js"
let i,l
function b(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&n(t)}function p(){const t=r("selectable-item",c(`${l}-items`))
0!==t.length&&t.forEach(b)}function h(t){i=t.items
const c=s({className:"fshAC"})
e(c,'<button class="fshBl">Perfect</button>'),a(o,c),f(c,p)}function u(s){t()||(l=s,m().then(h))}export{u as p}
//# sourceMappingURL=perfFilter-bee83e7f.js.map
