import{c as t}from"./chunk-91a9a131.js"
import{c as o}from"./createButton-97318426.js"
import{c as r}from"./createLi-588f30d7.js"
import{c as s}from"./createUl-d0e28a15.js"
import{h as a,o as n,S as f,bl as e,aN as c,v as u}from"./calfSystem-42f137cb.js"
import{o as i}from"./openQuickBuffByName-ca011f73.js"
import{g as m}from"./groupViewStats-26576bf9.js"
function l(t,s){const e=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),f("doBuffLinks",t)})),a(e,c),e}function p(t,o,r){return a(t,l(`Buff ${e[r]} 16`,o.join(","))),t}function j(o){const r=t(16,o),n=s()
return r.length>1&&a(n,l("Buff All",o.join(","))),r.reduce(p,n)}function B(t){const o=u(t)
return m(o)}function h(t){return c(t).then(B)}export{j as d,h as g}
//# sourceMappingURL=getGroupStats-17e567ab.js.map
