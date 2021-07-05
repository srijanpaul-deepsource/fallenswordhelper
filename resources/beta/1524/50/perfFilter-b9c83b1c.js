import{y as t,m as s,i as a,h as e,p as o,o as c,z as n,Q as f}from"./calfSystem-617f9a5d.js"
import{g as r}from"./getArrayByClassName-3e46aa9a.js"
import{g as m}from"./getInventoryById-c970cb7e.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&f(t)}function h(){const t=r("selectable-item",n(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const n=s({className:"fshAC"})
a(n,'<button class="fshBl">Perfect</button>'),e(o,n),c(n,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-b9c83b1c.js.map
