import{c as r}from"./currentGuildId-92fe6d54.js"
import{D as t,aX as e,bF as f}from"./calfSystem-bfc1f6c0.js"
let n,c,s,a
function o(){return n||(c=t(`#pCC a[href^="${e}"]`),n=!0),c}function u(){return s||(a=function(){const r=o()
if(r){const t=f.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),a}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-97da8dd8.js.map
