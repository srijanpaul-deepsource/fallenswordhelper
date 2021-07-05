import{D as t,o as e,t as o,N as n,aD as i,C as s}from"./calfSystem-b3667af8.js"
import{c as r}from"./createInput-18c4c6d4.js"
import{i as a}from"./insertElementAfter-7851228c.js"
import{i as p}from"./insertElementBefore-784d4581.js"
import{i as m}from"./insertHtmlAfterEnd-b696788c.js"
import{i as f}from"./insertHtmlBeforeBegin-62ac6426.js"
import{i as c}from"./interceptSubmit-dd886fe1.js"
import"./formToUrl-872022b8.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-3221cdb0.js.map
