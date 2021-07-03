import{c as t}from"./chunk-7ed9b1d2.js"
import{c as o}from"./createButton-bde35073.js"
import{c as r}from"./createLi-90108ed9.js"
import{c as s}from"./createUl-fd16b713.js"
import{h as e,o as n,T as a,bn as f,aO as c,v as u}from"./calfSystem-01849445.js"
import{o as i}from"./openQuickBuffByName-a7eecc9f.js"
import{g as m}from"./groupViewStats-4d61b315.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),e(f,c),f}function d(t,o,r){return e(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function j(o){const r=t(16,o),n=s()
return r.length>1&&e(n,p("Buff All",o.join(","))),r.reduce(d,n)}function l(t){const o=u(t)
return m(o)}function B(t){return c(t).then(l)}export{j as d,B as g}
//# sourceMappingURL=getGroupStats-3550c890.js.map
