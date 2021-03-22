import{c as a}from"./createAnchor-df8b6e0b.js"
import{z as t,h as e,o as r,bL as s,ac as n,au as o,bU as i,bV as f,aa as c}from"./calfSystem-186455ab.js"
import{i as m}from"./insertElementAfterBegin-22d97b25.js"
import"./insertElementBefore-9228b012.js"
function b(a){a.stopPropagation()}function p(s,n){const o=t(`statbar-${n}`)
if(!o)return
const i=a({href:s}),f=o.parentNode
e(i,o),m(f,i),r(i,b,!0)}function u(){p(s,"character"),p(`${n+o}reserve`,"stamina"),p(i,"equipment"),p(f,"inventory"),p(n,"fsp"),p(`${c}bank`,"gold")}export default u
//# sourceMappingURL=statBar-9c16a670.js.map
