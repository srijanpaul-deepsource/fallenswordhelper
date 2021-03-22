import{y as t,m as s,i as e,h as a,p as o,o as c,z as f,R as n}from"./calfSystem-fe0ebf32.js"
import{g as r}from"./getArrayByClassName-7dbc6c3a.js"
import{g as m}from"./getInventoryById-42f06822.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&n(t)}function h(){const t=r("selectable-item",f(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const f=s({className:"fshAC"})
e(f,'<button class="fshBl">Perfect</button>'),a(o,f),c(f,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-317c435b.js.map
