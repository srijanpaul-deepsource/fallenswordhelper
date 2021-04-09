import{c as t}from"./chunk-f19f9471.js"
import{c as o}from"./createButton-ed2da9de.js"
import{c as r}from"./createLi-d590417e.js"
import{c as s}from"./createUl-f2dc8072.js"
import{h as e,o as f,W as n,b9 as a,az as c,v as u}from"./calfSystem-71efcdd9.js"
import{o as i}from"./openQuickBuffByName-a3bf5095.js"
import{g as m}from"./groupViewStats-6e80b245.js"
function d(t,s){const a=r(),c=o({className:"fshBl fshBls",textContent:t})
return f(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),e(a,c),a}function p(t,o,r){return e(t,d(`Buff ${a[r]} 16`,o.join(","))),t}function j(o){const r=t(16,o),f=s()
return r.length>1&&e(f,d("Buff All",o.join(","))),r.reduce(p,f)}function l(t){const o=u(t)
return m(o)}function B(t){return c(t).then(l)}export{j as d,B as g}
//# sourceMappingURL=getGroupStats-766fa711.js.map
