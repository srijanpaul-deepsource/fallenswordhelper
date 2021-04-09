import{D as t,o as e,t as o,O as n,ao as i,C as s}from"./calfSystem-d56087e1.js"
import{c as r}from"./createInput-0182b589.js"
import{i as a}from"./insertElementAfter-d412efe4.js"
import{i as p}from"./insertElementBefore-71272774.js"
import{i as f}from"./insertHtmlAfterEnd-9b0a51ca.js"
import{i as m}from"./insertHtmlBeforeBegin-dad066ca.js"
import{i as c}from"./interceptSubmit-1b6b81ff.js"
import"./formToUrl-becb9cc8.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),f(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-0f363d06.js.map
