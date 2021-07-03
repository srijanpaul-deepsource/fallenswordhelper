import{c as r}from"./currentGuildId-01e2fed9.js"
import{D as e,bz as t,bE as f}from"./calfSystem-85fa6364.js"
let n,s,a,o
function c(){return n||(s=e(`#pCC a[href^="${t}"]`),n=!0),s}function u(){return a||(o=function(){const r=c()
if(r){const e=f.exec(r.href)
if(e)return Number(e[1])}}()===r(),a=!0),o}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-aa6b75c3.js.map
