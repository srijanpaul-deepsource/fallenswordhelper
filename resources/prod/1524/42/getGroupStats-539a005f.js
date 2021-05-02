import{c as t}from"./chunk-89253199.js"
import{c as o}from"./createButton-920f87da.js"
import{c as r}from"./createLi-0e1933bb.js"
import{c as s}from"./createUl-cbf8e403.js"
import{h as e,o as a,W as n,be as f,aF as c,v as u}from"./calfSystem-15b00143.js"
import{o as i}from"./openQuickBuffByName-62891ff5.js"
import{g as m}from"./groupViewStats-3aeaae59.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return a(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),e(f,c),f}function j(t,o,r){return e(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),a=s()
return r.length>1&&e(a,p("Buff All",o.join(","))),r.reduce(j,a)}function B(t){const o=u(t)
return m(o)}function b(t){return c(t).then(B)}export{l as d,b as g}
//# sourceMappingURL=getGroupStats-539a005f.js.map
