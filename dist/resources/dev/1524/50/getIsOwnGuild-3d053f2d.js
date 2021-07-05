import{c as r}from"./currentGuildId-01980e74.js"
import{D as t,aY as e,bG as n}from"./calfSystem-b3667af8.js"
let a,f,s,o
function c(){return a||(f=t(`#pCC a[href^="${e}"]`),a=!0),f}function u(){return s||(o=function(){const r=c()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),o}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-3d053f2d.js.map
