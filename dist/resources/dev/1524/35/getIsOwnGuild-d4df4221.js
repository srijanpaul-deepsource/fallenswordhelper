import{c as r}from"./currentGuildId-7dd95943.js"
import{D as t,bv as e,bz as n}from"./calfSystem-186455ab.js"
let s,a,f,o
function c(){return s||(a=t(`#pCC a[href^="${e}"]`),s=!0),a}function u(){return f||(o=function(){const r=c()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),f=!0),o}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-d4df4221.js.map
