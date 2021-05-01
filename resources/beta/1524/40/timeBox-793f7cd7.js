import{K as e,a7 as t,af as a}from"./calfSystem-ab393688.js"
import{i as r}from"./intValue-e485889b.js"
import{v as s}from"./valueText-d39824a3.js"
import{p as o}from"./padZ-827c036e.js"
function n(t){return r(s(e(t)))}function m(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,m as t}
//# sourceMappingURL=timeBox-793f7cd7.js.map
