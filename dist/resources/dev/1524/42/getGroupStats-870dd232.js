import{c as t}from"./chunk-89253199.js"
import{c as o}from"./createButton-ab007289.js"
import{c as r}from"./createLi-9d84a031.js"
import{c as s}from"./createUl-a6afb11f.js"
import{h as a,o as n,X as f,bh as e,aI as c,v as u}from"./calfSystem-4b6b865d.js"
import{o as i}from"./openQuickBuffByName-390aeb1d.js"
import{g as m}from"./groupViewStats-21cfd076.js"
function p(t,s){const e=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),f("doBuffLinks",t)})),a(e,c),e}function j(t,o,r){return a(t,p(`Buff ${e[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&a(n,p("Buff All",o.join(","))),r.reduce(j,n)}function B(t){const o=u(t)
return m(o)}function b(t){return c(t).then(B)}export{l as d,b as g}
//# sourceMappingURL=getGroupStats-870dd232.js.map
