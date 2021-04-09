import{D as t,o as e,t as o,O as n,al as i,C as s}from"./calfSystem-7a1cce43.js"
import{c as r}from"./createInput-76cdb39b.js"
import{i as a}from"./insertElementAfter-cc5370ba.js"
import{i as p}from"./insertElementBefore-71272774.js"
import{i as c}from"./insertHtmlAfterEnd-c93c0b21.js"
import{i as m}from"./insertHtmlBeforeBegin-a5bddce3.js"
import{i as f}from"./interceptSubmit-8bfb8c60.js"
import"./formToUrl-487e0bc3.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),c(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),f()}export default b
//# sourceMappingURL=completedArenas-fa45fa3f.js.map
