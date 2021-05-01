import{c as a}from"./createAnchor-946f1fd4.js"
import{z as e,h as t,o as r,bG as s,ab as n,ay as o,bP as f,bQ as i,a9 as c}from"./calfSystem-540da563.js"
import{i as m}from"./insertElementAfterBegin-873997cf.js"
import"./insertElementBefore-6e80e0ff.js"
function p(a){a.stopPropagation()}function b(s,n){const o=e(`statbar-${n}`)
if(!o)return
const f=a({href:s}),i=o.parentNode
t(f,o),m(i,f),r(f,p,!0)}function u(){b(s,"character"),b(`${n+o}reserve`,"stamina"),b(f,"equipment"),b(i,"inventory"),b(n,"fsp"),b(`${c}bank`,"gold")}export default u
//# sourceMappingURL=statBar-88caf7d3.js.map
