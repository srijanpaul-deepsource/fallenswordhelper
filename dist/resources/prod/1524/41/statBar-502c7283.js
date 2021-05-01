import{c as a}from"./createAnchor-878d69d7.js"
import{z as t,h as e,o as r,bH as s,ab as n,az as o,bQ as f,bR as i,a9 as m}from"./calfSystem-030d7057.js"
import{i as c}from"./insertElementAfterBegin-236f9295.js"
import"./insertElementBefore-2bf2da7f.js"
function p(a){a.stopPropagation()}function b(s,n){const o=t(`statbar-${n}`)
if(!o)return
const f=a({href:s}),i=o.parentNode
e(f,o),c(i,f),r(f,p,!0)}function d(){b(s,"character"),b(`${n+o}reserve`,"stamina"),b(f,"equipment"),b(i,"inventory"),b(n,"fsp"),b(`${m}bank`,"gold")}export default d
//# sourceMappingURL=statBar-502c7283.js.map
