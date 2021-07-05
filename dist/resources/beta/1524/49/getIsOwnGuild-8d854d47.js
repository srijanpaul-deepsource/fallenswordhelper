import{c as r}from"./currentGuildId-d1f28a3b.js"
import{D as t,bA as e,bF as f}from"./calfSystem-42f137cb.js"
let n,s,a,c
function o(){return n||(s=t(`#pCC a[href^="${e}"]`),n=!0),s}function u(){return a||(c=function(){const r=o()
if(r){const t=f.exec(r.href)
if(t)return Number(t[1])}}()===r(),a=!0),c}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-8d854d47.js.map
