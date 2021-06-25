import{c as t}from"./chunk-c0e724c2.js"
import{c as o}from"./createButton-7e963da8.js"
import{c as r}from"./createLi-acb237c7.js"
import{c as s}from"./createUl-32b5e5b9.js"
import{h as e,o as n,S as a,bk as f,aM as c,v as u}from"./calfSystem-db2edbef.js"
import{o as i}from"./openQuickBuffByName-76c48ffd.js"
import{g as m}from"./groupViewStats-d0332725.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),e(f,c),f}function j(t,o,r){return e(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&e(n,p("Buff All",o.join(","))),r.reduce(j,n)}function d(t){const o=u(t)
return m(o)}function B(t){return c(t).then(d)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-f762db17.js.map
