import{c as r}from"./currentGuildId-2c89c2be.js"
import{D as t,c6 as e,bw as c}from"./calfSystem-030d7057.js"
let n,s,f,o
function a(){return n||(s=t(`#pCC a[href^="${e}"]`),n=!0),s}function u(){return f||(o=function(){const r=a()
if(r){const t=c.exec(r.href)
if(t)return Number(t[1])}}()===r(),f=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-406e6798.js.map
