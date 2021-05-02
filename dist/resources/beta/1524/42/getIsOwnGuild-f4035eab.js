import{c as r}from"./currentGuildId-b1971071.js"
import{D as t,bv as e,bz as n}from"./calfSystem-e76f1a7d.js"
let f,s,a,o
function c(){return f||(s=t(`#pCC a[href^="${e}"]`),f=!0),s}function u(){return a||(o=function(){const r=c()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),a=!0),o}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-f4035eab.js.map
