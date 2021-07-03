import{c as r}from"./currentGuildId-ae75dbfc.js"
import{D as t,bA as e,bF as a}from"./calfSystem-8af1dca2.js"
let f,n,c,s
function o(){return f||(n=t(`#pCC a[href^="${e}"]`),f=!0),n}function u(){return c||(s=function(){const r=o()
if(r){const t=a.exec(r.href)
if(t)return Number(t[1])}}()===r(),c=!0),s}export{u as a,o as g}
//# sourceMappingURL=getIsOwnGuild-53994452.js.map
