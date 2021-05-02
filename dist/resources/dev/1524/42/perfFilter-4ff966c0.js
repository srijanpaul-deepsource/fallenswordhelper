import{y as t,m as s,i as a,h as e,p as c,o,z as n,S as r}from"./calfSystem-4b6b865d.js"
import{g as f}from"./getArrayByClassName-c0c751ca.js"
import{g as m}from"./getInventoryById-0d163274.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&r(t)}function h(){const t=f("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
a(n,'<button class="fshBl">Perfect</button>'),e(c,n),o(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-4ff966c0.js.map
