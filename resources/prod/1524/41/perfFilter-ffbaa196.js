import{y as t,m as s,i as a,h as e,p as o,o as n,z as c,R as r}from"./calfSystem-030d7057.js"
import{g as f}from"./getArrayByClassName-3714a576.js"
import{g as m}from"./getInventoryById-4d1a7058.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&r(t)}function h(){const t=f("selectable-item",c(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const c=s({className:"fshAC"})
a(c,'<button class="fshBl">Perfect</button>'),e(o,c),n(c,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-ffbaa196.js.map
