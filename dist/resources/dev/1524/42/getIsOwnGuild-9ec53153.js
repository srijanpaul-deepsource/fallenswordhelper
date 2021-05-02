import{c as r}from"./currentGuildId-830390c7.js"
import{D as t,bw as e,bA as n}from"./calfSystem-4b6b865d.js"
let s,c,f,o
function a(){return s||(c=t(`#pCC a[href^="${e}"]`),s=!0),c}function u(){return f||(o=function(){const r=a()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),f=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-9ec53153.js.map
