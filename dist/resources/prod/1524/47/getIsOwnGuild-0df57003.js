import{c as r}from"./currentGuildId-871ea013.js"
import{D as t,c8 as e,bB as n}from"./calfSystem-a2fd9017.js"
let a,f,s,c
function o(){return a||(f=t(`#pCC a[href^="${e}"]`),a=!0),f}function u(){return s||(c=function(){const r=o()
if(r){const t=n.exec(r.href)
if(t)return Number(t[1])}}()===r(),s=!0),c}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-0df57003.js.map
