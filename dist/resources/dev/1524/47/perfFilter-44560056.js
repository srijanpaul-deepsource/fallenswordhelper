import{y as t,m as s,i as a,h as e,p as c,o,z as f,R as n}from"./calfSystem-bfc1f6c0.js"
import{g as r}from"./getArrayByClassName-2fc630c7.js"
import{g as m}from"./getInventoryById-06ca3545.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&n(t)}function h(){const t=r("selectable-item",f(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const f=s({className:"fshAC"})
a(f,'<button class="fshBl">Perfect</button>'),e(c,f),o(f,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-44560056.js.map
