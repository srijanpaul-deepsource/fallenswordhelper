import{c as t}from"./chunk-f19f9471.js"
import{c as o}from"./createButton-4963e07d.js"
import{c as r}from"./createLi-b6ec7c4b.js"
import{c as s}from"./createUl-961a9ee5.js"
import{h as e,o as a,W as n,b7 as f,ax as c,v as u}from"./calfSystem-7a1cce43.js"
import{o as i}from"./openQuickBuffByName-18faab75.js"
import{g as m}from"./groupViewStats-661b2e52.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return a(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),e(f,c),f}function j(t,o,r){return e(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),a=s()
return r.length>1&&e(a,p("Buff All",o.join(","))),r.reduce(j,a)}function B(t){const o=u(t)
return m(o)}function b(t){return c(t).then(B)}export{l as d,b as g}
//# sourceMappingURL=getGroupStats-8b06f201.js.map
