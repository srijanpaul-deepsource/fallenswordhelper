import{K as e,a7 as t,af as a}from"./calfSystem-030d7057.js"
import{i as r}from"./intValue-af3aed3f.js"
import{v as s}from"./valueText-f3659878.js"
import{p as o}from"./padZ-9d438f6a.js"
function f(t){return r(s(e(t)))}function n(e,r){const s=/([0-9]+)m ([0-9]+)s/.exec(e)
var f
if(s)return`<dd>${f=new Date(t+1e3*(60*(60*r+Number(s[1]))+Number(s[2]))),`${o(f.getHours())}:${o(f.getMinutes())} ${f.toLocaleString("en",{weekday:"short"})} ${o(f.getDate())}/${a[f.getMonth()]}/${f.getFullYear()}`}</dd>`}export{f as a,n as t}
//# sourceMappingURL=timeBox-5f8d727e.js.map
