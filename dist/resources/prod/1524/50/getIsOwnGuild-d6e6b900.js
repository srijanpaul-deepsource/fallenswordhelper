import{c as r}from"./currentGuildId-605c07b2.js"
import{D as t,bz as e,bE as n}from"./calfSystem-365d90f3.js"
let f,s,c,o
function a(){return f||(s=t(`#pCC a[href^="${e}"]`),f=!0),s}function u(){return c||(o=function(){const r=a()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),c=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-d6e6b900.js.map
