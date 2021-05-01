import{c as r}from"./currentGuildId-72946831.js"
import{D as t,bv as e,bz as n}from"./calfSystem-c464cb1d.js"
let c,s,f,o
function a(){return c||(s=t(`#pCC a[href^="${e}"]`),c=!0),s}function u(){return f||(o=function(){const r=a()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),f=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-90e12db9.js.map
