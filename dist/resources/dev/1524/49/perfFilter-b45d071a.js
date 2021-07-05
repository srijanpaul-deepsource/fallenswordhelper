import{y as t,m as s,i as a,h as e,p as o,o as c,z as n,R as f}from"./calfSystem-9ab64478.js"
import{g as r}from"./getArrayByClassName-a799501a.js"
import{g as m}from"./getInventoryById-70c1827f.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function h(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
a(n,'<button class="fshBl">Perfect</button>'),e(o,n),c(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-b45d071a.js.map
