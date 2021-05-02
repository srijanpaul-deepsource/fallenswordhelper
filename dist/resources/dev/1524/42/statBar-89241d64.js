import{c as a}from"./createAnchor-0baa70c0.js"
import{z as e,h as t,o as r,bL as s,ac as n,aC as o,bU as i,bV as c,aa as f}from"./calfSystem-4b6b865d.js"
import{i as m}from"./insertElementAfterBegin-4ec7552e.js"
import"./insertElementBefore-34b77984.js"
function p(a){a.stopPropagation()}function b(s,n){const o=e(`statbar-${n}`)
if(!o)return
const i=a({href:s}),c=o.parentNode
t(i,o),m(c,i),r(i,p,!0)}function u(){b(s,"character"),b(`${n+o}reserve`,"stamina"),b(i,"equipment"),b(c,"inventory"),b(n,"fsp"),b(`${f}bank`,"gold")}export default u
//# sourceMappingURL=statBar-89241d64.js.map
