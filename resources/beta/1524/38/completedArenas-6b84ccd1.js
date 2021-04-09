import{D as t,o as e,t as o,O as n,an as i,C as s}from"./calfSystem-71efcdd9.js"
import{c as r}from"./createInput-b623eea7.js"
import{i as a}from"./insertElementAfter-7f0c8e50.js"
import{i as p}from"./insertElementBefore-71272774.js"
import{i as m}from"./insertHtmlAfterEnd-528133ab.js"
import{i as f}from"./insertHtmlBeforeBegin-589a2148.js"
import{i as u}from"./interceptSubmit-8ce78672.js"
import"./formToUrl-28775802.js"
function c(t){n(`${i}completed&page=${t}`)}function l(){c(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(c,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),u()}export default b
//# sourceMappingURL=completedArenas-6b84ccd1.js.map
