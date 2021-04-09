import{K as e,a7 as t,au as a}from"./calfSystem-7a1cce43.js"
import{i as r}from"./intValue-ba9b9e5a.js"
import{v as s}from"./valueText-3ccfe58d.js"
import{p as o}from"./padZ-8b68b081.js"
function n(t){return r(s(e(t)))}function m(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var n
if(s)return`<dd>${n=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(n.getHours())}:${o(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${o(n.getDate())}/${a[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{n as a,m as t}
//# sourceMappingURL=timeBox-dad71f65.js.map
