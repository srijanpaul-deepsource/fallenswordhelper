import{y as t,m as s,i as e,h as a,p as o,o as c,z as f,R as n}from"./calfSystem-71efcdd9.js"
import{g as r}from"./getArrayByClassName-0e4564de.js"
import{g as m}from"./getInventoryById-c1b4f3f9.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&n(t)}function h(){const t=r("selectable-item",f(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const f=s({className:"fshAC"})
e(f,'<button class="fshBl">Perfect</button>'),a(o,f),c(f,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-cdf5e897.js.map
