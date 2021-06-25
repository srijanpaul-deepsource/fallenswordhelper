import{c as r}from"./currentGuildId-3f7c0e1c.js"
import{D as e,bz as t,bE as f}from"./calfSystem-db2edbef.js"
let n,c,s,o
function a(){return n||(c=e(`#pCC a[href^="${t}"]`),n=!0),c}function u(){return s||(o=function(){const r=a()
if(r){const e=f.exec(r.href)
if(e)return Number(e[1])}}()===r(),s=!0),o}export{u as a,a as g}
//# sourceMappingURL=getIsOwnGuild-1130cab7.js.map
