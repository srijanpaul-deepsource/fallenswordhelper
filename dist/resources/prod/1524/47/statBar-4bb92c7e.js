import{c as a}from"./createAnchor-1f8bf0c5.js"
import{z as t,h as e,o as r,bM as s,ac as n,aE as o,bT as f,bU as i,aa as c}from"./calfSystem-a2fd9017.js"
import{i as m}from"./insertElementAfterBegin-0945414a.js"
import"./insertElementBefore-165ce171.js"
function p(a){a.stopPropagation()}function b(s,n){const o=t(`statbar-${n}`)
if(!o)return
const f=a({href:s}),i=o.parentNode
e(f,o),m(i,f),r(f,p,!0)}function u(){b(s,"character"),b(`${n+o}reserve`,"stamina"),b(f,"equipment"),b(i,"inventory"),b(n,"fsp"),b(`${c}bank`,"gold")}export default u
//# sourceMappingURL=statBar-4bb92c7e.js.map
