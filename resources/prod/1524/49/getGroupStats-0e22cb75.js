import{c as t}from"./chunk-91a9a131.js"
import{c as o}from"./createButton-23c78013.js"
import{c as r}from"./createLi-70d99e1d.js"
import{c as s}from"./createUl-9a594232.js"
import{h as e,o as n,S as a,bk as f,aM as c,v as u}from"./calfSystem-2172498b.js"
import{o as i}from"./openQuickBuffByName-8e50e0f6.js"
import{g as m}from"./groupViewStats-6b3e492f.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),e(f,c),f}function j(t,o,r){return e(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&e(n,p("Buff All",o.join(","))),r.reduce(j,n)}function B(t){const o=u(t)
return m(o)}function h(t){return c(t).then(B)}export{l as d,h as g}
//# sourceMappingURL=getGroupStats-0e22cb75.js.map
