import{c as t}from"./chunk-b7db8c6b.js"
import{c as o}from"./createButton-cc9ed041.js"
import{c as r}from"./createLi-0e1c7c51.js"
import{c as s}from"./createUl-c835db54.js"
import{h as c,o as e,X as n,bg as a,aH as f,v as u}from"./calfSystem-c464cb1d.js"
import{o as i}from"./openQuickBuffByName-3ae950c8.js"
import{g as m}from"./groupViewStats-fd327eec.js"
function p(t,s){const a=r(),f=o({className:"fshBl fshBls",textContent:t})
return e(f,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),c(a,f),a}function j(t,o,r){return c(t,p(`Buff ${a[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),e=s()
return r.length>1&&c(e,p("Buff All",o.join(","))),r.reduce(j,e)}function d(t){const o=u(t)
return m(o)}function B(t){return f(t).then(d)}export{l as d,B as g}
//# sourceMappingURL=getGroupStats-cdf63710.js.map
