import{K as e,a8 as t,ag as a}from"./calfSystem-4b6b865d.js"
import{i as r}from"./intValue-9eb8a210.js"
import{v as s}from"./valueText-3b73f119.js"
import{p as o}from"./padZ-babdd575.js"
function n(t){return r(s(e(t)))}function m(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,m as t}
//# sourceMappingURL=timeBox-ae457e38.js.map