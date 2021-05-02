import{c as r}from"./currentGuildId-ad15ffa8.js"
import{D as t,c6 as e,bw as f}from"./calfSystem-15b00143.js"
let n,a,s,c
function o(){return n||(a=t(`#pCC a[href^="${e}"]`),n=!0),a}function u(){return s||(c=function(){const r=o()
if(r){const t=f.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),c}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-67ae9c9d.js.map
