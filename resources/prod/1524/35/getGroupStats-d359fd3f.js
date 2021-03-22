import{c as t}from"./chunk-e04f591f.js"
import{c as f}from"./createButton-f3d952bf.js"
import{c as o}from"./createLi-1136f028.js"
import{c as r}from"./createUl-995f97e4.js"
import{h as s,o as e,W as n,b7 as a,ax as c,v as u}from"./calfSystem-fe0ebf32.js"
import{o as i}from"./openQuickBuffByName-6871b68f.js"
import{g as m}from"./groupViewStats-f863abe7.js"
function p(t,r){const a=o(),c=f({className:"fshBl fshBls",textContent:t})
return e(c,(f=>{f.target.blur(),i(r),n("doBuffLinks",t)})),s(a,c),a}function j(t,f,o){return s(t,p(`Buff ${a[o]} 16`,f.join(","))),t}function l(f){const o=t(16,f),e=r()
return o.length>1&&s(e,p("Buff All",f.join(","))),o.reduce(j,e)}function B(t){const f=u(t)
return m(f)}function b(t){return c(t).then(B)}export{l as d,b as g}
//# sourceMappingURL=getGroupStats-d359fd3f.js.map
