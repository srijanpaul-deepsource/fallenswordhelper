import{y as t,m as s,i as a,h as e,p as o,o as f,z as c,Q as n}from"./calfSystem-85fa6364.js"
import{g as r}from"./getArrayByClassName-4fe5cf41.js"
import{g as m}from"./getInventoryById-fd76220a.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&n(t)}function h(){const t=r("selectable-item",c(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const c=s({className:"fshAC"})
a(c,'<button class="fshBl">Perfect</button>'),e(o,c),f(c,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-e37d175f.js.map
