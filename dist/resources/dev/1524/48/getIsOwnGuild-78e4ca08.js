import{c as r}from"./currentGuildId-8dd620e8.js"
import{D as t,aY as e,bG as n}from"./calfSystem-01849445.js"
let s,a,f,o
function c(){return s||(a=t(`#pCC a[href^="${e}"]`),s=!0),a}function u(){return f||(o=function(){const r=c()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),f=!0),o}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-78e4ca08.js.map
