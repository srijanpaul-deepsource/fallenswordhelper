import{c as r}from"./currentGuildId-c05147ac.js"
import{D as t,aY as a,bG as e}from"./calfSystem-9ab64478.js"
let n,c,s,f
function o(){return n||(c=t(`#pCC a[href^="${a}"]`),n=!0),c}function u(){return s||(f=function(){const r=o()
if(r){const t=e.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),f}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-e126ddfa.js.map
