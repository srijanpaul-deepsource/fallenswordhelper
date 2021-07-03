import{a8 as e,as as t}from"./calfSystem-85fa6364.js"
import{p as a}from"./padZ-b9e73e86.js"
function r(r,s){const o=/([0-9]+)m ([0-9]+)s/.exec(r)
var n
if(o)return`<dd>${n=new Date(e+1e3*(60*(60*s+Number(o[1]))+Number(o[2]))),`${a(n.getHours())}:${a(n.getMinutes())} ${n.toLocaleString("en",{weekday:"short"})} ${a(n.getDate())}/${t[n.getMonth()]}/${n.getFullYear()}`}</dd>`}export{r as t}
//# sourceMappingURL=timeBox-08a218b5.js.map
