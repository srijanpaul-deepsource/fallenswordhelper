import{a8 as e,as as t}from"./calfSystem-db2edbef.js"
import{p as a}from"./padZ-65ad9136.js"
function r(r,s){const o=/([0-9]+)m ([0-9]+)s/.exec(r)
var d
if(o)return`<dd>${d=new Date(e+1e3*(60*(60*s+Number(o[1]))+Number(o[2]))),`${a(d.getHours())}:${a(d.getMinutes())} ${d.toLocaleString("en",{weekday:"short"})} ${a(d.getDate())}/${t[d.getMonth()]}/${d.getFullYear()}`}</dd>`}export{r as t}
//# sourceMappingURL=timeBox-af809ef4.js.map
