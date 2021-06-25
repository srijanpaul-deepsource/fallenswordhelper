import{c as a}from"./createAnchor-f7b56093.js"
import{z as e,h as t,o as r,bP as s,ac as n,aG as o,bW as i,bX as f,aa as c}from"./calfSystem-db2edbef.js"
import{i as m}from"./insertElementAfterBegin-9758a790.js"
import"./insertElementBefore-165ce171.js"
function p(a){a.stopPropagation()}function b(s,n){const o=e(`statbar-${n}`)
if(!o)return
const i=a({href:s}),f=o.parentNode
t(i,o),m(f,i),r(i,p,!0)}function u(){b(s,"character"),b(`${n+o}reserve`,"stamina"),b(i,"equipment"),b(f,"inventory"),b(n,"fsp"),b(`${c}bank`,"gold")}export default u
//# sourceMappingURL=statBar-66cf69ba.js.map
