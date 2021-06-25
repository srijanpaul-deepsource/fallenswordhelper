import{c as t}from"./chunk-c0e724c2.js"
import{c as e}from"./createButton-ae2671d1.js"
import{c as o}from"./createLi-5893f8ef.js"
import{c as r}from"./createUl-beea3df2.js"
import{h as s,o as f,T as n,bm as a,aN as c,v as u}from"./calfSystem-bfc1f6c0.js"
import{o as i}from"./openQuickBuffByName-3a3b6dee.js"
import{g as m}from"./groupViewStats-13057ed4.js"
function p(t,r){const a=o(),c=e({className:"fshBl fshBls",textContent:t})
return f(c,(e=>{e.target.blur(),i(r),n("doBuffLinks",t)})),s(a,c),a}function j(t,e,o){return s(t,p(`Buff ${a[o]} 16`,e.join(","))),t}function l(e){const o=t(16,e),f=r()
return o.length>1&&s(f,p("Buff All",e.join(","))),o.reduce(j,f)}function B(t){const e=u(t)
return m(e)}function d(t){return c(t).then(B)}export{l as d,d as g}
//# sourceMappingURL=getGroupStats-93110ece.js.map
