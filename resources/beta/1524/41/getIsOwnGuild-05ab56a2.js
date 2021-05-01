import{c as r}from"./currentGuildId-f1814c84.js"
import{D as t,bv as e,bz as n}from"./calfSystem-587dd8d3.js"
let f,s,c,o
function a(){return f||(s=t(`#pCC a[href^="${e}"]`),f=!0),s}function u(){return c||(o=function(){const r=a()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),c=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-05ab56a2.js.map
