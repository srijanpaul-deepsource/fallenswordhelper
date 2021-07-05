import{c as t}from"./chunk-91a9a131.js"
import{c as o}from"./createButton-a944a33d.js"
import{c as r}from"./createLi-345a7770.js"
import{c as s}from"./createUl-cc8c2e09.js"
import{h as a,o as n,T as f,bn as e,aO as c,v as u}from"./calfSystem-9ab64478.js"
import{o as i}from"./openQuickBuffByName-2b4b1ff5.js"
import{g as m}from"./groupViewStats-f83dbb09.js"
function p(t,s){const e=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),f("doBuffLinks",t)})),a(e,c),e}function j(t,o,r){return a(t,p(`Buff ${e[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&a(n,p("Buff All",o.join(","))),r.reduce(j,n)}function B(t){const o=u(t)
return m(o)}function b(t){return c(t).then(B)}export{l as d,b as g}
//# sourceMappingURL=getGroupStats-c44f3ff8.js.map
