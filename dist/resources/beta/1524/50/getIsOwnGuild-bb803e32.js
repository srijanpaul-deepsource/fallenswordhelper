import{c as r}from"./currentGuildId-3b40ad81.js"
import{D as t,bA as e,bF as n}from"./calfSystem-617f9a5d.js"
let a,f,s,o
function c(){return a||(f=t(`#pCC a[href^="${e}"]`),a=!0),f}function u(){return s||(o=function(){const r=c()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),o}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-bb803e32.js.map
