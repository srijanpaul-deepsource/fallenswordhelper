import{y as t,m as s,i as e,h as a,p as o,o as n,z as c,R as f}from"./calfSystem-ab393688.js"
import{g as r}from"./getArrayByClassName-f0b57594.js"
import{g as m}from"./getInventoryById-11ef40d9.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function h(){const t=r("selectable-item",c(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const c=s({className:"fshAC"})
e(c,'<button class="fshBl">Perfect</button>'),a(o,c),n(c,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-3c9b7b90.js.map
