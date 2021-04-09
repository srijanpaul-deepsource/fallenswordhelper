import{c as r}from"./currentGuildId-1893e725.js"
import{D as e,bv as t,bz as n}from"./calfSystem-d56087e1.js"
let s,f,o,a
function c(){return s||(f=e(`#pCC a[href^="${t}"]`),s=!0),f}function u(){return o||(a=function(){const r=c()
if(r){const e=n.exec(r.href)
if(e)return Number(e[1])}}()===r(),o=!0),a}export{u as a,c as g}
//# sourceMappingURL=getIsOwnGuild-1ae4044d.js.map
