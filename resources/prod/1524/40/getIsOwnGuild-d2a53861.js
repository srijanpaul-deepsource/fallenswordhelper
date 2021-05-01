import{c as r}from"./currentGuildId-dc83d308.js"
import{D as t,c5 as e,bv as n}from"./calfSystem-540da563.js"
let c,s,a,f
function o(){return c||(s=t(`#pCC a[href^="${e}"]`),c=!0),s}function u(){return a||(f=function(){const r=o()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),a=!0),f}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-d2a53861.js.map
