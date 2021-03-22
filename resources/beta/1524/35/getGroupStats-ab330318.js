import{c as t}from"./chunk-e04f591f.js"
import{c as o}from"./createButton-ba152a34.js"
import{c as r}from"./createLi-995eeb78.js"
import{c as s}from"./createUl-95780283.js"
import{h as n,o as a,W as e,b9 as f,az as c,v as u}from"./calfSystem-03050396.js"
import{o as i}from"./openQuickBuffByName-37d4d190.js"
import{g as m}from"./groupViewStats-ba09bb3d.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return a(c,(o=>{o.target.blur(),i(s),e("doBuffLinks",t)})),n(f,c),f}function j(t,o,r){return n(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),a=s()
return r.length>1&&n(a,p("Buff All",o.join(","))),r.reduce(j,a)}function B(t){const o=u(t)
return m(o)}function b(t){return c(t).then(B)}export{l as d,b as g}
//# sourceMappingURL=getGroupStats-ab330318.js.map
