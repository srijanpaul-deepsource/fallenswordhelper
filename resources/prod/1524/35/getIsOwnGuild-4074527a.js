import{c as r}from"./currentGuildId-09820c92.js"
import{D as t,c6 as e,bt as f}from"./calfSystem-fe0ebf32.js"
let n,c,s,o
function a(){return n||(c=t(`#pCC a[href^="${e}"]`),n=!0),c}function u(){return s||(o=function(){const r=a()
if(r){const t=f.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-4074527a.js.map
