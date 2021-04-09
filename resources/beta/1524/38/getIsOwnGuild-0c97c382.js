import{c as r}from"./currentGuildId-feae79ca.js"
import{D as e,bu as t,by as f}from"./calfSystem-71efcdd9.js"
let n,a,c,s
function o(){return n||(a=e(`#pCC a[href^="${t}"]`),n=!0),a}function u(){return c||(s=function(){const r=o()
if(r){const e=f.exec(r.href)
if(e)return Number(e[1])}}()===r(),c=!0),s}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-0c97c382.js.map
