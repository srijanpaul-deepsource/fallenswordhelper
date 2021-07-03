import{c as t}from"./chunk-7ed9b1d2.js"
import{c as o}from"./createButton-8b0b448f.js"
import{c as r}from"./createLi-636df231.js"
import{c as s}from"./createUl-f88b7938.js"
import{h as f,o as n,S as e,bk as a,aM as c,v as u}from"./calfSystem-85fa6364.js"
import{o as i}from"./openQuickBuffByName-fd250012.js"
import{g as m}from"./groupViewStats-c23e533e.js"
function p(t,s){const a=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),e("doBuffLinks",t)})),f(a,c),a}function j(t,o,r){return f(t,p(`Buff ${a[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&f(n,p("Buff All",o.join(","))),r.reduce(j,n)}function B(t){const o=u(t)
return m(o)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-6f33e882.js.map
