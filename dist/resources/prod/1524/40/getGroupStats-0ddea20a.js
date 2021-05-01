import{c as t}from"./chunk-b7db8c6b.js"
import{c as o}from"./createButton-bcd88351.js"
import{c as r}from"./createLi-2a7ae77f.js"
import{c as s}from"./createUl-500d20b9.js"
import{h as n,o as a,W as f,bd as c,aE as e,v as u}from"./calfSystem-540da563.js"
import{o as i}from"./openQuickBuffByName-5c5f0fdb.js"
import{g as m}from"./groupViewStats-cb0c4b39.js"
function b(t,s){const c=r(),e=o({className:"fshBl fshBls",textContent:t})
return a(e,(o=>{o.target.blur(),i(s),f("doBuffLinks",t)})),n(c,e),c}function p(t,o,r){return n(t,b(`Buff ${c[r]} 16`,o.join(","))),t}function d(o){const r=t(16,o),a=s()
return r.length>1&&n(a,b("Buff All",o.join(","))),r.reduce(p,a)}function j(t){const o=u(t)
return m(o)}function l(t){return e(t).then(j)}export{d,l as g}
//# sourceMappingURL=getGroupStats-0ddea20a.js.map
