import{c as t}from"./chunk-f19f9471.js"
import{c as o}from"./createButton-489c57dd.js"
import{c as r}from"./createLi-1603aded.js"
import{c as s}from"./createUl-3d5c471f.js"
import{h as n,o as e,X as a,ba as f,aA as c,v as u}from"./calfSystem-d56087e1.js"
import{o as i}from"./openQuickBuffByName-d6026140.js"
import{g as m}from"./groupViewStats-dcbd70e3.js"
function d(t,s){const f=r(),c=o({className:"fshBl fshBls",textContent:t})
return e(c,(o=>{o.target.blur(),i(s),a("doBuffLinks",t)})),n(f,c),f}function p(t,o,r){return n(t,d(`Buff ${f[r]} 16`,o.join(","))),t}function j(o){const r=t(16,o),e=s()
return r.length>1&&n(e,d("Buff All",o.join(","))),r.reduce(p,e)}function l(t){const o=u(t)
return m(o)}function B(t){return c(t).then(l)}export{j as d,B as g}
//# sourceMappingURL=getGroupStats-23ad7a74.js.map
