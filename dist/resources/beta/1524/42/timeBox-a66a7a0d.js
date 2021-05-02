import{K as e,a7 as t,af as a}from"./calfSystem-e76f1a7d.js"
import{i as r}from"./intValue-9eb8a210.js"
import{v as s}from"./valueText-ffb2b814.js"
import{p as o}from"./padZ-babdd575.js"
function n(t){return r(s(e(t)))}function f(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,f as t}
//# sourceMappingURL=timeBox-a66a7a0d.js.map
