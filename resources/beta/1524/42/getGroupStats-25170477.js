import{c as t}from"./chunk-89253199.js"
import{c as o}from"./createButton-29309565.js"
import{c as r}from"./createLi-e7595009.js"
import{c as s}from"./createUl-b2109287.js"
import{h as e,o as n,W as a,bg as f,aH as c,v as u}from"./calfSystem-e76f1a7d.js"
import{o as i}from"./openQuickBuffByName-7ee8d6bd.js"
import{g as m}from"./groupViewStats-7ae3ebd0.js"
function p(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return n(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),e(f,c),f}function j(t,o,r){return e(t,p(`Buff ${f[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),n=s()
return r.length>1&&e(n,p("Buff All",o.join(","))),r.reduce(j,n)}function B(t){const o=u(t)
return m(o)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-25170477.js.map
