import{c as r}from"./currentGuildId-0741b5a4.js"
import{D as t,bw as e,bA as n}from"./calfSystem-817ceb25.js"
let s,a,c,f
function o(){return s||(a=t(`#pCC a[href^="${e}"]`),s=!0),a}function u(){return c||(f=function(){const r=o()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),c=!0),f}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-75cadbb0.js.map
