import{y as t,m as s,i as e,h as a,p as c,o,z as n,R as r}from"./calfSystem-7a1cce43.js"
import{g as f}from"./getArrayByClassName-0cc51c94.js"
import{g as m}from"./getInventoryById-1d2b4072.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&r(t)}function h(){const t=f("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
e(n,'<button class="fshBl">Perfect</button>'),a(c,n),o(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-d17e166f.js.map
