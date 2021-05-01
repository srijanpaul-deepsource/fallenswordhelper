import{c as r}from"./currentGuildId-0cbe4e98.js"
import{D as e,bu as t,by as n}from"./calfSystem-ab393688.js"
let s,a,c,f
function o(){return s||(a=e(`#pCC a[href^="${t}"]`),s=!0),a}function u(){return c||(f=function(){const r=o()
if(r){const e=n.exec(r.href)
if(e)return Number(e[1])}}()===r(),c=!0),f}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-80c7f46f.js.map
