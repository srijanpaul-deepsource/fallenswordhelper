import{D as t,o as e,t as o,N as n,aB as i,C as s}from"./calfSystem-85fa6364.js"
import{c as r}from"./createInput-6b491c72.js"
import{i as a}from"./insertElementAfter-2e9b5c5c.js"
import{i as f}from"./insertElementBefore-5adb1609.js"
import{i as p}from"./insertHtmlAfterEnd-bdfcd845.js"
import{i as m}from"./insertHtmlBeforeBegin-9416d9d6.js"
import{i as c}from"./interceptSubmit-6f4d5b99.js"
import"./formToUrl-fe5f507a.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
f(t,n),p(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),m(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-4b53e00b.js.map
