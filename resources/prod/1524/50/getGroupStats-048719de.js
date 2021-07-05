import{c as t}from"./chunk-965f25a6.js"
import{c as o}from"./createButton-a14dda00.js"
import{c as r}from"./createLi-c5ba2393.js"
import{c as s}from"./createUl-d4bbd19f.js"
import{h as a,o as n,S as f,bk as e,aM as c,v as u}from"./calfSystem-365d90f3.js"
import{o as i}from"./openQuickBuffByName-586c4bc1.js"
import{g as m}from"./groupViewStats-f2211e30.js"
function p(t,s){const e=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),f("doBuffLinks",t)})),a(e,c),e}function j(t,o,r){return a(t,p(`Buff ${e[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&a(n,p("Buff All",o.join(","))),r.reduce(j,n)}function d(t){const o=u(t)
return m(o)}function B(t){return c(t).then(d)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-048719de.js.map
