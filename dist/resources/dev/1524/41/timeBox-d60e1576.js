import{K as e,a8 as t,ag as a}from"./calfSystem-817ceb25.js"
import{i as r}from"./intValue-af3aed3f.js"
import{v as s}from"./valueText-35bd586a.js"
import{p as o}from"./padZ-9d438f6a.js"
function n(t){return r(s(e(t)))}function m(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,m as t}
//# sourceMappingURL=timeBox-d60e1576.js.map
