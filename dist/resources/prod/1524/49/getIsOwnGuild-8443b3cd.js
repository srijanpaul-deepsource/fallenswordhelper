import{c as r}from"./currentGuildId-7d9d343b.js"
import{D as t,bz as e,bE as n}from"./calfSystem-2172498b.js"
let s,f,o,a
function c(){return s||(f=t(`#pCC a[href^="${e}"]`),s=!0),f}function u(){return o||(a=function(){const r=c()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),o=!0),a}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-8443b3cd.js.map
