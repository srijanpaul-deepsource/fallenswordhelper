import{c as t}from"./chunk-965f25a6.js"
import{c as o}from"./createButton-1c7653ee.js"
import{c as r}from"./createLi-4ca370ba.js"
import{c as s}from"./createUl-fd0a3075.js"
import{h as a,o as n,S as e,bl as f,aN as c,v as u}from"./calfSystem-617f9a5d.js"
import{o as i}from"./openQuickBuffByName-a794d2ad.js"
import{g as m}from"./groupViewStats-cb8e1861.js"
function l(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),e("doBuffLinks",t)})),a(f,c),f}function p(t,o,r){return a(t,l(`Buff ${f[r]} 16`,o.join(","))),t}function j(o){const r=t(16,o),n=s()
return r.length>1&&a(n,l("Buff All",o.join(","))),r.reduce(p,n)}function B(t){const o=u(t)
return m(o)}function d(t){return c(t).then(B)}export{j as d,d as g}
//# sourceMappingURL=getGroupStats-c5719148.js.map
