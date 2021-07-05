import{c as t}from"./chunk-965f25a6.js"
import{c as o}from"./createButton-2cb8f044.js"
import{c as r}from"./createLi-c4e394fb.js"
import{c as s}from"./createUl-f2354fe8.js"
import{h as f,o as n,T as e,bn as a,aO as c,v as u}from"./calfSystem-b3667af8.js"
import{o as i}from"./openQuickBuffByName-18de8163.js"
import{g as m}from"./groupViewStats-6bf51b21.js"
function p(t,s){const a=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),e("doBuffLinks",t)})),f(a,c),a}function j(t,o,r){return f(t,p(`Buff ${a[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&f(n,p("Buff All",o.join(","))),r.reduce(j,n)}function B(t){const o=u(t)
return m(o)}function b(t){return c(t).then(B)}export{l as d,b as g}
//# sourceMappingURL=getGroupStats-8e25cbb8.js.map
