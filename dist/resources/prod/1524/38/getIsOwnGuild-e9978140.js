import{c as r}from"./currentGuildId-c3cf68bc.js"
import{D as c,c6 as t,bv as e}from"./calfSystem-7a1cce43.js"
let n,f,s,a
function o(){return n||(f=c(`#pCC a[href^="${t}"]`),n=!0),f}function u(){return s||(a=function(){const r=o()
if(r){const c=e.exec(r.href)
if(c)return Number(c[1])}}()===r(),s=!0),a}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-e9978140.js.map
