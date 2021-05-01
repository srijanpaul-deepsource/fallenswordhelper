import{c as t}from"./chunk-b7db8c6b.js"
import{c as o}from"./createButton-07230ca6.js"
import{c as r}from"./createLi-c5794633.js"
import{c as s}from"./createUl-ae9ba982.js"
import{h as a,o as n,W as e,bf as f,aG as c,v as u}from"./calfSystem-ab393688.js"
import{o as i}from"./openQuickBuffByName-a32a2b4a.js"
import{g as m}from"./groupViewStats-8fe19289.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),e("doBuffLinks",t)})),a(f,c),f}function j(t,o,r){return a(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&a(n,p("Buff All",o.join(","))),r.reduce(j,n)}function b(t){const o=u(t)
return m(o)}function B(t){return c(t).then(b)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-1dbb4905.js.map
