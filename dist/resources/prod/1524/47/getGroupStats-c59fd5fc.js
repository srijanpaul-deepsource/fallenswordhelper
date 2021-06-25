import{c as t}from"./chunk-c0e724c2.js"
import{c as o}from"./createButton-66938c57.js"
import{c as r}from"./createLi-053a1346.js"
import{c as s}from"./createUl-2391781a.js"
import{h as a,o as n,S as e,bi as f,aK as c,v as u}from"./calfSystem-a2fd9017.js"
import{o as i}from"./openQuickBuffByName-713316ef.js"
import{g as m}from"./groupViewStats-84ab9158.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),e("doBuffLinks",t)})),a(f,c),f}function j(t,o,r){return a(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&a(n,p("Buff All",o.join(","))),r.reduce(j,n)}function B(t){const o=u(t)
return m(o)}function h(t){return c(t).then(B)}export{l as d,h as g}
//# sourceMappingURL=getGroupStats-c59fd5fc.js.map
