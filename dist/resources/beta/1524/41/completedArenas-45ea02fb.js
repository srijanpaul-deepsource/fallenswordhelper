import{D as t,o as e,t as o,O as n,ax as i,C as s}from"./calfSystem-587dd8d3.js"
import{c as r}from"./createInput-b30d8b81.js"
import{i as a}from"./insertElementAfter-0677ffc1.js"
import{i as f}from"./insertElementBefore-2bf2da7f.js"
import{i as p}from"./insertHtmlAfterEnd-1470722f.js"
import{i as m}from"./insertHtmlBeforeBegin-791898ec.js"
import{i as c}from"./interceptSubmit-8814daab.js"
import"./formToUrl-2c1cc653.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
f(t,n),p(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-45ea02fb.js.map
