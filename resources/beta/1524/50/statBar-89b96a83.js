import{c as a}from"./createAnchor-6f1b78a5.js"
import{z as t,h as e,o as r,bQ as s,ad as n,aH as o,ca as i,cb as f,ab as c}from"./calfSystem-617f9a5d.js"
import{i as m}from"./insertElementAfterBegin-931665a2.js"
import"./insertElementBefore-784d4581.js"
function p(a){a.stopPropagation()}function b(s,n){const o=t(`statbar-${n}`)
if(!o)return
const i=a({href:s}),f=o.parentNode
e(i,o),m(f,i),r(i,p,!0)}function d(){b(s,"character"),b(`${n+o}reserve`,"stamina"),b(i,"equipment"),b(f,"inventory"),b(n,"fsp"),b(`${c}bank`,"gold")}export default d
//# sourceMappingURL=statBar-89b96a83.js.map
