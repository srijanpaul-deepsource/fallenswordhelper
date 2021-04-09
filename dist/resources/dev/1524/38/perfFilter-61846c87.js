import{y as t,m as s,i as e,h as a,p as c,o,z as f,S as n}from"./calfSystem-d56087e1.js"
import{g as r}from"./getArrayByClassName-e1c1fd86.js"
import{g as m}from"./getInventoryById-5ccedf1f.js"
let i,l
function p(t){const s=t.id.replace(`${l}-item-`,"")
i[s]&&"Perfect"===i[s].craft&&n(t)}function h(){const t=r("selectable-item",f(`${l}-items`))
0!==t.length&&t.forEach(p)}function u(t){i=t.items
const f=s({className:"fshAC"})
e(f,'<button class="fshBl">Perfect</button>'),a(c,f),o(f,h)}function y(s){t()||(l=s,m().then(u))}export{y as p}
//# sourceMappingURL=perfFilter-61846c87.js.map
