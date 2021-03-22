import{c as t}from"./chunk-e04f591f.js"
import{c as o}from"./createButton-3e0d72e2.js"
import{c as r}from"./createLi-d686123b.js"
import{c as s}from"./createUl-760b5257.js"
import{h as e,o as f,X as n,ba as a,aA as c,v as u}from"./calfSystem-186455ab.js"
import{o as i}from"./openQuickBuffByName-058f1f1e.js"
import{g as m}from"./groupViewStats-9f893786.js"
function p(t,s){const a=r(),c=o({className:"fshBl fshBls",textContent:t})
return f(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),e(a,c),a}function j(t,o,r){return e(t,p(`Buff ${a[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),f=s()
return r.length>1&&e(f,p("Buff All",o.join(","))),r.reduce(j,f)}function B(t){const o=u(t)
return m(o)}function h(t){return c(t).then(B)}export{l as d,h as g}
//# sourceMappingURL=getGroupStats-5aec1a57.js.map
