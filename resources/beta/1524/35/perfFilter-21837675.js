import{y as t,m as s,i as e,h as a,p as o,o as n,z as c,R as r}from"./calfSystem-03050396.js"
import{g as f}from"./getArrayByClassName-0b05e230.js"
import{g as m}from"./getInventoryById-6aa8e022.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&r(t)}function h(){const t=f("selectable-item",c(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const c=s({className:"fshAC"})
e(c,'<button class="fshBl">Perfect</button>'),a(o,c),n(c,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-21837675.js.map
