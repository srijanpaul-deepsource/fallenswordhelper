import{D as t,o as e,t as o,O as n,ay as i,C as s}from"./calfSystem-817ceb25.js"
import{c as r}from"./createInput-b20906d4.js"
import{i as f}from"./insertElementAfter-093e0fdd.js"
import{i as a}from"./insertElementBefore-2bf2da7f.js"
import{i as p}from"./insertHtmlAfterEnd-3060ec60.js"
import{i as m}from"./insertHtmlBeforeBegin-a8413e1c.js"
import{i as c}from"./interceptSubmit-b5f83dc2.js"
import"./formToUrl-0f02df3e.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
a(t,n),p(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
f(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-3f04b1be.js.map
