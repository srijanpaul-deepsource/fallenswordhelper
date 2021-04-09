import{K as e,a8 as t,ax as a}from"./calfSystem-d56087e1.js"
import{i as r}from"./intValue-ba9b9e5a.js"
import{v as s}from"./valueText-72f14761.js"
import{p as o}from"./padZ-8b68b081.js"
function n(t){return r(s(e(t)))}function m(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,m as t}
//# sourceMappingURL=timeBox-5f1bdfe7.js.map
