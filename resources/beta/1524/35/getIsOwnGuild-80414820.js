import{c as r}from"./currentGuildId-4235046f.js"
import{D as t,bu as e,bw as n}from"./calfSystem-03050396.js"
let f,s,o,u
function a(){return f||(s=t(`#pCC a[href^="${e}"]`),f=!0),s}function c(){return o||(u=function(){const r=a()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),o=!0),u}export{c as a,a as g}
//# sourceMappingURL=getIsOwnGuild-80414820.js.map
