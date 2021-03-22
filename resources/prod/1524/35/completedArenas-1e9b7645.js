import{D as t,o as e,t as o,O as n,am as i,C as s}from"./calfSystem-fe0ebf32.js"
import{c as r}from"./createInput-47702c1d.js"
import{i as a}from"./insertElementAfter-fc514f49.js"
import{i as f}from"./insertElementBefore-9228b012.js"
import{i as p}from"./insertHtmlAfterEnd-2a558ca9.js"
import{i as m}from"./insertHtmlBeforeBegin-b28d6f20.js"
import{i as c}from"./interceptSubmit-1425876c.js"
import"./formToUrl-487e3c2d.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
f(t,n),p(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-1e9b7645.js.map
