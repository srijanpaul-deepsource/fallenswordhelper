import{c as t}from"./chunk-af680637.js"
import{c as o}from"./createButton-4e20f680.js"
import{c as r}from"./createLi-5a392c53.js"
import{c as s}from"./createUl-98a204ae.js"
import{h as a,o as n,W as e,bg as f,aH as c,v as u}from"./calfSystem-587dd8d3.js"
import{o as i}from"./openQuickBuffByName-5250032b.js"
import{g as m}from"./groupViewStats-a04a8ddc.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),e("doBuffLinks",t)})),a(f,c),f}function j(t,o,r){return a(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&a(n,p("Buff All",o.join(","))),r.reduce(j,n)}function d(t){const o=u(t)
return m(o)}function B(t){return c(t).then(d)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-da3a9e42.js.map
