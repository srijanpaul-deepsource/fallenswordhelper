import{c as t}from"./chunk-af680637.js"
import{c as o}from"./createButton-d246a06f.js"
import{c as r}from"./createLi-6e43b039.js"
import{c as s}from"./createUl-128edc6b.js"
import{h as e,o as f,W as n,be as a,aF as c,v as u}from"./calfSystem-030d7057.js"
import{o as i}from"./openQuickBuffByName-df17ccef.js"
import{g as m}from"./groupViewStats-0f80ecf2.js"
function p(t,s){const a=r(),c=o({className:"fshBl fshBls",textContent:t})
return f(c,(o=>{o.target.blur(),i(s),n("doBuffLinks",t)})),e(a,c),a}function j(t,o,r){return e(t,p(`Buff ${a[r]} 16`,o.join(","))),t}function l(o){const r=t(16,o),f=s()
return r.length>1&&e(f,p("Buff All",o.join(","))),r.reduce(j,f)}function B(t){const o=u(t)
return m(o)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-d45755bd.js.map
