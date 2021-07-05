import{a9 as e,at as t}from"./calfSystem-617f9a5d.js"
import{p as a}from"./padZ-a45d0ad0.js"
function r(r,o){const s=/([0-9]+)m ([0-9]+)s/.exec(r)
var d
if(s)return`<dd>${d=new Date(e+1e3*(60*(60*o+Number(s[1]))+Number(s[2]))),`${a(d.getHours())}:${a(d.getMinutes())} ${d.toLocaleString("en",{weekday:"short"})} ${a(d.getDate())}/${t[d.getMonth()]}/${d.getFullYear()}`}</dd>`}export{r as t}
//# sourceMappingURL=timeBox-b87fe64b.js.map
