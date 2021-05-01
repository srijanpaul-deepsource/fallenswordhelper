import{c as t}from"./chunk-af680637.js"
import{c as o}from"./createButton-85c01ec9.js"
import{c as r}from"./createLi-0cd44618.js"
import{c as s}from"./createUl-4d53ea11.js"
import{h as e,o as n,X as a,bh as c,aI as f,v as u}from"./calfSystem-817ceb25.js"
import{o as i}from"./openQuickBuffByName-82ae0d1d.js"
import{g as m}from"./groupViewStats-1be20046.js"
function p(t,s){const c=r(),f=o({className:"fshBl fshBls",textContent:t})
return n(f,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),e(c,f),c}function j(t,o,r){return e(t,p(`Buff ${c[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&e(n,p("Buff All",o.join(","))),r.reduce(j,n)}function B(t){const o=u(t)
return m(o)}function d(t){return f(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-0637b6dc.js.map
