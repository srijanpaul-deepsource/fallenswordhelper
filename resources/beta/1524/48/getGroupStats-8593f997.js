import{c as t}from"./chunk-7ed9b1d2.js"
import{c as o}from"./createButton-a1d9b50b.js"
import{c as r}from"./createLi-77d13fd9.js"
import{c as s}from"./createUl-c13e9145.js"
import{h as a,o as e,S as n,bl as f,aN as c,v as u}from"./calfSystem-8af1dca2.js"
import{o as i}from"./openQuickBuffByName-ad6d10b7.js"
import{g as m}from"./groupViewStats-11eeb586.js"
function d(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return e(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),a(f,c),f}function l(t,o,r){return a(t,d(`Buff ${f[r]} 16`,o.join(","))),t}function p(o){const r=t(16,o),e=s()
return r.length>1&&a(e,d("Buff All",o.join(","))),r.reduce(l,e)}function j(t){const o=u(t)
return m(o)}function B(t){return c(t).then(j)}export{p as d,B as g}
//# sourceMappingURL=getGroupStats-8593f997.js.map
