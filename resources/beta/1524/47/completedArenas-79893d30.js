import{D as t,o as e,t as o,N as n,aB as i,C as s}from"./calfSystem-db2edbef.js"
import{c as r}from"./createInput-93c1d447.js"
import{i as a}from"./insertElementAfter-41e869ed.js"
import{i as p}from"./insertElementBefore-165ce171.js"
import{i as m}from"./insertHtmlAfterEnd-f4abe003.js"
import{i as f}from"./insertHtmlBeforeBegin-6121ab6a.js"
import{i as c}from"./interceptSubmit-37405c90.js"
import"./formToUrl-b338bcd1.js"
function u(t){n(`${i}completed&page=${t}`)}function l(){u(s(t('#pCC input[value="Go"]').parentNode.previousElementSibling).replace(/\D/g,""))}function b(){!function(){const n=t('#pCC input[value="<"]')
if(n){const t=r({type:"button",value:"<<"})
p(t,n),m(t,"&nbsp;"),e(t,o(u,1))}}(),function(){const o=t('#pCC input[value=">"]')
if(o){const t=r({type:"button",value:">>"})
a(t,o),f(t,"&nbsp;"),e(t,l)}}(),c()}export default b
//# sourceMappingURL=completedArenas-79893d30.js.map
